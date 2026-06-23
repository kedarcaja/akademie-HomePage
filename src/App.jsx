import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import ForWho from './components/ForWho'
import Paths from './components/Paths'
import Skills from './components/Skills'
import HowItWorks from './components/HowItWorks'
import ForParents from './components/ForParents'
import Community from './components/Community'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-text overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <ForWho />
        <Paths />
        <Skills />
        <HowItWorks />
        <ForParents />
        <Community />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
