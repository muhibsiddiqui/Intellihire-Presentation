import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'

const objectives = [
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="24" height="18" rx="3" stroke="#2f97f7" strokeWidth="1.5" />
        <circle cx="16" cy="17" r="5" stroke="#00d4ff" strokeWidth="1.5" />
        <path d="M16 14V17L18 19" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 8V5C10 3.895 10.895 3 12 3H20C21.105 3 22 3.895 22 5V8" stroke="#2f97f7" strokeWidth="1.5" />
      </svg>
    ),
    title: 'AI-Driven Recruitment Automation',
    points: [
      'Facilitate end-to-end AI screening from CV upload to final evaluation report',
      'Conduct voice-based AI interviews with real-time dynamic follow-up questioning',
      'Provide multi-modal behavioral analysis (voice, face, gaze) for holistic assessment',
    ],
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
        <path
          d="M16 4C9.373 4 4 9.373 4 16C4 22.627 9.373 28 16 28C22.627 28 28 22.627 28 16"
          stroke="#2f97f7"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path d="M16 12V16L20 18" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M24 4L28 8L24 12"
          stroke="#2f97f7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Intelligent HR Assistance',
    points: [
      'Implement an intelligent HR chatbot utilizing RAG (Retrieval-Augmented Generation)',
      'Enable secure employee self-service for policy queries and document retrieval',
      'Reduce HR workload by automating routine information requests',
    ],
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
        <rect x="3" y="6" width="26" height="20" rx="3" stroke="#2f97f7" strokeWidth="1.5" />
        <path d="M3 12H29" stroke="#2f97f7" strokeWidth="1.5" />
        <rect x="7" y="16" width="6" height="4" rx="1" fill="#00d4ff" opacity="0.4" />
        <rect x="15" y="16" width="6" height="4" rx="1" fill="#2f97f7" opacity="0.4" />
        <rect x="23" y="16" width="3" height="4" rx="1" fill="#00d4ff" opacity="0.25" />
      </svg>
    ),
    title: 'Comprehensive Analytics',
    points: [
      'Generate detailed candidate reports with scoring metrics and actionable insights',
      'Provide data-driven feedback to streamline decision-making for HR officials',
      'Multi-dimensional scoring across verbal, semantic, behavioral, and technical dimensions',
    ],
  },
]

export default function Objectives() {
  return (
    <SectionWrapper
      id="objectives"
      badge="Goals & Scope"
      title="Project Objectives"
      subtitle="Three core pillars driving the IntelliHire platform"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
        {objectives.map((obj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="glass-card-hover p-8 flex flex-col"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-brand-400/10 border border-brand-400/20 flex items-center justify-center flex-shrink-0">
                {obj.icon}
              </div>
              <div className="pt-1">
                <div className="text-sm font-mono text-brand-400/65 mb-1">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-heading font-semibold text-white leading-snug">
                  {obj.title}
                </h3>
              </div>
            </div>
            <ul className="space-y-3 flex-1">
              {obj.points.map((point, j) => (
                <li
                  key={j}
                  className="flex gap-3 text-base text-white/80 leading-relaxed"
                >
                  <svg
                    className="mt-0.5 flex-shrink-0"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M4 8L7 11L12 5"
                      stroke="#2f97f7"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
