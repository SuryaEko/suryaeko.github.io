import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { getProfile } from "@/lib/api";
import PageTransition from "@/components/layout/PageTransition";
import SkillsSection from "@/components/ui/SkillsSection";
import type { Profile } from "@/types";

const techKeywords = ["React", "Vue", "Laravel", "Yii2", "Node.js", "Python", "TypeScript"];

function highlightTech(text: string) {
  const regex = new RegExp(`(${techKeywords.join("|")})`, "gi");
  const parts = text.split(regex);
  return parts
    .map((part) =>
      techKeywords.some((k) => k.toLowerCase() === part.toLowerCase())
        ? `<strong class="text-primary font-semibold">${part}</strong>`
        : part
    )
    .join("");
}

export default function Home() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    getProfile().then(setProfile);
  }, []);

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
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 text-primary"
              >
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
              <span className="text-[13px] inline-flex items-center px-4 py-1 rounded-full font-medium border-2 bg-emerald-100 border-emerald-600 text-emerald-800 dark:bg-emerald-900/40 dark:border-emerald-500 dark:text-emerald-300">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-1.5 dark:bg-emerald-400" />
                Open to Work
              </span>
            )}
            <Link
              to="/about"
              className="btn-neo btn-neo-outline text-[13px] px-4 py-2 rounded-lg"
            >
              Selengkapnya →
            </Link>
          </div>
        </motion.div>

        {/* Skills Section */}
        <SkillsSection />
      </div>
    </PageTransition>
  );
}
