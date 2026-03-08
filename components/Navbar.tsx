import { Github, Linkedin, Mail } from "lucide-react";
import { personalData } from "@/lib/data";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";

export function Navbar() {
  const initials = personalData.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-white/10 transition-colors duration-300">
      <Link href="/" className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-white dark:text-slate-950 font-black text-sm shrink-0">{initials}</div>
        <span className="hidden md:block">{personalData.name}</span>
      </Link>
      <div className="flex items-center gap-4 md:gap-6">
        <Link href="/" className="text-sm font-bold text-neutral-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
          Home
        </Link>
        <Link href="/#about" className="text-sm font-bold text-neutral-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
          About
        </Link>
        <Link href="/#timeline" className="text-sm font-bold text-neutral-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
          Timeline
        </Link>
        <Link href="/contact" className="text-sm font-bold text-neutral-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
          Contact
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
