import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { getProfile, getSkills } from "@/lib/api";
import PageTransition from "@/components/layout/PageTransition";
import type { Profile, Skill, SkillCategory } from "@/types";

const categories: { key: SkillCategory | "all"; label: string }[] = [
  { key: "all", label: "Semua" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "tools", label: "Tools" },
];

const techKeywords = ["React", "Vue", "Laravel", "Yii2", "Node.js", "Python", "TypeScript"];

function highlightTech(text: string) {
  const regex = new RegExp(`(${techKeywords.join("|")})`, "gi");
  const parts = text.split(regex);
  return parts.map((part) =>
    techKeywords.some((k) => k.toLowerCase() === part.toLowerCase())
      ? `<strong class="text-primary font-semibold">${part}</strong>`
      : part
  ).join("");
}

export default function Home() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [filter, setFilter] = useState<SkillCategory | "all">("all");

  useEffect(() => {
    getProfile().then(setProfile);
    getSkills().then(setSkills);
  }, []);

  const filteredSkills =
    filter === "all" ? skills : skills.filter((s) => s.category === filter);

  return (
    <PageTransition>
      <div className="space-y-6 pt-4">
      {/* Hero Card */}
      <motion.div
        className="card-neo p-6 sm:p-8"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h1 className="text-[28px] sm:text-[36px] font-bold leading-tight tracking-tight text-foreground">
          Halo! Nama saya {profile?.name ?? "Surya Eko Indrawan"}
        </h1>
        <ul className="mt-3 text-muted-foreground text-[15px] space-y-1 list-none pl-0">
          <li className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-primary">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Berdomisili di {profile?.location ?? "Semarang, Indonesia"} (ID)
          </li>
        </ul>
        <div className="mt-4 text-[15px] leading-relaxed text-muted-foreground max-w-xl">
          <p
            dangerouslySetInnerHTML={{
              __html: highlightTech(profile?.bio ?? ""),
            }}
          />
        </div>
        <div className="mt-5 flex gap-3 flex-wrap">
          {profile?.open_to_work && (
            <span className="badge-skill text-green-700 border-green-600 bg-green-50 text-[13px]">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5" />
              Open to Work
            </span>
          )}
          <Link to="/about" className="btn-neo btn-neo-outline text-[13px] px-4 py-2 rounded-lg">
            Selengkapnya →
          </Link>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.section
        className="card-neo p-6 sm:p-8"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className="flex items-center gap-2 mb-5">
          <span className="text-primary font-mono text-lg font-bold">&lt;/&gt;</span>
          <h2 className="text-xl font-bold text-foreground">Keahlian</h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 flex-wrap mb-5">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-4 py-1.5 rounded-full text-[13px] font-medium border-2 transition-all duration-200
                ${filter === cat.key
                  ? "bg-primary text-primary-foreground border-primary shadow-none translate-x-0.5 translate-y-0.5"
                  : "bg-card text-muted-foreground border-border-neo hover:bg-accent shadow-[2px_2px_0_0_var(--border-neo)]"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Badges */}
        <div className="flex gap-2 flex-wrap">
          <AnimatedBadges skills={filteredSkills} />
        </div>
      </motion.section>
    </div>
    </PageTransition>
  );
}

function AnimatedBadges({ skills }: { skills: Skill[] }) {
  return (
    <>
      {skills.map((skill, i) => (
        <motion.span
          key={skill.id}
          className="badge-skill"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: i * 0.04, type: "spring", stiffness: 300 }}
          layout
        >
          {skill.name}
        </motion.span>
      ))}
    </>
  );
}
