# Haze How Liao?

A bilingual static website for Singapore haze readings, regional PM2.5 and PSI, local activity guidance, haze-aware destination photos, and family photo masks that default to the highest-reading region and follow a checked place or manually selected region.

## Live site

https://jeremytantat.github.io/SingaporeHazeCondition/

## Deployment

Pushes to `main` deploy the site to GitHub Pages using `.github/workflows/deploy.yml`. The repository's Pages source should be set to **GitHub Actions** under **Settings → Pages**. A scheduled deployment also runs daily at 04:00 UTC (12:00 SGT) to refresh the haze news feed. GitHub may delay scheduled workflows during periods of high load.

## Feedback form setup

The feedback form uses the Formspree endpoint configured in `FEEDBACK_FORM_ENDPOINT` in `app.js`. Set the destination address in the Formspree dashboard; the recipient address is not included in the website.

## Haze news

The deployment workflow fetches CNA and The Straits Times RSS feeds, selects up to three recent haze-related stories, and publishes them in `news.json`. `scripts/update_haze_news.py` can also be run locally to refresh the feed. The webpage loads the generated file and displays the publisher, headline, and Singapore-time publication date.

## Destination photos and sharing

Destination photo lookup uses the searched place's approximate coordinates to find nearby images on Wikimedia Commons. When an image is shown, its source, photographer and license are linked in the result; nearby images may not depict the exact address. Open Graph, Twitter and WhatsApp link previews use [`social-preview.png`](./social-preview.png); WhatsApp shares the canonical site URL.

## Cigarette-equivalent estimate

The one-hour estimate uses the region's 1-hour PM2.5 reading: `PM2.5 × 1 hour ÷ (22 µg/m³ × 24 hours)`, displayed to two decimal places. This scales the commonly cited comparison of 22 µg/m³ sustained for 24 hours to roughly one cigarette-equivalent in health impact. It assumes no mask-filtration reduction and is a communication analogy, not a literal smoke-dose equivalence or an individual health-risk prediction.
