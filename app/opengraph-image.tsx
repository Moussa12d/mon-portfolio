import { ImageResponse } from "next/og";

export const alt = "Moussa Dagno — Développeur Web Full Stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fafaf8",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#16a34a",
            }}
          />
          <div style={{ fontSize: 24, color: "#5a5a5a", letterSpacing: 2 }}>
            PORTFOLIO
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {/* Correction ici : ajout de display: "flex" */}
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 700,
              color: "#1a1a1a",
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 900,
            }}
          >
            Moussa Dagno
            <span style={{ color: "#16a34a" }}>.</span>
          </div>
          <div style={{ fontSize: 36, color: "#5a5a5a" }}>
            Développeur Web Full Stack — Django, React, Next.js
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #e2e2de",
            paddingTop: 24,
            fontSize: 22,
            color: "#5a5a5a",
          }}
        >
          <div>Bamako, Mali</div>
          <div>mdagno8@gmail.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}