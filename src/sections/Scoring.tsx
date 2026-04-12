import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import CodeBlock from '../components/CodeBlock'

const dimensions = [
  {
    name: 'Verbal Confidence',
    desc: 'Lexical hedging, filler-word density, assertiveness markers in speech',
    weight: 20,
    color: '#2f97f7',
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <path d="M10 1v18M6 5v10M14 5v10M2 8v4M18 8v4" stroke="#2f97f7" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Semantic Relevance',
    desc: 'Cosine similarity + DeepSeek judgment score against rubric expected answers',
    weight: 30,
    color: '#00d4ff',
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="#00d4ff" strokeWidth="1.5" />
        <circle cx="10" cy="10" r="4" stroke="#00d4ff" strokeWidth="1" />
        <circle cx="10" cy="10" r="1.5" fill="#00d4ff" />
      </svg>
    ),
  },
  {
    name: 'Sentiment Analysis',
    desc: 'Real-time sentiment via speech transcription and facial micro-expression timeline',
    weight: 15,
    color: '#10b981',
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="#10b981" strokeWidth="1.5" />
        <path d="M7 12s1.5 2 3 2 3-2 3-2" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="7" cy="8" r="1" fill="#10b981" />
        <circle cx="13" cy="8" r="1" fill="#10b981" />
      </svg>
    ),
  },
  {
    name: 'Proctoring Score',
    desc: 'Gaze tracking, mobile/person detection, tab monitoring aggregated anomaly score',
    weight: 15,
    color: '#f59e0b',
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <path d="M10 2l8 4v6l-8 4-8-4V6l8-4z" stroke="#f59e0b" strokeWidth="1.5" />
        <path d="M10 7v4l3 2" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'CV Relevance',
    desc: 'ATS scoring: skills match, experience, education, projects, certifications',
    weight: 20,
    color: '#a855f7',
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <path d="M12 2H6a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V6l-4-4z" stroke="#a855f7" strokeWidth="1.5" />
        <path d="M12 2v4h4" stroke="#a855f7" strokeWidth="1.5" />
      </svg>
    ),
  },
]

const scoringCode = `<span class="code-comment"># Multi-Modal Scoring Fusion via DeepSeek</span>
<span class="code-keyword">def</span> <span class="code-function">generate_candidate_report</span>(interview_data):
    <span class="code-comment"># Parallel DeepSeek calls for rich report generation</span>
    scores = {
        <span class="code-string">"verbal_confidence"</span>: analyze_verbal(interview_data.transcript),
        <span class="code-string">"semantic_relevance"</span>: evaluate_answers(interview_data.qa_pairs),
        <span class="code-string">"sentiment"</span>: analyze_sentiment(interview_data.audio_text),
        <span class="code-string">"proctoring"</span>: aggregate_flags(interview_data.monitoring),
        <span class="code-string">"cv_match"</span>: score_cv_relevance(interview_data.cv, job_desc)
    }

    <span class="code-comment"># LLM Transformer fusion — all signals into one assessment</span>
    report = deepseek_client.chat.completions.create(
        model=<span class="code-string">"deepseek-chat"</span>,
        messages=[
            {<span class="code-string">"role"</span>: <span class="code-string">"system"</span>, <span class="code-string">"content"</span>: REPORT_SYSTEM_PROMPT},
            {<span class="code-string">"role"</span>: <span class="code-string">"user"</span>,   <span class="code-string">"content"</span>: build_report_payload(scores)}
        ],
        temperature=<span class="code-number">0.2</span>  <span class="code-comment"># Low for consistent scoring</span>
    )
    <span class="code-keyword">return</span> parse_structured_report(report)  <span class="code-comment"># → JSON</span>`

const reportIncludes = [
  'Per-category scores with AI reasoning & justifications',
  'Full interview transcript with timestamps',
  'Proctoring event summary & integrity score',
  'CV analysis & 5-dimension ATS assessment',
  'Personalized improvement suggestions',
  'Related job recommendations via platform listings',
]

export default function Scoring() {
  return (
    <SectionWrapper
      id="scoring"
      badge="Evaluation Engine"
      title="Scoring & Report Generation"
      subtitle="Multi-dimensional AI-powered candidate evaluation with weighted fusion scoring"
      dark
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 flex-1">
        {/* Left — Scoring dimensions */}
        <div>
          <h3 className="text-xl font-heading font-semibold text-white mb-6">
            Scoring Dimensions
          </h3>

          <div className="space-y-3">
            {dimensions.map((dim, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="glass-card p-4 flex items-center gap-4 group hover:border-brand-400/25 transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${dim.color}12` }}
                >
                  {dim.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-heading font-semibold text-white">
                      {dim.name}
                    </span>
                    <span
                      className="text-[10px] font-mono px-2 py-0.5 rounded"
                      style={{
                        color: dim.color,
                        backgroundColor: `${dim.color}12`,
                      }}
                    >
                      {dim.weight}%
                    </span>
                  </div>
                  <p className="text-lg text-white/80">{dim.desc}</p>
                  {/* Weight bar */}
                  <div className="mt-2 h-1 bg-navy-600 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: dim.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${dim.weight}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 + 0.3, duration: 0.6 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fusion callout */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-6 p-5 rounded-xl border border-brand-400/20 bg-brand-400/[0.04]"
          >
            <div className="text-center">
              <div className="text-[10px] font-mono text-brand-400 tracking-[0.2em] mb-1.5">
                ALL SIGNALS CONVERGE
              </div>
              <div className="text-sm text-white/70">→ DeepSeek LLM Transformer →</div>
              <div className="text-base font-heading font-bold gradient-text mt-1">
                Weighted Aggregate Score + Narrative Summary
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right — Code & report list */}
        <div>
          <h3 className="text-xl font-heading font-semibold text-white mb-6">
            Report Generation Engine
          </h3>
          <CodeBlock
            code={scoringCode}
            language="python"
            filename="services/report_generation_service.py"
          />

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 space-y-2.5"
          >
            <h4 className="text-sm font-heading font-semibold text-white mb-3">
              Report Includes:
            </h4>
            {reportIncludes.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 text-sm text-white/70">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                  <path d="M3 7l3 3 5-6" stroke="#2f97f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
