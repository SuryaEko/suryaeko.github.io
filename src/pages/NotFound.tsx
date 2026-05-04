import { Link } from "react-router-dom";
import { motion } from "motion/react";
import PageTransition from "@/components/layout/PageTransition";

export default function NotFound() {
  return (
    <PageTransition>
      <div className="space-y-6 pt-12">
      <motion.div
        className="card-neo p-10 text-center max-w-md mx-auto"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <span className="text-7xl font-bold text-primary font-mono">404</span>
        <h1 className="text-xl font-bold mt-4 text-foreground">Halaman Tidak Ditemukan</h1>
        <p className="text-muted-foreground text-[14px] mt-2">
          Maaf, halaman yang kamu cari tidak tersedia.
        </p>
        <Link
          to="/"
          className="btn-neo btn-neo-primary mt-6 px-5 py-2.5 rounded-lg text-[14px]"
        >
          ← Kembali ke Beranda
        </Link>
      </motion.div>
    </div>
    </PageTransition>
  );
}
