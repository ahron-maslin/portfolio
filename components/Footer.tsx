import { personalData } from "@/lib/data";

export function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-neutral-500 dark:text-slate-500 border-t border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-slate-950 transition-colors duration-300">
      <p>&copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
      <p className="mt-2 text-xs opacity-50 font-mono">Designed by Google AI Studio</p>
    </footer>
  );
}
