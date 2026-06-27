const badges = [
  { icon: '🛡️', label: 'Bezpečné prostředí' },
  { icon: '🌱', label: 'Smysluplný rozvoj' },
  { icon: '✋', label: 'Offline dovednosti' },
  { icon: '🤝', label: 'Komunita a podpora' },
]

export default function ForParents() {
  return (
    <section id="pro-rodice" className="py-24 md:py-32" style={{ backgroundColor: '#0D1520' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image placeholder — left */}
          <div
            className="relative rounded-sm overflow-hidden border border-brand-border h-80 lg:h-auto lg:min-h-[420px] order-2 lg:order-1"
          >
            <img
              src="/img/pro-rodice.jpg"
              alt="Rodič a dítě tvoří společně figurky u pracovního stolu"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Corner ornaments */}
            <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-brand-gold/30" />
            <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-brand-gold/30" />
            <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-brand-gold/30" />
            <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-brand-gold/30" />
          </div>

          {/* Text content — right */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-brand-gold" />
              <span className="text-brand-gold text-xs tracking-[0.2em] uppercase font-medium">
                Pro rodiče
              </span>
            </div>

            <h2 className="section-title mb-5">
              Tvoření,<br />které má přesah
            </h2>

            <p className="text-brand-text-muted text-base leading-relaxed mb-4">
              Dračí akademie není jen další obrazovka navíc. Video lekce slouží
              jako průvodce, ale hlavní práce se odehrává mimo displej — u pracovního
              stolu, se štětcem v ruce.
            </p>
            <p className="text-brand-text-muted text-base leading-relaxed mb-8">
              Děti se učí <span className="text-brand-parchment">trpělivosti, jemné motorice, soustředění</span> a tomu,
              že chyba není konec — to jsou dovednosti do života, ne jen do galerie.
            </p>

            {/* Badges */}
            <div className="grid grid-cols-2 gap-3">
              {badges.map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 bg-brand-card border border-brand-border rounded-sm px-4 py-3 transition-all duration-200 hover:border-brand-gold/30"
                >
                  <span className="text-xl shrink-0">{icon}</span>
                  <span className="text-brand-text text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
