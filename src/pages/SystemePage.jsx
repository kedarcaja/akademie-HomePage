import { systemeImplementation } from '../data/systemeImplementation'
import { tags } from '../data/tags'

const columnStyle = {
  hned: { borderColor: '#22c55e', labelBg: 'bg-green-900/20', labelText: 'text-green-400' },
  polurunne: { borderColor: '#f59e0b', labelBg: 'bg-yellow-900/20', labelText: 'text-yellow-400' },
  pozdeji: { borderColor: '#a855f7', labelBg: 'bg-purple-900/20', labelText: 'text-purple-400' },
}

export default function SystemePage() {
  return (
    <div className="space-y-8">
      <div className="border-b border-brand-border pb-4">
        <h1 className="font-cinzel text-2xl font-bold text-brand-parchment mb-1">
          ⚙️ Systeme.io – realizovatelnost
        </h1>
        <p className="text-brand-text-muted text-sm">
          Co jde udělat hned, co poloručně, co vyžaduje vlastní vývoj.
        </p>
      </div>

      {/* Three columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {Object.entries(systemeImplementation).map(([key, col]) => {
          const style = columnStyle[key]
          return (
            <div
              key={key}
              className="bg-brand-card border border-brand-border rounded-lg overflow-hidden"
              style={{ borderTopColor: style.borderColor, borderTopWidth: 2 }}
            >
              <div className={`px-4 py-3 border-b border-brand-border ${style.labelBg}`}>
                <div className="flex items-center gap-2">
                  <span className="text-xl">{col.icon}</span>
                  <span className={`font-semibold text-sm ${style.labelText}`}>{col.title}</span>
                </div>
              </div>
              <div className="p-4 space-y-3">
                {col.items.map((item, i) => (
                  <div key={i} className="border-b border-brand-border/50 pb-3 last:border-0 last:pb-0">
                    <div className="text-brand-parchment text-sm font-medium">{item.item}</div>
                    <div className="text-brand-text-dim text-xs mt-0.5 leading-relaxed">{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Tags overview */}
      <div>
        <h2 className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-4">
          Tagy v Systeme.io
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Interest tags */}
          <div className="bg-brand-card border border-brand-border rounded-lg p-4">
            <div className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3">
              interest- (zájem)
            </div>
            <div className="space-y-1.5">
              {tags.interest.map((t) => (
                <div key={t.id} className="flex gap-2 items-start">
                  <code className="text-xs bg-brand-dark border border-brand-border text-brand-gold px-1.5 py-0.5 rounded flex-shrink-0">
                    {t.id}
                  </code>
                  <span className="text-xs text-brand-text-dim">{t.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Access tags */}
          <div className="bg-brand-card border border-brand-border rounded-lg p-4">
            <div className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3">
              access- (přístup)
            </div>
            <div className="space-y-1.5">
              {tags.access.map((t) => (
                <div key={t.id} className="flex gap-2 items-start">
                  <code className="text-xs bg-brand-dark border border-brand-border text-blue-400 px-1.5 py-0.5 rounded flex-shrink-0">
                    {t.id}
                  </code>
                  <span className="text-xs text-brand-text-dim">{t.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Level tags */}
          <div className="bg-brand-card border border-brand-border rounded-lg p-4">
            <div className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3">
              level- (úroveň studenta)
            </div>
            <div className="space-y-1.5">
              {tags.level.map((t) => (
                <div key={t.id} className="flex gap-2 items-start">
                  <code className="text-xs bg-brand-dark border border-brand-border text-green-400 px-1.5 py-0.5 rounded flex-shrink-0">
                    {t.id}
                  </code>
                  <span className="text-xs text-brand-text-dim">{t.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Badge tags */}
          <div className="bg-brand-card border border-brand-border rounded-lg p-4">
            <div className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3">
              badge- (odznaky)
            </div>
            <div className="space-y-1.5">
              {tags.badge.map((t) => (
                <div key={t.id} className="flex gap-2 items-start">
                  <code className="text-xs bg-brand-dark border border-brand-border text-yellow-400 px-1.5 py-0.5 rounded flex-shrink-0">
                    {t.id}
                  </code>
                  <span className="text-xs text-brand-text-dim">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Implementation note */}
      <div className="bg-[#1A1408] border border-brand-gold/30 rounded-lg p-5">
        <div className="text-xs text-brand-gold uppercase tracking-widest mb-2">Klíčový poznatek</div>
        <p className="text-brand-text-muted text-sm leading-relaxed">
          Systeme.io zvládá 90 % potřebného. Automatický achievement engine a gamifikace s XP / levely vyžadují
          vlastní mini aplikaci nebo platformu třetí strany. Pro launch stačí ruční přiřazování tagů přes komunitu
          a formuláře – admin to zvládne zvládnout pro prvních 100–200 studentů.
        </p>
      </div>
    </div>
  )
}
