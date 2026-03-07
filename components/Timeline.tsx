"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ExternalLink, Mail, FileDown } from "lucide-react";
import { timelineData, rolesData, personalData } from "@/lib/data";

export function Timeline() {
  const targetRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const updateMeasurements = () => {
      if (carouselRef.current) {
        const scrollWidth = carouselRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        setScrollRange(Math.max(0, scrollWidth - viewportWidth));
      }
    };

    updateMeasurements();
    window.addEventListener("resize", updateMeasurements);
    return () => window.removeEventListener("resize", updateMeasurements);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          ref={carouselRef}
          style={{ x }}
          className="flex gap-16 px-12 md:px-32 relative items-center w-max"
        >

          {/* Wavy Line Background */}
          <div className="absolute left-0 right-0 h-2 top-1/2 -translate-y-1/2 z-0 opacity-40">
            <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1000 20">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
              <path d="M0,10 Q50,20 100,10 T200,10 T300,10 T400,10 T500,10 T600,10 T700,10 T800,10 T900,10 T1000,10" fill="none" stroke="url(#lineGradient)" strokeWidth="4" />
            </svg>
          </div>

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="relative z-10 flex flex-col items-center w-64 shrink-0 group"
            >
              <div className="mb-4 text-sm font-bold text-neutral-500 dark:text-slate-500 font-mono tracking-wider group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                {item.year}
              </div>

              <div className="w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-4 border-neutral-300 dark:border-slate-800 shadow-md group-hover:scale-150 group-hover:border-emerald-500 dark:group-hover:border-emerald-500 transition-all duration-300 ease-out z-10" />

              <div className="mt-8 p-6 bg-white dark:bg-white/5 rounded-2xl shadow-sm border border-neutral-200 dark:border-white/10 w-full opacity-90 group-hover:opacity-100 group-hover:-translate-y-4 group-hover:scale-105 group-hover:bg-neutral-50 dark:group-hover:bg-white/10 group-hover:border-emerald-200 dark:group-hover:border-emerald-500/30 group-hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
                <h3 className="font-semibold text-lg text-neutral-900 dark:text-slate-200 mb-2 leading-tight group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                  {item.event}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-slate-400 mb-4 line-clamp-3 group-hover:line-clamp-none transition-all group-hover:text-neutral-800 dark:group-hover:text-slate-300">
                  {item.description}
                </p>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors bg-emerald-100 dark:bg-emerald-500/10 px-2 py-1 rounded-md hover:bg-emerald-200 dark:hover:bg-emerald-500/20"
                  >
                    View Project <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}

          {/* Career Split Node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 flex flex-col items-center w-96 ml-16 shrink-0"
          >
            <div className="mb-4 text-sm font-bold text-emerald-600 dark:text-emerald-500 font-mono tracking-wider uppercase">
              Next Steps
            </div>
            <div className="w-8 h-8 rounded-full bg-emerald-500 border-4 border-white dark:border-slate-900 shadow-lg z-10 animate-pulse" />

            <div className="mt-8 p-8 bg-white dark:bg-white/5 rounded-3xl shadow-xl border border-emerald-200 dark:border-emerald-500/20 w-full backdrop-blur-sm transition-colors">
              <h3 className="font-bold text-xl text-neutral-900 dark:text-slate-200 mb-4 text-center transition-colors">
                Let&apos;s Work Together
              </h3>
              <p className="text-sm text-neutral-600 dark:text-slate-400 mb-6 text-center transition-colors">
                Select a role to send an email draft directly to me.
              </p>

              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {rolesData.map((role) => (
                  <a
                    key={role}
                    href={`mailto:${personalData.email}?subject=Opportunity for ${role}&body=Hi ${personalData.name.split(' ')[0]},%0D%0A%0D%0AWe are interested in discussing a ${role} position with you.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-neutral-100 dark:bg-white/5 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 hover:text-emerald-700 dark:hover:text-emerald-400 text-neutral-700 dark:text-slate-300 border border-neutral-200 dark:border-white/10 text-xs font-medium rounded-full transition-colors"
                  >
                    {role}
                  </a>
                ))}
              </div>

              <div className="pt-6 border-t border-neutral-200 dark:border-white/10 flex justify-center transition-colors">
                <a
                  href={personalData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 dark:bg-emerald-500 text-white dark:text-slate-950 rounded-xl text-sm font-bold hover:bg-emerald-500 dark:hover:bg-emerald-400 transition-colors shadow-md"
                >
                  <FileDown className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
