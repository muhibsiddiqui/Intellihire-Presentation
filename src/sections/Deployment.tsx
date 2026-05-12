import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'

export default function Deployment() {
  return (
    <SectionWrapper
      id="deployment"
      badge="Infrastructure"
      title="Deployment Architecture"
      subtitle="Live production infrastructure running on Contabo VPS and serving IntelliHire at intellihire.com.pk"
      dark
    >
      <div className="flex-1 space-y-10">
        {/* Infra diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-4xl mx-auto"
        >
          <svg viewBox="0 0 900 430" className="w-full h-auto" fill="none">
            {/* ── Top row: external services ── */}
            {[
              { x: 50, label: 'Vercel', sub: 'Landing Page + Marketing', color: '#2f97f7' },
              { x: 350, label: 'GitHub Actions', sub: 'CI/CD Pipeline', color: '#00d4ff' },
              { x: 650, label: 'Domain Routing', sub: 'intellihire.com.pk + Email', color: '#a855f7' },
            ].map((svc, i) => (
              <motion.g
                key={i}
                initial={{ opacity: 0, y: -16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <rect
                  x={svc.x}
                  y="20"
                  width="200"
                  height="70"
                  rx="10"
                  fill="#111b2e"
                  stroke={svc.color}
                  strokeWidth="1.5"
                />
                <text
                  x={svc.x + 100}
                  y="52"
                  textAnchor="middle"
                  fill={svc.color}
                  fontSize="13"
                  fontWeight="600"
                  fontFamily="Sora, sans-serif"
                >
                  {svc.label}
                </text>
                <text
                  x={svc.x + 100}
                  y="72"
                  textAnchor="middle"
                  fill="#b0c4de"
                  fontSize="11"
                  fontFamily="DM Sans, sans-serif"
                >
                  {svc.sub}
                </text>
              </motion.g>
            ))}

            {/* ── Connector ── */}
            <motion.path
              d="M450 90 V130"
              stroke="#00d4ff"
              strokeWidth="1.5"
              strokeDasharray="5 4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.4 }}
            />
            <text
              x="462"
              y="115"
              fill="#00d4ff"
              fontSize="9"
              fontFamily="JetBrains Mono, monospace"
              opacity="0.55"
            >
              CI/CD to live server
            </text>

            {/* ── VPS box ── */}
            <motion.g
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <rect
                x="70"
                y="130"
                width="760"
                height="265"
                rx="14"
                fill="#0a0f1d"
                stroke="#2f97f7"
                strokeWidth="2"
              />
              <text
                x="450"
                y="158"
                textAnchor="middle"
                fill="#2f97f7"
                fontSize="14"
                fontWeight="700"
                fontFamily="Sora, sans-serif"
              >
                Contabo Cloud VPS 20 — Singapore Region
              </text>
              <text
                x="450"
                y="176"
                textAnchor="middle"
                fill="#94a3b8"
                fontSize="11"
                fontFamily="JetBrains Mono, monospace"
              >
                4 vCPU · 8 GB RAM · 200 GB NVMe · ≈$6-8/mo
              </text>

              {/* Row 1 */}
              {[
                { x: 100, label: 'Nginx', sub: 'Reverse Proxy', color: '#2f97f7' },
                { x: 310, label: 'Flask + PM2', sub: 'API Server (24/7)', color: '#00d4ff' },
                { x: 520, label: 'MySQL', sub: 'Database', color: '#f59e0b' },
                { x: 680, label: 'React Build', sub: 'Static Assets', color: '#10b981' },
              ].map((b, i) => (
                <g key={`r1-${i}`}>
                  <rect
                    x={b.x}
                    y={195}
                    width={150}
                    height={50}
                    rx="8"
                    fill="#1e2d4a"
                    stroke={b.color}
                    strokeWidth="0.5"
                  />
                  <text
                    x={b.x + 75}
                    y={216}
                    textAnchor="middle"
                    fill={b.color}
                    fontSize="12"
                    fontWeight="500"
                    fontFamily="Sora, sans-serif"
                  >
                    {b.label}
                  </text>
                  <text
                    x={b.x + 75}
                    y={234}
                    textAnchor="middle"
                    fill="#94a3b8"
                    fontSize="11"
                    fontFamily="DM Sans, sans-serif"
                  >
                    {b.sub}
                  </text>
                </g>
              ))}

              {/* Row 2 */}
              {[
                { x: 100, label: 'YOLOv8 + AI', sub: 'ML Inference', color: '#ef4444' },
                { x: 310, label: 'APScheduler', sub: 'Email Automation', color: '#a855f7' },
                {
                  x: 520,
                  label: 'Netdata + UptimeRobot',
                  sub: 'Monitoring & Alerts',
                  color: '#10b981',
                  wide: true,
                },
              ].map((b, i) => (
                <g key={`r2-${i}`}>
                  <rect
                    x={b.x}
                    y={260}
                    width={b.wide ? 310 : 190}
                    height={50}
                    rx="8"
                    fill="#1e2d4a"
                    stroke={b.color}
                    strokeWidth="0.5"
                  />
                  <text
                    x={b.x + (b.wide ? 155 : 95)}
                    y={281}
                    textAnchor="middle"
                    fill={b.color}
                    fontSize="12"
                    fontWeight="500"
                    fontFamily="Sora, sans-serif"
                  >
                    {b.label}
                  </text>
                  <text
                    x={b.x + (b.wide ? 155 : 95)}
                    y={299}
                    textAnchor="middle"
                    fill="#94a3b8"
                    fontSize="11"
                    fontFamily="DM Sans, sans-serif"
                  >
                    {b.sub}
                  </text>
                </g>
              ))}

              {/* ChromaDB */}
              <rect x="100" y="325" width="150" height="50" rx="8" fill="#1e2d4a" stroke="#FF6B6B" strokeWidth="0.5" />
              <text x="175" y="346" textAnchor="middle" fill="#FF6B6B" fontSize="12" fontWeight="500" fontFamily="Sora, sans-serif">ChromaDB</text>
              <text x="175" y="364" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="DM Sans, sans-serif">Vector Store</text>

              {/* DeepSeek API (external) */}
              <rect x="310" y="325" width="190" height="50" rx="8" fill="#1e2d4a" stroke="#4A90D9" strokeWidth="0.5" />
              <text x="405" y="346" textAnchor="middle" fill="#4A90D9" fontSize="12" fontWeight="500" fontFamily="Sora, sans-serif">DeepSeek API</text>
              <text x="405" y="364" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="DM Sans, sans-serif">External LLM Service</text>

              {/* SMTP */}
              <rect x="560" y="325" width="150" height="50" rx="8" fill="#1e2d4a" stroke="#00d4ff" strokeWidth="0.5" />
              <text x="635" y="346" textAnchor="middle" fill="#00d4ff" fontSize="12" fontWeight="500" fontFamily="Sora, sans-serif">SMTP</text>
              <text x="635" y="364" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="DM Sans, sans-serif">Email Service</text>
            </motion.g>
          </svg>
        </motion.div>

        {/* Key facts */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              title: 'Live URL',
              value: 'intellihire.com.pk',
              desc: 'Production deployment is active and publicly accessible through the custom domain',
            },
            {
              title: 'Uptime Monitoring',
              value: '5 min alert',
              desc: 'UptimeRobot pings every 5 minutes with instant email alerts on downtime',
            },
            {
              title: 'Auto Recovery',
              value: 'PM2 managed',
              desc: 'Auto-restart on crash, survives server reboots, zero-downtime restarts',
            },
          ].map((fact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-5 text-center"
            >
              <div className="text-xl font-heading font-bold text-brand-400 mb-1">
                {fact.value}
              </div>
              <div className="text-sm font-heading font-semibold text-white mb-1">
                {fact.title}
              </div>
              <div className="text-sm text-white/70">{fact.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
