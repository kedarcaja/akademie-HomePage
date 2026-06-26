import { useState } from 'react'
import { bestiary } from '../data/bestiary'
import { monthlyThemes } from '../data/monthlyThemes'
import { targetBranches } from '../data/targetBranches'

const subTabs = [
  { id: 'bestiary', label: 'Bestiář technik', icon: '📖' },
  { id: 'themes', label: 'Měsíční témata', icon: '🗓️' },
  { id: 'branches', label: 'Cílové skupiny', icon: '👥' },
]

export default function BestiaryPage() {
  const [active, setActive] = useState('bestiary')

  return (
    <div className="space-y-6">
      <div className="border-b border-brand-border pb-4">
        <h1 className="font-cinzel text-2xl font-bold text-brand-parchment mb-1">
          📖 Bestiář, témata a skupiny
        </h1>
        <p className="text-brand-text-muted text-sm">
          Techniky, měsíční témata a cílové skupiny s doporučenými cestami.
        </p>
      </div>

      {/* Sub-tabs */}
      <div className="flex gap-2 flex-wrap">
        {subTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg border transition-colors ${
              active === tab.id
                ? 'bg-brand-gold/15 border-brand-gold/50 text-brand-gold'
                : 'bg-brand-card border-brand-border text-brand-text-muted hover:border-brand-gold/30'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Bestiary */}
      {active === 'bestiary' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {bestiary.map((b) => (
            <div key={b.id} className="bg-brand-card border border-brand-border rounded-lg p-4">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl">{b.icon}</span>
                <div>
                  <div className="text-brand-parchment font-semibold">{b.techniqueName}</div>
                  <div className="text-brand-gold text-xs">Tvor: {b.creatureName}</div>
                  <div className="text-brand-text-muted text-xs italic mt-0.5">„{b.shortMetaphor}"</div>
                </div>
              </div>
              <div className="space-y-2 text-xs">
                <div>
                  <div className="text-brand-text-dim uppercase tracking-widest mb-0.5">Jak to funguje</div>
                  <div className="text-brand-text-muted leading-relaxed">{b.practicalExplanation}</div>
                </div>
                <div>
                  <div className="text-brand-text-dim uppercase tracking-widest mb-0.5">Častá chyba</div>
                  <div className="text-red-400 leading-relaxed">{b.commonMistake}</div>
                </div>
                <div>
                  <div className="text-brand-text-dim uppercase tracking-widest mb-0.5">Tip pro začátečníka</div>
                  <div className="text-green-400 leading-relaxed">{b.beginnerTip}</div>
                </div>
                <div className="pt-2 border-t border-brand-border flex flex-wrap gap-1">
                  {b.relatedLessons.map((l, i) => (
                    <span key={i} className="bg-brand-dark border border-brand-border text-brand-text-dim px-2 py-0.5 rounded">
                      {l}
                    </span>
                  ))}
                  <span className="bg-brand-gold/10 border border-brand-gold/20 text-brand-gold px-2 py-0.5 rounded font-mono">
                    {b.relatedWorksheet}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Monthly themes */}
      {active === 'themes' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {monthlyThemes.map((theme) => (
            <div
              key={theme.id}
              className="bg-brand-card border border-brand-border rounded-lg overflow-hidden"
              style={{ borderTopColor: theme.mainColor, borderTopWidth: 2 }}
            >
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{theme.icon}</span>
                  <div className="text-brand-parchment font-semibold">{theme.title}</div>
                </div>
                <div className="text-brand-text-muted text-xs mb-3 leading-relaxed">{theme.description}</div>
                <div className="space-y-2 text-xs">
                  <div>
                    <div className="text-brand-text-dim uppercase tracking-widest mb-0.5">Mindset</div>
                    <div className="text-brand-text-muted italic">„{theme.mindsetFocus}"</div>
                  </div>
                  <div>
                    <div className="text-brand-text-dim uppercase tracking-widest mb-0.5">Malování</div>
                    <div className="text-brand-text-muted">{theme.paintingFocus}</div>
                  </div>
                  <div>
                    <div className="text-brand-text-dim uppercase tracking-widest mb-0.5">Výzva</div>
                    <div className="text-brand-text-muted">{theme.challenge}</div>
                  </div>
                  <div>
                    <div className="text-brand-text-dim uppercase tracking-widest mb-0.5">Podcast</div>
                    <div className="text-brand-text-muted">{theme.podcastTopic}</div>
                  </div>
                  <div>
                    <div className="text-brand-text-dim uppercase tracking-widest mb-0.5">Komunitní akce</div>
                    <div className="text-brand-text-muted">{theme.communityEvent}</div>
                  </div>
                  <div className="pt-2 border-t border-brand-border">
                    <div className="text-brand-text-dim mb-1">Modely:</div>
                    <div className="flex flex-wrap gap-1">
                      {theme.suggestedModels.map((m, i) => (
                        <span key={i} className="bg-brand-dark border border-brand-border text-brand-text-dim px-2 py-0.5 rounded">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Target branches */}
      {active === 'branches' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {targetBranches.map((branch) => (
            <div key={branch.id} className="bg-brand-card border border-brand-border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{branch.icon}</span>
                <div className="text-brand-parchment font-semibold">{branch.title}</div>
              </div>
              <div className="text-brand-text-muted text-xs mb-2 leading-relaxed">{branch.description}</div>
              <div className="space-y-2 text-xs">
                <div>
                  <div className="text-brand-text-dim uppercase tracking-widest mb-0.5">Potřeba</div>
                  <div className="text-brand-text-muted">{branch.audienceNeed}</div>
                </div>
                <div>
                  <div className="text-brand-text-dim uppercase tracking-widest mb-0.5">Náš slib</div>
                  <div className="text-brand-gold italic">„{branch.promise}"</div>
                </div>
                <div>
                  <div className="text-brand-text-dim uppercase tracking-widest mb-0.5">Doporučený start</div>
                  <div className="text-green-400">{branch.recommendedStart}</div>
                </div>
                <div className="pt-2 border-t border-brand-border flex flex-wrap gap-1">
                  <span className="bg-brand-dark border border-brand-border text-brand-text-dim px-2 py-0.5 rounded font-mono">
                    {branch.relatedPage}
                  </span>
                  <span className="bg-brand-gold/10 border border-brand-gold/20 text-brand-gold px-2 py-0.5 rounded">
                    {branch.membershipSection}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
