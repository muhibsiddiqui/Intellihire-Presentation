import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'

const bullets = [
  {
    heading: 'The AI Shift in HR',
    text: 'With the rapid advancement of Artificial Intelligence, organizations are increasingly adopting intelligent systems to improve efficiency, automate repetitive tasks, and support better decision-making in recruitment.',
    color: '#2f97f7',
  },
  {
    heading: 'What IntelliHire Does',
    text: 'IntelliHire is an AI-powered HR platform that automates candidate screening through voice-based AI interviews, real-time proctoring, multi-modal behavioral analysis, and structured evaluation report generation.',
    color: '#00d4ff',
  },
  {
    heading: 'Core Evaluation Engine',
    text: 'The interview module analyzes candidate responses using sentiment analysis, behavioral assessment, and AI-based reasoning to provide deeper insights into communication patterns, confidence levels, and role suitability.',
    color: '#a855f7',
  },
  {
    heading: 'System Architecture',
    text: 'Built on a modular architecture integrating Flask, React, JWT authentication, WebSocket communication, AI/ML frameworks, and cloud deployment — resulting in a scalable, production-ready platform.',
    color: '#10b981',
  },
]

export default function Introduction() {
  return (
    <SectionWrapper
      id="introduction"
      badge="Background"
      title="Introduction"
      subtitle="The context, motivation, and scope of the IntelliHire platform"
      dark
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1">
        {bullets.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card p-6 flex gap-4"
          >
            <div
              className="mt-1 w-3 h-3 rounded-full flex-shrink-0"
              style={{ background: item.color, boxShadow: `0 0 8px ${item.color}80` }}
            />
            <div>
              <h3
                className="text-base font-heading font-semibold mb-2"
                style={{ color: item.color }}
              >
                {item.heading}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Deployed callout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-8 flex items-center justify-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-400/10 to-cyan-400/8 border border-brand-400/20 w-fit mx-auto"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
        <p className="text-white/80 text-sm font-mono">
          Successfully deployed and live at{' '}
          <span className="text-brand-400 font-semibold">intellihire.com.pk</span>
          {' '}— Contabo VPS, Singapore
        </p>
      </motion.div>
    </SectionWrapper>
  )
}
