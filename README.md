# Jonasch Herbstmarkt – digitales Menü

Next.js App Router mit Tailwind CSS und einer entkoppelten Content-Schicht für Sanity CMS.

## Entwicklung

```bash
npm install
npm run dev
```

## Sanity verbinden

Die Anwendung läuft ohne Konfiguration mit lokalen Fallback-Daten. Für dynamische Inhalte werden diese Variablen gesetzt:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=dein-projekt
NEXT_PUBLIC_SANITY_DATASET=production
```

Der Adapter in `src/lib/cms.ts` fragt die Typen `category` und `product` ab. Empfohlene Felder:

- `category`: `name`, `slug`, `eyebrow`, `description`, `accent`, `image`, `order`
- `product`: `name`, `slug`, `category` (Referenz), `description`, `price`, `tag`, `image`, `ingredients`, `order`

## Routing

- `/` – Startseite und Kategorie-Kacheln
- `/kategorie/[slug]` – Produktliste je Kategorie
- `/produkt/[slug]` – Produktdetail

## Domain

Für `jonasch-herbstmarkt.ch` kann die Domain nach dem Deployment auf den Next.js-Host zeigen. Die Anwendung ist bereits für die Domain-unabhängige Auslieferung vorbereitet.
