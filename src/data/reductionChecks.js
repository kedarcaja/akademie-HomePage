export const reductionChecks = [
  {
    page: 'Akademie (homepage)',
    checks: [
      { type: 'remove', item: 'Kompletní seznam všech kurzů', reason: 'Patří na stránku Stezky nebo Obchod' },
      { type: 'remove', item: 'Přehled achievement systému', reason: 'Patří do členské sekce' },
      { type: 'remove', item: '17 budov jako hlavní navigace', reason: 'Příliš mnoho voleb. Max 4 hlavní brány.' },
      { type: 'simplify', item: 'Sekce O nás', reason: 'Stačí 2 věty + odkaz na stránku O nás' },
      { type: 'simplify', item: 'Testimonials', reason: 'Max 2–3, ne celá stránka' },
      { type: 'keep', item: 'Hero s jednou větou', reason: 'Jediný slib. Bez výčtu.' },
      { type: 'keep', item: '4 hlavní brány', reason: 'Maximum voleb. Každá má CTA.' },
      { type: 'keep', item: 'Lead magnet 7 dní u štětce', reason: 'Hlavní konverzní cíl homepage' },
    ],
  },
  {
    page: 'Začni tady',
    checks: [
      { type: 'remove', item: 'Detailní popis kurzů', reason: 'Patří na Stezky' },
      { type: 'remove', item: 'Achievement systém', reason: 'Patří do členské sekce' },
      { type: 'keep', item: '4 hlavní brány jako karty', reason: 'Jedna stránka, jedna otázka: kde patřím?' },
      { type: 'keep', item: 'Sekundární CTA: lead magnet', reason: 'Pro ty, kdo si nejsou jistí' },
    ],
  },
  {
    page: 'Stezky',
    checks: [
      { type: 'remove', item: 'Kompletní obsah lekcí', reason: 'Patří do členské sekce' },
      { type: 'simplify', item: 'Popis levelů', reason: 'Název + 1 věta + ikona. Dost.' },
      { type: 'keep', item: 'Dračí cesta studenta (5 levelů)', reason: 'Jasná progresivita = motivace' },
      { type: 'keep', item: 'CTA pro každou stezku', reason: 'Každá stezka musí mít jasný vstup' },
    ],
  },
  {
    page: 'Děti a rodiče',
    checks: [
      { type: 'remove', item: 'Technické detaily malování', reason: 'Rodiče to neřeší' },
      { type: 'remove', item: 'Achievement engine popis', reason: 'Příliš technické pro rodiče' },
      { type: 'keep', item: 'Benefity tvoření pro dítě', reason: 'Motorika, soustředění, chyba – to rodiče zajímá' },
      { type: 'keep', item: 'Lead magnet pro rodiče', reason: 'PDF nebo mini výzva – nízká bariéra vstupu' },
    ],
  },
]
