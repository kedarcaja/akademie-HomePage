import { useState } from 'react'

// Building data — x/y as % of map dimensions
const buildings = [
  { id: 'sin-stezek',   x: 22, y: 28, label: 'Síň stezek',             icon: '🧭', desc: 'Vyber si svou cestu a rozvíjej se po ní.',               detail: 'Vstupní bod pro volbu tvůrčí stezky. Každá stezka má vlastní milníky, projekty a komunitu.',             courses: ['Stezka malíře', 'Stezka modeláře', 'Stezka stavitele světů'], for: 'Všichni',        href: '#stezky' },
  { id: 'dilna',        x: 13, y: 44, label: 'Dílna první figurky',     icon: '🏺', desc: 'První vlastnoruční výtvor oživá právě tady.',             detail: 'Místo pro úplné začátečníky. Bojit se chybovat je tady zakázáno — chyba je součást procesu.',         courses: ['Figurka z nuly', 'Základy malování', 'Moje první armáda'],     for: 'Začátečníci',    href: '#zacni-tady' },
  { id: 'kovarna',      x: 17, y: 57, label: 'Kovárna modelářů',        icon: '⚒️', desc: 'Stavíme, lepíme, zkoušíme. Z pevného nápadu model.',       detail: 'Pokročilé techniky modelování a konverzí. Pro ty, kdo chtějí překročit hranice standardních kitů.',   courses: ['Konverze a kitbashing', 'Scratch building', 'Terén a dioramy'], for: 'Pokročilí',      href: '#stezky' },
  { id: 'nadvori',      x: 20, y: 67, label: 'Tréninkové nádvoří',      icon: '🎯', desc: 'Místo tréninku trpělivosti, soustředění a odvahy.',       detail: 'Mentální stránka tvorby. Jak pracovat s frustrací, budovat rutinu a vytrvat i když to jde pomalu.',    courses: ['Soustředění a flow', 'Práce s chybou', 'Trpělivost jako nástroj'], for: 'Všichni',     href: '#jak-projit-kampusem' },
  { id: 'atelier',      x: 27, y: 80, label: 'Ateliér Valiente',        icon: '🏛️', desc: 'Kde vznikají pomůcky, které sami používáme.',             detail: 'Zákulisí Valiente Project — jak tvoříme pomůcky, lekce a obsah, který každý den v akademii používáme.', courses: ['Za kulisami tvorby', 'Naše metody', 'Jak testujeme projekty'], for: 'Zvídaví',        href: '#o-nas' },
  { id: 'draci-kruh',   x: 50, y: 47, label: 'Dračí kruh',              icon: '🐉', desc: 'Sdílíme, inspirujeme a rosteme spolu.',                   detail: 'Srdce kampusu. Místo kde se sbíhají stezky, sdílíme pokroky a slavíme chyby jako vítězství.',           courses: ['Komunitní výzvy', 'Sdílení projektů', 'Živé workshopy'],       for: 'Komunita',       href: '#komunita' },
  { id: 'hlavni-brana', x: 50, y: 88, label: 'Hlavní brána',            icon: '🚪', desc: 'Každá cesta začíná tímto krokem.',                        detail: 'Vstupní bod do celého kampusu. Přivítej se, zorientuj a vyber svůj první krok — bez spěchu.',          courses: ['Orientace v kampusu', 'Výběr stezky', 'Úvodní projekt'],       for: 'Nováčci',        href: '#zacni-tady' },
  { id: 'vez-barev',    x: 36, y: 12, label: 'Alchymistická věž barev', icon: '🎨', desc: 'Místo, kde vznikají kouzelné kombinace.',                  detail: 'Vše o barvách — míchání, vrstvení, washes, glazury a pokročilé techniky malování miniatur.',            courses: ['Základy míchání barev', 'Glazury a washes', 'OSL efekty'],      for: 'Všechny úrovně', href: '#stezky' },
  { id: 'knihovna',     x: 68, y: 10, label: 'Knihovna mistrů',         icon: '📚', desc: 'Příběhy, techniky a znalosti generací.',                  detail: 'Rozsáhlá sbírka technik, inspirace a příběhů od mistrů oboru. Videotéka, čítárna a archiv.',           courses: ['Techniky legend', 'Inspirační knihovna', 'Světy fantasy'],      for: 'Všichni',        href: '#komunita' },
  { id: 'pavilon',      x: 80, y: 32, label: 'Pavilon rodičů',          icon: '🏠', desc: 'Zázemí, kde rodiče najdou odpovědi.',                     detail: 'Speciální sekce pro rodiče — jak podporovat tvůrce doma, co si připravit a jak fungují workshopy.',    courses: ['Průvodce pro rodiče', 'Podpora doma', 'Dětské projekty'],       for: 'Rodiče',         href: '#deti-rodice' },
  { id: 'ucitelska',    x: 83, y: 49, label: 'Učitelská síň',           icon: '🎓', desc: 'Naši průvodci a stráž cti akademie.',                     detail: 'Pro pedagogy a vedoucí kroužků. Metodiky, materiály a kurzy pro výuku kreativních dovedností.',       courses: ['Metodika výuky', 'Vedení workshopů', 'Stát se průvodcem'],      for: 'Pedagogové',     href: '#skoly' },
  { id: 'trziste',      x: 73, y: 62, label: 'Tržiště akademie',        icon: '🛒', desc: 'Potřebuješ vybavení, inspiraci nebo jen svačinu.',        detail: 'Akademický obchod — barvy, štětce, kity a pomůcky, které skutečně doporučujeme a sami používáme.',    courses: ['Barvy a štětce', 'Figurky a kity', 'Nástroje mistrů'],         for: 'Všichni',        href: '#obchod' },
  { id: 'draci-posta',  x: 79, y: 77, label: 'Dračí pošta',             icon: '📬', desc: 'Zprávy, dopisy a překvapení.',                            detail: 'Zůstaň v kontaktu. Newsletter s novinkami, výzvy, oznámení workshopů a zprávy z celé akademie.',       courses: ['Newsletter akademie', 'Měsíční výzvy', 'Oznámení workshopů'],  for: 'Všichni',        href: '#kontakt' },
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
const cx = W * 0.50  // dragon circle center X
const cy = H * 0.44  // dragon circle center Y

// SVG map background component
function MapSVG() {
  const nonCenter = buildings.filter(b => b.id !== 'draci-kruh')

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full h-full"
      style={{ display: 'block' }}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        {/* Base radial bg */}
        <radialGradient id="mapBg" cx="50%" cy="44%" r="65%">
          <stop offset="0%"   stopColor="#0D1830" />
          <stop offset="100%" stopColor="#050810" />
        </radialGradient>

        {/* Central glow */}
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#C9943A" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#C9943A" stopOpacity="0" />
        </radialGradient>

        {/* Building glow (reusable, objectBoundingBox) */}
        <radialGradient id="bldGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#C9943A" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#C9943A" stopOpacity="0" />
        </radialGradient>

        {/* Gate glow */}
        <radialGradient id="gateGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#C9943A" stopOpacity="0.13" />
          <stop offset="100%" stopColor="#C9943A" stopOpacity="0" />
        </radialGradient>

        {/* Edge vignette */}
        <radialGradient id="vignette" cx="50%" cy="50%" r="55%" gradientUnits="userSpaceOnUse"
          x1="0" y1="0" x2={W} y2={H}>
          <stop offset="0%"   stopColor="#050810" stopOpacity="0" />
          <stop offset="100%" stopColor="#050810" stopOpacity="0.92" />
        </radialGradient>

        {/* Subtle top/bottom fade */}
        <linearGradient id="topFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#050810" stopOpacity="0.5" />
          <stop offset="15%" stopColor="#050810" stopOpacity="0" />
          <stop offset="85%" stopColor="#050810" stopOpacity="0" />
          <stop offset="100%" stopColor="#050810" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* ── Background ── */}
      <rect width={W} height={H} fill="url(#mapBg)" />

      {/* ── Grid lines ── */}
      {Array.from({ length: 21 }, (_, i) => i * 80).map(x => (
        <line key={`v${x}`} x1={x} y1={0} x2={x} y2={H}
          stroke="#C9943A" strokeOpacity="0.035" strokeWidth="1" />
      ))}
      {Array.from({ length: 12 }, (_, i) => i * 80).map(y => (
        <line key={`h${y}`} x1={0} y1={y} x2={W} y2={y}
          stroke="#C9943A" strokeOpacity="0.035" strokeWidth="1" />
      ))}

      {/* ── Connecting dashed roads ── */}
      {nonCenter.map(b => {
        const bx = (b.x / 100) * W
        const by = (b.y / 100) * H
        const mx = (bx + cx) / 2 + (Math.random() > 0.5 ? 40 : -40)
        const my = (by + cy) / 2
        return (
          <path key={b.id}
            d={`M ${bx} ${by} Q ${mx} ${my} ${cx} ${cy}`}
            stroke="#C9943A" strokeOpacity="0.14" strokeWidth="1.2"
            fill="none" strokeDasharray="5 9"
          />
        )
      })}

      {/* ── Building ambient glows ── */}
      {buildings.map(b => {
        const bx = (b.x / 100) * W
        const by = (b.y / 100) * H
        const r = b.id === 'draci-kruh' ? 140 : b.id === 'hlavni-brana' ? 90 : 65
        return (
          <ellipse key={b.id} cx={bx} cy={by} rx={r} ry={r * 0.85}
            fill="url(#bldGlow)" />
        )
      })}

      {/* ── Dragon Circle — central feature ── */}
      {/* Outer ceremonial ring */}
      <circle cx={cx} cy={cy} r={90}
        fill="none" stroke="#C9943A" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="3 8" />
      {/* Main ring */}
      <circle cx={cx} cy={cy} r={68}
        fill="rgba(201,148,58,0.04)" stroke="#C9943A" strokeOpacity="0.35" strokeWidth="1.5" />
      {/* Inner ring */}
      <circle cx={cx} cy={cy} r={44}
        fill="rgba(201,148,58,0.06)" stroke="#C9943A" strokeOpacity="0.45" strokeWidth="1" />
      {/* Glow */}
      <ellipse cx={cx} cy={cy} rx={160} ry={130} fill="url(#centerGlow)" />
      {/* Cardinal marks */}
      {[0, 90, 180, 270].map(deg => {
        const rad = (deg * Math.PI) / 180
        const x1 = cx + Math.cos(rad) * 44
        const y1 = cy + Math.sin(rad) * 44
        const x2 = cx + Math.cos(rad) * 68
        const y2 = cy + Math.sin(rad) * 68
        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="#C9943A" strokeOpacity="0.5" strokeWidth="1.5" />
      })}
      {/* Dragon symbol text */}
      <text x={cx} y={cy + 5} textAnchor="middle" dominantBaseline="middle"
        fontSize="28" opacity="0.35" fill="#C9943A">
        🐉
      </text>

      {/* ── Main Gate arch ── */}
      {(() => {
        const gx = W * 0.50
        const gy = H * 0.84
        return (
          <>
            <ellipse cx={gx} cy={gy} rx={90} ry={60} fill="url(#gateGlow)" />
            {/* Gate pillars */}
            <rect x={gx - 22} y={gy - 20} width={10} height={35}
              fill="#0D1830" stroke="#C9943A" strokeOpacity="0.45" strokeWidth="1" rx="1" />
            <rect x={gx + 12} y={gy - 20} width={10} height={35}
              fill="#0D1830" stroke="#C9943A" strokeOpacity="0.45" strokeWidth="1" rx="1" />
            {/* Arch */}
            <path d={`M ${gx - 22} ${gy - 20} Q ${gx} ${gy - 50} ${gx + 22} ${gy - 20}`}
              fill="none" stroke="#C9943A" strokeOpacity="0.5" strokeWidth="1.5" />
            {/* Capstones */}
            <rect x={gx - 26} y={gy - 24} width={18} height={5}
              fill="#C9943A" opacity="0.25" rx="1" />
            <rect x={gx + 8} y={gy - 24} width={18} height={5}
              fill="#C9943A" opacity="0.25" rx="1" />
          </>
        )
      })()}

      {/* ── Building silhouettes ── */}
      {buildings.filter(b => b.id !== 'draci-kruh' && b.id !== 'hlavni-brana').map(b => {
        const bx = (b.x / 100) * W
        const by = (b.y / 100) * H
        const isTower = ['sin-stezek', 'vez-barev', 'knihovna', 'ucitelska'].includes(b.id)
        const isWide  = ['trziste'].includes(b.id)
        if (isTower) {
          return (
            <g key={b.id} transform={`translate(${bx},${by})`} opacity="0.6">
              <rect x="-7" y="-22" width="14" height="22" fill="#0A1422" stroke="#C9943A" strokeOpacity="0.4" strokeWidth="1" />
              <polygon points="-7,-22 7,-22 0,-36" fill="#0A1422" stroke="#C9943A" strokeOpacity="0.45" strokeWidth="1" />
              <rect x="-2" y="-14" width="4" height="6" fill="#C9943A" opacity="0.2" />
            </g>
          )
        }
        if (isWide) {
          return (
            <g key={b.id} transform={`translate(${bx},${by})`} opacity="0.6">
              <rect x="-16" y="-10" width="32" height="14" fill="#0A1422" stroke="#C9943A" strokeOpacity="0.4" strokeWidth="1" />
              <rect x="-12" y="-14" width="24" height="5" fill="#0A1422" stroke="#C9943A" strokeOpacity="0.3" strokeWidth="1" />
            </g>
          )
        }
        return (
          <g key={b.id} transform={`translate(${bx},${by})`} opacity="0.6">
            <rect x="-9" y="-14" width="18" height="16" fill="#0A1422" stroke="#C9943A" strokeOpacity="0.4" strokeWidth="1" />
            <polygon points="-10,-14 10,-14 0,-26" fill="#0A1422" stroke="#C9943A" strokeOpacity="0.35" strokeWidth="1" />
          </g>
        )
      })}

      {/* ── Compass rose (top-right) ── */}
      {(() => {
        const rx = W - 80, ry = 70
        return (
          <g opacity="0.35">
            <circle cx={rx} cy={ry} r={22} fill="none" stroke="#C9943A" strokeWidth="0.8" />
            <circle cx={rx} cy={ry} r={5} fill="#C9943A" opacity="0.4" />
            {['N','E','S','W'].map((dir, i) => {
              const angle = i * 90 - 90
              const rad   = (angle * Math.PI) / 180
              const tx    = rx + Math.cos(rad) * 16
              const ty    = ry + Math.sin(rad) * 16
              return (
                <text key={dir} x={tx} y={ty} textAnchor="middle" dominantBaseline="middle"
                  fontSize="8" fill="#C9943A" fontFamily="Georgia, serif" fontWeight="bold">
                  {dir}
                </text>
              )
            })}
            {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => {
              const rad = (deg * Math.PI) / 180
              return (
                <line key={deg}
                  x1={rx + Math.cos(rad) * 6} y1={ry + Math.sin(rad) * 6}
                  x2={rx + Math.cos(rad) * 22} y2={ry + Math.sin(rad) * 22}
                  stroke="#C9943A" strokeWidth={deg % 90 === 0 ? '1' : '0.5'} />
              )
            })}
          </g>
        )
      })()}

      {/* ── Title watermark ── */}
      <text x={W / 2} y={H - 18} textAnchor="middle"
        fontSize="11" fill="#C9943A" opacity="0.18"
        fontFamily="Georgia, serif" letterSpacing="6">
        DRAČÍ AKADEMIE · KAMPUS
      </text>

      {/* ── Vignette & top/bottom fades ── */}
      <rect width={W} height={H} fill="url(#vignette)" />
      <rect width={W} height={H} fill="url(#topFade)" />
    </svg>
  )
}

function getPopupStyle(x, y) {
  return {
    [x > 58 ? 'right' : 'left']: '34px',
    [y > 65 ? 'bottom' : 'top']: '-6px',
  }
}

function Waypoint({ building, isActive, onClick }) {
  const isCenter = building.id === 'draci-kruh' || building.id === 'hlavni-brana'
  return (
    <div
      className="absolute"
      style={{
        left: `${building.x}%`,
        top: `${building.y}%`,
        transform: 'translate(-50%, -50%)',
        zIndex: isActive ? 40 : 20,
      }}
    >
      <button
        onClick={() => onClick(building.id)}
        className="relative focus:outline-none group"
        title={building.label}
        aria-label={building.label}
      >
        {/* Pulse ring when active */}
        {isActive && (
          <span className="absolute rounded-full animate-ping bg-brand-gold/40 pointer-events-none"
            style={{ inset: '-4px' }} />
        )}
        {/* Hover glow */}
        <span className={`absolute rounded-full pointer-events-none transition-all duration-300
          ${isActive
            ? 'shadow-[0_0_16px_5px_rgba(201,148,58,0.55)]'
            : 'group-hover:shadow-[0_0_12px_3px_rgba(201,148,58,0.35)]'
          }`}
          style={{ inset: '-2px' }}
        />
        {/* Dot */}
        <span className={`relative flex items-center justify-center rounded-full border-2 transition-all duration-200 select-none
          ${isCenter
            ? `w-11 h-11 text-xl ${isActive ? 'border-brand-gold bg-brand-gold/25' : 'border-brand-gold/60 bg-brand-darker/80 group-hover:border-brand-gold'}`
            : `w-8  h-8  text-sm  ${isActive ? 'border-brand-gold bg-brand-gold/20' : 'border-brand-gold/40 bg-brand-darker/75 group-hover:border-brand-gold/80'}`
          }`}
        >
          {building.icon}
        </span>
      </button>

      {/* Popup */}
      {isActive && (
        <div
          className="absolute z-50 w-52 rounded-sm border border-brand-gold/40 bg-brand-darker/96 backdrop-blur-md shadow-2xl shadow-black/80 animate-fade-up overflow-hidden"
          style={{ ...getPopupStyle(building.x, building.y), animationDuration: '0.2s' }}
        >
          <div className="flex items-center gap-2 px-3 py-2.5 border-b border-brand-border">
            <span className="text-base shrink-0">{building.icon}</span>
            <p className="font-cinzel text-brand-gold text-[11px] font-bold leading-tight flex-1">{building.label}</p>
          </div>
          <div className="px-3 py-2.5 space-y-2">
            <p className="text-brand-text text-[11px] leading-relaxed">{building.detail}</p>
            <div className="flex flex-wrap gap-1">
              {building.courses.map(c => (
                <span key={c} className="text-[9px] px-1.5 py-0.5 rounded border border-brand-border bg-brand-card text-brand-text-dim">
                  {c}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded border ${forBadge[building.for]}`}>
                {building.for}
              </span>
              <a href={building.href}
                className="text-[10px] text-brand-gold hover:text-brand-gold-light font-semibold flex items-center gap-0.5 transition-colors">
                Vstoupit <span>›</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function CampusMap() {
  const [activeId, setActiveId] = useState(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [mapError, setMapError] = useState(false)
  const handleClick = (id) => setActiveId(prev => prev === id ? null : id)

  return (
    <section id="kampus" className="py-20 md:py-28" style={{ backgroundColor: '#080E18' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-gold/30 to-brand-gold/50" />
          <span className="text-brand-gold/60 text-sm shrink-0">◆◆◆</span>
          <h2 className="font-cinzel text-lg sm:text-2xl md:text-3xl font-bold tracking-[0.12em] uppercase text-brand-parchment text-center shrink-0 px-2">
            Kampus Dračí akademie
          </h2>
          <span className="text-brand-gold/60 text-sm shrink-0">◆◆◆</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-brand-gold/30 to-brand-gold/50" />
        </div>
        <p className="text-center text-brand-text-dim text-xs tracking-[0.15em] uppercase mb-8 md:mb-10">
          Klikni na waypoint a zjisti, co se v té části kampusu naučíš
        </p>

        {/* Map */}
        <div className="relative rounded-sm overflow-hidden ring-1 ring-brand-gold/20 shadow-2xl shadow-black/80"
          style={{ aspectRatio: '4/3' }}>

          {/* SVG fallback — always visible until real map loads */}
          <MapSVG />

          {/* Real map image — fades in when file exists */}
          {!mapError && (
            <img
              src="/img/kampus-mapa.png"
              alt="Mapa kampusu Dračí akademie"
              className={`absolute inset-0 w-full h-full object-cover object-center select-none transition-opacity duration-700 ${mapLoaded ? 'opacity-100' : 'opacity-0'}`}
              draggable="false"
              onLoad={() => setMapLoaded(true)}
              onError={() => setMapError(true)}
            />
          )}
          {/* Edge vignette */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, transparent 55%, rgba(6,8,13,0.6) 100%)' }}
          />

          {/* Waypoints overlay */}
          <div
            className="absolute inset-0"
            style={{ overflow: 'visible' }}
            onClick={e => { if (e.target === e.currentTarget) setActiveId(null) }}
          >
            {buildings.map(b => (
              <Waypoint key={b.id} building={b} isActive={activeId === b.id} onClick={handleClick} />
            ))}
          </div>

          {/* Corner ornaments inside the map */}
          <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-brand-gold/30 pointer-events-none" />
          <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-brand-gold/30 pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-brand-gold/30 pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-brand-gold/30 pointer-events-none" />
        </div>

        <p className="text-center text-brand-text-dim text-[11px] tracking-wider mt-5">
          ◆ {buildings.length} budov · Každá s vlastním oborem · Klikni a prozkoumej ◆
        </p>

        {/* Mobile grid */}
        <div className="md:hidden mt-8 grid grid-cols-2 gap-2">
          {buildings.map(b => (
            <button key={b.id} onClick={() => handleClick(b.id)}
              className={`text-left p-3 rounded-sm border transition-all duration-200
                ${activeId === b.id ? 'border-brand-gold bg-brand-gold/10' : 'border-brand-border bg-brand-card/60 hover:border-brand-gold/40'}`}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-sm">{b.icon}</span>
                <p className={`font-cinzel text-[11px] font-semibold leading-tight ${activeId === b.id ? 'text-brand-gold' : 'text-brand-parchment'}`}>
                  {b.label}
                </p>
              </div>
              <p className="text-brand-text-dim text-[10px] leading-snug">{b.desc}</p>
              {activeId === b.id && (
                <div className="mt-2 pt-2 border-t border-brand-border space-y-0.5">
                  {b.courses.map(c => <p key={c} className="text-brand-gold text-[10px]">· {c}</p>)}
                  <a href={b.href} className="inline-block mt-1 text-[10px] text-brand-gold font-semibold">Vstoupit ›</a>
                </div>
              )}
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}
