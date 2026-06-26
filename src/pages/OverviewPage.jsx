import { studentLevels } from '../data/studentLevels'

export default function OverviewPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-brand-border pb-6">
        <h1 className="font-cinzel text-3xl font-bold text-brand-parchment mb-2">
          🐉 Dračí akademie – Přehled projektu
        </h1>
        <p className="text-brand-text-muted text-sm">
          Interní plánovací dashboard. Finální produkt žije v Systeme.io, ne v React.
        </p>
      </div>

      {/* Key principle */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-brand-card border border-brand-border rounded-lg p-5">
          <div className="text-2xl mb-2">🌐</div>
          <h2 className="text-brand-gold font-semibold mb-2">Veřejný web = brána</h2>
          <p className="text-brand-text-muted text-sm leading-relaxed">
            Systeme.io stránky (Landing pages, funnely). Cíl: orientovat návštěvníka, sbírat e-maily, prodávat první vstup.
            Minimální obsah, maximální jasnost.
          </p>
          <div className="mt-3 text-xs text-brand-text-dim">
            Stránky: Akademie · Začni tady · Stezky · Děti · Školy · Komunita · Obchod · O nás
          </div>
        </div>
        <div className="bg-brand-card border border-brand-border rounded-lg p-5">
          <div className="text-2xl mb-2">🎓</div>
          <h2 className="text-brand-gold font-semibold mb-2">Členská sekce = akademie</h2>
          <p className="text-brand-text-muted text-sm leading-relaxed">
            Systeme.io kurzy a komunita. Kurzy, lekce, pracovní listy, výzvy, komunita, podcasty, meditace.
            Tady student skutečně roste.
          </p>
          <div className="mt-3 text-xs text-brand-text-dim">
            Kurzy · Pracovní listy · Výzvy · Komunita · Galerie · Deník · Webináře
          </div>
        </div>
      </div>

      {/* Main promise */}
      <div className="bg-[#1A1408] border border-brand-gold/30 rounded-lg p-6">
        <div className="text-xs text-brand-gold uppercase tracking-widest mb-2">Hlavní slib akademie</div>
        <p className="text-brand-parchment text-lg font-cinzel leading-relaxed">
          „Pomůžeme ti vzít štětec do ruky, zpomalit, nebát se chyby a dokončit vlastní malý svět."
        </p>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
          {['Vzít štětec do ruky', 'Zpomalit', 'Nebát se chyby', 'Dokončit vlastní svět'].map((item, i) => (
            <div key={i} className="bg-brand-dark border border-brand-border rounded px-3 py-2 text-center text-xs text-brand-text-muted">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Student journey */}
      <div>
        <h2 className="text-brand-gold font-semibold mb-4 text-sm uppercase tracking-widest">
          Dračí cesta studenta – 5 levelů
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {studentLevels.map((lvl) => (
            <div
              key={lvl.id}
              className="bg-brand-card border border-brand-border rounded-lg p-4"
              style={{ borderTopColor: lvl.color, borderTopWidth: 2 }}
            >
              <div className="text-2xl mb-1">{lvl.icon}</div>
              <div className="text-xs text-brand-text-dim mb-1">Level {lvl.level}</div>
              <div className="text-brand-parchment font-semibold text-sm">{lvl.title}</div>
              <div className="text-brand-text-muted text-xs mt-1">{lvl.subtitle}</div>
              <div className="text-brand-text-dim text-xs mt-2 leading-relaxed">{lvl.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Budov kampusu', value: '17', icon: '🏛️' },
          { label: 'Veřejných stránek', value: '8', icon: '🌐' },
          { label: 'Funnelů', value: '4', icon: '🎯' },
          { label: 'Achievementů', value: '8', icon: '🏆' },
          { label: 'Cílových skupin', value: '8', icon: '👥' },
          { label: 'E-mailových sekvencí', value: '5', icon: '📧' },
          { label: 'Technik v bestiáři', value: '5', icon: '📖' },
          { label: 'Měsíčních témat', value: '5', icon: '🗓️' },
        ].map((s) => (
          <div key={s.label} className="bg-brand-card border border-brand-border rounded-lg p-4 text-center">
            <div className="text-xl mb-1">{s.icon}</div>
            <div className="text-brand-gold font-bold text-2xl">{s.value}</div>
            <div className="text-brand-text-muted text-xs mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Part of Valiente */}
      <div className="bg-brand-card border border-brand-border rounded-lg p-5">
        <h2 className="text-brand-gold font-semibold mb-3">Kontext: Valiente Project</h2>
        <p className="text-brand-text-muted text-sm leading-relaxed">
          Dračí akademie je součástí Valiente Project – tvůrčího ekosystému zaměřeného na ruční tvorbu,
          zpomalení a vzdělávání mimo obrazovky. Cíl není jen naučit malovat figurky –
          ale vrátit lidem radost z tvoření bez tlaku na výsledek.
        </p>
      </div>
    </div>
  )
}
