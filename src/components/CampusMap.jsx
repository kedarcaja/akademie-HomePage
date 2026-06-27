import { useState, useEffect, useCallback } from 'react'

// Building data — x/y as % of map image dimensions (isometric campus map)
const buildings = [
  { id: 'vez-barev',    x: 30, y: 20, label: 'Alchymistická věž barev', icon: '🎨', desc: 'Místo, kde vznikají kouzelné kombinace.',                  detail: 'Vše o barvách — míchání, vrstvení, washes, glazury a pokročilé techniky malování miniatur.',            courses: ['Základy míchání barev', 'Glazury a washes', 'OSL efekty'],      for: 'Všechny úrovně', href: '#stezky' },
  { id: 'knihovna',     x: 53, y: 12, label: 'Knihovna mistrů',         icon: '📚', desc: 'Příběhy, techniky a znalosti generací.',                  detail: 'Rozsáhlá sbírka technik, inspirace a příběhů od mistrů oboru. Videotéka, čítárna a archiv.',           courses: ['Techniky legend', 'Inspirační knihovna', 'Světy fantasy'],      for: 'Všichni',        href: '#komunita' },
  { id: 'kovarna',      x: 70, y: 20, label: 'Kovárna modelářů',        icon: '⚒️', desc: 'Stavíme, lepíme, zkoušíme. Z pevného nápadu model.',       detail: 'Pokročilé techniky modelování a konverzí. Pro ty, kdo chtějí překročit hranice standardních kitů.',   courses: ['Konverze a kitbashing', 'Scratch building', 'Terén a dioramy'], for: 'Pokročilí',      href: '#stezky' },
  { id: 'sin-stezek',   x: 36, y: 30, label: 'Síň stezek',             icon: '🧭', desc: 'Vyber si svou cestu a rozvíjej se po ní.',               detail: 'Vstupní bod pro volbu tvůrčí stezky. Každá stezka má vlastní milníky, projekty a komunitu.',             courses: ['Stezka malíře', 'Stezka modeláře', 'Stezka stavitele světů'], for: 'Všichni',        href: '#stezky' },
  { id: 'pavilon',      x: 72, y: 30, label: 'Pavilon rodičů',          icon: '🏠', desc: 'Zázemí, kde rodiče najdou odpovědi.',                     detail: 'Speciální sekce pro rodiče — jak podporovat tvůrce doma, co si připravit a jak fungují workshopy.',    courses: ['Průvodce pro rodiče', 'Podpora doma', 'Dětské projekty'],       for: 'Rodiče',         href: '#deti-rodice' },
  { id: 'dilna',        x: 21, y: 40, label: 'Dílna první figurky',     icon: '🏺', desc: 'První vlastnoruční výtvor oživá právě tady.',             detail: 'Místo pro úplné začátečníky. Bojit se chybovat je tady zakázáno — chyba je součást procesu.',         courses: ['Figurka z nuly', 'Základy malování', 'Moje první armáda'],     for: 'Začátečníci',    href: '#zacni-tady' },
  { id: 'ucitelska',    x: 80, y: 38, label: 'Učitelská síň',           icon: '🎓', desc: 'Naši průvodci a stráž cti akademie.',                     detail: 'Pro pedagogy a vedoucí kroužků. Metodiky, materiály a kurzy pro výuku kreativních dovedností.',       courses: ['Metodika výuky', 'Vedení workshopů', 'Stát se průvodcem'],      for: 'Pedagogové',     href: '#skoly' },
  { id: 'draci-kruh',   x: 47, y: 50, label: 'Dračí kruh',              icon: '🐉', desc: 'Sdílíme, inspirujeme a rosteme spolu.',                   detail: 'Srdce kampusu. Místo kde se sbíhají stezky, sdílíme pokroky a slavíme chyby jako vítězství.',           courses: ['Komunitní výzvy', 'Sdílení projektů', 'Živé workshopy'],       for: 'Komunita',       href: '#komunita' },
  { id: 'trziste',      x: 70, y: 50, label: 'Tržiště akademie',        icon: '🛒', desc: 'Potřebuješ vybavení, inspiraci nebo jen svačinu.',        detail: 'Akademický obchod — barvy, štětce, kity a pomůcky, které skutečně doporučujeme a sami používáme.',    courses: ['Barvy a štětce', 'Figurky a kity', 'Nástroje mistrů'],         for: 'Všichni',        href: '#obchod' },
  { id: 'nadvori',      x: 38, y: 60, label: 'Tréninkové nádvoří',      icon: '🎯', desc: 'Místo tréninku trpělivosti, soustředění a odvahy.',       detail: 'Mentální stránka tvorby. Jak pracovat s frustrací, budovat rutinu a vytrvat i když to jde pomalu.',    courses: ['Soustředění a flow', 'Práce s chybou', 'Trpělivost jako nástroj'], for: 'Všichni',     href: '#jak-projit-kampusem' },
  { id: 'draci-posta',  x: 76, y: 65, label: 'Dračí pošta',             icon: '📬', desc: 'Zprávy, dopisy a překvapení.',                            detail: 'Zůstaň v kontaktu. Newsletter s novinkami, výzvy, oznámení workshopů a zprávy z celé akademie.',       courses: ['Newsletter akademie', 'Měsíční výzvy', 'Oznámení workshopů'],  for: 'Všichni',        href: '#kontakt' },
  { id: 'atelier',      x: 28, y: 68, label: 'Ateliér Valiente',        icon: '🏛️', desc: 'Kde vznikají pomůcky, které sami používáme.',             detail: 'Zákulisí Valiente Project — jak tvoříme pomůcky, lekce a obsah, který každý den v akademii používáme.', courses: ['Za kulisami tvorby', 'Naše metody', 'Jak testujeme projekty'], for: 'Zvídaví',        href: '#o-nas' },
  { id: 'hlavni-brana', x: 50, y: 80, label: 'Hlavní brána',            icon: '🚪', desc: 'Každá cesta začíná tímto krokem.',                        detail: 'Vstupní bod do celého kampusu. Přivítej se, zorientuj a vyber svůj první krok — bez spěchu.',          courses: ['Orientace v kampusu', 'Výběr stezky', 'Úvodní projekt'],       for: 'Nováčci',        href: '#zacni-tady' },
]

const forBadge = {
  'Všichni':        'bg-brand-gold/10 text-brand-gold border-brand-gold/25',
  'Začátečníci':    'bg-green-900/30 text-green-400 border-green-700/30',
  'Pokročilí':      'bg-red-900/30 text-red-400 border-red-700/30',
  'Rodiče':         'bg-blue-900/30 text-blue-400 border-blue-700/30',
  'Pedagogové':     'bg-purple-900/30 text-purple-400 border-purple-700/30',
  'Komunita':       'bg-brand-gold/10 text-brand-gold border-brand-gold/25',
  'Nováčci':        'bg-green-900/30 text-green-400 border-green-700/30',
  'Zvídaví':        'bg-brand-gold/10 text-brand-gold border-brand-gold/25',
  'Všechny úrovně': 'bg-brand-gold/10 text-brand-gold border-brand-gold/25',
}

const W = 1600
const H = 900
const cx = W * 0.50
const cy = H * 0.44

// Pine tree helper
function PineTree({ x, y, h = 18, op = 0.85 }) {
  const w = h * 0.7
  return (
    <g transform={`translate(${x},${y})`} opacity={op}>
      <polygon points={`0,${-h} ${-w*0.55},${-h*0.3} ${w*0.55},${-h*0.3}`} fill="#0B1E0E" />
      <polygon points={`0,${-h*1.3} ${-w*0.65},${-h*0.55} ${w*0.65},${-h*0.55}`} fill="#0F2812" />
      <polygon points={`0,${-h*1.6} ${-w*0.45},${-h*0.9} ${w*0.45},${-h*0.9}`} fill="#132E16" />
      <rect x="-2" y="0" width="4" height={h * 0.25} fill="#0A1208" />
    </g>
  )
}

// Building silhouette helpers
function BigTower({ x, y, G, fill }) {
  const st = { stroke: G, strokeOpacity: 0.55, strokeWidth: 1.2 }
  return (
    <g transform={`translate(${x},${y})`} opacity="0.82">
      {/* Base */}
      <rect x="-10" y="-38" width="20" height="38" fill={fill} {...st} />
      {/* Upper section */}
      <rect x="-12" y="-42" width="24" height="6" fill={fill} {...st} />
      {/* Battlements */}
      {[-10,-4,2,8].map(bx => <rect key={bx} x={bx} y="-48" width="4" height="6" fill={fill} {...st} />)}
      {/* Spire */}
      <polygon points="-4,-48 4,-48 0,-64" fill={fill} stroke={G} strokeOpacity="0.75" strokeWidth="1.2" />
      {/* Spire orb */}
      <circle cx="0" cy="-64" r="2.5" fill={G} opacity="0.5" />
      {/* Windows */}
      <rect x="-3" y="-28" width="6" height="9" rx="3" fill={G} opacity="0.28" />
      <rect x="-3" y="-14" width="6" height="7" rx="1" fill={G} opacity="0.15" />
      {/* Side buttresses */}
      <rect x="-14" y="-28" width="4" height="28" fill={fill} {...st} opacity="0.7" />
      <rect x="10"  y="-28" width="4" height="28" fill={fill} {...st} opacity="0.7" />
    </g>
  )
}

function TowerBld({ x, y, G, fill }) {
  const st = { stroke: G, strokeOpacity: 0.45, strokeWidth: 1 }
  return (
    <g transform={`translate(${x},${y})`} opacity="0.75">
      <rect x="-7" y="-30" width="14" height="30" fill={fill} {...st} />
      <rect x="-9" y="-34" width="18" height="6" fill={fill} {...st} />
      {[-7,-1,5].map(bx => <rect key={bx} x={bx} y="-40" width="4" height="6" fill={fill} {...st} />)}
      <polygon points="-3,-40 3,-40 0,-52" fill={fill} stroke={G} strokeOpacity="0.7" strokeWidth="1" />
      <circle cx="0" cy="-52" r="2" fill={G} opacity="0.4" />
      <rect x="-2" y="-22" width="4" height="7" rx="2" fill={G} opacity="0.22" />
    </g>
  )
}

function Cathedral({ x, y, G, fill }) {
  const st = { stroke: G, strokeOpacity: 0.5, strokeWidth: 1.2 }
  return (
    <g transform={`translate(${x},${y})`} opacity="0.8">
      <rect x="-22" y="-22" width="44" height="22" fill={fill} {...st} />
      <rect x="-5" y="-42" width="10" height="22" fill={fill} {...st} />
      <polygon points="-7,-42 7,-42 0,-60" fill={fill} stroke={G} strokeOpacity="0.75" strokeWidth="1.3" />
      <circle cx="0" cy="-60" r="2.5" fill={G} opacity="0.5" />
      <rect x="-20" y="-32" width="9" height="12" fill={fill} {...st} />
      <polygon points="-20,-32 -11,-32 -15.5,-44" fill={fill} {...st} />
      <rect x="11" y="-32" width="9" height="12" fill={fill} {...st} />
      <polygon points="11,-32 20,-32 15.5,-44" fill={fill} {...st} />
      <circle cx="0" cy="-13" r="6" fill="none" stroke={G} strokeOpacity="0.4" strokeWidth="1" />
      <circle cx="0" cy="-13" r="2.5" fill={G} opacity="0.22" />
      {/* Cross on spire */}
      <line x1="0" y1="-54" x2="0" y2="-46" stroke={G} strokeOpacity="0.5" strokeWidth="1" />
      <line x1="-3" y1="-51" x2="3" y2="-51" stroke={G} strokeOpacity="0.5" strokeWidth="1" />
    </g>
  )
}

function DomeBld({ x, y, G, fill }) {
  const st = { stroke: G, strokeOpacity: 0.45, strokeWidth: 1 }
  return (
    <g transform={`translate(${x},${y})`} opacity="0.72">
      <rect x="-14" y="-14" width="28" height="16" fill={fill} {...st} />
      <path d="M -14 -14 Q 0 -38 14 -14" fill={fill} stroke={G} strokeOpacity="0.55" strokeWidth="1.2" />
      <rect x="-3" y="-39" width="6" height="9" fill={fill} {...st} />
      <polygon points="-2,-39 2,-39 0,-47" fill={fill} {...st} />
      <circle cx="0" cy="-47" r="2" fill={G} opacity="0.45" />
      <ellipse cx="0" cy="-22" rx="5" ry="3" fill={G} opacity="0.12" />
    </g>
  )
}

function ForgeBld({ x, y, G, fill }) {
  const st = { stroke: G, strokeOpacity: 0.45, strokeWidth: 1 }
  return (
    <g transform={`translate(${x},${y})`} opacity="0.72">
      <rect x="-14" y="-14" width="28" height="16" fill={fill} {...st} />
      <rect x="-16" y="-18" width="32" height="6" fill={fill} {...st} />
      <rect x="6" y="-32" width="8" height="16" fill={fill} {...st} />
      <rect x="5" y="-35" width="10" height="5" fill={fill} {...st} />
      {/* Smoke */}
      <circle cx="10" cy="-40" r="4" fill={G} opacity="0.07" />
      <circle cx="12" cy="-46" r="5" fill={G} opacity="0.04" />
      <circle cx="9"  cy="-52" r="6" fill={G} opacity="0.03" />
      {/* Ember glow */}
      <rect x="-4" y="-9" width="8" height="4" fill="#C04010" opacity="0.18" />
    </g>
  )
}

function MarketBld({ x, y, G, fill }) {
  const st = { stroke: G, strokeOpacity: 0.42, strokeWidth: 0.9 }
  return (
    <g transform={`translate(${x},${y})`} opacity="0.7">
      <rect x="-22" y="-12" width="44" height="14" fill={fill} {...st} />
      <path d="M -22 -12 L -11 -24 L 0 -12" fill={fill} stroke={G} strokeOpacity="0.42" strokeWidth="0.9" />
      <path d="M 0 -12 L 11 -24 L 22 -12"  fill={fill} stroke={G} strokeOpacity="0.42" strokeWidth="0.9" />
      <line x1="-11" y1="-24" x2="-11" y2="-32" stroke={G} strokeOpacity="0.5" strokeWidth="1.2" />
      <polygon points="-11,-32 -7,-28 -11,-24" fill={G} opacity="0.35" />
      <line x1="11"  y1="-24" x2="11"  y2="-32" stroke={G} strokeOpacity="0.5" strokeWidth="1.2" />
      <polygon points="11,-32 15,-28 11,-24"  fill={G} opacity="0.35" />
    </g>
  )
}

function HouseBld({ x, y, G, fill }) {
  const st = { stroke: G, strokeOpacity: 0.42, strokeWidth: 1 }
  return (
    <g transform={`translate(${x},${y})`} opacity="0.68">
      <rect x="-10" y="-16" width="20" height="18" fill={fill} {...st} />
      <polygon points="-12,-16 12,-16 0,-30" fill={fill} {...st} />
      <rect x="-2" y="-11" width="4" height="8" rx="1" fill={G} opacity="0.18" />
      <rect x="-9" y="-11" width="5" height="5" fill={G} opacity="0.08" />
      <rect x="4"  y="-11" width="5" height="5" fill={G} opacity="0.08" />
    </g>
  )
}

function MapSVG() {
  const G    = '#C9943A'
  const GA   = (o) => `rgba(201,148,58,${o})`
  const DARK = '#050810'
  const FILL = '#12100C'
  const STONE = '#1A1814'

  const bldProps = { G, fill: FILL }

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full" style={{ display:'block' }}
      preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="mgBg" cx="50%" cy="45%" r="72%">
          <stop offset="0%"   stopColor="#0E1C10" />
          <stop offset="40%"  stopColor="#0A1218" />
          <stop offset="100%" stopColor={DARK} />
        </radialGradient>
        <radialGradient id="mgGoldGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor={G} stopOpacity="0.22" />
          <stop offset="60%"  stopColor={G} stopOpacity="0.05" />
          <stop offset="100%" stopColor={G} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="mgBldGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor={G} stopOpacity="0.13" />
          <stop offset="100%" stopColor={G} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="mgGateGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor={G} stopOpacity="0.2" />
          <stop offset="100%" stopColor={G} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="mgWater" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#162848" />
          <stop offset="100%" stopColor="#0A1425" />
        </radialGradient>
        <radialGradient id="mgVignette" cx="50%" cy="50%" r="55%"
          gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={W} y2={H}>
          <stop offset="45%"  stopColor={DARK} stopOpacity="0" />
          <stop offset="82%"  stopColor={DARK} stopOpacity="0.5" />
          <stop offset="100%" stopColor={DARK} stopOpacity="0.95" />
        </radialGradient>
        <linearGradient id="mgFades" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={DARK} stopOpacity="0.72" />
          <stop offset="14%"  stopColor={DARK} stopOpacity="0" />
          <stop offset="80%"  stopColor={DARK} stopOpacity="0" />
          <stop offset="100%" stopColor={DARK} stopOpacity="0.78" />
        </linearGradient>
        <linearGradient id="mgRoad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={G} stopOpacity="0.3" />
          <stop offset="100%" stopColor={G} stopOpacity="0.06" />
        </linearGradient>
        <filter id="mgGlow">
          <feGaussianBlur stdDeviation="3" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="mgBlur5">
          <feGaussianBlur stdDeviation="5"/>
        </filter>
      </defs>

      {/* ── Base ground ── */}
      <rect width={W} height={H} fill="url(#mgBg)" />

      {/* ── Terrain color zones ── */}
      <ellipse cx={W*0.52} cy={H*0.10} rx={500} ry={140} fill="rgba(16,12,30,0.55)" />
      <ellipse cx={W*0.14} cy={H*0.52} rx={210} ry={300} fill="rgba(28,18,8,0.3)" />
      <ellipse cx={W*0.80} cy={H*0.52} rx={230} ry={300} fill="rgba(8,22,14,0.25)" />
      <ellipse cx={W*0.50} cy={H*0.50} rx={420} ry={280} fill="rgba(10,16,8,0.18)" />

      {/* ── Mountain silhouettes – top edge ── */}
      <g opacity="0.55">
        {/* Back range */}
        <polygon points="0,0 100,68 200,18 320,80 440,12 560,85 680,22 800,90 920,18 1040,78 1160,10 1300,72 1420,24 1600,70 1600,0"
          fill="#0C0A14" />
        {/* Mid range */}
        <polygon points="0,0 80,50 180,10 280,62 380,8 500,70 620,14 740,72 860,10 980,65 1100,6 1240,58 1380,16 1520,60 1600,30 1600,0"
          fill="#100E1C" />
        {/* Snow caps */}
        {[[200,18],[440,12],[680,22],[920,18],[1160,10],[1380,16]].map(([mx,my],i) => (
          <polygon key={i}
            points={`${mx},${my} ${mx-28},${my+32} ${mx+28},${my+32}`}
            fill="#2A2845" opacity="0.6" />
        ))}
        {/* Near foothills */}
        <ellipse cx={W*0.15} cy={0} rx={180} ry={90} fill="#0E0C18" />
        <ellipse cx={W*0.50} cy={0} rx={200} ry={80} fill="#0E0C18" />
        <ellipse cx={W*0.85} cy={0} rx={180} ry={90} fill="#0E0C18" />
      </g>

      {/* ── Water features ── */}
      {/* West stream */}
      <path d={`M ${W*0.04} ${H*0.28} Q ${W*0.10} ${H*0.38} ${W*0.18} ${H*0.47}
                Q ${W*0.20} ${H*0.56} ${W*0.13} ${H*0.68}
                Q ${W*0.08} ${H*0.80} ${W*0.05} ${H*0.95}`}
        stroke="#1A3050" strokeWidth="20" fill="none" strokeLinecap="round" opacity="0.7" />
      <path d={`M ${W*0.04} ${H*0.28} Q ${W*0.10} ${H*0.38} ${W*0.18} ${H*0.47}
                Q ${W*0.20} ${H*0.56} ${W*0.13} ${H*0.68}
                Q ${W*0.08} ${H*0.80} ${W*0.05} ${H*0.95}`}
        stroke="#22406A" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.5" />
      <path d={`M ${W*0.04} ${H*0.28} Q ${W*0.10} ${H*0.38} ${W*0.18} ${H*0.47}
                Q ${W*0.20} ${H*0.56} ${W*0.13} ${H*0.68}
                Q ${W*0.08} ${H*0.80} ${W*0.05} ${H*0.95}`}
        stroke="#4A88C0" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.15"
        strokeDasharray="6 10" />
      {/* East stream */}
      <path d={`M ${W*0.97} ${H*0.22} Q ${W*0.91} ${H*0.36} ${W*0.86} ${H*0.52}
                Q ${W*0.89} ${H*0.68} ${W*0.94} ${H*0.88}`}
        stroke="#1A3050" strokeWidth="16" fill="none" strokeLinecap="round" opacity="0.6" />
      <path d={`M ${W*0.97} ${H*0.22} Q ${W*0.91} ${H*0.36} ${W*0.86} ${H*0.52}
                Q ${W*0.89} ${H*0.68} ${W*0.94} ${H*0.88}`}
        stroke="#22406A" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.4" />

      {/* ── Forest zones with pine trees ── */}
      {/* NW forest */}
      {[
        [55,95],[88,110],[120,85],[70,140],[105,155],[48,155],[140,105],[75,175],[125,175],[100,190],
        [40,120],[165,95],[158,130],[180,155],[30,80],[200,115]
      ].map(([fx,fy],i) => <PineTree key={`fnw${i}`} x={fx} y={fy} h={20+i%4*3} op={0.75+i%3*0.07} />)}

      {/* NE forest */}
      {[
        [W-55,95],[W-88,110],[W-120,85],[W-70,140],[W-105,155],[W-48,155],[W-140,105],[W-75,175],[W-125,175],
        [W-45,120],[W-165,95],[W-158,130],[W-180,155],[W-30,80],[W-200,115]
      ].map(([fx,fy],i) => <PineTree key={`fne${i}`} x={fx} y={fy} h={18+i%4*3} op={0.72+i%3*0.07} />)}

      {/* SW forest */}
      {[[48,H-72],[80,H-95],[115,H-70],[55,H-115],[30,H-90]].map(([fx,fy],i) => (
        <PineTree key={`fsw${i}`} x={fx} y={fy} h={17+i*2} op={0.65} />
      ))}
      {/* SE forest */}
      {[[W-48,H-72],[W-80,H-95],[W-115,H-70],[W-55,H-115],[W-30,H-90]].map(([fx,fy],i) => (
        <PineTree key={`fse${i}`} x={fx} y={fy} h={17+i*2} op={0.65} />
      ))}
      {/* Interior scattered trees */}
      {[
        [300,210],[330,245],[360,225],[1240,210],[1270,245],[1300,220],
        [420,690],[455,715],[1180,700],[1210,680],[250,540],[1350,540],
        [600,170],[700,155],[900,165],[1000,155]
      ].map(([fx,fy],i) => <PineTree key={`fint${i}`} x={fx} y={fy} h={14+i%3*3} op={0.55} />)}

      {/* ── Fine gold grid ── */}
      {Array.from({ length: 21 }, (_, i) => i * 80).map(x => (
        <line key={`v${x}`} x1={x} y1={0} x2={x} y2={H}
          stroke={G} strokeOpacity="0.022" strokeWidth="0.8" />
      ))}
      {Array.from({ length: 12 }, (_, i) => i * 80).map(y => (
        <line key={`h${y}`} x1={0} y1={y} x2={W} y2={y}
          stroke={G} strokeOpacity="0.022" strokeWidth="0.8" />
      ))}

      {/* ── Campus perimeter walls ── */}
      {/* Outer stone wall */}
      <ellipse cx={W*0.5} cy={H*0.48} rx={680} ry={408}
        fill="none" stroke="#2A2418" strokeWidth="14" opacity="0.8" />
      <ellipse cx={W*0.5} cy={H*0.48} rx={680} ry={408}
        fill="none" stroke={G} strokeOpacity="0.14" strokeWidth="2" />
      <ellipse cx={W*0.5} cy={H*0.48} rx={694} ry={422}
        fill="none" stroke="#181410" strokeWidth="7" opacity="0.6" />
      {/* Battlements on outer wall */}
      {Array.from({ length: 56 }, (_, i) => {
        const angle = (i / 56) * Math.PI * 2
        const ex = W*0.5 + Math.cos(angle) * 680
        const ey = H*0.48 + Math.sin(angle) * 408
        const tangent = Math.atan2(ey - H*0.48, ex - W*0.5) * 180 / Math.PI
        return (
          <rect key={i} x={ex - 4} y={ey - 4} width={8} height={8}
            fill="#221E14" stroke={G} strokeOpacity="0.12" strokeWidth="0.5"
            transform={`rotate(${tangent},${ex},${ey})`} opacity="0.8" />
        )
      })}
      {/* Corner towers on ellipse at cardinal & diagonal points */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => {
        const rad = deg * Math.PI / 180
        const tx = W*0.5 + Math.cos(rad) * 680
        const ty = H*0.48 + Math.sin(rad) * 408
        const isCardinal = deg % 90 === 0
        const size = isCardinal ? 14 : 10
        return (
          <g key={`wt${deg}`}>
            <circle cx={tx} cy={ty} r={size} fill="#1E1A14" stroke={G} strokeOpacity="0.3" strokeWidth="1.2" />
            {isCardinal && <circle cx={tx} cy={ty} r={size - 4} fill="none" stroke={G} strokeOpacity="0.2" strokeWidth="0.8" />}
          </g>
        )
      })}

      {/* ── Main avenue – Gate to Dragon Circle ── */}
      <path d={`M ${cx} ${H*0.85} L ${cx} ${cy + 72}`}
        stroke="#1A1408" strokeWidth="26" fill="none" strokeLinecap="round" />
      <path d={`M ${cx} ${H*0.85} L ${cx} ${cy + 72}`}
        stroke={G} strokeOpacity="0.22" strokeWidth="22" fill="none" strokeLinecap="round" />
      <path d={`M ${cx} ${H*0.85} L ${cx} ${cy + 72}`}
        stroke={G} strokeOpacity="0.38" strokeWidth="2.5" strokeDasharray="9 7" fill="none" />

      {/* ── Secondary roads to buildings ── */}
      {buildings.filter(b => b.id !== 'draci-kruh' && b.id !== 'hlavni-brana').map((b, i) => {
        const bx = (b.x / 100) * W
        const by = (b.y / 100) * H
        const offsets = [55, -65, 48, -48, 75, -75, 58, -58, 42, -42, 68]
        const off = offsets[i % offsets.length]
        const mx = (bx + cx) / 2 + off
        const my = (by + cy) / 2 - 25
        return (
          <g key={b.id}>
            <path d={`M ${bx} ${by} Q ${mx} ${my} ${cx} ${cy}`}
              stroke="#1A1408" strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.55" />
            <path d={`M ${bx} ${by} Q ${mx} ${my} ${cx} ${cy}`}
              stroke={G} strokeOpacity="0.10" strokeWidth="8" fill="none" />
            <path d={`M ${bx} ${by} Q ${mx} ${my} ${cx} ${cy}`}
              stroke={G} strokeOpacity="0.18" strokeWidth="1.5" fill="none" strokeDasharray="5 11" />
          </g>
        )
      })}

      {/* ── Building ambient glows ── */}
      {buildings.map(b => {
        const bx = (b.x / 100) * W
        const by = (b.y / 100) * H
        const r = b.id === 'draci-kruh' ? 180 : b.id === 'hlavni-brana' ? 120 : 80
        return <ellipse key={b.id} cx={bx} cy={by} rx={r} ry={r * 0.75} fill="url(#mgBldGlow)" />
      })}

      {/* ── Dragon Circle – central landmark ── */}
      {/* Large outer glow */}
      <ellipse cx={cx} cy={cy} rx={230} ry={195} fill="url(#mgGoldGlow)" />
      {/* Cobbled ground */}
      <ellipse cx={cx} cy={cy} rx={130} ry={110} fill="#0E1208" stroke="#1A1808" strokeWidth="2" opacity="0.9" />
      {/* Rings */}
      <circle cx={cx} cy={cy} r={120} fill="none" stroke={G} strokeOpacity="0.06" strokeWidth="1" strokeDasharray="3 14" />
      <circle cx={cx} cy={cy} r={100} fill="none" stroke={G} strokeOpacity="0.12" strokeWidth="1.2" strokeDasharray="5 9" />
      <circle cx={cx} cy={cy} r={80}  fill="#0B0F08" stroke={G} strokeOpacity="0.42" strokeWidth="2.2" />
      <circle cx={cx} cy={cy} r={54}  fill="#0E1410" stroke={G} strokeOpacity="0.58" strokeWidth="1.6" />
      <circle cx={cx} cy={cy} r={26}  fill={GA('0.14')} stroke={G} strokeOpacity="0.75" strokeWidth="1.4" />
      {/* Spokes */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => {
        const rad = (deg * Math.PI) / 180
        const isMajor = deg % 90 === 0
        return (
          <line key={deg}
            x1={cx + Math.cos(rad) * 26} y1={cy + Math.sin(rad) * 26}
            x2={cx + Math.cos(rad) * 80} y2={cy + Math.sin(rad) * 80}
            stroke={G} strokeOpacity={isMajor ? 0.62 : 0.28} strokeWidth={isMajor ? 2 : 0.9} />
        )
      })}
      {/* Diamond markers at cardinal points */}
      {[0, 90, 180, 270].map(deg => {
        const rad = (deg * Math.PI) / 180
        const px = cx + Math.cos(rad) * 100
        const py = cy + Math.sin(rad) * 100
        return (
          <g key={`dm${deg}`} transform={`translate(${px},${py}) rotate(45)`}>
            <rect x="-5" y="-5" width="10" height="10" fill={G} opacity="0.55" />
            <rect x="-3" y="-3" width="6" height="6" fill={DARK} opacity="0.7" />
          </g>
        )
      })}
      {/* Dragon emblem */}
      <text x={cx} y={cy + 6} textAnchor="middle" fontSize="26" opacity="0.38"
        fill={G} fontFamily="serif">⚜</text>

      {/* ── Building silhouettes ── */}
      {buildings.filter(b => b.id !== 'draci-kruh' && b.id !== 'hlavni-brana').map(b => {
        const bx = (b.x / 100) * W
        const by = (b.y / 100) * H
        const p = { x: bx, y: by, ...bldProps }
        if (b.id === 'vez-barev')                         return <BigTower key={b.id} {...p} />
        if (['sin-stezek','ucitelska'].includes(b.id))    return <TowerBld key={b.id} {...p} />
        if (b.id === 'knihovna')                          return <Cathedral key={b.id} {...p} />
        if (['pavilon','atelier'].includes(b.id))         return <DomeBld key={b.id} {...p} />
        if (b.id === 'kovarna')                           return <ForgeBld key={b.id} {...p} />
        if (b.id === 'trziste')                           return <MarketBld key={b.id} {...p} />
        return <HouseBld key={b.id} {...p} />
      })}

      {/* ── Main Gate ── */}
      {(() => {
        const gx = W * 0.50, gy = H * 0.845
        const st = { stroke: G, strokeOpacity: 0.55, strokeWidth: 1.5 }
        return (
          <g filter="url(#mgGlow)">
            <ellipse cx={gx} cy={gy} rx={150} ry={90} fill="url(#mgGateGlow)" />
            {/* Left tower */}
            <rect x={gx-58} y={gy-52} width={22} height={58} fill={FILL} {...st} />
            <rect x={gx-61} y={gy-56} width={28} height={6}  fill={FILL} {...st} />
            {[-59,-51,-43].map(bx => <rect key={bx} x={gx+bx} y={gy-64} width={6} height={8} fill={FILL} {...st} />)}
            <polygon points={`${gx-58},${gy-64} ${gx-36},${gy-64} ${gx-47},${gy-82}`}
              fill={FILL} stroke={G} strokeOpacity="0.65" strokeWidth="1.2" />
            <circle cx={gx-47} cy={gy-82} r={2.5} fill={G} opacity="0.5" />
            {/* Right tower */}
            <rect x={gx+36} y={gy-52} width={22} height={58} fill={FILL} {...st} />
            <rect x={gx+33} y={gy-56} width={28} height={6}  fill={FILL} {...st} />
            {[37,45,53].map(bx => <rect key={bx} x={gx+bx} y={gy-64} width={6} height={8} fill={FILL} {...st} />)}
            <polygon points={`${gx+36},${gy-64} ${gx+58},${gy-64} ${gx+47},${gy-82}`}
              fill={FILL} stroke={G} strokeOpacity="0.65" strokeWidth="1.2" />
            <circle cx={gx+47} cy={gy-82} r={2.5} fill={G} opacity="0.5" />
            {/* Gate body */}
            <rect x={gx-34} y={gy-44} width={68} height={50} fill={FILL} {...st} />
            {/* Gate arch */}
            <path d={`M ${gx-34} ${gy-44} Q ${gx} ${gy-92} ${gx+34} ${gy-44}`}
              fill={FILL} stroke={G} strokeOpacity="0.75" strokeWidth="2.2" />
            {/* Keystone */}
            <polygon points={`${gx},${gy-88} ${gx-7},${gy-78} ${gx+7},${gy-78}`}
              fill={G} opacity="0.45" />
            {/* Capstone bars */}
            <rect x={gx-42} y={gy-49} width={32} height={7} fill={G} opacity="0.28" rx="1" />
            <rect x={gx+10} y={gy-49} width={32} height={7} fill={G} opacity="0.28" rx="1" />
            {/* Gate passage glow */}
            <rect x={gx-28} y={gy-38} width={56} height={44} fill={GA('0.07')} />
            {/* Door details */}
            <line x1={gx} y1={gy-38} x2={gx} y2={gy+6} stroke={G} strokeOpacity="0.2" strokeWidth="1" />
            <rect x={gx-6} y={gy-26} width={5} height={7} rx="1" fill={G} opacity="0.1" />
            <rect x={gx+1} y={gy-26} width={5} height={7} rx="1" fill={G} opacity="0.1" />
          </g>
        )
      })()}

      {/* ── Decorative border frame ── */}
      <rect x="12" y="12" width={W-24} height={H-24}
        fill="none" stroke={G} strokeOpacity="0.22" strokeWidth="1.8" />
      <rect x="20" y="20" width={W-40} height={H-40}
        fill="none" stroke={G} strokeOpacity="0.09" strokeWidth="0.9" />
      {/* Corner ornaments */}
      {[[20,20],[W-20,20],[20,H-20],[W-20,H-20]].map(([ox,oy],i) => {
        const sx = i % 2 === 0 ? 1 : -1, sy = i < 2 ? 1 : -1
        return (
          <g key={i} transform={`translate(${ox},${oy})`}>
            <path d={`M 0 0 L ${sx*34} 0 M 0 0 L 0 ${sy*34}`}
              stroke={G} strokeOpacity="0.5" strokeWidth="2.2" />
            <path d={`M ${sx*10} 0 L ${sx*10} ${sy*10} L 0 ${sy*10}`}
              stroke={G} strokeOpacity="0.22" strokeWidth="0.9" fill="none" />
            <polygon points={`${sx*18},${sy*4} ${sx*4},${sy*18} ${sx*4},${sy*4}`}
              fill={G} opacity="0.13" />
            <circle cx={sx*7} cy={sy*7} r="2.8" fill={G} opacity="0.38" />
          </g>
        )
      })}

      {/* ── Compass rose (bottom-right) ── */}
      {(() => {
        const rx = W - 85, ry = H - 85, r = 44
        return (
          <g opacity="0.7">
            {/* Background disc */}
            <circle cx={rx} cy={ry} r={r+10} fill="#080C06" opacity="0.85" />
            <circle cx={rx} cy={ry} r={r+10} fill="none" stroke={G} strokeOpacity="0.25" strokeWidth="1" />
            {/* Rings */}
            <circle cx={rx} cy={ry} r={r}        fill="none" stroke={G} strokeOpacity="0.4"  strokeWidth="1.2" />
            <circle cx={rx} cy={ry} r={r * 0.55} fill="none" stroke={G} strokeOpacity="0.22" strokeWidth="0.8" />
            {/* 8 spokes */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => {
              const rad = (deg * Math.PI) / 180
              const isMajor = deg % 90 === 0
              return (
                <line key={deg}
                  x1={rx + Math.cos(rad) * r * (isMajor ? 0.18 : 0.28)}
                  y1={ry + Math.sin(rad) * r * (isMajor ? 0.18 : 0.28)}
                  x2={rx + Math.cos(rad) * r} y2={ry + Math.sin(rad) * r}
                  stroke={G} strokeOpacity={isMajor ? 0.65 : 0.32}
                  strokeWidth={isMajor ? 1.5 : 0.7} />
              )
            })}
            {/* North pointer – gold */}
            <polygon points={`${rx},${ry-r-3} ${rx-6},${ry-r*0.48} ${rx},${ry} ${rx+6},${ry-r*0.48}`}
              fill={G} opacity="0.72" />
            {/* South pointer */}
            <polygon points={`${rx},${ry+r+3} ${rx-5},${ry+r*0.48} ${rx},${ry} ${rx+5},${ry+r*0.48}`}
              fill="#6A6050" opacity="0.5" />
            {/* E/W minor */}
            <polygon points={`${rx-r-3},${ry} ${rx-r*0.48},${ry-4} ${rx},${ry} ${rx-r*0.48},${ry+4}`}
              fill="#6A6050" opacity="0.4" />
            <polygon points={`${rx+r+3},${ry} ${rx+r*0.48},${ry-4} ${rx},${ry} ${rx+r*0.48},${ry+4}`}
              fill="#6A6050" opacity="0.4" />
            {/* Center gem */}
            <circle cx={rx} cy={ry} r={6}   fill={G} opacity="0.75" />
            <circle cx={rx} cy={ry} r={3.5} fill={DARK} />
            {/* Cardinal labels */}
            {[['S',0,-1],['V',1,0],['J',0,1],['Z',-1,0]].map(([l,dx,dy]) => (
              <text key={l} x={rx + dx*(r+15)} y={ry + dy*(r+15)}
                textAnchor="middle" dominantBaseline="middle"
                fontSize="10" fill={G} fontFamily="Georgia,serif" fontWeight="bold" opacity="0.8">
                {l}
              </text>
            ))}
          </g>
        )
      })()}

      {/* ── Map title ── */}
      <text x={W / 2} y={H - 18} textAnchor="middle"
        fontSize="11" fill={G} opacity="0.2"
        fontFamily="Georgia, serif" letterSpacing="10">
        DRAČÍ AKADEMIE · KAMPUS
      </text>

      {/* ── Vignette & edge fades ── */}
      <rect width={W} height={H} fill="url(#mgVignette)" />
      <rect width={W} height={H} fill="url(#mgFades)" />
    </svg>
  )
}

// ── Diamond pin (Witcher-style) ─────────────────────────────────────────────
function DiamondPin({ building, isActive, isFiltered, onClick }) {
  const isCenter = building.id === 'draci-kruh'
  const size = isCenter ? 38 : 26

  return (
    <div
      className="absolute select-none"
      style={{
        left: `${building.x}%`,
        top: `${building.y}%`,
        transform: 'translate(-50%, -50%)',
        zIndex: isActive ? 50 : isFiltered ? 5 : 20,
        transition: 'opacity 0.35s, z-index 0s',
        opacity: isFiltered ? 0.2 : 1,
      }}
    >
      <button
        onClick={() => onClick(building.id)}
        className="relative group focus:outline-none"
        title={building.label}
        aria-label={building.label}
      >
        {/* Outer pulse ring (active) */}
        {isActive && (
          <span
            className="absolute animate-ping pointer-events-none"
            style={{
              inset: `-${size * 0.4}px`,
              borderRadius: '50%',
              background: 'rgba(201,148,58,0.25)',
            }}
          />
        )}

        {/* Glow halo */}
        <span
          className="absolute pointer-events-none rounded-full transition-all duration-300"
          style={{
            inset: `-${size * 0.3}px`,
            boxShadow: isActive
              ? '0 0 28px 10px rgba(201,148,58,0.45)'
              : undefined,
          }}
        />
        <span
          className="absolute pointer-events-none rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{
            inset: `-${size * 0.25}px`,
            boxShadow: '0 0 18px 6px rgba(201,148,58,0.3)',
          }}
        />

        {/* Diamond body */}
        <span
          className="relative block transition-all duration-200"
          style={{
            width:  `${size}px`,
            height: `${size}px`,
            transform: 'rotate(45deg)',
            background: isActive
              ? 'rgba(201,148,58,0.22)'
              : 'rgba(5,8,14,0.9)',
            border: `${isCenter ? 2.5 : 2}px solid ${
              isActive ? '#C9943A' : 'rgba(201,148,58,0.55)'
            }`,
            boxShadow: isActive
              ? 'inset 0 0 12px rgba(201,148,58,0.2)'
              : 'inset 0 0 6px rgba(0,0,0,0.6)',
            transition: 'background 0.2s, border-color 0.2s, box-shadow 0.2s',
          }}
        >
          {/* Icon (counter-rotated) */}
          <span
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: 'rotate(-45deg)',
              fontSize: isCenter ? '16px' : '11px',
            }}
          >
            {building.icon}
          </span>
        </span>

        {/* Stem */}
        <span
          className="absolute left-1/2 block transition-colors duration-200"
          style={{
            bottom: `-${size * 0.45}px`,
            transform: 'translateX(-50%)',
            width: '1.5px',
            height: `${size * 0.4}px`,
            background: isActive ? '#C9943A' : 'rgba(201,148,58,0.35)',
          }}
        />
        {/* Ground dot */}
        <span
          className="absolute left-1/2 block rounded-full transition-colors duration-200"
          style={{
            bottom: `-${size * 0.5 + 4}px`,
            transform: 'translateX(-50%)',
            width: '4px',
            height: '4px',
            background: isActive ? '#C9943A' : 'rgba(201,148,58,0.3)',
          }}
        />

        {/* Label under pin */}
        <span
          className="absolute w-max pointer-events-none transition-colors duration-200"
          style={{
            bottom: `-${size * 0.5 + 18}px`,
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '8px',
            fontFamily: 'Georgia, serif',
            color: isActive ? '#C9943A' : 'rgba(222,201,145,0.55)',
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            textShadow: '0 1px 4px rgba(0,0,0,0.95)',
          }}
        >
          {building.label}
        </span>
      </button>
    </div>
  )
}

// ── Building detail panel (slide-in from right) ──────────────────────────────
function BuildingPanel({ building, onClose }) {
  const open = !!building

  return (
    <div
      className="absolute top-0 right-0 bottom-0 z-40 flex flex-col overflow-hidden"
      style={{
        width: 'clamp(200px, 38%, 320px)',
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.32s cubic-bezier(0.4,0,0.2,1)',
        background: 'rgba(4,6,12,0.97)',
        borderLeft: '1px solid rgba(201,148,58,0.2)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      {building && (
        <>
          {/* Header */}
          <div
            className="flex-shrink-0 p-4 border-b"
            style={{ borderColor: 'rgba(201,148,58,0.18)' }}
          >
            {/* Close + badge row */}
            <div className="flex items-center justify-between mb-3">
              <span
                className="text-[9px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded-sm"
                style={{
                  color: '#C9943A',
                  border: '1px solid rgba(201,148,58,0.3)',
                  background: 'rgba(201,148,58,0.08)',
                }}
              >
                {building.for}
              </span>
              <button
                onClick={onClose}
                className="w-6 h-6 flex items-center justify-center rounded-sm text-[10px] transition-colors"
                style={{
                  border: '1px solid rgba(201,148,58,0.2)',
                  color: 'rgba(201,148,58,0.5)',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#C9943A'; e.currentTarget.style.borderColor = 'rgba(201,148,58,0.6)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(201,148,58,0.5)'; e.currentTarget.style.borderColor = 'rgba(201,148,58,0.2)' }}
              >
                ✕
              </button>
            </div>

            {/* Icon + name */}
            <div className="flex items-start gap-3">
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-sm"
                style={{
                  width: '42px', height: '42px',
                  background: 'rgba(201,148,58,0.09)',
                  border: '1px solid rgba(201,148,58,0.28)',
                  fontSize: '22px',
                }}
              >
                {building.icon}
              </div>
              <div className="min-w-0">
                <h3
                  className="font-cinzel font-bold leading-snug"
                  style={{ fontSize: '12px', color: '#DEC991' }}
                >
                  {building.label}
                </h3>
                <p className="mt-0.5 leading-relaxed" style={{ fontSize: '10px', color: 'rgba(180,170,150,0.7)' }}>
                  {building.desc}
                </p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <p className="leading-relaxed" style={{ fontSize: '11px', color: 'rgba(200,190,170,0.85)' }}>
              {building.detail}
            </p>

            {/* Courses */}
            <div>
              <p
                className="uppercase tracking-widest mb-2"
                style={{ fontSize: '9px', color: 'rgba(201,148,58,0.55)' }}
              >
                Kurzy & obsah
              </p>
              <div className="space-y-1.5">
                {building.courses.map(c => (
                  <div key={c} className="flex items-center gap-2">
                    <span style={{ color: 'rgba(201,148,58,0.4)', fontSize: '8px' }}>◆</span>
                    <span style={{ fontSize: '10px', color: 'rgba(180,170,150,0.75)' }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div
            className="flex-shrink-0 p-4 border-t"
            style={{ borderColor: 'rgba(201,148,58,0.15)' }}
          >
            <a
              href={building.href}
              className="flex items-center justify-center gap-2 w-full py-2 rounded-sm text-xs font-semibold transition-all duration-200"
              style={{
                border: '1px solid rgba(201,148,58,0.35)',
                background: 'rgba(201,148,58,0.08)',
                color: '#C9943A',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,148,58,0.18)'; e.currentTarget.style.borderColor = 'rgba(201,148,58,0.6)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(201,148,58,0.08)'; e.currentTarget.style.borderColor = 'rgba(201,148,58,0.35)' }}
            >
              Vstoupit <span>→</span>
            </a>
          </div>
        </>
      )}
    </div>
  )
}

// ── Category filter pills ─────────────────────────────────────────────────────
const CATEGORIES = [...new Set(buildings.map(b => b.for))]

function FilterPills({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {['Vše', ...CATEGORIES].map(cat => {
        const isActive = cat === 'Vše' ? !active : active === cat
        return (
          <button
            key={cat}
            onClick={() => onChange(isActive || cat === 'Vše' ? null : cat)}
            className="text-[10px] px-3 py-1 rounded-full transition-all duration-200"
            style={{
              border: `1px solid ${isActive ? '#C9943A' : 'rgba(201,148,58,0.2)'}`,
              background: isActive ? 'rgba(201,148,58,0.14)' : 'transparent',
              color: isActive ? '#C9943A' : 'rgba(180,170,150,0.55)',
            }}
          >
            {cat}
          </button>
        )
      })}
    </div>
  )
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function CampusMap() {
  const [activeId, setActiveId]     = useState(null)
  const [filter, setFilter]         = useState(null)
  const [imgLoaded, setImgLoaded]   = useState(false)
  const [imgError, setImgError]     = useState(false)

  const activeBuilding = buildings.find(b => b.id === activeId) ?? null

  const handlePin  = useCallback((id) => setActiveId(prev => prev === id ? null : id), [])
  const handleClose = useCallback(() => setActiveId(null), [])

  // ESC to close
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') handleClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [handleClose])

  return (
    <section id="kampus" className="py-16 md:py-24" style={{ backgroundColor: '#080E18' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, rgba(201,148,58,0.5))' }} />
          <span style={{ color: 'rgba(201,148,58,0.55)', fontSize: '13px' }}>◆◆◆</span>
          <h2 className="font-cinzel text-center shrink-0 px-2 font-bold uppercase tracking-widest"
            style={{ fontSize: 'clamp(1rem,2.5vw,1.6rem)', color: '#DEC991' }}>
            Kampus Dračí akademie
          </h2>
          <span style={{ color: 'rgba(201,148,58,0.55)', fontSize: '13px' }}>◆◆◆</span>
          <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, rgba(201,148,58,0.5))' }} />
        </div>
        <p className="text-center mb-6"
          style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(180,170,150,0.5)' }}>
          Klikni na pin · detail budovy se otevře vpravo · ESC pro zavření
        </p>

        {/* Category filters */}
        <FilterPills active={filter} onChange={setFilter} />

        {/* Map container */}
        <div
          className="relative rounded-sm overflow-hidden shadow-2xl shadow-black/80"
          style={{
            aspectRatio: '4/3',
            ring: '1px solid rgba(201,148,58,0.2)',
            border: '1px solid rgba(201,148,58,0.18)',
          }}
        >
          {/* SVG fallback (shows while image loads or on error) */}
          {(imgError || !imgLoaded) && <MapSVG />}

          {/* Primary background – isometric campus map */}
          {!imgError && (
            <img
              src="/img/kampus-mapa.png"
              alt="Kampus Dračí akademie"
              className="absolute inset-0 w-full h-full object-cover object-center select-none"
              style={{ opacity: imgLoaded ? 1 : 0, transition: 'opacity 0.6s' }}
              draggable="false"
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgError(true)}
            />
          )}

          {/* Vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, transparent 50%, rgba(5,8,14,0.65) 100%)' }}
          />

          {/* Click-outside backdrop (when panel open, dims left side slightly) */}
          {activeBuilding && (
            <div
              className="absolute inset-0 cursor-pointer"
              style={{ zIndex: 25, background: 'rgba(0,0,0,0)' }}
              onClick={handleClose}
            />
          )}

          {/* Diamond pins */}
          <div className="absolute inset-0" style={{ overflow: 'visible' }}>
            {buildings.map(b => (
              <DiamondPin
                key={b.id}
                building={b}
                isActive={activeId === b.id}
                isFiltered={filter ? b.for !== filter : false}
                onClick={handlePin}
              />
            ))}
          </div>

          {/* Building detail panel */}
          <BuildingPanel building={activeBuilding} onClose={handleClose} />

          {/* Corner ornaments */}
          {[['top-2 left-2','border-t border-l'],['top-2 right-2','border-t border-r'],
            ['bottom-2 left-2','border-b border-l'],['bottom-2 right-2','border-b border-r']].map(([pos,border]) => (
            <div key={pos} className={`absolute ${pos} w-5 h-5 ${border} pointer-events-none`}
              style={{ borderColor: 'rgba(201,148,58,0.28)' }} />
          ))}

          {/* Building count */}
          <div
            className="absolute bottom-3 left-0 right-0 text-center pointer-events-none"
            style={{ fontSize: '9px', letterSpacing: '0.12em', color: 'rgba(201,148,58,0.3)' }}
          >
            ◆ {buildings.length} BUDOV ◆ DRAČÍ AKADEMIE ◆
          </div>
        </div>

        {/* Mobile list */}
        <div className="mt-6 grid grid-cols-2 gap-2 md:hidden">
          {buildings
            .filter(b => !filter || b.for === filter)
            .map(b => (
            <button
              key={b.id}
              onClick={() => handlePin(b.id)}
              className="text-left p-3 rounded-sm transition-all duration-200"
              style={{
                border: `1px solid ${activeId === b.id ? '#C9943A' : 'rgba(201,148,58,0.15)'}`,
                background: activeId === b.id ? 'rgba(201,148,58,0.08)' : 'rgba(10,14,20,0.6)',
              }}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-sm">{b.icon}</span>
                <p className="font-cinzel font-semibold leading-tight"
                  style={{ fontSize: '10px', color: activeId === b.id ? '#C9943A' : '#DEC991' }}>
                  {b.label}
                </p>
              </div>
              <p style={{ fontSize: '9px', color: 'rgba(180,170,150,0.6)', lineHeight: '1.5' }}>
                {b.desc}
              </p>
              {activeId === b.id && (
                <div className="mt-2 pt-2 space-y-1" style={{ borderTop: '1px solid rgba(201,148,58,0.15)' }}>
                  {b.courses.map(c => (
                    <p key={c} style={{ fontSize: '9px', color: '#C9943A' }}>◆ {c}</p>
                  ))}
                  <a href={b.href} className="inline-block mt-1 font-semibold"
                    style={{ fontSize: '9px', color: '#C9943A' }}>
                    Vstoupit →
                  </a>
                </div>
              )}
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}
