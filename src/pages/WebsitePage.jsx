import { publicPages } from '../data/pages'
import { reductionChecks } from '../data/reductionChecks'

const checkTypeStyle = {
  remove: { bg: 'bg-red-900/20', border: 'border-red-700/40', text: 'text-red-400', label: '✕ Odebrat' },
  simplify: { bg: 'bg-yellow-900/20', border: 'border-yellow-700/40', text: 'text-yellow-400', label: '↓ Zjednodušit' },
  keep: { bg: 'bg-green-900/20', border: 'border-green-700/40', text: 'text-green-400', label: '✓ Ponechat' },
}

export default function WebsitePage() {
  return (
    <div className="space-y-8">
      <div className="border-b border-brand-border pb-4">
        <h1 className="font-cinzel text-2xl font-bold text-brand-parchment mb-1">
          🌐 Veřejný web – stránky
        </h1>
        <p className="text-brand-text-muted text-sm">
          8 stránek Systeme.io. Každá má jasný účel, CTA a pravidla pro zjednodušení.
        </p>
      </div>

      {/* Pages grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {publicPages.map((page) => (
          <div key={page.id} className="bg-brand-card border border-brand-border rounded-lg overflow-hidden">
            {/* Page header */}
            <div className="p-4 border-b border-brand-border flex items-center gap-3">
              <span className="text-2xl">{page.icon}</span>
              <div>
                <div className="text-brand-parchment font-semibold">{page.title}</div>
                <div className="text-brand-gold text-xs">{page.role}</div>
              </div>
              <span className="ml-auto text-xs text-brand-text-dim font-mono bg-brand-dark px-2 py-0.5 rounded">
                {page.url}
              </span>
            </div>

            <div className="p-4 space-y-3">
              {/* Purpose & audience */}
              <div>
                <div className="text-xs text-brand-text-dim uppercase tracking-widest mb-1">Účel</div>
                <div className="text-brand-text-muted text-sm">{page.purpose}</div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="text-xs text-brand-text-dim uppercase tracking-widest mb-1">Hlavní otázka</div>
                  <div className="text-brand-text-muted text-xs italic">„{page.mainQuestion}"</div>
                </div>
                <div>
                  <div className="text-xs text-brand-text-dim uppercase tracking-widest mb-1">Cílová skupina</div>
                  <div className="text-brand-text-muted text-xs">{page.audience}</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex gap-2 flex-wrap">
                <span className="bg-brand-gold/15 text-brand-gold border border-brand-gold/30 text-xs px-3 py-1 rounded-full">
                  ▶ {page.mainCTA}
                </span>
                <span className="bg-brand-dark border border-brand-border text-brand-text-muted text-xs px-3 py-1 rounded-full">
                  ◎ {page.secondaryCTA}
                </span>
              </div>

              {/* Sections */}
              <div>
                <div className="text-xs text-brand-text-dim uppercase tracking-widest mb-1">Sekce stránky</div>
                <div className="flex flex-wrap gap-1">
                  {page.sections.map((s, i) => (
                    <span key={i} className="text-xs bg-brand-dark border border-brand-border text-brand-text-muted px-2 py-0.5 rounded">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Remove/move */}
              <div>
                <div className="text-xs text-red-400 uppercase tracking-widest mb-1">Odebrat / přesunout</div>
                <div className="flex flex-wrap gap-1">
                  {page.removeOrMove.map((s, i) => (
                    <span key={i} className="text-xs bg-red-900/20 border border-red-700/30 text-red-400 px-2 py-0.5 rounded">
                      ✕ {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* KPI check */}
              <div className="pt-2 border-t border-brand-border">
                <span className="text-xs text-brand-text-dim uppercase tracking-widest">KPI check: </span>
                <span className="text-xs text-brand-text-muted">{page.kpiCheck}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Reduction checks */}
      <div>
        <h2 className="text-brand-gold font-semibold mb-4 text-sm uppercase tracking-widest">
          Pravidla zjednodušení – co patří kam
        </h2>
        <div className="space-y-4">
          {reductionChecks.map((rc) => (
            <div key={rc.page} className="bg-brand-card border border-brand-border rounded-lg p-4">
              <div className="text-brand-parchment font-semibold mb-3">{rc.page}</div>
              <div className="space-y-2">
                {rc.checks.map((check, i) => {
                  const style = checkTypeStyle[check.type]
                  return (
                    <div key={i} className={`flex gap-3 items-start p-2 rounded border ${style.bg} ${style.border}`}>
                      <span className={`text-xs font-semibold flex-shrink-0 ${style.text}`}>
                        {style.label}
                      </span>
                      <div>
                        <div className="text-brand-text-muted text-xs font-medium">{check.item}</div>
                        <div className="text-brand-text-dim text-xs mt-0.5">{check.reason}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
