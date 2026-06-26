# 10 – Systeme.io: realizovatelnost

## Shrnutí

**Systeme.io zvládá ~90 % potřebného pro plný launch.**

Zbývajících 10 % (automatický achievement engine, profily studentů, žebříčky) lze nahradit poloručními procesy a řešit ve fázi 3+.

---

## Tabulka realizovatelnosti

| Funkce | Realizovatelnost | Poznámka |
|---|---|---|
| Veřejné stránky | ✅ Hned | Builder stránek v Systeme.io |
| Funnely a landing pages | ✅ Hned | Nativní funnel builder |
| Kurzy a lekce | ✅ Hned | Video + text + download |
| E-mailové sekvence | ✅ Hned | Automatizace + tagy |
| Komunita | ✅ Hned | Systeme.io komunita |
| Prodej a platby | ✅ Hned | Recurring billing, upsell |
| Achievementy (odznaky) | 🔧 Poloruční | Tag + e-mail s PDF odznakem |
| Certifikáty | 🔧 Poloruční | PDF download po splnění |
| Galerie pokroku | 🔧 Poloruční | Komunita + externě |
| Automatické XP/levely | 🚀 Fáze 3 | Custom backend potřeba |
| Profil studenta s historií | 🚀 Fáze 3 | Databáze potřeba |
| AI mentor | 🚀 Fáze 3 | API integrace |

---

## Achievementy bez backendu

**Poloruční workflow:**
1. Student dokončí podmínku (foto, příspěvek, formulář)
2. Admin zkontroluje a přiřadí tag `badge-xxx`
3. Systeme.io automatizace zachytí tag → pošle e-mail s odznakem PDF
4. Student dostane "certifikát" jako e-mail attachment

**Zvládnutelné pro:** prvních 200–500 studentů.  
**Kdy automatizovat:** při opakování >50 achievementů/měsíc.

---

## Doporučená implementace tagů

```
interest-{skupin}   → zájem, e-mail nurturing
access-{produkt}    → přístup ke kurzům
level-{level}       → úroveň studenta
badge-{achievement} → splněný achievement
```

Tagy se přiřazují automaticky (nákup, formulář) nebo ručně (admin).
