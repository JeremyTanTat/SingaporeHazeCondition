import json
import os
import urllib.error
import urllib.request
from datetime import datetime, timezone


def main():
    token = os.environ.get("GITHUB_TOKEN")
    repository = os.environ.get("GITHUB_REPOSITORY")
    summary_path = os.environ.get("GITHUB_STEP_SUMMARY")
    if not token or not repository or not summary_path:
        raise RuntimeError(
            "GITHUB_TOKEN, GITHUB_REPOSITORY, and GITHUB_STEP_SUMMARY must be set."
        )

    request = urllib.request.Request(
        f"https://api.github.com/repos/{repository}/traffic/views",
        headers={
            "Accept": "application/vnd.github+json",
            "Authorization": f"Bearer {token}",
            "X-GitHub-Api-Version": "2022-11-28",
        },
    )
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            traffic = json.load(response)
    except urllib.error.HTTPError as error:
        detail = error.read().decode("utf-8", errors="replace")
        raise RuntimeError(
            f"GitHub traffic API returned HTTP {error.code}: {detail}"
        ) from error
    except urllib.error.URLError as error:
        raise RuntimeError(f"Could not reach the GitHub traffic API: {error}") from error

    count = traffic.get("count")
    uniques = traffic.get("uniques")
    if not isinstance(count, int) or not isinstance(uniques, int):
        raise RuntimeError("GitHub traffic API returned an unexpected response.")

    generated_at = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    summary = (
        "# GitHub repository traffic\n\n"
        f"Report generated: {generated_at}\n\n"
        "| Metric | Latest 14 days |\n"
        "| --- | ---: |\n"
        f"| Repository views | {count} |\n"
        f"| Unique visitors | {uniques} |\n\n"
        "> These figures measure visits to the GitHub repository, not the "
        "published website.\n"
    )
    with open(summary_path, "a", encoding="utf-8") as summary_file:
        summary_file.write(summary)
    print(f"Reported {count} repository views and {uniques} unique visitors.")


if __name__ == "__main__":
    main()
