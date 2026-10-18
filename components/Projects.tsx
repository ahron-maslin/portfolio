import { ExternalLink } from "lucide-react";
import { projectsData } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-neutral-200 dark:border-white/5 bg-white/50 dark:bg-slate-950/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-slate-200 mb-10 transition-colors">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <article
              key={project.title}
              className="flex flex-col p-6 bg-white dark:bg-white/5 rounded-2xl border border-neutral-200 dark:border-white/10 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-slate-200 mb-2">{project.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-slate-400 mb-4 flex-grow">{project.description}</p>
              <ul className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <li key={tag} className="px-2.5 py-1 text-xs font-medium rounded-full bg-neutral-100 dark:bg-white/5 text-neutral-700 dark:text-slate-300 border border-neutral-200 dark:border-white/10">
                    {tag}
                  </li>
                ))}
              </ul>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-emerald-700 dark:text-emerald-400 hover:underline"
              >
                {project.linkLabel} <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
