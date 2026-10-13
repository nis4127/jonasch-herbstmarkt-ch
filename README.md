# Jonasch Herbstmarkt – digitales QR-Menü

Mobile-first Next.js App für das digitale Menü unter `jonasch-herbstmarkt.ch`. Die Oberfläche ist für das Öffnen über einen QR-Code auf Smartphones optimiert: grosse Touch-Ziele, reduzierte Navigation und klar lesbare Produktkarten.

## Messbarer Menü-QR-Code

Der druckfertige QR-Code verweist auf:

```text
https://jonasch-herbstmarkt-ch.vercel.app/qr
```

Die dynamische Route `/qr` protokolliert einen anonymen Request in den Vercel-Logs und leitet mit HTTP 307 direkt zur Getränkeauswahl weiter:

```text
/kategorie/getraenke?utm_source=qr&utm_medium=print&utm_campaign=herbstmesse-2026&utm_content=menu-card
```

Damit können QR-Aufrufe werden pro Scan serverseitig in den Vercel-Logs protokolliert und in einer später angeschlossenen datensparsamen Webanalyse als eigene Print-Kampagne ausgewertet werden. Es werden keine personenbezogenen Daten in der Anwendung gespeichert. Die aktuell publizierte Menükarte liegt unter `public/menuekarte-caffe-jonasch-herbstmesse-2026.pdf` und wird bei jeder Aktualisierung vollständig ersetzt.; sie wird auch direkt auf der QR-Startseite als PDF-Lesevorschau angeboten.

## Standortseite

Die Seite `/wo-sie-uns-finden` beschreibt den Herbstmarkt auf dem **Petersplatz in Basel**, die Öffnungszeiten **täglich von 11 bis 20 Uhr**, die Anreise ab Bahnhof SBB und Barfüsserplatz sowie die Orientierung zu den Jonasch-Ständen. Als Grundlage dient die informelle Standübersicht aus der bereitgestellten Word-Datei. Die enthaltenen Kartenlinks öffnen den Petersplatz direkt in Google Maps.

## Markenauftritt

Das Hauptlogo der **Confiserie Jonasch** liegt unter `public/logo.png` und prägt die Confiserie- und Süsswarenbereiche mit Pink, Schwarz und Creme. Das vektorisierte Café-Logo liegt unter `public/logo-jonaschcafe-vektor.svg`; die Getränke-Kategorie verwendet die dazu passende Türkis-/Braun-/Creme-Farbwelt.

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
npm run build
```

## Sanity verbinden

Die Anwendung läuft ohne Konfiguration mit den festgelegten Fallback-Daten. Für dynamische Inhalte werden diese Variablen gesetzt:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=dein-projekt
NEXT_PUBLIC_SANITY_DATASET=production
```

Der Adapter in `src/lib/cms.ts` fragt die Typen `category` und `product` ab und lässt ausschliesslich die oben dokumentierte Whitelist durch.

## Online-Menü und Standortkarte

Die aktuelle Menükarte ist online unter `/menuekarte-caffe-jonasch-herbstmesse-2026.pdf` abrufbar. Die QR-Startseite `/qr` zeigt den PDF-Link prominent vor dem direkten Getränke-Schnellzugriff und enthält eine mobile PDF-Lesevorschau. Die Standortseite `/wo-sie-uns-finden` verwendet die bereitgestellte Petersplatz-Karte als SVG und bietet sie zusätzlich als PDF an mit den nummerierten Standorten 1 Bernoullistrasse, 2 Spalentor, 3 Pastel de Nata und 4 Petersgraben.


### QR-Ziel

Der QR-Endpunkt `/qr` protokolliert jeden Scan serverseitig und leitet anschliessend direkt auf die aktuelle PDF-Menükarte weiter. Die Website bleibt über den Browser-Verlauf erreichbar; die Standortseite mit Wegbeschreibung ist weiterhin unter `/wo-sie-uns-finden` verfügbar.
