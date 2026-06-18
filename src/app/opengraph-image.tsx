import { ImageResponse } from "next/og";

// Default social-share card for the whole site. Branded, authored-looking —
// not a generic auto-card. Kept English-only so the default font renders
// cleanly (no Devanagari tofu).
export const alt = "WhatNow — Honest career & exam guidance for India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 44, fontWeight: 800, letterSpacing: "-0.02em" }}>
          <span style={{ color: "#111827" }}>What</span>
          <span style={{ color: "#4F46E5" }}>Now</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 92,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#111827",
            }}
          >
            Boards are over.
            <span style={{ color: "#4F46E5" }}>&nbsp;Now what?</span>
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#5b5b5b", marginTop: "22px", maxWidth: "900px" }}>
            Honest guides to every course, career &amp; entrance exam — from people who don&rsquo;t earn a cut.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            color: "#5b5b5b",
            borderTop: "2px solid #eef2f7",
            paddingTop: "28px",
          }}
        >
          <span>whatnowindia.vercel.app</span>
          <span style={{ color: "#4F46E5", fontWeight: 700 }}>No commissions · English &amp; Hindi</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
