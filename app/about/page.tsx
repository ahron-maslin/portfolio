import { Skills } from "@/components/Skills";
import Image from "next/image";
import { personalData, aboutData } from "@/lib/data";

export default function About() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-slate-950 py-24 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl transition-colors duration-300">
              <Image 
                src={personalData.avatarUrl} 
                alt={`${personalData.name} Avatar`} 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-slate-200 mb-6 transition-colors">
              About Me
            </h1>
            
            <div className="prose prose-neutral dark:prose-invert prose-lg text-neutral-600 dark:text-slate-400 transition-colors">
              {aboutData.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-slate-200 mb-2 transition-colors">
            Technical Arsenal
          </h2>
          <p className="text-neutral-600 dark:text-slate-500 mb-8 transition-colors">
            A snapshot of the core technologies and skills I utilize.
          </p>
          <Skills />
        </div>
      </div>
    </div>
  );
}
