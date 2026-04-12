import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionWrapperProps {
  id: string
  children: ReactNode
  className?: string
  badge?: string
  title?: string
  subtitle?: string
  dark?: boolean
}

export default function SectionWrapper({
  id,
  children,
  className = '',
  badge,
  title,
  subtitle,
  dark,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative min-h-screen flex flex-col ${dark ? 'bg-navy-950' : 'bg-navy-900'} ${className}`}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Gradient vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(47,151,247,0.04)_0%,transparent_50%)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-16 lg:pt-32 lg:pb-24 flex-1 flex flex-col">
        {(badge || title) && (
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            {badge && <div className="section-badge mb-4">{badge}</div>}
            {title && (
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-white">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-xl text-white/65 max-w-3xl font-body leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}
