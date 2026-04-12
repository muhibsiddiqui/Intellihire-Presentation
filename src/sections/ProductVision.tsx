import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'

const pillars = [
  {
    label: 'TARGET MARKET',
    text: 'Companies conducting high-volume candidate screening who need to scale hiring without scaling HR teams.',
  },
  {
    label: 'BUSINESS MODEL',
    text: 'Subscription-based SaaS, tiered by interviews per month. Manual onboarding initially, automation as client base grows.',
  },
  {
    label: 'GO-TO-MARKET',
    text: 'Landing page → Lead capture → Manual outreach → Onboarding → Automated email sequences → Self-serve dashboard.',
  },
]

const journeySteps = [
  { label: 'Idea', desc: 'Problem identified', icon: '💡' },
  { label: 'FYP', desc: 'Built the prototype', icon: '🎓' },
  { label: 'Product', desc: 'Full SaaS architecture', icon: '🚀' },
  { label: 'Scale', desc: 'Deploy & grow', icon: '📈' },
]

export default function ProductVision() {
  return (
    <SectionWrapper
      id="product-vision"
      badge="The Journey Ahead"
      title="Product Vision"
      subtitle="Transforming IntelliHire from a Final Year Project into a commercially viable SaaS product"
      dark
    >
      <div className="flex-1 space-y-14">
        {/* Journey timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-0 flex-wrap"
        >
          {journeySteps.map((step, i) => (
            <div key={i} className="flex items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center gap-2 px-6"
              >
                <div className="text-3xl">{step.icon}</div>
                <div className="text-sm font-heading font-bold text-white">
                  {step.label}
                </div>
                <div className="text-base text-white/80">{step.desc}</div>
              </motion.div>
              {i < journeySteps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.1 }}
                  className="w-12 h-px bg-gradient-to-r from-brand-400/50 to-brand-400/10 hidden sm:block"
                />
              )}
            </div>
          ))}
        </motion.div>

        {/* Strategy pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 border-l-4 border-l-brand-400"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <div key={i}>
                <div className="text-xs font-mono text-brand-400 tracking-[0.2em] mb-2">
                  {p.label}
                </div>
                <p className="text-lg text-white/85 leading-relaxed">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
