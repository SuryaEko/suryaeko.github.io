import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { getProfile, getExperiences, getSkills } from "@/lib/api";
import PageTransition from "@/components/layout/PageTransition";
import type { Profile, Experience, Skill, SkillCategory } from "@/types";

const categories: { key: SkillCategory | "all"; label: string }[] = [
  { key: "all", label: "Semua" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "tools", label: "Tools" },
];

function formatDate(dateStr: string | null): string {
  if (!dateStr) return "Sekarang";
  const d = new Date(dateStr);
  return d.toLocaleDateString("id-ID", { year: "numeric" });
}

export default function About() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [filter, setFilter] = useState<SkillCategory | "all">("all");

  useEffect(() => {
    getProfile().then(setProfile);
    getExperiences().then(setExperiences);
    getSkills().then(setSkills);
  }, []);

  const workExp = experiences.filter((e) => e.type === "work");
  const education = experiences.filter((e) => e.type === "education");
  const filteredSkills =
    filter === "all" ? skills : skills.filter((s) => s.category === filter);

  return (
    <PageTransition>
      <div className="space-y-6 pt-4">
      {/* Page Header */}
      <motion.div
        className="card-neo p-6 sm:p-8"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-xl font-bold text-foreground">Tentang Saya</h2>
        <p className="mt-2 text-muted-foreground text-[15px]">
          Profil, riwayat pendidikan, dan pengalaman profesional.
        </p>
      </motion.div>

      {/* Profile + Bio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Profile Card */}
        <motion.div
          className="card-neo p-6 bg-primary border-primary text-primary-foreground sm:col-span-1"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <div className="w-20 h-20 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center text-white font-bold text-3xl mx-auto">
            {profile?.name?.charAt(0) ?? "S"}
          </div>
          <h3 className="mt-4 text-center font-bold text-[18px]">
            {profile?.name ?? "Surya Eko Indrawan"}
          </h3>
          <p className="text-center text-[14px] opacity-90">
            {profile?.role ?? "Full-stack Developer"}
          </p>
          <p className="text-center text-[13px] opacity-75 mt-1 flex items-center justify-center gap-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {profile?.location ?? "Semarang, Indonesia"}
          </p>
        </motion.div>

        {/* Bio Card */}
        <motion.div
          className="card-neo p-6 sm:col-span-2"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <h3 className="font-bold text-lg text-foreground">Siapa Saya?</h3>
          <p className="mt-3 text-[14px] text-muted-foreground leading-relaxed">
            {profile?.bio}
          </p>
          <div className="mt-4 flex gap-2 flex-wrap">
            {profile?.open_to_work && (
              <span className="badge-skill text-green-700 border-green-600 bg-green-50 text-[13px]">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5" />
                Open to Work
              </span>
            )}
            <span className="badge-skill text-primary border-primary bg-accent text-[13px]">
              Fullstack
            </span>
          </div>
        </motion.div>
      </div>

      {/* Experience Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Education Timeline */}
        <motion.div
          className="card-neo p-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
            </svg>
            Pendidikan
          </h3>
          <div className="mt-4 space-y-4">
            {education.map((edu, i) => (
              <div key={edu.id} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-accent border-2 border-primary flex items-center justify-center text-primary shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
                    </svg>
                  </div>
                  {i < education.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border-neo my-1" />
                  )}
                </div>
                <div className="pb-4">
                  <p className="font-semibold text-[15px] text-foreground">{edu.company}</p>
                  <p className="text-[13px] text-muted-foreground">{edu.role}</p>
                  <p className="text-[12px] text-muted-foreground mt-0.5">
                    {formatDate(edu.start_date)} – {formatDate(edu.end_date)}
                  </p>
                  {edu.location && (
                    <p className="text-[12px] text-muted-foreground">{edu.location}</p>
                  )}
                  {edu.description && (
                    <p className="text-[13px] text-muted-foreground mt-1 leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Work Experience */}
        <motion.div
          className="card-neo p-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.35 }}
        >
          <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            </svg>
            Pengalaman
          </h3>
          <div className="mt-4 space-y-4">
            {workExp.map((exp, i) => (
              <div key={exp.id} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center shrink-0 ${exp.is_current ? "bg-primary border-primary text-primary-foreground" : "bg-accent border-primary text-primary"}`}>
                    {exp.is_current ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12.01" y2="8" />
                      </svg>
                    )}
                  </div>
                  {i < workExp.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border-neo my-1" />
                  )}
                </div>
                <div className="pb-4">
                  <p className="font-semibold text-[15px] text-foreground">{exp.company}</p>
                  <p className="text-[13px] text-muted-foreground">{exp.role}</p>
                  <p className="text-[12px] text-muted-foreground mt-0.5">
                    {formatDate(exp.start_date)} – {formatDate(exp.end_date)}
                    {exp.is_current && (
                      <span className="ml-1 text-primary font-medium">• Aktif</span>
                    )}
                  </p>
                  {exp.location && (
                    <p className="text-[12px] text-muted-foreground">{exp.location}</p>
                  )}
                  {exp.description && (
                    <p className="text-[13px] text-muted-foreground mt-1 leading-relaxed">
                      {exp.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <motion.div
        className="card-neo p-6 sm:p-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.45 }}
      >
        <h3 className="font-bold text-lg text-foreground mb-4">Tech Stack & Keahlian</h3>

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

        <div className="flex gap-2 flex-wrap">
          {filteredSkills.map((skill, i) => (
            <motion.span
              key={skill.id}
              className="badge-skill"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.03, type: "spring", stiffness: 300 }}
              layout
            >
              {skill.name}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
    </PageTransition>
  );
}
