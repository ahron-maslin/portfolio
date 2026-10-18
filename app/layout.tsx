import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css'; // Global styles
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { personalData } from '@/lib/data';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const description = `${personalData.name} - software developer, sysadmin, DevOps engineer and pentester. Projects, skills and contact information.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${personalData.name} | Portfolio`, template: `%s | ${personalData.name}` },
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: `${personalData.name} | Portfolio`,
    title: `${personalData.name} | Portfolio`,
    description,
    images: [{ url: '/profile-pic.jpg' }],
  },
  twitter: { card: 'summary', title: `${personalData.name} | Portfolio`, description, images: ['/profile-pic.jpg'] },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: personalData.name,
  jobTitle: 'Software Developer',
  url: siteUrl,
  sameAs: [personalData.github, personalData.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col bg-neutral-50 dark:bg-slate-950 text-neutral-900 dark:text-slate-300 font-sans selection:bg-emerald-500/30 transition-colors duration-300">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-emerald-600 focus:text-white">
          Skip to content
        </a>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main id="main" className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <Script id="ctf-logger" strategy="afterInteractive">
          {`console.log('%c🚩 CTF Part 1: You found me! Your next clue is hidden somewhere in the DOM elements of the homepage. Keep your eyes peeled for hidden attributes.', 'color: #10b981; font-size: 16px; font-weight: bold; border: 1px solid #10b981; padding: 10px; border-radius: 5px;');`}
        </Script>
      </body>
    </html>
  );
}
