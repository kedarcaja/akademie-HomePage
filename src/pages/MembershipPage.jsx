import { studentLevels } from '../data/studentLevels'
import { membershipSections } from '../data/membershipSections'

export default function MembershipPage() {
  return (
    <div className="space-y-8">
      <div className="border-b border-brand-border pb-4">
        <h1 className="font-cinzel text-2xl font-bold text-brand-parchment mb-1">
          🎓 Členská sekce
        </h1>
        <p className="text-brand-text-muted text-sm">
          Obsah dostupný po přihlášení. Levely, kurzy, pracovní listy, komunita.
        </p>
      </div>

      {/* Student levels timeline */}
      <div>
        <h2 className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-4">
          Dračí cesta – 5 levelů
        </h2>
        <div className="space-y-3">
          {studentLevels.map((lvl) => (
            <div
              key={lvl.id}
              className="bg-brand-card border border-brand-border rounded-lg p-4 flex gap-4"
              style={{ borderLeftColor: lvl.color, borderLeftWidth: 3 }}
            >
              <div className="text-3xl flex-shrink-0">{lvl.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="text-brand-parchment font-semibold">Level {lvl.level}: {lvl.title}</span>
                  <span className="text-xs px-2 py-0.5 rounded" style={{ background: lvl.color + '20', color: lvl.color }}>
                    {lvl.subtitle}
                  </span>
                </div>
                <div className="text-brand-text-muted text-sm mb-2">{lvl.description}</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
                  <div>
                    <div className="text-brand-text-dim uppercase tracking-widest mb-1">Dovednosti</div>
                    <div className="text-brand-text-muted">{lvl.skills.join(' · ')}</div>
                  </div>
                  <div>
                    <div className="text-brand-text-dim uppercase tracking-widest mb-1">Kurzy</div>
                    <div className="text-brand-text-muted">{lvl.courses.join(', ')}</div>
                  </div>
                  <div>
                    <div className="text-brand-text-dim uppercase tracking-widest mb-1">Mindset</div>
                    <div className="text-brand-text-muted italic">„{lvl.mindset}"</div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 text-xs text-right">
                <div className="text-brand-text-dim font-mono">{lvl.tag}</div>
                <div className="text-brand-text-dim font-mono mt-1">{lvl.badge}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Membership sections */}
      <div>
        <h2 className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-4">
          Sekce členské oblasti (10 oblastí)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {membershipSections.map((sec) => (
            <div key={sec.id} className="bg-brand-card border border-brand-border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{sec.icon}</span>
                <div>
                  <div className="text-brand-parchment font-semibold text-sm">{sec.title}</div>
                </div>
              </div>
              <div className="text-brand-text-muted text-xs mb-2 leading-relaxed">{sec.desc}</div>
              <div className="text-xs text-brand-text-dim mb-2">
                <span className="text-brand-gold">Systeme.io:</span> {sec.systeme}
              </div>
              <div className="flex flex-wrap gap-1">
                {sec.items.map((item, i) => (
                  <span key={i} className="text-xs bg-brand-dark border border-brand-border text-brand-text-dim px-2 py-0.5 rounded">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
