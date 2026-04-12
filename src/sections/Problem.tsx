import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'

const problems = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L25 9V19L14 25L3 19V9L14 3Z" stroke="#2f97f7" strokeWidth="1.5" />
        <path d="M14 11V17" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" />
        <circle cx="14" cy="8" r="1.5" fill="#ff6b6b" />
      </svg>
    ),
    title: 'Recruitment Bottlenecks',
    points: [
      'Manual screening processes are slow, inconsistent, and vulnerable to unconscious bias',
      'Manual shortlisting is time-consuming and leads to limited evaluation depth',
      'Candidates experience long wait times between application and first interaction',
      'HR teams spend 70% of their time on initial screening that could be automated',
    ],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="20" rx="3" stroke="#2f97f7" strokeWidth="1.5" />
        <path d="M9 10H19M9 14H16M9 18H13" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'HR Information Access Challenges',
    points: [
      'Employees frequently depend on HR staff for basic information and policy queries',
      'No centralized way to query HR documents, policies, and announcements',
      'No secure authenticated access for personalized, centralized document retrieval',
    ],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#2f97f7" strokeWidth="1.5" />
        <path d="M14 8V14L18 18" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'The System Gap',
    points: [
      'No integrated system combines AI-powered candidate screening with an intelligent HR assistant',
      'No scalable platform exists for automated first-round interviews with real-time proctoring',
      'Companies either use expensive enterprise tools or rely on completely manual processes',
    ],
  },
]

export default function Problem() {
  return (
    <SectionWrapper
      id="problem"
      badge="The Challenge"
      title="Problem Statement"
      subtitle="Identifying the core inefficiencies that IntelliHire was designed to solve"
      dark
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
        {problems.map((problem, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="glass-card p-8 flex flex-col group hover:border-red-500/20 transition-all duration-500"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/15 transition-colors">
                {problem.icon}
              </div>
              <h3 className="text-lg font-heading font-semibold text-white leading-snug">
                {problem.title}
              </h3>
            </div>
            <ul className="space-y-3 flex-1">
              {problem.points.map((point, j) => (
                <motion.li
                  key={j}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + j * 0.08, duration: 0.4 }}
                  className="flex gap-3 text-sm text-white/75 leading-relaxed"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400/50 flex-shrink-0" />
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
