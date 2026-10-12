import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const destination = "/kategorie/getraenke?utm_source=qr&utm_medium=print&utm_campaign=herbstmesse-2026&utm_content=menu-card";

export function GET(request: Request) {
  console.info("menu_qr_scan", {
    campaign: "herbstmesse-2026",
    content: "menu-card",
    userAgent: request.headers.get("user-agent") ?? "unknown",
  });

  return NextResponse.redirect(new URL(destination, request.url), {
    status: 307,
    headers: { "Cache-Control": "no-store, no-cache, must-revalidate" },
  });
}
