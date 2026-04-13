import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'

const screenshots = [
  {
    src: '/REPORT_SS.png',
    title: 'Scoring & Report Generation',
    desc: 'Automated candidate evaluation report with multi-dimensional scores, sentiment timeline, and AI-generated feedback summary.',
    tag: 'Reports',
    color: '#2f97f7',
  },
  {
    src: '/RECRUITER_DASHBOARD.jpeg',
    title: 'Recruiter Dashboard',
    desc: 'Centralised dashboard for recruiters to manage job postings, track candidates, and review interview outcomes at a glance.',
    tag: 'Dashboard',
    color: '#00d4ff',
  },
  {
    src: '/CREATE_JOB.jpeg',
    title: 'Job Creation',
    desc: 'Intuitive job-creation wizard with AI-assisted question generation, skill tagging, and rubric configuration.',
    tag: 'Jobs',
    color: '#10b981',
  },
  {
    src: '/ADMIN.jpeg',
    title: 'Admin Panel',
    desc: 'System-wide administration panel for managing users, roles, platform settings, and audit logs.',
    tag: 'Admin',
    color: '#a855f7',
  },

]

export default function Screenshots() {
  const [active, setActive] = useState(0)
  const current = screenshots[active]

  return (
    <SectionWrapper
      id="screenshots"
      badge="Platform Preview"
      title="Snapshots"
      subtitle="A visual walkthrough of the IntelliHire platform across its key modules"
    >
      <div className="flex flex-col gap-8 flex-1">
        {/* Thumbnail tabs */}
        <div className="flex flex-wrap gap-3 justify-center">
          {screenshots.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
              style={{
                border: `1px solid ${i === active ? s.color : s.color + '35'}`,
                background: i === active ? `${s.color}18` : 'transparent',
                color: i === active ? s.color : 'rgba(255,255,255,0.55)',
              }}
            >
              {s.tag}
              {i === active && (
                <motion.span
                  layoutId="tab-indicator"
                  className="absolute inset-0 rounded-xl"
                  style={{ border: `1px solid ${s.color}`, background: `${s.color}12` }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Main screenshot viewer */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start"
          >
            {/* Image */}
            <div className="lg:col-span-3">
              <div
                className="rounded-2xl overflow-hidden border backdrop-blur-sm"
                style={{ borderColor: `${current.color}40`, background: 'rgba(15,23,42,0.6)' }}
              >
                {/* Chrome bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-navy-900/60">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-3 text-xs font-mono" style={{ color: `${current.color}cc` }}>
                    ◆ IntelliHire — {current.title}
                  </span>
                </div>
                <img
                  src={current.src}
                  alt={current.title}
                  className="w-full object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 flex flex-col justify-center gap-6">
              <div>
                <span
                  className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3"
                  style={{ background: `${current.color}18`, color: current.color, border: `1px solid ${current.color}35` }}
                >
                  {current.tag}
                </span>
                <h3 className="text-2xl font-heading font-bold text-white mb-3">{current.title}</h3>
                <p className="text-base text-white/70 leading-relaxed">{current.desc}</p>
              </div>

              {/* Nav arrows */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setActive((active - 1 + screenshots.length) % screenshots.length)}
                  className="w-10 h-10 rounded-xl border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
                >
                  ←
                </button>
                <span className="text-sm text-white/40 font-mono">
                  {active + 1} / {screenshots.length}
                </span>
                <button
                  onClick={() => setActive((active + 1) % screenshots.length)}
                  className="w-10 h-10 rounded-xl border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
                >
                  →
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2">
          {screenshots.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                background: i === active ? current.color : 'rgba(255,255,255,0.2)',
                transform: i === active ? 'scale(1.4)' : 'scale(1)',
              }}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
