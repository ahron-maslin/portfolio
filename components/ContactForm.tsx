"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || "xlgprzka";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const form = e.currentTarget;
    if ((form.elements.namedItem("_gotcha") as HTMLInputElement | null)?.value) {
      setStatus("success");
      return;
    }
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-slate-300 mb-2 transition-colors">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-white/10 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all bg-white dark:bg-white/5 text-neutral-900 dark:text-slate-200 font-medium placeholder:text-neutral-400 dark:placeholder:text-slate-500 placeholder:font-normal"
          placeholder="John Doe"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-slate-300 mb-2 transition-colors">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-white/10 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all bg-white dark:bg-white/5 text-neutral-900 dark:text-slate-200 font-medium placeholder:text-neutral-400 dark:placeholder:text-slate-500 placeholder:font-normal"
          placeholder="john@example.com"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-slate-300 mb-2 transition-colors">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-white/10 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all resize-none bg-white dark:bg-white/5 text-neutral-900 dark:text-slate-200 font-medium placeholder:text-neutral-400 dark:placeholder:text-slate-500 placeholder:font-normal"
          placeholder="How can we work together?"
        />
      </div>
      
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <button
        type="submit"
        disabled={status === "submitting" || status === "success"}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-emerald-600 dark:bg-emerald-500 text-white dark:text-slate-950 rounded-xl font-bold hover:bg-emerald-500 dark:hover:bg-emerald-400 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          "Sending..."
        ) : status === "success" ? (
          "Message Sent!"
        ) : status === "error" ? (
          "Failed to Send. Try Again."
        ) : (
          <>
            Send Message
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
      <p role="status" aria-live="polite" className="sr-only">
        {status === "success" && "Your message was sent."}
        {status === "error" && "Your message could not be sent. Please try again."}
      </p>
    </form>
  );
}
