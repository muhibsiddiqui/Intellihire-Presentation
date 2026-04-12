import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'

const backendTech = [
  { name: 'Python / Flask 3.0', desc: 'REST API + WebSocket server', color: '#3776AB' },
  { name: 'DeepSeek API', desc: 'LLM engine — Q&A generation, evaluation, scoring', color: '#4A90D9' },
  { name: 'LangChain', desc: 'AI orchestration & RAG pipeline management', color: '#00A67E' },
  { name: 'ChromaDB', desc: 'Vector store for CV & JD embeddings', color: '#FF6B6B' },
  { name: 'YOLOv8', desc: 'Object detection for proctoring (mobile, person)', color: '#FF9900' },
  { name: 'MySQL', desc: 'Primary relational database (SQLAlchemy ORM)', color: '#4479A1' },
  { name: 'MediaPipe + OpenCV', desc: 'Gaze tracking & facial landmark detection', color: '#0097A7' },
  { name: 'SpeechRecognition + gTTS', desc: 'STT/TTS pipeline for voice interviews', color: '#34A853' },
]

const frontendTech = [
  { name: 'React 19', desc: 'Modern UI library with hooks & context', color: '#61DAFB' },
  { name: 'TypeScript', desc: 'Type-safe frontend development', color: '#3178C6' },
  { name: 'Material UI (MUI)', desc: 'Component library & theming system', color: '#007FFF' },
  { name: 'Socket.IO Client', desc: 'Real-time WebSocket communication', color: '#25c2a0' },
  { name: 'WebRTC', desc: 'Browser-based video & audio capture', color: '#f06292' },
  { name: 'Recharts', desc: 'Data visualization & analytics charts', color: '#FF6B6B' },
  { name: 'Axios', desc: 'HTTP client for REST API integration', color: '#5A29E4' },
  { name: 'React Router v6', desc: 'Client-side routing & navigation', color: '#CA4245' },
]

function TechItem({
  tech,
  index,
}: {
  tech: { name: string; desc: string; color: string }
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.35 }}
      className="flex items-center gap-4 p-4 rounded-xl bg-navy-700/30 border border-navy-500/20 hover:border-brand-400/30 transition-all duration-300 group"
    >
      <div
        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
        style={{
          backgroundColor: tech.color,
          boxShadow: `0 0 12px ${tech.color}40`,
        }}
      />
      <div className="min-w-0">
        <div className="text-sm font-heading font-semibold text-white group-hover:text-brand-300 transition-colors truncate">
          {tech.name}
        </div>
        <div className="text-xs text-white/65 truncate">{tech.desc}</div>
      </div>
    </motion.div>
  )
}

export default function TechStack() {
  return (
    <SectionWrapper
      id="tech-stack"
      badge="Technical Implementation"
      title="Technology Stack"
      subtitle="Production-grade technologies powering every layer of the platform"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 flex-1">
        {/* Backend */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-10 rounded-lg bg-brand-400/10 border border-brand-400/20 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="3" y="3" width="14" height="14" rx="2" stroke="#2f97f7" strokeWidth="1.5" />
                <path d="M7 7H13M7 10H11M7 13H9" stroke="#2f97f7" strokeWidth="1" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-2xl font-heading font-bold text-white">Backend</h3>
            <span className="text-xs font-mono text-white/55 ml-auto">Python Ecosystem</span>
          </motion.div>
          <div className="grid gap-2.5">
            {backendTech.map((tech, i) => (
              <TechItem key={tech.name} tech={tech} index={i} />
            ))}
          </div>
        </div>

        {/* Frontend */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 5L10 2L17 5V15L10 18L3 15V5Z" stroke="#00d4ff" strokeWidth="1.5" />
                <path d="M3 5L10 8L17 5" stroke="#00d4ff" strokeWidth="1" />
                <path d="M10 8V18" stroke="#00d4ff" strokeWidth="1" />
              </svg>
            </div>
            <h3 className="text-2xl font-heading font-bold text-white">Frontend</h3>
            <span className="text-xs font-mono text-white/55 ml-auto">React Ecosystem</span>
          </motion.div>
          <div className="grid gap-2.5">
            {frontendTech.map((tech, i) => (
              <TechItem key={tech.name} tech={tech} index={i} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
