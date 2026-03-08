import { Timeline } from "@/components/Timeline";
import { Skills } from "@/components/Skills";
import { ArrowRight, Terminal } from "lucide-react";
import { personalData, aboutData } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 dark:bg-slate-950 transition-colors duration-300">
      {/* CTF Step 2 */}
      <div style={{ display: 'none' }} aria-hidden="true" data-ctf="🚩 CTF Part 2: Nice find! The next clue is waiting in the file that tells web crawlers and bots where they aren't allowed to go."></div>
      <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 py-24 relative overflow-hidden">
        {/* Cool background effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 dark:bg-emerald-500/20 rounded-full blur-[128px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 dark:bg-cyan-500/20 rounded-full blur-[128px]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto mt-16">
          <div className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-200/50 dark:bg-white/5 border border-neutral-300 dark:border-white/10 text-emerald-600 dark:text-emerald-400 text-sm font-mono mb-8 backdrop-blur-sm cursor-help transition-colors">
            <Terminal className="w-4 h-4" />
            <span>System.out.println(&quot;Hello, World!&quot;);</span>

            {/* Tooltip */}
            <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-64 px-3 py-2 bg-neutral-800 dark:bg-slate-800 text-neutral-100 dark:text-slate-300 text-xs leading-relaxed rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none shadow-xl border border-neutral-700 dark:border-white/10 z-50 text-center font-sans">
              It&apos;s funny because I never learnt Java, but I guess I&apos;ll just go with it since that&apos;s what the bot chose...
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-800 dark:bg-slate-800 rotate-45 border-b border-r border-neutral-700 dark:border-white/10"></div>
            </div>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 dark:from-emerald-400 dark:via-cyan-400 dark:to-blue-500 mb-6 font-sans">
            {personalData.name}
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 dark:text-slate-400 mb-6 font-light leading-relaxed max-w-2xl mx-auto transition-colors">
            {personalData.headline}
          </p>

          <p className="text-sm md:text-base text-neutral-500 dark:text-slate-500 mb-10 max-w-2xl mx-auto italic transition-colors">
            This entire portfolio was architected and built using advanced AI tools. It serves as a live demonstration of my ability to leverage artificial intelligence for rapid prototyping, code generation, and modern web development.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white dark:text-slate-950 bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-400 dark:to-cyan-400 rounded-full hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(52,211,153,0.5)] w-full sm:w-auto"
            >
              Explore My Journey
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-neutral-700 dark:text-white bg-neutral-200/50 dark:bg-white/5 border border-neutral-300 dark:border-white/10 rounded-full hover:bg-neutral-300/50 dark:hover:bg-white/10 transition-colors w-full sm:w-auto backdrop-blur-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 relative z-10 border-t border-neutral-200 dark:border-white/5 bg-white/50 dark:bg-slate-950/50 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <div className="flex justify-center mb-8">
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl transition-colors duration-300">
                  <Image
                    src={personalData.avatarUrl}
                    alt={`${personalData.name} Avatar`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-slate-200 mb-6 transition-colors">
                About Me
              </h2>
              <div className="space-y-4 text-neutral-600 dark:text-slate-400 leading-relaxed transition-colors">
                {aboutData.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-slate-200 mb-6 transition-colors">
                Skills & Technologies
              </h2>
              <Skills />
            </div>
          </div>
        </div>
      </section>

      <div id="timeline">
        <Timeline />
      </div>
    </div>
  );
}
