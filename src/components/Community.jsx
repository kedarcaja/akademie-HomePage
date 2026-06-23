const milestones = [
  { icon: '🏠', label: 'Doma u figurky' },
  { icon: '📚', label: 'Online lekce' },
  { icon: '🎪', label: 'Workshop' },
  { icon: '🏆', label: 'Golden Goblin' },
]

export default function Community() {
  return (
    <section className="py-24 md:py-32 bg-brand-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Section header */}
        <div className="ornament-divider mb-4">
          <span className="text-brand-gold text-base">◆</span>
        </div>

        <h2 className="section-title mb-6">
          Od první figurky<br />
          <span className="text-brand-gold">až ke komunitě</span>
        </h2>

        <p className="section-subtitle mx-auto max-w-3xl mb-12">
          Dračí akademie je součástí širšího světa{' '}
          <span className="text-brand-parchment font-medium">Valiente Projectu</span> —
          workshopů, soutěží, školních programů, komunitních akcí a kreativních výzev.
          Začít můžeš doma u jedné figurky. Pokračovat můžeš na workshopu.
          A jednou svůj model ukázat ostatním třeba na soutěži{' '}
          <span className="text-brand-gold font-medium">Golden Goblin</span>.
        </p>

        {/* Journey milestones */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-0">
          {milestones.map(({ icon, label }, index) => (
            <div key={label} className="flex items-center">
              <div className="flex flex-col items-center gap-2 px-4 py-3">
                <div className="w-14 h-14 rounded-full border border-brand-gold/30 bg-brand-card flex items-center justify-center text-2xl hover:border-brand-gold/60 hover:bg-brand-gold/8 transition-all duration-300">
                  {icon}
                </div>
                <span className="text-brand-text-muted text-xs font-medium tracking-wide text-center whitespace-nowrap">
                  {label}
                </span>
              </div>

              {index < milestones.length - 1 && (
                <div className="hidden sm:flex items-center">
                  <div className="w-8 h-px bg-gradient-to-r from-brand-gold/40 to-brand-gold/20" />
                  <span className="text-brand-gold/30 text-xs">›</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-14 pt-14 border-t border-brand-border">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { value: 'Workshopy', desc: 'Živé setkání tvůrců' },
              { value: 'Školní programy', desc: 'Kreativita ve třídě' },
              { value: 'Golden Goblin', desc: 'Soutěž pro všechny úrovně' },
            ].map(({ value, desc }) => (
              <div key={value} className="space-y-1">
                <p className="font-cinzel text-brand-gold font-bold text-base tracking-wide">{value}</p>
                <p className="text-brand-text-muted text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
