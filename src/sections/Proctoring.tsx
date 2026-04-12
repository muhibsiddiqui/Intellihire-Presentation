import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'

const features = [
  {
    title: 'Gaze Tracking',
    desc: 'MediaPipe-based eye landmark detection flags sustained off-screen gaze events with configurable sensitivity thresholds. Tracks pupil position relative to screen center at 30 fps.',
    stats: '30 fps tracking',
    color: '#2f97f7',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M2 16s5-10 14-10 14 10 14 10-5 10-14 10S2 16 2 16z" stroke="#2f97f7" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="5" stroke="#00d4ff" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="2" fill="#2f97f7" />
      </svg>
    ),
  },
  {
    title: 'Mobile Detection',
    desc: 'YOLOv8 object detection model fine-tuned for handheld device recognition runs inference on each video frame. Detects phones, tablets, and secondary screens with bounding box overlay.',
    stats: 'YOLOv8 inference',
    color: '#f59e0b',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="10" y="4" width="12" height="24" rx="3" stroke="#f59e0b" strokeWidth="1.5" />
        <path d="M14 6h4" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="24" r="1.5" stroke="#f59e0b" strokeWidth="1" opacity="0.5" />
        <path d="M4 8l6 4M28 8l-6 4" stroke="#f59e0b" strokeWidth="1" strokeLinecap="round" strokeDasharray="3 3" />
      </svg>
    ),
  },
  {
    title: 'Tab Monitoring',
    desc: 'Browser Visibility API records every focus-loss event with timestamp and duration. Candidates who leave the interview tab are flagged immediately with event count tracking.',
    stats: 'Event-based',
    color: '#ef4444',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="6" width="24" height="18" rx="3" stroke="#ef4444" strokeWidth="1.5" />
        <path d="M4 12h24" stroke="#ef4444" strokeWidth="1" />
        <circle cx="8" cy="9" r="1" fill="#ff5f56" />
        <circle cx="12" cy="9" r="1" fill="#ffbd2e" />
        <circle cx="16" cy="9" r="1" fill="#27c93f" />
        <path d="M10 18h12M10 22h8" stroke="#ef4444" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: 'Multi-Person Detection',
    desc: 'YOLOv8 person detection identifies if multiple people are present in the frame during the interview. Immediate flag raised with frame capture for evidence reviewing.',
    stats: 'Real-time',
    color: '#a855f7',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="12" cy="10" r="4" stroke="#a855f7" strokeWidth="1.5" />
        <path d="M4 26c0-4 3.58-7 8-7" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="22" cy="10" r="4" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M28 26c0-4-3.58-7-8-7" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" />
      </svg>
    ),
  },
]

export default function Proctoring() {
  return (
    <SectionWrapper
      id="proctoring"
      badge="Anti-Cheating System"
      title="Real-time Proctoring"
      subtitle="Multi-layered integrity monitoring ensures fair and secure interview sessions"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card-hover p-8"
          >
            <div className="flex items-start justify-between mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{
                  backgroundColor: `${f.color}0d`,
                  border: `1px solid ${f.color}25`,
                }}
              >
                {f.icon}
              </div>
              <span
                className="text-[10px] font-mono px-3 py-1 rounded-full tracking-wider"
                style={{
                  color: f.color,
                  backgroundColor: `${f.color}12`,
                }}
              >
                {f.stats}
              </span>
            </div>
            <h3 className="text-xl font-heading font-semibold text-white mb-3">
              {f.title}
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Behavioral Analysis box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45 }}
        className="mt-8 glass-card p-6 border-l-4 border-l-brand-400"
      >
        <h4 className="text-lg font-heading font-semibold text-white mb-2">
          Behavioral Analysis Fusion
        </h4>
        <p className="text-sm text-white/70 leading-relaxed">
          All proctoring signals are aggregated into a weighted anomaly scorer.
          DeepSeek provides a natural-language proctoring summary in the final
          report, combining gaze patterns, device detections, tab-switch
          frequency, and multi-person occurrences into a single integrity
          assessment with severity ratings.
        </p>
      </motion.div>
    </SectionWrapper>
  )
}
