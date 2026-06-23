const audience = [
  {
    icon: '🧒',
    title: 'Pro děti',
    text: 'Rozvíjí tvořivost, zručnost a sebedůvěru zábavnou formou.',
    accent: 'border-green-800/30 hover:border-green-700/50',
  },
  {
    icon: '👨‍👧',
    title: 'Pro rodiče',
    text: 'Kvalitní smysluplný čas a podpora dovedností, které dávají smysl.',
    accent: 'border-blue-800/30 hover:border-blue-700/50',
  },
  {
    icon: '🎯',
    title: 'Pro začátečníky',
    text: 'Vše vysvětlíme od základů. Žádné předchozí zkušenosti nejsou potřeba.',
    accent: 'border-amber-800/30 hover:border-amber-700/50',
  },
  {
    icon: '⭐',
    title: 'Pro pokročilé tvůrce',
    text: 'Nové techniky, výzvy a projekty pro další posun tvého umu.',
    accent: 'border-purple-800/30 hover:border-purple-700/50',
  },
]

export default function ForWho() {
  return (
    <section className="py-24 md:py-32 bg-brand-card-alt" style={{ backgroundColor: '#0D1520' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-14">
          <div className="ornament-divider mb-4">
            <span className="text-brand-gold text-base">◆</span>
          </div>
          <h2 className="section-title">Pro koho je Dračí akademie?</h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {audience.map(({ icon, title, text, accent }) => (
            <div
              key={title}
              className={`bg-brand-card border ${accent} rounded-sm p-7 flex flex-col items-start transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40`}
            >
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="font-cinzel text-brand-parchment font-semibold text-base mb-2 tracking-wide">
                {title}
              </h3>
              <p className="text-brand-text-muted text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
