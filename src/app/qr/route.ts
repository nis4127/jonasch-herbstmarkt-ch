import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const menuPdf = "/menuekarte-caffe-jonasch-herbstmesse-2026.pdf?utm_source=qr&utm_medium=print&utm_campaign=herbstmesse-2026&utm_content=menu-card";
const scanCounter = "https://abacus.jasoncameron.dev/hit/jonasch-herbstmarkt-ch/jonasch_qr_scans_2026";

export async function GET(request: Request) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 1500);

  try {
    await fetch(scanCounter, {
      cache: "no-store",
      signal: controller.signal,
    });
  } catch {
    // The QR redirect must remain available even if the external counter is unavailable.
  } finally {
    clearTimeout(timeout);
  }

  console.info("menu_qr_scan", {
    campaign: "herbstmesse-2026",
    content: "menu-card",
    destination: "menu-pdf",
    timestamp: new Date().toISOString(),
  });

  return NextResponse.redirect(new URL(menuPdf, request.url), {
    status: 307,
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
  });
}
