import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { getSkills } from "@/lib/api";
import type { Skill, SkillCategory } from "@/types";

const categories: { key: SkillCategory | "all"; label: string }[] = [
  { key: "all", label: "Semua" },
  { key: "backend", label: "Backend" },
  { key: "frontend", label: "Frontend" },
  { key: "tools", label: "Tools" },
];

interface SkillsSectionProps {
  title?: string;
  showIcon?: boolean;
}

export default function SkillsSection({
  title = "Keahlian",
  showIcon = true,
}: SkillsSectionProps) {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [filter, setFilter] = useState<SkillCategory | "all">("all");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    getSkills().then(setSkills);
  }, []);

  const filteredSkills =
    filter === "all" ? skills : skills.filter((s) => s.category === filter);

  const counts: Record<SkillCategory | "all", number> = {
    all: skills.length,
    frontend: skills.filter((s) => s.category === "frontend").length,
    backend: skills.filter((s) => s.category === "backend").length,
    tools: skills.filter((s) => s.category === "tools").length,
    other: skills.filter((s) => s.category === "other").length,
  };

  return (
    <motion.section
      className="card-neo p-6 sm:p-8"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        {showIcon && (
          <span className="text-primary font-mono text-lg font-bold">&lt;/&gt;</span>
        )}
        <h2 className="text-xl font-bold text-foreground">{title}</h2>
      </div>

      {/* Filter Tabs with animated pill */}
      <div className="flex gap-1.5 flex-wrap mb-6 p-1 bg-secondary rounded-full border-2 border-border-neo shadow-[2px_2px_0_0_var(--border-neo)]">
        {categories.map((cat) => {
          const isActive = filter === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className="relative px-4 py-1.5 rounded-full text-[13px] font-medium transition-colors duration-200"
            >
              {isActive && (
                <motion.div
                  layoutId="skill-filter-pill"
                  className="absolute inset-0 bg-primary rounded-full border-2 border-border-neo"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 flex items-center gap-1.5 transition-colors duration-200 ${
                  isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.label}
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-full font-mono leading-none transition-colors duration-200 ${
                    isActive
                      ? "bg-white/20 text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {counts[cat.key]}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Skill Badges */}
      <motion.div className="flex gap-2 flex-wrap min-h-[40px]">
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill, i) => (
            <motion.span
              key={skill.id}
              layout
              initial={{ opacity: 0, scale: 0.6, filter: "blur(6px)" }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
                transition: {
                  delay: i * 0.04,
                  type: "spring",
                  stiffness: 350,
                  damping: 24,
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.6,
                filter: "blur(6px)",
                transition: { duration: 0.2, ease: "easeIn" },
              }}
              whileHover={{
                scale: 1.06,
                y: -2,
                boxShadow: "3px 4px 0px 0px var(--primary)",
                borderColor: "var(--primary)",
                transition: { type: "spring", stiffness: 500, damping: 20 },
              }}
              onMouseEnter={() => setHoveredId(skill.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="badge-skill cursor-default relative"
              style={{
                zIndex: hoveredId === skill.id ? 10 : 1,
              }}
            >
              {/* Subtle glow behind hovered badge */}
              {hoveredId === skill.id && (
                <motion.div
                  layoutId="badge-glow"
                  className="absolute inset-0 rounded-full bg-primary/10 blur-md -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
              {skill.name}
            </motion.span>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty state */}
      {filteredSkills.length === 0 && (
        <p className="text-muted-foreground text-[14px] text-center py-4">
          Tidak ada skill di kategori ini.
        </p>
      )}
    </motion.section>
  );
}
