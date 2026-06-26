import { campusBuildings } from '../data/campusBuildings'

const pageColors = {
  '/zacni-tady': '#4ade80',
  '/stezky': '#60a5fa',
  '/deti-a-rodice': '#f9a8d4',
  '/skoly': '#fbbf24',
  '/komunita': '#a78bfa',
  '/obchod': '#fb923c',
  '/o-nas': '#C9943A',
  '/kontakt': '#6ee7b7',
}

export default function CampusPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-brand-border pb-4">
        <h1 className="font-cinzel text-2xl font-bold text-brand-parchment mb-1">
          🗺️ Kampus – 17 budov
        </h1>
        <p className="text-brand-text-muted text-sm">
          Každá budova = disciplína nebo sekce. Mapuje se na Systeme.io stránku nebo kurz.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {campusBuildings.map((b) => (
          <div
            key={b.id}
            className="bg-brand-card border border-brand-border rounded-lg p-4 hover:border-brand-gold/40 transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="text-3xl flex-shrink-0">{b.icon}</div>
              <div className="min-w-0">
                <div className="text-brand-parchment font-semibold text-sm">{b.name}</div>
                <div className="text-brand-gold text-xs mt-0.5">{b.role}</div>
                <div className="text-brand-text-muted text-xs mt-1 leading-relaxed">{b.desc}</div>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-brand-border flex flex-wrap gap-2">
              <span
                className="text-xs px-2 py-0.5 rounded font-mono"
                style={{
                  background: (pageColors[b.page] || '#C9943A') + '18',
                  color: pageColors[b.page] || '#C9943A',
                  border: `1px solid ${(pageColors[b.page] || '#C9943A')}40`,
                }}
              >
                {b.page}
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-brand-dark border border-brand-border text-brand-text-dim">
                {b.systeme}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Page mapping summary */}
      <div className="bg-brand-card border border-brand-border rounded-lg p-5">
        <h2 className="text-brand-gold font-semibold mb-3 text-sm uppercase tracking-widest">
          Mapování stránek
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {Object.entries(
            campusBuildings.reduce((acc, b) => {
              acc[b.page] = (acc[b.page] || 0) + 1
              return acc
            }, {})
          ).map(([page, count]) => (
            <div key={page} className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: pageColors[page] || '#C9943A' }}
              />
              <span className="text-xs text-brand-text-muted font-mono">{page}</span>
              <span className="text-xs text-brand-text-dim ml-auto">{count}×</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
