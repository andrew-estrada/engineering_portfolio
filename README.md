# Andrew Estrada — Mechanical Engineering Portfolio

Eleventy (11ty) rebuild of the former Nicepage site at [andrewgestrada.com](https://andrewgestrada.com).

## Quick start

```bash
npm install
npm run dev      # http://localhost:8080
npm run build    # output in _site/
```

## Site map

| URL | Purpose |
| --- | --- |
| `/` | Recruiter-focused homepage |
| `/projects/` | Project index |
| `/projects/<slug>/` | Reusable engineering case-study template |
| `/experience/` | Internships and team roles |
| `/about/` | Positioning and background |
| `/resume/` | Resume PDF + preview |
| `/contact/` | Email / LinkedIn |

## Project content

Add a new project by creating a Markdown file in `src/projects/` with front matter used by `src/_includes/layouts/project.njk`:

- `title`, `summary`, `category`, `role`
- `image`, `imageAlt`
- `problem`, `contribution`, `constraints`, `tools`, `result`
- optional `metrics`, `featured`, `order`

## Assets

- Production assets live in `src/assets/`
- Original Nicepage export is preserved under `legacy/` (not part of the build)

## Deploy

Build with `npm run build` and publish the `_site/` directory to your static host.
