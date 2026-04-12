import { motion } from 'framer-motion'

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
}

export default function CodeBlock({ code, language = 'python', filename }: CodeBlockProps) {
  return (
    <motion.div
      className="rounded-xl overflow-hidden code-block glow-blue"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        {filename && (
          <span className="ml-3 text-xs text-white/40 font-mono">{filename}</span>
        )}
        <span className="ml-auto text-xs text-white/20 font-mono">{language}</span>
      </div>
      {/* Code body */}
      <pre className="p-5 overflow-x-auto text-[13px] leading-relaxed">
        <code dangerouslySetInnerHTML={{ __html: code }} />
      </pre>
    </motion.div>
  )
}
