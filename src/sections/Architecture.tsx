import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'

/* Reusable animated SVG layer */
function Layer({
  y,
  delay,
  color,
  title,
  subtitle,
  children,
}: {
  y: number
  delay: number
  color: string
  title: string
  subtitle: string
  children?: React.ReactNode
}) {
  return (
    <motion.g
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <rect
        x="50"
        y={y}
        width="800"
        height={children ? 130 : 80}
        rx="12"
        fill="#111b2e"
        stroke={color}
        strokeWidth="1.5"
        opacity="0.85"
      />
      <text
        x="450"
        y={y + 28}
        textAnchor="middle"
        fill={color}
        fontSize="14"
        fontWeight="600"
        fontFamily="Sora, sans-serif"
      >
        {title}
      </text>
      <text
        x="450"
        y={y + 50}
        textAnchor="middle"
        fill="#b0c4de"
        fontSize="12"
        fontFamily="DM Sans, sans-serif"
      >
        {subtitle}
      </text>
      {children}
    </motion.g>
  )
}

function SubBox({
  x,
  y,
  label,
  color = '#2f97f7',
}: {
  x: number
  y: number
  label: string
  color?: string
}) {
  return (
    <>
      <rect
        x={x}
        y={y}
        width="220"
        height="36"
        rx="8"
        fill="#1e2d4a"
        stroke={color}
        strokeWidth="0.5"
      />
      <text
        x={x + 110}
        y={y + 22}
        textAnchor="middle"
        fill="#58acee"
        fontSize="11"
        fontFamily="DM Sans, sans-serif"
      >
        {label}
      </text>
    </>
  )
}

function Connector({ y1, y2, delay, color = '#2f97f7' }: { y1: number; y2: number; delay: number; color?: string }) {
  return (
    <motion.line
      x1="450"
      y1={y1}
      x2="450"
      y2={y2}
      stroke={color}
      strokeWidth="1.5"
      strokeDasharray="6 4"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    />
  )
}

export default function Architecture() {
  return (
    <SectionWrapper
      id="architecture"
      badge="System Design"
      title="Architecture Overview"
      subtitle="A four-layer architecture powering intelligent recruitment automation"
      dark
    >
      <div className="flex-1 flex items-center justify-center -mt-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-5xl"
        >
          <svg viewBox="0 0 900 560" className="w-full h-auto" fill="none">
            {/* Layer 1 — Frontend */}
            <Layer y={20} delay={0.15} color="#2f97f7" title="PRESENTATION LAYER" subtitle="React 19 · TypeScript · Material UI · Socket.IO Client · WebRTC">
              <text x="450" y={84} textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="DM Sans, sans-serif">
                Interview UI • HR Dashboard • Candidate Portal • Analytics Dashboard
              </text>
            </Layer>

            <Connector y1={105} y2={140} delay={0.3} />
            <text x="470" y={128} fill="#2f97f7" fontSize="9" fontFamily="JetBrains Mono, monospace" opacity="0.6">
              REST + WebSocket (Socket.IO)
            </text>

            {/* Layer 2 — Backend */}
            <Layer y={140} delay={0.3} color="#1a7ad8" title="APPLICATION LAYER" subtitle="Flask 3.0 · JWT Auth · SQLAlchemy ORM · Flask-CORS · Gunicorn">
              <SubBox x={80} y={210} label="Interview Engine" />
              <SubBox x={340} y={210} label="CV / HR Services" />
              <SubBox x={600} y={210} label="Proctoring Pipeline" />
            </Layer>

            <Connector y1={270} y2={305} delay={0.5} color="#1a7ad8" />

            {/* Layer 3 — AI/ML */}
            <Layer y={305} delay={0.5} color="#58acee" title="AI / ML LAYER" subtitle="">
              <text x="175" y={355} textAnchor="middle" fill="#58acee" fontSize="11" fontFamily="DM Sans, sans-serif">
                DeepSeek API → LangChain
              </text>
              <text x="450" y={355} textAnchor="middle" fill="#58acee" fontSize="11" fontFamily="DM Sans, sans-serif">
                ChromaDB (RAG)
              </text>
              <text x="725" y={355} textAnchor="middle" fill="#58acee" fontSize="11" fontFamily="DM Sans, sans-serif">
                YOLOv8 + MediaPipe
              </text>
              <text x="175" y={380} textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="DM Sans, sans-serif">
                STT / TTS · Embeddings
              </text>
              <text x="450" y={380} textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="DM Sans, sans-serif">
                Sentence Transformers
              </text>
              <text x="725" y={380} textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="DM Sans, sans-serif">
                OpenCV · Gaze Detection
              </text>
            </Layer>

            <Connector y1={435} y2={465} delay={0.7} color="#58acee" />

            {/* Layer 4 — Data */}
            <Layer y={465} delay={0.7} color="#0f4a88" title="DATA LAYER" subtitle="">
              <text x="300" y={515} textAnchor="middle" fill="#b0c4de" fontSize="13" fontFamily="DM Sans, sans-serif">
                MySQL (Relational)
              </text>
              <text x="600" y={515} textAnchor="middle" fill="#b0c4de" fontSize="13" fontFamily="DM Sans, sans-serif">
                ChromaDB (Vector Store)
              </text>
            </Layer>
          </svg>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
