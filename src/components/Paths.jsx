const paths = [
  {
    id: 'prvni-figurka',
    icon: '⚔️',
    title: 'Cesta první figurky',
    subtitle: 'Pro úplné začátečníky',
    text: 'Začni jednoduše a vytvoř svou první figurku, na kterou budeš hrdě koukat.',
    cta: 'Začít cestu',
    featured: false,
    gradient: 'from-green-950/80 to-brand-card',
    borderColor: 'border-green-800/30 hover:border-green-600/60',
    accentColor: 'text-green-400',
    bgImage: '/img/cesta-prvni-figurky.svg',
  },
  {
    id: 'draci-trenink',
    icon: '🐉',
    title: 'Dračí trénink',
    subtitle: 'Pro rostoucí tvůrce',
    text: 'Postupné lekce a výzvy, které z tebe udělají lepšího tvůrce.',
    cta: 'Jít trénovat',
    featured: true,
    gradient: 'from-blue-950/90 to-brand-darker',
    borderColor: 'border-brand-gold/50 hover:border-brand-gold',
    accentColor: 'text-brand-gold',
    bgImage: '/img/draci-trenink.svg',
  },
  {
    id: 'akademie-barev',
    icon: '🎨',
    title: 'Akademie barev',
    subtitle: 'Teorie i praxe',
    text: 'Ponoř se do světa barev, světel, stínů a efektů.',
    cta: 'Objevit barvy',
    featured: false,
    gradient: 'from-amber-950/80 to-brand-card',
    borderColor: 'border-amber-800/30 hover:border-amber-600/60',
    accentColor: 'text-amber-400',
    bgImage: '/img/akademie-barev.svg',
  },
  {
    id: 'projektova-dilna',
    icon: '🏰',
    title: 'Projektová dílna',
    subtitle: 'Pro zkušené tvůrce',
    text: 'Větší projekty, diorámy a příběhy, které ožijí tvýma rukama.',
    cta: 'Otevřít dílnu',
    featured: false,
    gradient: 'from-stone-900/80 to-brand-card',
    borderColor: 'border-stone-700/30 hover:border-stone-500/60',
    accentColor: 'text-stone-400',
    bgImage: '/img/projektova-dilna.svg',
  },
]

export default function Paths() {
  return (
    <section id="cesty" className="py-24 md:py-32 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-14">
          <div className="ornament-divider mb-4">
            <span className="text-brand-gold text-base">◆</span>
          </div>
          <h2 className="section-title mb-4">Vyber si svoji cestu</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Každá cesta vede jinam, ale všechny začínají u štětce a touhy tvořit.
          </p>
        </div>

        {/* Path cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {paths.map(({ id, icon, title, subtitle, text, cta, featured, gradient, borderColor, accentColor, bgImage }) => (
            <div
              key={id}
              className={`group relative flex flex-col border rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 ${borderColor} ${
                featured ? 'ring-1 ring-brand-gold/40' : ''
              }`}
              style={{ background: `linear-gradient(160deg, var(--tw-gradient-from, #111620), #111620)` }}
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-b ${gradient} opacity-80 pointer-events-none`} />

              {/* Featured badge */}
              {featured && (
                <div className="relative z-10 bg-brand-gold text-brand-dark text-[10px] font-bold tracking-widest uppercase text-center py-1.5 px-4">
                  ⭐ Nejoblíbenější
                </div>
              )}

              {/* Path image */}
              <div className="relative z-10 h-36 overflow-hidden border-b border-white/5">
                <img
                  src={bgImage}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col flex-1 p-6">
                <span className={`text-xs font-medium tracking-widest uppercase mb-1 ${accentColor}`}>
                  {subtitle}
                </span>
                <h3 className="font-cinzel text-brand-parchment font-bold text-base leading-tight mb-3 tracking-wide">
                  {title}
                </h3>
                <p className="text-brand-text-muted text-sm leading-relaxed flex-1 mb-5">
                  {text}
                </p>
                <a
                  href={`#${id}`}
                  className={`w-full text-center py-2.5 px-4 text-sm font-semibold tracking-widest uppercase transition-all duration-200 border ${
                    featured
                      ? 'bg-brand-gold text-brand-dark border-brand-gold hover:bg-brand-gold-light'
                      : 'border-current bg-transparent hover:bg-white/5'
                  } ${accentColor}`}
                >
                  {cta} ›
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
