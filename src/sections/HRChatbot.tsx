import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'

const features = [
  {
    icon: '📁',
    title: 'Document Management',
    desc: 'Upload PDF, DOCX, TXT → auto-extract → semantic chunking → vector storage',
    color: '#2f97f7',
  },
  {
    icon: '🔍',
    title: 'RAG Retrieval',
    desc: 'Sentence Transformers (all-MiniLM-L6-v2) → ChromaDB similarity search → context injection',
    color: '#00d4ff',
  },
  {
    icon: '🤖',
    title: 'AI Response Generation',
    desc: 'Retrieved context + query → Gemini AI → cited, accurate answers',
    color: '#10b981',
  },
  {
    icon: '💬',
    title: 'Multi-Turn Conversations',
    desc: 'Session-based history tracking with intent classification and context awareness',
    color: '#a855f7',
  },
  {
    icon: '🔐',
    title: 'Role-Based Access',
    desc: 'Admin/HR can upload documents — all employees can query the knowledge base',
    color: '#f59e0b',
  },
]

export default function HRChatbot() {
  return (
    <SectionWrapper
      id="hr-chatbot"
      badge="Module 2 — HR Assistant"
      title="Intelligent HR Chatbot"
      subtitle="RAG-based document Q&A system that gives HR teams and employees instant access to company policies, procedures, and knowledge"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 flex-1 items-start">
        {/* Left — Feature cards */}
        <div className="space-y-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden group hover:translate-y-[-2px] transition-transform duration-300"
              style={{ border: `1px solid ${f.color}40` }}
            >
              <div
                className="absolute inset-0 opacity-20"
                style={{ background: `linear-gradient(135deg, ${f.color}15, transparent)` }}
              />
              <div className="relative p-5 flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ backgroundColor: `${f.color}18`, border: `1px solid ${f.color}35` }}
                >
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-white mb-1">
                    {f.title}
                  </h3>
                  <p className="text-base text-white/75 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right — Screenshot placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="sticky top-32"
        >
          <div className="rounded-2xl overflow-hidden border border-brand-400/30 bg-navy-800/50 backdrop-blur-sm">
            {/* Header bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-navy-900/60">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-3 text-xs font-mono text-brand-400/80">◆ HR Assistant</span>
            </div>

            {/* Screenshot area */}
            <div className="relative aspect-[4/3] bg-navy-950/80 flex items-center justify-center">
              <img
                src="/CHATBOT.jpeg"
                alt="HR Chatbot Screenshot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
