# Aharon Maslin - Personal Portfolio

A modern, responsive, and fully static personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion. This project is designed to be lightweight, fast, and easily deployable to static hosting platforms like Cloudflare Pages.

## Features

- **No Backend Required:** 100% static HTML/CSS/JS export.
- **Dark/Light Mode:** Full theme support using `next-themes` and Tailwind CSS.
- **Interactive Timeline:** A custom horizontal scroll timeline built with Framer Motion.
- **Responsive Design:** Mobile-first approach ensuring the site looks great on all devices.
- **Contact Form:** Integrated with Formspree for serverless form submissions.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://motion.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)

## Local Development

To run the project locally in development mode:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Static Export & Cloudflare Pages Deployment

This project is configured to be exported as a purely static site. It uses `output: 'export'` in Next.js to generate an `out/` directory containing the `index.html` and all relative assets.

### Build Script

To generate the static site locally, run:

```bash
npm run build:static
```

This command sets the `STATIC_EXPORT=true` environment variable and runs `next build`. The resulting static files will be placed in the `out/` directory. 

*Note: While the site is fully static, Next.js routing expects a web server. To view the compiled static site locally, use a local web server rather than opening `index.html` directly via the `file://` protocol:*
```bash
npx serve out
```

### Deploying to Cloudflare Pages

Cloudflare Pages is the perfect host for this static site. Follow these steps to deploy:

1. Push this repository to GitHub/GitLab.
2. Log in to the Cloudflare dashboard and go to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your repository.
4. In the **Set up builds and deployments** section, configure the following:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build:static`
   - **Build output directory:** `out`
5. Click **Save and Deploy**.

Cloudflare will automatically build the project and serve the `out/index.html` at the root of your new domain. All assets and links will resolve correctly.
