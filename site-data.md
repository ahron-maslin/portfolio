# Portfolio Website Specification (AI-Ready with Resume Integration)

## Metadata
- author: Aharon Maslin
- website_type: Portfolio / Resume
- built_with: Antigravity Agent + Claude
- deployment: Firebase (CI/CD via GitHub Actions)
- design_theme: Minimalistic, modern, mobile-friendly, horizontal scroll interactions, smooth animations
- notes: Entire stack built from scratch; content and timeline updates should be editable from this markdown file.

- resume_pdf: resume.pdf
  description: "PDF of current resume; agent should parse for experience, projects, skills, and dates."

---

## Pages

### Home Page
components:
  - type: timeline
    id: timeline_design_component
    description: >
      Horizontal scroll timeline with thick wavy line. Each node represents a milestone. Nodes can link to repositories or websites. Last node includes resume download. 
    data_source: timeline_data
    interactions:
      - hover: show description tooltip
      - click: open URL or trigger email draft
      - scroll_animation: smooth horizontal parallax
      - career_split:
          options: ["Sysadmin", "Software Developer", "DevOps", "Pentester", "AI"]
          action: send email draft to site owner
    instructions_for_agent:
      - Parse `resume.pdf` to extract:
          - Projects, repositories, or significant work
          - Dates for each experience
          - Skills mentioned
          - Short summaries for timeline node descriptions
      - Merge parsed data with manually listed timeline_data below
      - Highlight GitHub or external URLs if available

### About Page
components:
  - type: avatar
    description: AI-generated avatar
    size: medium
    style: minimalist
  - type: text
    description: >
      Biography and background content.
    instructions_for_agent:
      - Parse `resume.pdf` for work experience summary
      - Generate concise paragraphs highlighting:
          - Professional journey
          - Key skills
          - Projects
          - Education / learning milestones
      - Output text here (can be manually edited later)

### Contact Page
components:
  - type: social_link
    platform: LinkedIn
    url: "YOUR_LINKEDIN_URL"
    icon: linkedin.svg
  - type: social_link
    platform: GitHub
    url: "YOUR_GITHUB_URL"
    icon: github.svg
  - type: email_form
    action: send_email
    description: "Send me an email directly"
  - type: file_download
    file: resume.pdf
    description: "Download PDF Resume"

---

## Timeline Data (`timeline_data`)

- year: 2015
  event: "Started coding journey"
  url: null
  description: "AI-generated summary from resume or manual text"
  
- year: 2018
  event: "First project: Calculator"
  url: "https://github.com/ahron-maslin/calculator"
  description: "AI-generated summary from GitHub repo and resume"

- year: 2019
  event: "Learned Angular"
  url: null
  description: "AI-generated summary from resume"

- year: 2020
  event: "Wikipedia Redirect Extension"
  url: "https://github.com/ahron-maslin/Wikipedia-Redirect-Extension/"
  description: "AI-generated summary"

- year: 2020
  event: "Linux From Scratch (LFS)"
  url: "https://www.linuxfromscratch.org/"
  description: "AI-assisted summary"

- year: 2020
  event: "Pentesting / Red Teaming"
  url: null
  description: "AI-assisted or manual summary"

- year: 2021
  event: "BLFS Automation"
  url: "https://github.com/ahron-maslin/BLFS-automation"
  description: "AI-generated summary"

- year: 2021
  event: "MobileVids Downloader"
  url: "https://github.com/ahron-maslin/mobilevids-dl"
  description: "AI-generated summary"

- year: 2021
  event: "Virus Remover"
  url: "https://github.com/ahron-maslin/virus-remover"
  description: "AI-generated summary"

- year: 2021
  event: "Return Zero"
  url: "https://github.com/ahron-maslin/return_zero"
  description: "AI-generated summary"

- year: 2021
  event: "Wargames"
  url: "https://github.com/ahron-maslin/wargames"
  description: "AI-generated summary"

- year: 2021
  event: "Ubuntu Bootstrap"
  url: "https://github.com/ahron-maslin/Ubuntu-bootstrap"
  description: "AI-generated summary"

- year: 2022
  event: "Data Structures & Algorithms in C"
  url: "https://github.com/ahron-maslin/datastructures-and-algorithms"
  description: "AI-generated summary"

- year: 2021-2022
  event: "Lido App"
  url: "https://lido.app"
  description: "AI-generated summary"

- year: 2023
  event: "Dippity K SPA"
  url: "https://github.com/ahron-maslin/dippityk-spa"
  description: "AI-generated summary"

- year: 2022-2026
  event: "Focused on learning"
  url: null
  description: "AI-assisted summary from resume"

- year: 2026
  event: "Created online portfolio website with Agentic AI"
  url: null
  description: "Includes PDF resume download"

---

## Design Guidelines

### General
- Minimalistic, modern design
- Smooth horizontal scrolling for timeline
- Subtle animations (fade-in, parallax)
- Light background with accent colors for nodes and icons
- Mobile responsive (touch-friendly horizontal scroll)
- CI/CD: GitHub Actions -> Firebase deploy
- All content editable through markdown/JSON file

### Skills Component
- Display known skills creatively with icons:
  - Python, JavaScript, C, Docker, Networking, Linux, Bash
- Instructions for Agent:
  - Parse `resume.pdf` for any additional skills
  - Highlight skill proficiency if available
  - Optionally group by category (Frontend, Backend, Scripting, DevOps)

### Timeline Component
- Thick wavy horizontal line
- Nodes for each timeline event
- Hover: show tooltip with short description
- Click: open repo/website or trigger email draft
- Career split at timeline end: clickable buttons for roles (send email draft)
- Last node: "Website made by AI" with resume download link
- Instructions for Agent:
  - Merge manually provided timeline_data with parsed resume events
  - Auto-generate descriptions from resume or GitHub repo summaries

### Extra Design Ideas
- Subtle gradient or soft color palette
- Smooth parallax scrolling
- Minimalist icons for skills, social links, actions
- Optional dark/light mode toggle
- Footer: copyright + "Designed by Claude"
- Animations subtle: fade in timeline nodes as they scroll into view
