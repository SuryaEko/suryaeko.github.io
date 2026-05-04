import { motion } from "motion/react";
import PageTransition from "@/components/layout/PageTransition";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    title: "Pengembangan Web",
    desc: "Web app modern dengan React, Next.js, Vue, dan TypeScript. Performa tinggi, SEO-friendly, dan mudah di-maintain.",
    color: "text-primary",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
    title: "Desain UI/UX",
    desc: "Desain antarmuka yang intuitif dan menarik dengan Figma. Fokus pada user experience dan konversi.",
    color: "text-blue-600",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    title: "Solusi Backend",
    desc: "REST API dan backend service dengan Node.js, Laravel, atau PHP. Database PostgreSQL/MySQL, caching, dan queue.",
    color: "text-green-600",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: "Aplikasi Mobile",
    desc: "Aplikasi Android native maupun cross-platform. Stabilitas, performa, dan pengalaman pengguna yang mulus.",
    color: "text-orange-500",
  },
];

const workflow = [
  { step: "01", title: "Diskusi & Riset", desc: "Memahami tujuan proyek, target user, dan kebutuhan teknis secara mendalam." },
  { step: "02", title: "Desain & Prototyping", desc: "Visualisasi produk dalam bentuk wireframe dan prototype interaktif." },
  { step: "03", title: "Pengembangan", desc: "Tahap coding dengan standar kode bersih, testing, dan code review." },
  { step: "04", title: "QA & Peluncuran", desc: "Pengujian akhir, bug fixing, deployment, dan monitoring pasca-launch." },
];

export default function Hire() {
  return (
    <PageTransition>
      <div className="space-y-6 pt-4">
      {/* Hero */}
      <motion.div
        className="card-neo p-6 sm:p-10 text-center"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-[28px] sm:text-[40px] font-bold leading-tight tracking-tight text-foreground">
          Wujudkan Ide Anda Bersama Saya
        </h1>
        <p className="mt-3 text-[15px] text-muted-foreground max-w-lg mx-auto">
          Produk digital bermakna dan berkinerja tinggi — dari konsep hingga peluncuran.
        </p>
      </motion.div>

      {/* USP Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { title: "Kode Bersih", desc: "Clean code, terstruktur, dan mudah di-maintain untuk jangka panjang.", icon: "{}" },
          { title: "Fokus UI/UX", desc: "Desain yang tidak hanya indah, tapi juga intuitif dan fungsional.", icon: "<>" },
          { title: "Komunikasi", desc: "Transparan, responsif, dan selalu update progres secara berkala.", icon: "##" },
        ].map((usp, i) => (
          <motion.div
            key={usp.title}
            className="card-neo p-5 text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.4, ease: "easeOut" }}
          >
            <span className="text-2xl font-mono font-bold text-primary">{usp.icon}</span>
            <h3 className="mt-3 font-bold text-[16px] text-foreground">{usp.title}</h3>
            <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">{usp.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Services */}
      <motion.div
        className="card-neo p-6 sm:p-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <span className="badge-skill text-primary border-primary bg-accent text-[12px] mb-3 inline-block">
          Layanan yang Saya Tawarkan
        </span>
        <div className="space-y-5 mt-3">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              className="flex gap-4 items-start"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 + (i + 3) * 0.1, duration: 0.4, ease: "easeOut" }}
            >
              <div className={`shrink-0 mt-0.5 ${svc.color}`}>{svc.icon}</div>
              <div>
                <h3 className="font-bold text-[16px] text-foreground">{svc.title}</h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed mt-0.5">{svc.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Workflow */}
      <motion.div
        className="card-neo p-6 sm:p-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.45 }}
      >
        <h2 className="text-xl font-bold text-foreground mb-6">Proses Kerja</h2>
        <div className="space-y-0">
          {workflow.map((step, i) => (
            <motion.div
              key={step.step}
              className="flex gap-4 items-start py-4 border-b-2 border-border last:border-b-0"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 + (i + 7) * 0.1, duration: 0.4, ease: "easeOut" }}
            >
              <span className="text-[28px] font-bold text-primary font-mono shrink-0 leading-none">
                {step.step}
              </span>
              <div>
                <h3 className="font-bold text-[16px] text-foreground">{step.title}</h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed mt-0.5">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="card-neo p-6 sm:p-8 text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <h2 className="text-xl font-bold text-foreground">Siap Memulai Proyek Anda?</h2>
        <p className="mt-2 text-[14px] text-muted-foreground">Hubungi saya melalui email atau LinkedIn.</p>
        <div className="mt-5 flex gap-3 justify-center flex-wrap">
          <a href="mailto:suryaeko.indrawan@gmail.com" className="btn-neo btn-neo-primary px-5 py-2.5 rounded-lg text-[14px]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 4l-10 8L2 4" />
            </svg>
            Kirim Email
          </a>
          <a
            href="https://www.linkedin.com/in/suryaeko/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neo bg-[#0a66c2] text-white border-[#0a66c2] px-5 py-2.5 rounded-lg text-[14px]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
        </div>
      </motion.div>
    </div>
    </PageTransition>
  );
}
