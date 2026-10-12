import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, MapPin, QrCode } from "lucide-react";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

export default async function QrLandingPage() {
  const requestHeaders = await headers();
  console.info("menu_qr_scan", {
    campaign: "herbstmesse-2026",
    content: "menu-card",
    userAgent: requestHeaders.get("user-agent") ?? "unknown",
  });

  const drinksUrl = "/kategorie/getraenke?utm_source=qr&utm_medium=print&utm_campaign=herbstmesse-2026&utm_content=drinks-button";
  const pdfUrl = "/menuekarte-caffe-jonasch-herbstmesse-2026.pdf";

  return (
    <main className="qr-landing">
      <div className="qr-landing-topline"><QrCode size={15} /> Digitales Menü · Herbstmesse 2026</div>
      <section className="qr-landing-hero">
        <Image src="/cafe-logo.png" alt="caffè jonasch" width={190} height={118} priority />
        <p className="eyebrow">Willkommen auf dem Petersplatz</p>
        <h1>Was darf es<br /><em>sein?</em></h1>
        <p>Menükarte, Kaffee, Tee und alle Preise – direkt auf Ihrem Smartphone.</p>
        <div className="qr-landing-actions">
          <a href={pdfUrl} target="_blank" rel="noreferrer" className="qr-pdf-button"><FileText size={18} /><span><b>Menü als PDF öffnen</b><small>Beide Seiten als Lesevorschau</small></span><ArrowRight size={17} /></a>
          <Link href={drinksUrl} className="qr-drinks-button"><span><b>Getränke direkt öffnen</b><small>Kaffee &amp; Tee zuerst</small></span><ArrowRight size={17} /></Link>
        </div>
      </section>
      <section className="qr-quick-links" aria-label="Schnellzugriff">
        <Link href={drinksUrl}><QrCode size={16} /> Getränke</Link>
        <Link href="/wo-sie-uns-finden"><MapPin size={16} /> Wo Sie uns finden</Link>
      </section>
      <section className="qr-preview">
        <div className="section-heading compact"><div><p className="eyebrow">Lesevorschau</p><h2>Die Menükarte</h2></div><a href={pdfUrl} target="_blank" rel="noreferrer" className="text-link">PDF öffnen <ArrowRight size={14} /></a></div>
        <iframe title="Menükarte Caffè Jonasch Herbstmesse 2026" src={`${pdfUrl}#view=FitH`} />
      </section>
    </main>
  );
}
