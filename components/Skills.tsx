import { skillsData } from "@/lib/data";

export function Skills() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {skillsData.map((skill, index) => {
        const Icon = skill.icon;
        return (
          <div 
            key={index} 
            className="flex items-center gap-4 p-4 bg-white dark:bg-white/5 rounded-2xl border border-neutral-200 dark:border-white/10 shadow-sm hover:shadow-md transition-all hover:bg-neutral-50 dark:hover:bg-white/10 group"
          >
            <div className="p-3 bg-neutral-100 dark:bg-white/5 rounded-xl text-neutral-500 dark:text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-500/10 transition-colors">
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-neutral-900 dark:text-slate-200 transition-colors">{skill.name}</h4>
              <p className="text-xs text-neutral-500 dark:text-slate-500 transition-colors">{skill.category}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
