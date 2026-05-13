import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'

const relatedWorks = [
  {
    name: 'Flowmingo',
    color: '#2f97f7',
    borderColor: 'rgba(47,151,247,0.25)',
    tag: 'Interview Analysis',
    description:
      'An AI-based interview analysis platform that automates candidate assessment by generating structured evaluation reports and recruitment insights. Focuses on improving screening accuracy and simplifying post-interview analysis.',
    limitation: 'No proctoring, no HR chatbot, no integrated HR portal.',
  },
  {
    name: 'Paradox AI',
    color: '#00d4ff',
    borderColor: 'rgba(0,212,255,0.25)',
    tag: 'Conversational Recruiting',
    description:
      'Widely adopted for conversational recruitment assistance and automated interview scheduling. Uses AI-driven chat interactions to help organizations communicate with candidates and manage hiring workflows more efficiently.',
    limitation: 'Focuses on scheduling only; lacks multi-modal behavioral evaluation.',
  },
  {
    name: 'HireVue',
    color: '#a855f7',
    borderColor: 'rgba(168,85,247,0.25)',
    tag: 'AI Video Interviews',
    description:
      'A leading AI interview platform supporting video-based interviews and automated candidate evaluation. Analyzes interview responses and communication patterns using AI to assist hiring decisions.',
    limitation: 'Enterprise-only pricing; no integrated HR knowledge assistant.',
  },
]

const noveltyPoints = [
  'AI voice interviews + real-time proctoring (YOLOv8 + MediaPipe + Gaze)',
  'Multi-modal scoring across 5 dimensions with DeepSeek-generated PDF reports',
  'RAG-based HR chatbot (ChromaDB) for employee self-service',
  'All capabilities unified in one open, deployable platform',
]

export default function LiteratureReview() {
  return (
    <SectionWrapper
      id="literature-review"
      badge="Related Work"
      title="Literature Review"
      subtitle="Existing AI recruitment platforms and how IntelliHire advances beyond them"
      dark
    >
      {/* Related works grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 flex-1">
        {relatedWorks.map((work, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="glass-card p-6 flex flex-col gap-4"
            style={{ borderColor: work.borderColor }}
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <h3
                className="text-xl font-heading font-bold"
                style={{ color: work.color }}
              >
                {work.name}
              </h3>
              <span
                className="text-[11px] font-mono px-2.5 py-1 rounded-full"
                style={{
                  color: work.color,
                  background: `${work.color}15`,
                  border: `1px solid ${work.color}30`,
                }}
              >
                {work.tag}
              </span>
            </div>

            {/* Description */}
            <p className="text-white/70 text-sm leading-relaxed flex-1">
              {work.description}
            </p>

            {/* Limitation */}
            <div className="pt-3 border-t border-white/8">
              <p className="text-[12px] text-white/45 leading-snug">
                <span className="text-amber-400 font-semibold">Gap: </span>
                {work.limitation}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* IntelliHire's Novelty */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="rounded-2xl p-6 bg-gradient-to-r from-brand-400/10 to-cyan-400/8 border border-brand-400/20"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <h3 className="text-base font-heading font-semibold text-emerald-400">
            IntelliHire's Novelty
          </h3>
          <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/25 text-emerald-400">
            First Unified Platform
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {noveltyPoints.map((point, i) => (
            <div key={i} className="flex gap-3 items-start">
              <svg
                className="mt-0.5 flex-shrink-0"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M2 7l3.5 3.5L12 3"
                  stroke="#10b981"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-white/75 text-sm leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
