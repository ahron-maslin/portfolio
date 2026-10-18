# 0073 — Cloudflare Pages: update build command and set site URL

- **Status:** OPEN
- **Kind:** Action
- **Project:** online_portfolio
- **Filed:** 2026-10-18T20:51:10.129171+00:00
- **Linear:** https://linear.app/claudeclub/issue/CLA-154/ai-cloudflare-pages-update-build-command-and-set-site-url

## Question

Update the Cloudflare Pages build settings and add NEXT_PUBLIC_SITE_URL, then redeploy.

## Context

Commit df94721 removed GITHUB_ACTIONS as an export trigger in next.config.ts. build:static (node scripts/build-data.js && STATIC_EXPORT=true next build) outputs to out/. public/_headers (CSP, HSTS, X-CTF-Clue) is honored by Cloudflare Pages.

## Why it matters

Without the new build command Cloudflare runs a non-export build and the deploy has no static output. Without NEXT_PUBLIC_SITE_URL the sitemap, OpenGraph and JSON-LD point at localhost:3000. The CSP and CTF header only work once deployed from this build.

## Safe to continue

- Projects grid preview
- Further local code changes

## Resume plan

**Objective:** Confirm production deploy uses build:static and correct site URL

**Files:**
- next.config.ts
- public/_headers
- app/sitemap.ts
- app/layout.tsx

**Remaining steps:**
1. curl -sI the live site and confirm CSP + X-CTF-Clue headers
1. confirm sitemap.xml domain
1. walk the 4 CTF stages on the live site

**Expected outcome:** Live site serves headers and CTF intact
