import { motion } from 'framer-motion'

const points = [
  'IntelliHire is a fully functional FYP — built end-to-end with real-world architecture, not a prototype or proof-of-concept',
  'Covers the complete hiring pipeline: job posting, CV screening, AI-driven interviews, proctoring, scoring, and HR dashboards',
  'Demonstrates deep full-stack capability — React, Flask, AI/ML integration, WebRTC, DevOps, and live cloud deployment on Contabo VPS',
  'Now deployed and working at intellihire.com.pk with production infrastructure, domain routing, and operational readiness',
]

export default function Conclusion() {
  return (
    <section
      id="conclusion"
      className="relative min-h-screen flex items-center justify-center bg-navy-950 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(47,151,247,0.1)_0%,transparent_60%)]" />
      <div className="absolute inset-0 grid-bg opacity-25" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="section-badge mb-8 mx-auto w-fit">
            Final Year Project
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold tracking-tight mb-4 leading-[1.1]">
            <span className="text-white">Project</span>
            <br />
            <span className="gradient-text">Complete &amp; Live</span>
          </h2>
          <p className="text-lg text-white/65 max-w-2xl mx-auto mt-4">
            IntelliHire is a fully working FYP — engineered to production standards, deployed successfully, and now running live.
          </p>
        </motion.div>

        {/* Key points */}
        <div className="space-y-4 mb-16 text-left max-w-2xl mx-auto">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="flex gap-4 items-start"
            >
              <div className="mt-1 w-6 h-6 rounded-full bg-brand-400/15 border border-brand-400/30 flex items-center justify-center flex-shrink-0">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 6l3 3 5-6"
                    stroke="#2f97f7"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-white/75 leading-relaxed text-[15px]">{point}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-400/15 to-cyan-400/10 border border-brand-400/25 glow-blue"
        >
          <div className="w-3 h-3 rounded-full bg-brand-400 animate-pulse" />
          <span className="text-lg font-heading font-semibold text-white">
            Live Production FYP
          </span>
        </motion.div>

        {/* Extra innovation callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 glass-card p-6 text-left max-w-2xl mx-auto"
        >
          <h4 className="text-sm font-heading font-semibold text-brand-300 mb-2">
            Now Live
          </h4>
          <p className="text-sm text-white/70 leading-relaxed">
            IntelliHire is now deployed on Contabo Cloud VPS and accessible at intellihire.com.pk.
            The next milestone is onboarding real companies and candidates while continuing
            production monitoring, final QA, and polish across the live system.
          </p>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 pt-8 border-t border-navy-500/20"
        >
           <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="mt-10 text-4xl sm:text-5xl font-heading font-extrabold gradient-text"
          >
            Thank You!
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
            className="text-lg text-white/60 mt-4 mb-10"
          >
            We appreciate your time and welcome any questions.
          </motion.p>

          <p className="text-xl text-white/80 font-mono mt-10 mb-2">
            IntelliHire — FAST NUCES Karachi — FYP 2025-2026
          </p>
          <p className="text-lg text-white/70 mt-2">
            Muhammad Omer Khan · Muhib Siddiqui · Syed Muhammad Salik Ahmed
          </p>
          <p className="text-base text-white/60 mt-2">
            Supervised by Miss Sobia Iftikhar
          </p>
        </motion.div>
        
      </div>
    </section>
  )
}
