import type { Metadata } from "next";
import Link from "next/link";
import { CounterAutoRefresh } from "@/components/CounterAutoRefresh";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "QR-Zähler · Jonasch Herbstmarkt",
  description: "Aktueller Stand der Zugriffe über den QR-Code der Jonasch-Menükarte.",
};

const counterUrl = "https://abacus.jasoncameron.dev/get/jonasch-herbstmarkt-ch/jonasch_qr_scans_2026";

async function getScanCount() {
  try {
    const response = await fetch(counterUrl, { cache: "no-store" });
    if (!response.ok) return null;
    const data = (await response.json()) as { value?: number };
    return typeof data.value === "number" ? data.value : null;
  } catch {
    return null;
  }
}

export default async function QrZaehlerPage() {
  const count = await getScanCount();
  const checkedAt = new Intl.DateTimeFormat("de-CH", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/Zurich",
  }).format(new Date());

  return (
    <main className="counter-page">
      <CounterAutoRefresh />
      <section className="counter-hero">
        <div className="counter-hero-top">
          <Link className="back-link" href="/">← Zur Hauptseite</Link>
          <span className="counter-status"><i /> Live-Zähler</span>
        </div>
        <p className="eyebrow">Jonasch Herbstmarkt · Menükarte</p>
        <h1>QR-Zugriffe<br /><em>im Überblick.</em></h1>
        <p className="counter-lead">Hier ist auf einen Blick ersichtlich, wie oft die digitale Menükarte über den QR-Code geöffnet wurde.</p>
      </section>

      <section className="counter-content" aria-labelledby="counter-title">
        <div className="counter-card">
          <div className="counter-card-heading">
            <div>
              <p className="eyebrow">Gesamtzugriffe</p>
              <h2 id="counter-title">QR-Code</h2>
            </div>
            <span className="counter-mark">↗</span>
          </div>
          <div className="counter-number" aria-label={`${count ?? "—"} QR-Zugriffe`}>
            {count ?? "—"}
          </div>
          <div className="counter-card-footer">
            <span>Aktualisiert: {checkedAt} Uhr</span>
            <span className={count === null ? "counter-state counter-state-error" : "counter-state"}>
              <i /> {count === null ? "Momentan nicht erreichbar" : "Zähler aktiv"}
            </span>
          </div>
        </div>

        <div className="counter-actions">
          <a className="primary-button" href={counterUrl} target="_blank" rel="noreferrer">Rohdaten öffnen ↗</a>
          <Link className="secondary-button" href="/">Zur Website</Link>
        </div>

        <div className="counter-note">
          <span className="counter-note-icon">i</span>
          <p>Gezählt wird jeder Aufruf des QR-Endpunkts. Der Zähler erfasst nur die Anzahl der Zugriffe und keine persönlichen Daten. Diese Seite aktualisiert sich automatisch alle 30 Sekunden.</p>
        </div>
      </section>
    </main>
  );
}
