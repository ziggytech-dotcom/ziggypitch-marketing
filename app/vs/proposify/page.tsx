import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ZiggyPitch vs Proposify — $29/mo vs $49/mo",
  description: "ZiggyPitch vs Proposify: unlimited proposals, video embeds, full analytics, and e-sign for $29/mo. Proposify starts at $49/mo. 41% less with every feature you actually use.",
}

const ACCENT = "#f97316"
const SIGNUP = "https://app.ziggypitch.com/signup"

export default function VsProposify() {
  return (
    <>
      <style>{`@media(max-width:768px){.nav-links{display:none!important}}`}</style>

      {/* ── NAV ── */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(10,10,10,0.92)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid #1f1f1f", padding: "0 24px",
      }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/" style={{ fontSize: 22, fontWeight: 700, color: "#fff", textDecoration: "none" }}>
            Ziggy<span style={{ color: ACCENT }}>Pitch</span>
          </a>
          <div className="nav-links" style={{ display: "flex", gap: 28 }}>
            {[["Features", "/#features"], ["Compare", "/vs/proposify"], ["Pricing", "/#pricing"], ["Blog", "/blog"], ["Sign In", "https://app.ziggypitch.com/login"]].map(([l, h]) => (
              <a key={l} href={h} style={{ color: "#888", fontSize: 15, textDecoration: "none", fontWeight: 500 }}>{l}</a>
            ))}
          </div>
          <a href={SIGNUP} style={{ background: ACCENT, color: "#fff", textDecoration: "none", padding: "9px 20px", borderRadius: 8, fontSize: 14, fontWeight: 700 }}>
            Start Free Trial
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ padding: "80px 24px 60px", textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
        <div style={{
          display: "inline-block", background: `rgba(249,115,22,0.1)`, border: `1px solid rgba(249,115,22,0.25)`,
          borderRadius: 99, padding: "6px 16px", fontSize: 13, color: ACCENT, fontWeight: 600, marginBottom: 24,
        }}>
          Direct Comparison · Updated 2026
        </div>
        <h1 style={{ fontSize: "clamp(36px,5vw,58px)", fontWeight: 700, letterSpacing: "-1.5px", lineHeight: 1.1, marginBottom: 20 }}>
          ZiggyPitch vs Proposify
        </h1>
        <p style={{ fontSize: 18, color: "#888", lineHeight: 1.6, marginBottom: 12, maxWidth: 580, margin: "0 auto 12px" }}>
          Every feature you actually use. 41% cheaper. Video embeds Proposify doesn't have.
        </p>
        <p style={{ fontSize: 15, color: "#555", marginBottom: 36 }}>
          Proposify: <strong style={{ color: "#fff" }}>$49/mo</strong> · ZiggyPitch Pro: <strong style={{ color: ACCENT }}>$29/mo</strong>
        </p>
        <a href={SIGNUP} style={{
          display: "inline-block", background: ACCENT, color: "#fff", textDecoration: "none",
          padding: "14px 28px", borderRadius: 10, fontSize: 16, fontWeight: 700,
        }}>
          Start Free Trial — No credit card required
        </a>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section style={{ padding: "48px 24px 80px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "16px 20px", color: "#555", fontWeight: 600, fontSize: 13, borderBottom: "1px solid #1f1f1f" }}>Feature</th>
                <th style={{ textAlign: "center", padding: "16px 20px", color: ACCENT, fontWeight: 700, fontSize: 15, borderBottom: "1px solid #1f1f1f", background: `rgba(249,115,22,0.05)` }}>
                  ZiggyPitch Pro<br /><span style={{ fontSize: 12, fontWeight: 400, color: "#888" }}>$29/mo</span>
                </th>
                <th style={{ textAlign: "center", padding: "16px 20px", color: "#555", fontWeight: 600, fontSize: 13, borderBottom: "1px solid #1f1f1f" }}>
                  Proposify<br /><span style={{ fontSize: 12, fontWeight: 400, color: "#555" }}>from $49/mo</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Monthly price", "$29/mo", "from $49/mo"],
                ["Per-seat pricing", "No — flat rate", "Yes — adds up fast"],
                ["Unlimited proposals", "✅ Yes", "❌ Limited on lower tiers"],
                ["E-signature", "✅ Included", "✅ Included"],
                ["Video embeds", "✅ Yes — personal intro video", "❌ Not available"],
                ["Viewed notifications", "✅ Instant alert", "✅ Yes"],
                ["Full proposal analytics", "✅ Yes", "✅ Basic"],
                ["Time-on-page per section", "✅ Yes", "❌ Not available"],
                ["Scroll depth tracking", "✅ Yes", "❌ Not available"],
                ["Content library", "✅ Yes", "✅ Yes"],
                ["Custom branding", "✅ Logo, colors, domain", "✅ Paid plans"],
                ["Accept/decline tracking", "✅ With timestamp", "✅ Yes"],
                ["Drag-and-drop builder", "✅ Yes", "✅ Yes"],
                ["Payment on acceptance", "🔧 In Development", "❌ Not available"],
                ["Proposal expiry dates", "🔧 Coming Soon", "❌ Not available"],
                ["14-day free trial", "✅ No card needed", "✅ Available"],
              ].map(([feature, ziggy, them], i) => (
                <tr key={feature} style={{ background: i % 2 === 0 ? "transparent" : "#0d0d0d" }}>
                  <td style={{ padding: "13px 20px", color: "#888", borderBottom: "1px solid #161616", fontSize: 14 }}>{feature}</td>
                  <td style={{ padding: "13px 20px", color: "#fff", textAlign: "center", borderBottom: "1px solid #161616", background: `rgba(249,115,22,0.03)`, fontWeight: 500, fontSize: 14 }}>{ziggy}</td>
                  <td style={{ padding: "13px 20px", color: "#555", textAlign: "center", borderBottom: "1px solid #161616", fontSize: 14 }}>{them}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{
          marginTop: 32, background: `rgba(249,115,22,0.06)`, border: `1px solid rgba(249,115,22,0.2)`,
          borderRadius: 14, padding: "28px 32px",
        }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 12 }}>The bottom line</h3>
          <p style={{ fontSize: 16, color: "#aaa", lineHeight: 1.8, margin: 0 }}>
            Proposify starts at $49/mo for their base plan. ZiggyPitch Pro is $29/mo — unlimited proposals, video embeds, full analytics, e-sign included. That's <strong style={{ color: ACCENT }}>41% cheaper</strong> with every feature you actually use. Plus Proposify's per-seat pricing adds up as your team grows. ZiggyPitch is a flat rate, always.
          </p>
        </div>
      </section>

      {/* ── UNIQUE ADVANTAGES ── */}
      <section style={{ padding: "40px 24px 80px", maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(24px,3vw,36px)", fontWeight: 700, letterSpacing: "-0.6px", marginBottom: 32, textAlign: "center" }}>
          What ZiggyPitch has that Proposify doesn&apos;t
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 20 }}>
          {[
            { icon: "🎥", title: "Video embeds", desc: "Record a personal intro video that plays at the top of any proposal. Proposify has no equivalent. Your face and voice close deals faster than any bullet list." },
            { icon: "📊", title: "Section-level analytics", desc: "See how much time a client spent on each section of your proposal and how far they scrolled. Proposify shows basic open data. ZiggyPitch shows you the whole picture." },
            { icon: "💳", title: "Payment on acceptance (coming)", desc: "When a client clicks accept, charge the deposit automatically. No invoice, no follow-up. Proposify doesn't have this. We're shipping it next." },
          ].map(({ icon, title, desc }) => (
            <div key={title} style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 14, padding: "28px 24px" }}>
              <div style={{ fontSize: 32, marginBottom: 14 }}>{icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 10 }}>{title}</h3>
              <p style={{ fontSize: 14, color: "#666", lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{
        padding: "80px 24px", textAlign: "center",
        background: "linear-gradient(180deg,#0a0a0a 0%,#0d0500 100%)",
        borderTop: "1px solid #1f1f1f",
      }}>
        <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, letterSpacing: "-1px", marginBottom: 16, lineHeight: 1.15 }}>
          Stop paying $49/mo for fewer features.
        </h2>
        <p style={{ fontSize: 17, color: "#555", marginBottom: 32 }}>14 days free. No credit card. Cancel anytime.</p>
        <a href={SIGNUP} style={{
          display: "inline-block", background: ACCENT, color: "#fff", textDecoration: "none",
          padding: "16px 36px", borderRadius: 12, fontSize: 17, fontWeight: 700,
        }}>
          Try ZiggyPitch Free →
        </a>
        <p style={{ marginTop: 16, fontSize: 13, color: "#444" }}>Pricing data sourced from Proposify.com · Updated March 2026</p>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#050505", borderTop: "1px solid #111", padding: "40px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 20, textAlign: "center" }}>
          <div style={{ display: "flex", gap: 28, flexWrap: "wrap", justifyContent: "center" }}>
            {[["Home", "/"], ["Features", "/#features"], ["Pricing", "/#pricing"], ["Blog", "/blog"], ["Sign In", "https://app.ziggypitch.com/login"]].map(([label, href]) => (
              <a key={label} href={href} style={{ color: "#555", fontSize: 14, textDecoration: "none", fontWeight: 500 }}>{label}</a>
            ))}
          </div>
          <p style={{ fontSize: 13, color: "#333" }}>
            Part of{" "}
            <a href="https://ziggybusiness.com" style={{ color: "#555", textDecoration: "none" }}>ZiggyTech Business Suite</a>
            {" · "}
            <a href="https://ziggybusiness.com" style={{ color: "#555", textDecoration: "none" }}>ziggybusiness.com</a>
          </p>
          <p style={{ fontSize: 13, color: "#2a2a2a" }}>© 2026 ZiggyPitch. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
