import { useEffect, useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './sections/Hero'
import Problem from './sections/Problem'
import Objectives from './sections/Objectives'
import Architecture from './sections/Architecture'
import TechStack from './sections/TechStack'
import InterviewFlow from './sections/InterviewFlow'
import Proctoring from './sections/Proctoring'
import Scoring from './sections/Scoring'
import Screenshots from './sections/Screenshots'
import HRChatbot from './sections/HRChatbot'
import CurrentStatus from './sections/CurrentStatus'
import ProductVision from './sections/ProductVision'
import PlatformLayers from './sections/PlatformLayers'
import Deployment from './sections/Deployment'
import Conclusion from './sections/Conclusion'

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'problem', label: 'Problem' },
  { id: 'objectives', label: 'Objectives' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'tech-stack', label: 'Tech Stack' },
  { id: 'interview-flow', label: 'Interview Flow' },
  { id: 'proctoring', label: 'Proctoring' },
  { id: 'scoring', label: 'Scoring' },
  { id: 'screenshots', label: 'Screenshots' },
  { id: 'hr-chatbot', label: 'HR Chatbot' },
  { id: 'current-status', label: 'Status' },
  { id: 'product-vision', label: 'Vision' },
  { id: 'platform-layers', label: 'Platform' },
  { id: 'deployment', label: 'Deployment' },
  { id: 'conclusion', label: 'Conclusion' },
]

export default function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.25 }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative">
      <Navigation sections={sections} activeSection={activeSection} />
      <main>
        <Hero />
        <Problem />
        <Objectives />
        <Architecture />
        <TechStack />
        <InterviewFlow />
        <Proctoring />
        <Scoring />
        <Screenshots />
        <HRChatbot />
        <CurrentStatus />
        <ProductVision />
        <PlatformLayers />
        <Deployment />
        <Conclusion />
      </main>
    </div>
  )
}
