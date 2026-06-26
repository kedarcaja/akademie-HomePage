export const assetCategories = [
  {
    category: 'Globální',
    path: '/images/global/',
    assets: [
      { id: 'logo-main', file: 'logo/logo-main.webp', altText: 'Dračí akademie – logo', usage: 'Header, e-maily, OG tag', format: 'WebP', hasDesktopMobile: false },
      { id: 'dragon-emblem', file: 'logo/dragon-emblem.png', altText: 'Drak – emblém Dračí akademie', usage: 'Favicon, avatar, social', format: 'PNG', hasDesktopMobile: false },
      { id: 'bg-dark-texture', file: 'textures/bg-dark-texture.webp', altText: '', usage: 'Tmavé sekce background', format: 'WebP', hasDesktopMobile: false },
      { id: 'bg-parchment', file: 'textures/bg-parchment.webp', altText: '', usage: 'Světlé sekce', format: 'WebP', hasDesktopMobile: false },
    ],
  },
  {
    category: 'Kampus',
    path: '/images/kampus/',
    assets: [
      { id: 'kampus-mapa-desktop', file: 'mapa/mapa-kampusu-desktop.webp', altText: 'Mapa kampusu Dračí akademie – celkový pohled', usage: 'Hero sekce kampusu na desktopu', format: 'WebP', hasDesktopMobile: true, mobilePath: 'mapa/mapa-kampusu-mobile.webp' },
      { id: 'kampus-mapa-mobile', file: 'mapa/mapa-kampusu-mobile.webp', altText: 'Mapa kampusu Dračí akademie', usage: 'Mobilní verze mapy', format: 'WebP', hasDesktopMobile: true },
    ],
  },
  {
    category: 'Akademie – homepage',
    path: '/images/akademie/',
    assets: [
      { id: 'hero-home', file: 'hero/hero-home.webp', altText: 'Dítě malující fantasy figurku v dílně', usage: 'Hero sekce homepage', format: 'WebP', hasDesktopMobile: true },
      { id: 'hero-home-mobile', file: 'hero/hero-home-mobile.webp', altText: 'Dítě malující fantasy figurku', usage: 'Hero sekce mobilní verze', format: 'WebP', hasDesktopMobile: true },
    ],
  },
  {
    category: 'Členská sekce – odznaky',
    path: '/images/clenska-sekce/badges/',
    assets: [
      { id: 'badge-prvni-stetec', file: 'badge-prvni-stetec.webp', altText: 'Odznak: Zkrotil první štětec', usage: 'Achievement e-mail, certifikát', format: 'WebP', hasDesktopMobile: false },
      { id: 'badge-prvni-model', file: 'badge-prvni-model.webp', altText: 'Odznak: Dokončil první model', usage: 'Achievement e-mail, certifikát', format: 'WebP', hasDesktopMobile: false },
      { id: 'badge-7-dni', file: 'badge-7-dni.webp', altText: 'Odznak: 7 dní u štětce', usage: 'Achievement e-mail, certifikát', format: 'WebP', hasDesktopMobile: false },
    ],
  },
]

export const publicAssetBase = 'https://assets.draciakademie.cz'

export function getAssetUrl(filePath) {
  return `${publicAssetBase}/${filePath}`
}
