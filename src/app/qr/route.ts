import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const menuPdf = "/menuekarte-caffe-jonasch-herbstmesse-2026.pdf?utm_source=qr&utm_medium=print&utm_campaign=herbstmesse-2026&utm_content=menu-card";

export function GET(request: Request) {
  console.info("menu_qr_scan", {
    campaign: "herbstmesse-2026",
    content: "menu-card",
    destination: "menu-pdf",
    userAgent: request.headers.get("user-agent") ?? "unknown",
    timestamp: new Date().toISOString(),
  });

  return NextResponse.redirect(new URL(menuPdf, request.url), {
    status: 307,
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
  });
}
