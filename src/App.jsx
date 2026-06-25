import Header from './components/Header'
import Hero from './components/Hero'
import CampusMap from './components/CampusMap'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import Community from './components/Community'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-text overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <CampusMap />
        <About />
        <HowItWorks />
        <Community />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
