import { motion } from 'framer-motion'
import { Brain } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-950"
    >
      {/* ── Animated Background ── */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(47,151,247,0.08)_0%,transparent_70%)]" />

        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-400/[0.04] blur-[100px]"
          animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-400/[0.04] blur-[100px]"
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        />

        {/* Decorative rings */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-brand-400/[0.06]"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-brand-400/[0.03]"
          animate={{ rotate: -360 }}
          transition={{ duration: 180, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-brand-400/10 border border-brand-400/20 mb-10"
        >
          <div className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
          <span className="text-xl sm:text-2xl font-mono font-bold text-brand-300 tracking-wider">
            FINAL YEAR PROJECT — 2025-2026
          </span>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6, type: 'spring' }}
          className="mb-8 flex justify-center"
        >
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-brand-400 to-cyan-400 p-[2px] animate-pulse-glow">
            <div className="w-full h-full rounded-2xl bg-navy-950 flex items-center justify-center">
              <Brain size={44} className="text-brand-400" />
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-6xl sm:text-7xl lg:text-[5.5rem] font-heading font-extrabold tracking-tight mb-6 leading-[1.05]"
        >
          <span className="gradient-text">INTELLI</span>
          <span className="text-white">HIRE</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="text-xl sm:text-2xl text-white/70 font-body font-light max-w-3xl mx-auto mb-14 leading-relaxed"
        >
          AI-Powered Candidate Screening &amp; Interview Automation System
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.05, duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-brand-400/50 to-transparent max-w-md mx-auto mb-14"
        />

        {/* Team info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-12 sm:gap-20 text-sm"
        >
          <div className="text-left">
            <div className="text-brand-400/60 font-mono text-[10px] tracking-[0.2em] mb-3">
              PROJECT TEAM
            </div>
            <div className="space-y-1.5 text-white/75">
              <div>
                <span className="text-brand-400 font-mono text-xs mr-2">22K-4418</span>
                Muhammad Omer Khan
              </div>
              <div>
                <span className="text-brand-400 font-mono text-xs mr-2">22K-4428</span>
                Muhib Siddiqui
              </div>
              <div>
                <span className="text-brand-400 font-mono text-xs mr-2">22K-4403</span>
                Syed Muhammad Salik Ahmed
              </div>
            </div>
          </div>

          <div className="text-left">
            <div className="text-brand-400/60 font-mono text-[10px] tracking-[0.2em] mb-3">
              PROJECT DETAILS
            </div>
            <div className="space-y-1.5 text-white/75">
              <div>
                <span className="text-white/60 mr-1">Supervisor:</span> Miss Sobia Iftikhar
              </div>
              <div>
                <span className="text-white/60 mr-1">Type:</span> Final Year Project
                (2025-2026)
              </div>
              <div>
                <span className="text-white/60 mr-1">Institution:</span> FAST NUCES
                Karachi
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] font-mono text-white/15 tracking-[0.3em]">
              SCROLL
            </span>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 4V16M10 16L4 10M10 16L16 10"
                stroke="rgba(47,151,247,0.35)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
