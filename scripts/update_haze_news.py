import json
import re
import time
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta, timezone
from email.utils import parsedate_to_datetime
from pathlib import Path
from urllib.parse import urlparse


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_PATH = ROOT / "news.json"
SINGAPORE_TIME = timezone(timedelta(hours=8), name="SGT")
MAX_ARTICLES = 3
HAZE_TERMS = re.compile(
    r"\b(?:haze|wildfires?|forest fires?|peat fires?|transboundary smoke|smoke haze)\b",
    re.IGNORECASE,
)
FEEDS = (
    (
        "CNA",
        "https://www.channelnewsasia.com/api/v1/rss-outbound-feed?_format=xml",
        "www.channelnewsasia.com",
    ),
    (
        "CNA",
        "https://www.channelnewsasia.com/api/v1/rss-outbound-feed?_format=xml&category=6511",
        "www.channelnewsasia.com",
    ),
    (
        "The Straits Times",
        "https://www.straitstimes.com/news/singapore/rss.xml",
        "www.straitstimes.com",
    ),
    (
        "Mothership",
        "https://mothership.sg/feed/",
        "mothership.sg",
    ),
)


def child_text(element, name):
    child = element.find(name)
    return child.text.strip() if child is not None and child.text else ""


def read_feed(source, feed_url, allowed_host):
    request = urllib.request.Request(
        feed_url,
        headers={"User-Agent": "HazeHowLiaoNewsUpdater/1.0 (+GitHub Pages)"},
    )
    for attempt in range(3):
        try:
            with urllib.request.urlopen(request, timeout=30) as response:
                content = response.read()
            content = re.sub(rb"&(?!(?:[A-Za-z][A-Za-z0-9]*|#\d+|#x[0-9A-Fa-f]+);)", b"&amp;", content)
            feed = ET.fromstring(content)
            break
        except (urllib.error.URLError, ET.ParseError, OSError) as error:
            if attempt == 2:
                raise RuntimeError(f"Could not read the {source} RSS feed after three attempts: {error}") from error
            time.sleep(2 ** attempt)

    articles = []
    for item in feed.findall("./channel/item"):
        title = child_text(item, "title")
        description = child_text(item, "description")
        if not HAZE_TERMS.search(f"{title} {description}"):
            continue

        url = child_text(item, "link")
        parsed_url = urlparse(url)
        if parsed_url.scheme != "https" or parsed_url.hostname != allowed_host:
            raise RuntimeError(f"The {source} feed returned an unexpected article URL.")

        published_text = child_text(item, "pubDate")
        if not published_text:
            raise RuntimeError(f"The {source} feed returned a haze story without a publication date.")
        try:
            try:
                published = parsedate_to_datetime(published_text)
            except (TypeError, ValueError):
                published = datetime.fromisoformat(published_text)
        except (TypeError, ValueError) as error:
            raise RuntimeError(f"The {source} feed returned an invalid publication date.") from error
        if published is None:
            raise RuntimeError(f"The {source} feed returned an invalid publication date.")
        if published.tzinfo is None:
            published = published.replace(tzinfo=SINGAPORE_TIME)

        articles.append(
            {
                "source": source,
                "title": title,
                "url": url,
                "publishedAt": published.isoformat(),
            }
        )
    return articles


def select_latest(articles):
    articles.sort(
        key=lambda article: datetime.fromisoformat(article["publishedAt"]).astimezone(timezone.utc),
        reverse=True,
    )
    latest_by_source = {}
    for article in articles:
        latest_by_source.setdefault(article["source"], article)

    selected = list(latest_by_source.values())
    selected_urls = {article["url"] for article in selected}
    for article in articles:
        if article["url"] not in selected_urls:
            selected.append(article)
            selected_urls.add(article["url"])
        if len(selected) == MAX_ARTICLES:
            break

    selected.sort(
        key=lambda article: datetime.fromisoformat(article["publishedAt"]).astimezone(timezone.utc),
        reverse=True,
    )
    if len(selected) < 2:
        raise RuntimeError("Fewer than two haze-related stories were found in the publisher feeds.")
    return selected[:MAX_ARTICLES]


def main():
    articles = []
    for source, feed_url, allowed_host in FEEDS:
        articles.extend(read_feed(source, feed_url, allowed_host))

    payload = {
        "updatedAt": datetime.now(SINGAPORE_TIME).isoformat(),
        "articles": select_latest(articles),
    }
    OUTPUT_PATH.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"Published {len(payload['articles'])} haze-related stories to {OUTPUT_PATH.name}.")


if __name__ == "__main__":
    main()
