import { achievements } from '../data/achievements'
import { missions } from '../data/missions'

const manualBadge = {
  'Ruční': { bg: 'bg-orange-900/20', text: 'text-orange-400', border: 'border-orange-700/30' },
  'Automatické – tag po odeslání formuláře': { bg: 'bg-green-900/20', text: 'text-green-400', border: 'border-green-700/30' },
  'Poloruční – student odešle formulář, admin přiřadí tag': { bg: 'bg-yellow-900/20', text: 'text-yellow-400', border: 'border-yellow-700/30' },
}

function getManualStyle(str) {
  if (str.startsWith('Automatické')) return manualBadge['Automatické – tag po odeslání formuláře']
  if (str.startsWith('Poloruční')) return manualBadge['Poloruční – student odešle formulář, admin přiřadí tag']
  return manualBadge['Ruční']
}

function getManualLabel(str) {
  if (str.startsWith('Automatické')) return '⚡ Auto'
  if (str.startsWith('Poloruční')) return '🔧 Poloruční'
  return '✋ Ruční'
}

const difficultyColors = {
  'začátečník': 'text-green-400',
  'všichni': 'text-blue-400',
  'pokročilí': 'text-purple-400',
}

const missionTypeColors = {
  'výzva': { bg: 'bg-blue-900/20', text: 'text-blue-400', border: 'border-blue-700/30' },
  'mise': { bg: 'bg-purple-900/20', text: 'text-purple-400', border: 'border-purple-700/30' },
}

export default function AchievementsPage() {
  return (
    <div className="space-y-8">
      <div className="border-b border-brand-border pb-4">
        <h1 className="font-cinzel text-2xl font-bold text-brand-parchment mb-1">
          🏆 Achievementy a mise
        </h1>
        <p className="text-brand-text-muted text-sm">
          8 achievementů (převážně ruční) + 7 misí/výzev. Realizace přes tagy a e-maily v Systeme.io.
        </p>
      </div>

      {/* Achievements */}
      <div>
        <h2 className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-4">
          Achievementy – odznaky
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((a) => {
            const style = getManualStyle(a.manualOrAutomatic)
            return (
              <div key={a.id} className="bg-brand-card border border-brand-border rounded-lg p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{a.icon}</span>
                    <div className="text-brand-parchment font-semibold text-sm">{a.title}</div>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded border flex-shrink-0 ${style.bg} ${style.text} ${style.border}`}>
                    {getManualLabel(a.manualOrAutomatic)}
                  </span>
                </div>
                <div className="text-brand-text-muted text-xs mb-2 leading-relaxed">{a.description}</div>
                <div className="space-y-1.5 text-xs">
                  <div>
                    <span className="text-brand-text-dim">Podmínka: </span>
                    <span className="text-brand-text-muted">{a.requirement}</span>
                  </div>
                  <div>
                    <span className="text-brand-text-dim">Odměna: </span>
                    <span className="text-brand-text-muted">{a.reward}</span>
                  </div>
                  <div>
                    <span className="text-brand-text-dim">Systeme.io: </span>
                    <span className="text-brand-text-muted">{a.systemeImplementation}</span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-brand-border">
                  <div className="text-brand-text-dim text-xs italic">„{a.certificateText}"</div>
                </div>
                <div className="mt-2 text-xs font-mono text-brand-text-dim">{a.badgeImagePath}</div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Missions */}
      <div>
        <h2 className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-4">
          Mise a výzvy
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {missions.map((m) => {
            const typeStyle = missionTypeColors[m.type] || missionTypeColors['mise']
            return (
              <div key={m.id} className="bg-brand-card border border-brand-border rounded-lg p-4">
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-2xl">{m.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-brand-parchment font-semibold text-sm">{m.title}</div>
                    <div className="flex gap-2 mt-1">
                      <span className={`text-xs px-2 py-0.5 rounded border ${typeStyle.bg} ${typeStyle.text} ${typeStyle.border}`}>
                        {m.type}
                      </span>
                      <span className={`text-xs ${difficultyColors[m.difficulty] || 'text-brand-text-muted'}`}>
                        {m.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-brand-text-muted text-xs mb-2 leading-relaxed">{m.desc}</div>
                <div className="space-y-1 text-xs">
                  <div><span className="text-brand-text-dim">Délka: </span><span className="text-brand-text-muted">{m.duration}</span></div>
                  <div><span className="text-brand-text-dim">Odměna: </span><span className="text-brand-text-muted">{m.reward}</span></div>
                  <div><span className="text-brand-text-dim">Systeme.io: </span><span className="text-brand-text-muted">{m.systeme}</span></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
