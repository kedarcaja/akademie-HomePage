import { assetCategories, publicAssetBase } from '../data/assets'

export default function AssetsPage() {
  return (
    <div className="space-y-8">
      <div className="border-b border-brand-border pb-4">
        <h1 className="font-cinzel text-2xl font-bold text-brand-parchment mb-1">
          🖼️ Assety – obrázky a soubory
        </h1>
        <p className="text-brand-text-muted text-sm">
          Přehled obrázků, jejich cesty a použití. CDN base:{' '}
          <code className="text-brand-gold bg-brand-dark px-1.5 py-0.5 rounded text-xs">
            {publicAssetBase}
          </code>
        </p>
      </div>

      {assetCategories.map((cat) => (
        <div key={cat.category}>
          <div className="flex items-center gap-3 mb-3">
            <h2 className="text-brand-gold font-semibold text-sm uppercase tracking-widest">
              {cat.category}
            </h2>
            <code className="text-xs text-brand-text-dim bg-brand-dark px-2 py-0.5 rounded border border-brand-border">
              {cat.path}
            </code>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cat.assets.map((asset) => (
              <div key={asset.id} className="bg-brand-card border border-brand-border rounded-lg p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <code className="text-xs text-brand-gold font-mono">{asset.id}</code>
                  <div className="flex gap-1">
                    <span className="text-xs bg-brand-dark border border-brand-border text-brand-text-dim px-2 py-0.5 rounded">
                      {asset.format}
                    </span>
                    {asset.hasDesktopMobile && (
                      <span className="text-xs bg-blue-900/20 border border-blue-700/30 text-blue-400 px-2 py-0.5 rounded">
                        D+M
                      </span>
                    )}
                  </div>
                </div>
                <code className="text-xs text-brand-text-muted block mb-2 font-mono">{asset.file}</code>
                {asset.altText && (
                  <div className="text-xs text-brand-text-dim mb-2">
                    <span className="text-brand-text-dim">alt: </span>
                    <span className="text-brand-text-muted">„{asset.altText}"</span>
                  </div>
                )}
                <div className="text-xs text-brand-text-dim mb-3">
                  <span className="text-brand-text-dim">Použití: </span>
                  <span className="text-brand-text-muted">{asset.usage}</span>
                </div>
                <div className="bg-brand-dark rounded p-2 overflow-x-auto">
                  <code className="text-xs text-green-400 font-mono whitespace-nowrap">
                    {`<img src="${publicAssetBase}/${asset.file}" alt="${asset.altText || ''}" />`}
                  </code>
                </div>
                {asset.mobilePath && (
                  <div className="mt-2 bg-brand-dark rounded p-2 overflow-x-auto">
                    <code className="text-xs text-blue-400 font-mono whitespace-nowrap">
                      {`{/* mobile */} <img src="${publicAssetBase}/${asset.mobilePath}" />`}
                    </code>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Asset conventions */}
      <div className="bg-brand-card border border-brand-border rounded-lg p-5">
        <h2 className="text-brand-gold font-semibold mb-3 text-sm uppercase tracking-widest">
          Konvence assetů
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-brand-parchment font-medium mb-2">Formáty</div>
            <ul className="space-y-1 text-brand-text-muted text-xs">
              <li>• <strong className="text-brand-parchment">WebP</strong> – hlavní formát pro fotky a obrázky</li>
              <li>• <strong className="text-brand-parchment">PNG</strong> – loga, ikony s průhledností</li>
              <li>• <strong className="text-brand-parchment">SVG</strong> – ikony, vektory (pokud dostupné)</li>
            </ul>
          </div>
          <div>
            <div className="text-brand-parchment font-medium mb-2">Verzování D+M</div>
            <ul className="space-y-1 text-brand-text-muted text-xs">
              <li>• Desktop: <code className="text-brand-gold">*-desktop.webp</code></li>
              <li>• Mobile: <code className="text-brand-gold">*-mobile.webp</code></li>
              <li>• Přepínání přes CSS nebo srcset</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
