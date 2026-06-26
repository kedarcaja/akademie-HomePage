import { useState } from 'react'
import OverviewPage from './pages/OverviewPage'
import CampusPage from './pages/CampusPage'
import WebsitePage from './pages/WebsitePage'
import FunnelsPage from './pages/FunnelsPage'
import MembershipPage from './pages/MembershipPage'
import AchievementsPage from './pages/AchievementsPage'
import SystemePage from './pages/SystemePage'
import AssetsPage from './pages/AssetsPage'
import BestiaryPage from './pages/BestiaryPage'

const tabs = [
  { id: 'overview', label: 'Přehled', icon: '🐉' },
  { id: 'campus', label: 'Kampus', icon: '🗺️' },
  { id: 'website', label: 'Veřejný web', icon: '🌐' },
  { id: 'funnels', label: 'Funnely', icon: '🎯' },
  { id: 'membership', label: 'Členství', icon: '🎓' },
  { id: 'achievements', label: 'Achievementy', icon: '🏆' },
  { id: 'systeme', label: 'Systeme.io', icon: '⚙️' },
  { id: 'assets', label: 'Assety', icon: '🖼️' },
  { id: 'bestiary', label: 'Bestiář', icon: '📖' },
]

const pages = {
  overview: OverviewPage,
  campus: CampusPage,
  website: WebsitePage,
  funnels: FunnelsPage,
  membership: MembershipPage,
  achievements: AchievementsPage,
  systeme: SystemePage,
  assets: AssetsPage,
  bestiary: BestiaryPage,
}

export default function App() {
  const [activeTab, setActiveTab] = useState('overview')
  const ActivePage = pages[activeTab]

  return (
    <div className="min-h-screen bg-brand-dark text-brand-text">
      {/* Top bar */}
      <div className="border-b border-brand-border bg-[#080E18] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 py-3 border-b border-brand-border/50">
            <span className="text-xl">🐉</span>
            <span className="font-cinzel text-brand-gold font-bold text-sm tracking-wider">
              Dračí akademie
            </span>
            <span className="text-brand-text-dim text-xs ml-2">
              – plánovací dashboard (interní)
            </span>
          </div>

          {/* Tab navigation */}
          <div className="flex gap-1 overflow-x-auto py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-md whitespace-nowrap transition-colors flex-shrink-0 ${
                  activeTab === tab.id
                    ? 'bg-brand-gold/15 text-brand-gold border border-brand-gold/40'
                    : 'text-brand-text-muted hover:text-brand-parchment hover:bg-brand-card border border-transparent'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <ActivePage />
      </main>

      {/* Footer */}
      <footer className="border-t border-brand-border mt-12 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-brand-text-dim">
          Dračí akademie – interní plánovací nástěnka · Valiente Project · Finální produkt: Systeme.io
        </div>
      </footer>
    </div>
  )
}
