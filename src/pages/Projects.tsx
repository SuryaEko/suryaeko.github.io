import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { getProjects } from "@/lib/api";
import PageTransition from "@/components/layout/PageTransition";
import type { Project } from "@/types";

function formatDate(dateStr: string | null): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("id-ID", { year: "numeric", month: "short" });
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return (
    <PageTransition>
      <div className="space-y-6 pt-4">
      {/* Header */}
      <motion.div
        className="card-neo p-6 sm:p-8"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-xl font-bold text-foreground">Proyek</h2>
        <p className="mt-2 text-muted-foreground text-[15px]">
          Portofolio project yang pernah dikerjakan, dari web development hingga mobile apps.
        </p>
      </motion.div>

      {/* Project Cards */}
      <div className="space-y-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            className="card-neo p-5 sm:p-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 + i * 0.08, duration: 0.4, ease: "easeOut" }}
          >
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-[17px] text-foreground">
                  {project.name}
                </h3>
                <p className="text-[13px] text-muted-foreground mt-0.5">
                  {formatDate(project.start_date)}
                  {project.end_date ? ` – ${formatDate(project.end_date)}` : " – Sekarang"}
                </p>
              </div>
              {project.featured && (
                <span className="badge-skill text-primary border-primary text-[11px] bg-accent shrink-0">
                  Unggulan
                </span>
              )}
            </div>

            <p className="mt-3 text-[14px] text-muted-foreground leading-relaxed max-w-2xl">
              {project.description}
            </p>

            <div className="mt-4 flex items-center gap-2 flex-wrap">
              {project.tech_stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-medium border-2 border-border-neo bg-card text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neo btn-neo-outline mt-4 text-[13px] px-4 py-2 rounded-lg"
              >
                Selengkapnya →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
    </PageTransition>
  );
}
