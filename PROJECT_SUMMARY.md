# Project Summary: Aharon Maslin's Portfolio

## Overview
This project is a modern, AI-generated personal portfolio for Aharon Maslin, a versatile technology professional with expertise in Software Development, System Administration, DevOps, and Penetration Testing. The portfolio serves as both a resume and a live demonstration of leveraging AI for rapid prototyping and modern web development.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion (`motion/react`)
- **Icons:** Lucide React
- **Forms:** Formspree integration
- **Theming:** `next-themes` for Light/Dark mode toggling (Dark mode by default)

## Key Features
1. **Hero Section:** A visually striking introduction with a terminal-themed tooltip and a clear call-to-action.
2. **About & Skills:** A comprehensive breakdown of Aharon's background and a grid of technical skills with interactive hover states.
3. **Horizontal Timeline:** A custom-built, horizontally scrolling timeline (using Framer Motion's `useScroll` and `useTransform`) that details Aharon's career progression and projects.
4. **Premade Email Drafts (The "Next Steps" Node):**
   - At the end of the timeline, there is a "Next Steps" split node designed to reduce friction for recruiters and potential clients.
   - It dynamically maps over `rolesData` (Sysadmin, Software Developer, DevOps, Pentester, AI) to generate `mailto:` links.
   - Each link pre-fills the email's **Subject** (e.g., "Opportunity for DevOps") and **Body** (e.g., "Hi Aharon, We are interested in discussing a DevOps position with you.").
   - This UX pattern makes it incredibly easy for visitors to initiate contact with context already provided.
5. **Contact Page:** A dedicated contact form powered by Formspree, alongside direct links to LinkedIn, GitHub, and a Resume download.
6. **Theme Toggle:** A fully responsive light/dark mode switch, defaulting to a premium dark aesthetic (`slate-950`).

## Design System
- **Dark Mode (Default):** Deep slate backgrounds (`bg-slate-950`), subtle white borders (`border-white/10`), and vibrant emerald/cyan gradients for accents.
- **Light Mode:** Clean neutral backgrounds (`bg-neutral-50`), crisp white cards (`bg-white`), and matching emerald accents.
- **Typography:** Inter for sans-serif UI elements, JetBrains Mono for technical/code accents.
