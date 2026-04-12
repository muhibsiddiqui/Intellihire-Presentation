import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'

const layers = [
  {
    num: '01',
    title: 'Public Marketing Surface',
    color: '#2f97f7',
    icon: '🌐',
    items: ['Product showcase & pricing tiers', 'FAQ, legal pages & SEO optimization'],
  },
  {
    num: '02',
    title: 'Client Onboarding Pipeline',
    color: '#00d4ff',
    icon: '🚀',
    items: ['3-step flow: plan → capture → confirm', 'Automated email sequences & lead tracking'],
  },
  {
    num: '03',
    title: 'HR Client Dashboard',
    color: '#10b981',
    icon: '🏢',
    items: ['Quota tracking & interview management', 'Candidate reports — PDF, CSV, ZIP export'],
  },
  {
    num: '04',
    title: 'Candidate Portal',
    color: '#f59e0b',
    icon: '👤',
    items: ['Smart slot booking & pre-interview checks', 'Results, feedback & improvement plans'],
  },
  {
    num: '05',
    title: 'Admin Panel',
    color: '#a855f7',
    icon: '⚙️',
    items: ['Client management & revenue KPIs', 'Server health, audit logs & SOS controls'],
  },
  {
    num: '06',
    title: 'Backend Infrastructure',
    color: '#ef4444',
    icon: '🛡️',
    items: ['Rate limiting, backups & retry logic', 'GDPR/PDPA compliant data handling'],
  },
]

export default function PlatformLayers() {
  return (
    <SectionWrapper
      id="platform-layers"
      badge="Product Architecture"
      title="Platform Layers"
      subtitle="Six distinct layers powering the complete IntelliHire experience"
    >
      {/* Hexagon-style grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {layers.map((layer, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ delay: i * 0.07, duration: 0.4 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="relative group rounded-2xl p-5 flex flex-col gap-3 overflow-hidden cursor-default"
            style={{
              background: 'rgba(10,18,35,0.7)',
              border: `1px solid ${layer.color}30`,
            }}
          >
            {/* Glow corner */}
            <div
              className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl opacity-20 group-hover:opacity-35 transition-opacity"
              style={{ backgroundColor: layer.color }}
            />

            {/* Header */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                style={{ backgroundColor: `${layer.color}18`, border: `1px solid ${layer.color}35` }}
              >
                {layer.icon}
              </div>
              <div>
                <div className="text-xs font-mono tracking-[0.18em] mb-0.5" style={{ color: layer.color }}>
                  LAYER {layer.num}
                </div>
                <h3 className="text-base font-heading font-semibold text-white leading-tight">
                  {layer.title}
                </h3>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full" style={{ backgroundColor: `${layer.color}20` }} />

            {/* Items */}
            <ul className="space-y-2">
              {layer.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-white/75 leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: layer.color }} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Scheduling highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-6 rounded-2xl p-5 flex gap-4 items-start"
        style={{ background: 'rgba(0,212,255,0.05)', border: '1px solid rgba(0,212,255,0.2)' }}
      >
        <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/25 flex items-center justify-center flex-shrink-0 text-lg">
          🗓️
        </div>
        <div>
          <h4 className="text-sm font-heading font-semibold text-white mb-1">
            Smart Scheduling — Key Innovation
          </h4>
          <p className="text-xs text-white/65 leading-relaxed">
            Controls concurrent interview slots (default 3), auto-generates 9am–6pm time windows,
            handles no-shows, and sends 1-hour reminder emails — all via APScheduler background jobs with zero manual intervention.
          </p>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
