import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'

const layers = [
  {
    title: 'PRESENTATION LAYER',
    tech: 'React 19 · TypeScript · Material UI · Socket.IO · WebRTC',
    color: '#2f97f7',
    gradient: 'from-[#2f97f7]/20 to-transparent',
    modules: ['Interview UI', 'HR Dashboard', 'Candidate Portal', 'Analytics'],
  },
  {
    title: 'APPLICATION LAYER',
    tech: 'Flask 3.0 · JWT Auth · SQLAlchemy · Flask-CORS · Gunicorn',
    color: '#00d4ff',
    gradient: 'from-[#00d4ff]/20 to-transparent',
    modules: ['Interview Engine', 'CV / HR Services', 'Proctoring Pipeline'],
  },
  {
    title: 'AI / ML LAYER',
    tech: 'DeepSeek · LangChain · ChromaDB · YOLOv8 · MediaPipe',
    color: '#a855f7',
    gradient: 'from-[#a855f7]/20 to-transparent',
    modules: ['STT / TTS', 'RAG + Embeddings', 'Gaze & Object Detection'],
  },
  {
    title: 'DATA LAYER',
    tech: 'MySQL (Relational) · ChromaDB (Vector Store)',
    color: '#10b981',
    gradient: 'from-[#10b981]/20 to-transparent',
    modules: ['User & Interview Data', 'Embeddings & Documents'],
  },
]

const connectorLabels = ['REST + WebSocket', 'LangChain / API Calls', 'ORM + Vector Queries']

export default function Architecture() {
  return (
    <SectionWrapper
      id="architecture"
      badge="System Design"
      title="Architecture Overview"
      subtitle="A four-layer architecture powering intelligent recruitment automation"
      dark
    >
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-4xl space-y-0">
          {layers.map((layer, i) => (
            <div key={i}>
              {/* Layer card */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative rounded-2xl overflow-hidden"
                style={{ border: `2px solid ${layer.color}60` }}
              >
                {/* Glow bg */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${layer.gradient} opacity-50`}
                />
                <div className="relative p-6 sm:p-8">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 mb-5">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-base font-bold font-mono"
                        style={{ backgroundColor: `${layer.color}25`, color: layer.color, border: `2px solid ${layer.color}60` }}
                      >
                        L{i + 1}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-heading font-bold tracking-wide" style={{ color: layer.color }}>
                        {layer.title}
                      </h3>
                    </div>
                    <div className="hidden sm:block h-px flex-1" style={{ backgroundColor: `${layer.color}30` }} />
                    <span className="text-xs sm:text-sm text-white/65 font-mono leading-tight">
                      {layer.tech}
                    </span>
                  </div>

                  {/* Module chips */}
                  <div className="flex flex-wrap gap-3">
                    {layer.modules.map((mod, j) => (
                      <motion.span
                        key={j}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + j * 0.06, duration: 0.3 }}
                        className="px-4 py-2 rounded-xl text-sm font-semibold"
                        style={{
                          backgroundColor: `${layer.color}18`,
                          color: layer.color,
                          border: `1px solid ${layer.color}45`,
                        }}
                      >
                        {mod}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Connector */}
              {i < layers.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.3, duration: 0.4 }}
                  className="flex flex-col items-center py-1"
                >
                  <div className="w-0.5 h-5" style={{ background: `linear-gradient(to bottom, ${layer.color}80, ${layers[i + 1].color}80)` }} />
                  <div
                    className="px-4 py-1.5 rounded-full text-xs font-mono font-medium"
                    style={{ color: layer.color, backgroundColor: `${layer.color}15`, border: `1px solid ${layer.color}35` }}
                  >
                    {connectorLabels[i]}
                  </div>
                  <div className="w-0.5 h-5" style={{ background: `linear-gradient(to bottom, ${layer.color}80, ${layers[i + 1].color}80)` }} />
                  <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
                    <path d="M1 1L7 7L13 1" stroke={layers[i + 1].color} strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
