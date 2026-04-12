import { motion } from 'framer-motion'
import { Brain } from 'lucide-react'

interface NavigationProps {
  sections: { id: string; label: string }[]
  activeSection: string
}

export default function Navigation({ sections, activeSection }: NavigationProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Side dot navigation — desktop */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-end gap-3">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="group flex items-center gap-3 py-1"
          >
            <span
              className={`text-[11px] font-mono tracking-wide transition-all duration-300 ${
                activeSection === id
                  ? 'opacity-100 text-brand-400 translate-x-0'
                  : 'opacity-0 group-hover:opacity-80 translate-x-2 group-hover:translate-x-0 text-white/70'
              }`}
            >
              {label}
            </span>
            <div className="relative flex items-center justify-center w-5 h-5">
              <div
                className={`rounded-full transition-all duration-300 ${
                  activeSection === id
                    ? 'w-3.5 h-3.5 bg-brand-400 shadow-[0_0_8px_2px_rgba(47,151,247,0.6)]'
                    : 'w-2 h-2 bg-white/30 group-hover:bg-brand-400/70 group-hover:w-2.5 group-hover:h-2.5'
                }`}
              />
              {activeSection === id && (
                <motion.div
                  layoutId="nav-glow"
                  className="absolute inset-0 rounded-full border-2 border-brand-400/60"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </div>
          </button>
        ))}
      </nav>

      {/* Top bar — always visible */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-navy-950/70 border-b border-navy-500/10">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-center">
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-3"
            aria-label="Scroll to IntelliHire home section"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-cyan-400 p-[1.5px]">
              <div className="w-full h-full rounded-[6px] bg-navy-950 flex items-center justify-center">
                <Brain size={16} className="text-brand-400" />
              </div>
            </div>
            <span className="text-base font-heading font-semibold text-white/85 tracking-[0.08em] uppercase">
              <span className="gradient-text">Intelli</span>Hire
            </span>
          </button>
        </div>
      </header>
    </>
  )
}
