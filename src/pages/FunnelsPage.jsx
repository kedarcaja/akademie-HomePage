import { funnels } from '../data/funnels'
import { emailSequences } from '../data/emailSequences'
import { workflows } from '../data/workflows'

const phaseBadge = {
  1: { label: 'Fáze 1 – Ihned', bg: 'bg-green-900/30', text: 'text-green-400', border: 'border-green-700/40' },
  2: { label: 'Fáze 2 – Brzy', bg: 'bg-blue-900/30', text: 'text-blue-400', border: 'border-blue-700/40' },
  3: { label: 'Fáze 3 – Později', bg: 'bg-purple-900/30', text: 'text-purple-400', border: 'border-purple-700/40' },
}

export default function FunnelsPage() {
  return (
    <div className="space-y-8">
      <div className="border-b border-brand-border pb-4">
        <h1 className="font-cinzel text-2xl font-bold text-brand-parchment mb-1">
          🎯 Funnely a e-mailové sekvence
        </h1>
        <p className="text-brand-text-muted text-sm">
          4 hlavní funnely, 5 e-mailových sekvencí, 4 automatizační workflows.
        </p>
      </div>

      {/* Funnels */}
      <div>
        <h2 className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-4">Funnely</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {funnels.map((f) => {
            const phase = phaseBadge[f.phase]
            return (
              <div key={f.id} className="bg-brand-card border border-brand-border rounded-lg overflow-hidden">
                <div className="p-4 border-b border-brand-border flex items-center gap-3">
                  <span className="text-2xl">{f.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-brand-parchment font-semibold">{f.title}</div>
                    <div className="text-brand-text-muted text-xs mt-0.5">{f.goal}</div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded border flex-shrink-0 ${phase.bg} ${phase.text} ${phase.border}`}>
                    {phase.label}
                  </span>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <div className="text-xs text-brand-text-dim uppercase tracking-widest mb-1">Slib</div>
                    <div className="text-brand-text-muted text-sm italic">„{f.promise}"</div>
                  </div>
                  <div>
                    <div className="text-xs text-brand-text-dim uppercase tracking-widest mb-1">Pro koho</div>
                    <div className="text-brand-text-muted text-sm">{f.targetAudience}</div>
                  </div>
                  <div>
                    <div className="text-xs text-brand-text-dim uppercase tracking-widest mb-1">Struktura</div>
                    <ol className="space-y-1">
                      {f.structure.map((step, i) => (
                        <li key={i} className="text-xs text-brand-text-muted flex gap-2">
                          <span className="text-brand-text-dim flex-shrink-0">{i + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {f.tags.map((t) => (
                      <span key={t} className="text-xs bg-brand-gold/10 text-brand-gold border border-brand-gold/20 px-2 py-0.5 rounded font-mono">
                        {t}
                      </span>
                    ))}
                    {f.systemeTools.map((t) => (
                      <span key={t} className="text-xs bg-brand-dark border border-brand-border text-brand-text-dim px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-brand-border">
                    <span className="text-xs font-semibold bg-brand-gold text-brand-dark px-3 py-1 rounded">
                      {f.mainCTA}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Email sequences */}
      <div>
        <h2 className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-4">
          E-mailové sekvence
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {emailSequences.map((seq) => (
            <div key={seq.id} className="bg-brand-card border border-brand-border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">{seq.icon}</span>
                <div>
                  <div className="text-brand-parchment font-semibold text-sm">{seq.title}</div>
                  <div className="text-brand-text-dim text-xs">Trigger: {seq.trigger}</div>
                </div>
              </div>
              <div className="space-y-2">
                {seq.emails.map((email, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="text-xs text-brand-gold font-mono flex-shrink-0 bg-brand-gold/10 px-1.5 py-0.5 rounded">
                      Den {email.day}
                    </span>
                    <div>
                      <div className="text-brand-text-muted text-xs font-medium">{email.subject}</div>
                      <div className="text-brand-text-dim text-xs">{email.purpose}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Workflows */}
      <div>
        <h2 className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-4">
          Automatizační workflows
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {workflows.map((wf) => (
            <div key={wf.id} className="bg-brand-card border border-brand-border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{wf.icon}</span>
                <div className="text-brand-parchment font-semibold text-sm">{wf.title}</div>
              </div>
              <div className="text-xs text-brand-text-dim mb-3">Trigger: {wf.trigger}</div>
              <div className="space-y-1.5">
                {wf.steps.map((step) => (
                  <div key={step.step} className="flex gap-2 items-start">
                    <span className="text-xs text-brand-text-dim font-mono flex-shrink-0 w-5">{step.step}.</span>
                    <div className="text-xs text-brand-text-muted">
                      <span className="text-brand-parchment">{step.action}</span>
                      {step.detail && <span className="text-brand-text-dim"> – {step.detail}</span>}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-brand-border flex flex-wrap gap-1">
                {wf.systemeTools.map((t) => (
                  <span key={t} className="text-xs bg-brand-dark border border-brand-border text-brand-text-dim px-2 py-0.5 rounded">
                    {t}
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
