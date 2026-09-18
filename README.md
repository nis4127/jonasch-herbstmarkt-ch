# Jonasch Herbstmarkt – digitales QR-Menü

Mobile-first Next.js App für das digitale Menü unter `jonasch-herbstmarkt.ch`. Die Oberfläche ist für das Öffnen über einen QR-Code auf Smartphones optimiert: grosse Touch-Ziele, reduzierte Navigation und klar lesbare Produktkarten.

## Markenauftritt

Das Hauptlogo der **Confiserie Jonasch** liegt unter `public/logo.png` und prägt die Confiserie- und Süsswarenbereiche mit Pink, Schwarz und Creme. Das Café-Logo liegt unter `public/cafe-logo.png`; die Getränke-Kategorie verwendet die dazu passende Türkis-/Braun-/Creme-Farbwelt. So bleibt die gemeinsame Marke erkennbar, während die beiden Bereiche visuell unterscheidbar sind.

## Markt-Info

Auf der Startseite werden der **Herbstmarkt auf dem Petersplatz** sowie die Öffnungszeiten **täglich von 11 bis 20 Uhr** prominent angezeigt.

## Erlaubte Menüstruktur

Die Anwendung enthält ausschliesslich diese drei Kategorien und zwölf Produkte:

- **Confiserie Backwaren:** Magenbrot, gebrannte Mandeln, Rahmdääfeli, Lebkuchen
- **Süsswaren:** Mässmögge, Nougat
- **Getränke:** Kaffeeklassiker, Teesorten, Kaffeelutz, Prosecco, Wein, Glühwein

Die Fallback-Daten und die Sanity-Abfragen sind zusätzlich per Whitelist geschützt. Andere Produkte oder Kategorien werden nicht angezeigt.

## Entwicklung

```bash
npm install
npm run dev
```

## Sanity verbinden

Die Anwendung läuft ohne Konfiguration mit den festgelegten Fallback-Daten. Für dynamische Inhalte werden diese Variablen gesetzt:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=dein-projekt
NEXT_PUBLIC_SANITY_DATASET=production
```

Der Adapter in `src/lib/cms.ts` fragt die Typen `category` und `product` ab und lässt ausschliesslich die oben dokumentierte Whitelist durch.
