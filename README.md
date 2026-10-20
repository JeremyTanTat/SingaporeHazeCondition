# Haze How Liao?

A bilingual static website for Singapore haze readings, regional PM2.5 and PSI, local activity guidance, and haze-aware destination photos.

## Live site

https://jeremytantat.github.io/SingaporeHazeCondition/

## Deployment

Pushes to `main` deploy the site to GitHub Pages using `.github/workflows/deploy.yml`. The repository's Pages source should be set to **GitHub Actions** under **Settings → Pages**.

## Destination photos and sharing

Destination photo lookup uses the searched place's approximate coordinates to find nearby images on Wikimedia Commons. When an image is shown, its source, photographer and license are linked in the result; nearby images may not depict the exact address. The Open Graph and Twitter share cards use [`social-preview.png`](./social-preview.png).
