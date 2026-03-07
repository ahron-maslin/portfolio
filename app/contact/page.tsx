import { ContactForm } from "@/components/ContactForm";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import { personalData } from "@/lib/data";

export default function Contact() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-slate-950 py-24 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-slate-200 mb-4 transition-colors">
            Get in Touch
          </h1>
          <p className="text-lg text-neutral-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors">
            Whether you have a question, a project proposal, or just want to say hi, my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-slate-200 mb-8 transition-colors">
              Contact Information
            </h2>

            <div className="space-y-6">
              <a
                href={`mailto:${personalData.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white dark:bg-white/5 rounded-2xl border border-neutral-200 dark:border-white/10 shadow-sm hover:bg-neutral-50 dark:hover:bg-white/10 transition-all group"
              >
                <div className="p-3 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-neutral-900 dark:text-slate-200 transition-colors">Email</h3>
                  <p className="text-sm text-neutral-600 dark:text-slate-400 transition-colors">{personalData.email}</p>
                </div>
              </a>

              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white dark:bg-white/5 rounded-2xl border border-neutral-200 dark:border-white/10 shadow-sm hover:bg-neutral-50 dark:hover:bg-white/10 transition-all group"
              >
                <div className="p-3 bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-neutral-900 dark:text-slate-200 transition-colors">LinkedIn</h3>
                  <p className="text-sm text-neutral-600 dark:text-slate-400 transition-colors">Connect professionally</p>
                </div>
              </a>

              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white dark:bg-white/5 rounded-2xl border border-neutral-200 dark:border-white/10 shadow-sm hover:bg-neutral-50 dark:hover:bg-white/10 transition-all group"
              >
                <div className="p-3 bg-neutral-200 dark:bg-white/10 text-neutral-800 dark:text-slate-200 rounded-xl group-hover:scale-110 transition-transform">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-neutral-900 dark:text-slate-200 transition-colors">GitHub</h3>
                  <p className="text-sm text-neutral-600 dark:text-slate-400 transition-colors">View my open source projects</p>
                </div>
              </a>

              <a
                href={personalData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded-2xl border border-emerald-200 dark:border-emerald-500/20 shadow-md hover:bg-emerald-100 dark:hover:bg-emerald-500/20 transition-all group"
              >
                <div className="p-3 bg-emerald-200 dark:bg-emerald-500/20 rounded-xl group-hover:scale-110 transition-transform">
                  <FileDown className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-emerald-800 dark:text-emerald-400 transition-colors">Resume</h3>
                  <p className="text-sm text-emerald-600 dark:text-emerald-500/80 transition-colors">Download PDF version</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-white/5 p-8 rounded-3xl shadow-sm border border-neutral-200 dark:border-white/10 backdrop-blur-sm transition-colors">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-slate-200 mb-8 transition-colors">
              Send a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
