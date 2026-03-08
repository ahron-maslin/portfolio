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

export const metadata: Metadata = {
  title: `${personalData.name} | Portfolio`,
  description: `Portfolio website of ${personalData.name} featuring a horizontal scroll timeline, skills, and contact information.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col bg-neutral-50 dark:bg-slate-950 text-neutral-900 dark:text-slate-300 font-sans selection:bg-emerald-500/30 transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Script id="ctf-logger" strategy="afterInteractive">
          {`console.log('%c🚩 CTF Part 1: You found me! Your next clue is hidden somewhere in the DOM elements of the homepage. Keep your eyes peeled for hidden attributes.', 'color: #10b981; font-size: 16px; font-weight: bold; border: 1px solid #10b981; padding: 10px; border-radius: 5px;');`}
        </Script>
      </body>
    </html>
  );
}
