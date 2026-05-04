import { NavLink, useLocation } from "react-router-dom";
import { motion } from "motion/react";

const navItems = [
  {
    to: "/",
    label: "Beranda",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    to: "/projects",
    label: "Proyek",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <path d="M12 12v4" />
        <path d="M15 14l-3-2-3 2" />
      </svg>
    ),
  },
  {
    to: "/about",
    label: "Tentang",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
  },
];

export default function Header() {
  const location = useLocation();

  return (
    <motion.header
      className="sticky top-4 z-50 mx-auto max-w-2xl w-full px-4"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <nav className="card-neo rounded-2xl flex items-center justify-between px-4 py-2.5">
        {/* Logo / Avatar */}
        <NavLink to="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm border-2 border-border-neo overflow-hidden">
            SE
          </div>
          <span className="font-bold text-foreground hidden sm:inline text-[15px]">
            Surya Eko
          </span>
        </NavLink>

        {/* Nav Menu */}
        <div className="flex items-center gap-0.5">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all duration-200
                ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`
              }
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}

          {/* Status indicator */}
          <div className="flex flex-col items-center gap-0.5 px-3 py-1.5 text-[11px] font-medium text-muted-foreground cursor-default">
            <div className="relative">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11h.01" />
                <path d="M8 11h.01" />
                <path d="M12 16h.01" />
              </svg>
              <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-green-500 rounded-full border-2 border-card" />
            </div>
            <span>Status</span>
          </div>
        </div>

        {/* CTA Button */}
        <NavLink
          to="/hire"
          className={`btn-neo shrink-0 text-[13px] px-3.5 py-2 rounded-lg
            ${location.pathname === "/hire"
              ? "bg-primary text-primary-foreground"
              : "btn-neo-primary"
            }`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 2L11 13" />
            <path d="M22 2l-7 20-4-9-9-4 20-7z" />
          </svg>
          <span className="hidden sm:inline font-semibold">Rekrut Saya</span>
        </NavLink>
      </nav>
    </motion.header>
  );
}
