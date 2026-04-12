import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import CodeBlock from '../components/CodeBlock'

const steps = [
  {
    num: '01',
    title: 'Interviewer Setup',
    desc: 'HR defines job description, custom scoring weights, evaluation criteria, interview duration, must-ask questions, and behavioral constraints.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 21C3 17.134 7.03 14 12 14C16.97 14 21 17.134 21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    color: '#2f97f7',
  },
  {
    num: '02',
    title: 'CV Upload & RAG Processing',
    desc: 'Candidate uploads CV → text extraction → Sentence Transformer embeddings → stored in ChromaDB → semantic matching against job description to identify skill alignment.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 18v-6m0 0l-3 3m3-3l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    color: '#00d4ff',
  },
  {
    num: '03',
    title: 'Dynamic Question Generation',
    desc: 'DeepSeek generates tailored questions based on CV-JD match scores, interviewer parameters, role requirements, and must-ask constraints — all via RAG pipeline.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 9a3 3 0 115 2c0 2-3 2-3 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="18" r="0.5" fill="currentColor" />
      </svg>
    ),
    color: '#58acee',
  },
  {
    num: '04',
    title: 'Live AI Interview',
    desc: 'Real-time conversational interview via Speech-to-Text and Text-to-Speech with WebSocket communication. Sub-200ms audio segmentation. Multi-turn dialogue with sliding context window.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 10v2a7 7 0 0014 0v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 19v4m-4 0h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    color: '#2f97f7',
  },
  {
    num: '05',
    title: 'Real-time Monitoring',
    desc: 'YOLOv8 detects multiple persons & mobile phones per frame. MediaPipe tracks gaze direction. Browser Visibility API monitors tab switches. All flags timestamped and logged.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    color: '#f59e0b',
  },
  {
    num: '06',
    title: 'Sentiment & Follow-up',
    desc: 'Real-time sentiment analysis on transcribed speech. RAG generates dynamic follow-up questions based on candidate responses, CV context, and JD requirements — in real-time during the interview.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 10h8M8 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    color: '#10b981',
  },
  {
    num: '07',
    title: 'LLM Scoring Fusion',
    desc: 'All signals merged through DeepSeek Transformer: sentiment scores + proctoring flags + answer evaluations + CV relevance → weighted aggregate score with narrative reasoning.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 8l5 3v6l-5 3-5-3v-6l5-3z" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <circle cx="12" cy="14" r="2" fill="currentColor" opacity="0.6" />
      </svg>
    ),
    color: '#a855f7',
  },
  {
    num: '08',
    title: 'Report Generation',
    desc: 'Comprehensive candidate report: per-category scores, AI reasoning, proctoring summary, full transcript, CV analysis, improvement suggestions — generated via 4 parallel DeepSeek calls.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 13h8M8 17h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    color: '#2f97f7',
  },
  {
    num: '09',
    title: 'Candidate Feedback',
    desc: 'Candidates receive personalized improvement plans, skill gap analysis, and relevant job recommendations from IntelliHire platform listings and beyond.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 4L12 14.01 9 11.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: '#10b981',
  },
]

const ragCode = `<span class="code-comment"># RAG-powered Question Generation Pipeline</span>
<span class="code-keyword">def</span> <span class="code-function">generate_interview_questions</span>(cv_text, job_description, params):
    <span class="code-comment"># 1. Embed CV and JD into vector space</span>
    cv_chunks = chunk_text(cv_text, chunk_size=<span class="code-number">500</span>)
    cv_embeddings = sentence_transformer.encode(cv_chunks)
    jd_embedding  = sentence_transformer.encode(job_description)

    <span class="code-comment"># 2. Store in ChromaDB and retrieve matched segments</span>
    collection.add(documents=cv_chunks, embeddings=cv_embeddings)
    matched = collection.query(query_embeddings=[jd_embedding], n_results=<span class="code-number">5</span>)

    <span class="code-comment"># 3. Build context-aware prompt for DeepSeek</span>
    prompt = build_prompt(
        matched_cv_segments=matched,
        job_description=job_description,
        scoring_weights=params.scoring_weights,
        must_ask=params.must_ask_questions
    )

    <span class="code-comment"># 4. Generate tailored questions via DeepSeek</span>
    response = deepseek_client.chat.completions.create(
        model=<span class="code-string">"deepseek-chat"</span>,
        messages=[
            {<span class="code-string">"role"</span>: <span class="code-string">"system"</span>, <span class="code-string">"content"</span>: INTERVIEW_SYSTEM_PROMPT},
            {<span class="code-string">"role"</span>: <span class="code-string">"user"</span>,   <span class="code-string">"content"</span>: prompt}
        ],
        temperature=<span class="code-number">0.3</span>
    )
    <span class="code-keyword">return</span> parse_questions(response)`

export default function InterviewFlow() {
  return (
    <SectionWrapper
      id="interview-flow"
      badge="Core Innovation"
      title="Interview Bot Pipeline"
      subtitle="End-to-end automated interview flow — from job setup to candidate report generation"
      dark
    >
      <div className="flex-1">
        {/* Flow timeline */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-[23px] top-4 bottom-4 w-px bg-gradient-to-b from-brand-400/40 via-brand-400/15 to-transparent hidden lg:block" />

          <div className="space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
                className="relative flex gap-5 items-start group"
              >
                {/* Step icon */}
                <div className="hidden lg:flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${step.color}12`,
                      borderColor: `${step.color}35`,
                      color: step.color,
                    }}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 glass-card p-5 hover:border-brand-400/25 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md font-semibold tracking-wider"
                      style={{
                        color: step.color,
                        backgroundColor: `${step.color}12`,
                      }}
                    >
                      STEP {step.num}
                    </span>
                    <h3 className="text-base font-heading font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Code example */}
        <div className="mt-14">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-400/20 to-transparent" />
            <span className="text-xs font-mono text-brand-400/60 tracking-widest">
              UNDER THE HOOD
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-400/20 to-transparent" />
          </motion.div>
          <CodeBlock
            code={ragCode}
            language="python"
            filename="services/interview_engine.py"
          />
        </div>
      </div>
    </SectionWrapper>
  )
}
