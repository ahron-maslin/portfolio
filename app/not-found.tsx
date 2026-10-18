import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-black text-neutral-900 dark:text-slate-200 mb-4">404</h1>
      <p className="text-neutral-600 dark:text-slate-400 mb-8">That page doesn&apos;t exist.</p>
      <Link href="/" className="px-6 py-3 rounded-full font-bold text-white dark:text-slate-950 bg-emerald-600 dark:bg-emerald-400">
        Back home
      </Link>
    </div>
  );
}
