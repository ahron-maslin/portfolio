# 0074 — Install Playwright browsers and run the e2e and accessibility tests

- **Status:** OPEN
- **Kind:** Action
- **Project:** online_portfolio
- **Filed:** 2026-10-18T20:51:12.015919+00:00
- **Linear:** https://linear.app/claudeclub/issue/CLA-155/ai-install-playwright-browsers-and-run-the-e2e-and-accessibility-tests

## Question

Run the install and the e2e suite locally and report failures.

## Why it matters

The keyboard-accessible timeline cards, nav changes and new axe test have only been checked by typecheck, lint, unit tests and build, not in a real browser.

## Safe to continue

- Projects grid preview

## Resume plan

**Objective:** Fix any failing e2e/axe tests

**Files:**
- e2e/a11y.spec.ts
- e2e/mobile.spec.ts
- e2e/navigation.spec.ts
- components/Timeline.tsx

**Remaining steps:**
1. fix failures reported by the human
1. re-run until green

**Expected outcome:** Green e2e suite
