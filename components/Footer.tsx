import { Github, Linkedin } from "lucide-react";
import { personalData } from "@/lib/data";

export function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-neutral-600 dark:text-slate-400 border-t border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="flex justify-center gap-4 mb-4">
        <a href={personalData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-emerald-500 transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-emerald-500 transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
      <p className="mt-2 text-xs font-mono">Enhanced with Claude Code</p>
    </footer>
  );
}
