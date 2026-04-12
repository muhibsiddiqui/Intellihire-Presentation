import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'

const completed = [
  'Full-stack application (Flask + React + MySQL)',
  'AI interview engine with STT / TTS pipeline',
  'RAG-based dynamic question generation (ChromaDB)',
  'Real-time proctoring (YOLOv8 + MediaPipe + Gaze)',
  'Multi-modal scoring & report generation (DeepSeek)',
  'CV upload, parsing & ATS scoring (5 dimensions)',
  'HR dashboard with interview & candidate management',
  'Candidate portal with slot booking & results view',
  'Marketing landing page with pricing & onboarding flow',
  'Role-based access control (Admin / HR / Candidate)',
]

const remaining = [
  { label: 'Cloud Deployment', desc: 'Deploying full stack on Contabo VPS — Nginx, PM2, MySQL, ChromaDB live setup' },
  { label: 'End-to-End Testing', desc: 'Full QA pass across all portals, edge cases, and concurrent interview stress tests' },
  { label: 'Demo & Handover', desc: 'Supervisor demo session, documentation finalization, and FYP submission package' },
]

const stats = [
  { label: 'Backend API Routes', value: '40+', color: '#2f97f7' },
  { label: 'React Components', value: '60+', color: '#00d4ff' },
  { label: 'AI Models Integrated', value: '5', color: '#a855f7' },
  { label: 'Scoring Dimensions', value: '5', color: '#10b981' },
]

export default function CurrentStatus() {
  return (
    <SectionWrapper
      id="current-status"
      badge="Where We Stand"
      title="Current Status"
      subtitle="Core system complete — final framing, deployment and testing in progress"
    >
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="glass-card p-6 text-center"
          >
            <div
              className="text-3xl sm:text-4xl font-heading font-bold mb-1"
              style={{ color: stat.color }}
            >
              {stat.value}
            </div>
            <div className="text-xs text-white/65 font-mono tracking-wider">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Completed features checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-7"
        >
          <h3 className="text-lg font-heading font-semibold text-white mb-5 flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            Completed Features
          </h3>
          <div className="space-y-3">
            {completed.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.25 }}
                className="flex items-start gap-3 text-sm text-white/75"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
                  <circle cx="8" cy="8" r="7" stroke="#10b981" strokeWidth="1" />
                  <path d="M5 8l2 2 4-4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What remains */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="glass-card p-7"
        >
          <h3 className="text-lg font-heading font-semibold text-white mb-5 flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            What Remains
          </h3>
          <div className="space-y-4">
            {remaining.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
                className="flex gap-3"
              >
                <div className="mt-1 w-5 h-5 rounded-md bg-amber-400/10 border border-amber-400/30 flex items-center justify-center flex-shrink-0">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <circle cx="5" cy="5" r="3" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 1.5" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-heading font-semibold text-amber-300 mb-0.5">{item.label}</div>
                  <div className="text-xs text-white/65 leading-relaxed">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
