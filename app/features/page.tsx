import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Features — ZiggyPitch",
  description: "Everything ZiggyPitch includes. See every feature built for small business teams.",
}

const ACCENT = "#f97316"
const SIGNUP = "https://app.ziggypitch.com/signup"

const sections = [
  {
    name: "Core Features",
    features: [
            {
              icon: "📄",
              title: "Proposal Builder",
              desc: "Drag-and-drop sections, custom branding, and rich text. Build proposals that look like you hired a designer.",
            },
            {
              icon: "🎥",
              title: "Video Embeds",
              desc: "Embed Loom, YouTube, or Vimeo videos directly inside proposals. Show, don't tell.",
            },
            {
              icon: "✍️",
              title: "Built-in E-Signature",
              desc: "Clients sign directly inside the proposal. No need for a separate DocuSign account.",
            },
            {
              icon: "📊",
              title: "Proposal Analytics",
              desc: "See when a prospect opened your proposal, how long they spent on each section, and when they're ready to sign.",
            },
            {
              icon: "💰",
              title: "Custom Pricing Tables",
              desc: "Interactive pricing tables. Let clients select options and quantities — the total updates live.",
            },
            {
              icon: "📚",
              title: "Content Library",
              desc: "Save reusable sections, case studies, team bios, and pricing blocks. Build faster every time.",
            },
    ],
  },
  {
    name: "Integrations",
    features: [
            {
              icon: "🔗",
              title: "ZiggyHQ CRM",
              desc: "Send proposals directly from ZiggyHQ. Signed proposals auto-update deal status.",
            },
            {
              icon: "📧",
              title: "Email Delivery",
              desc: "Send proposals via email with open and read tracking.",
            },
            {
              icon: "🌐",
              title: "Shareable Links",
              desc: "Share a live proposal link. Clients can comment, approve, and sign in the browser.",
            },
    ],
  },
  {
    name: "Advanced",
    features: [
            {
              icon: "⏰",
              title: "Follow-Up Reminders",
              desc: "Auto-send reminders to clients who haven't opened or signed yet.",
            },
            {
              icon: "🎨",
              title: "Custom Branding",
              desc: "Your logo, colors, and fonts on every proposal.",
            },
            {
              icon: "📁",
              title: "PDF Export",
              desc: "Download any proposal as a polished PDF for your records.",
            },
    ],
  },
]

export default function FeaturesPage() {
  return (
    <>
      <style>{`@media(max-width:768px){.nav-links{display:none!important}}`}</style>
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(10,10,10,0.92)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid #1f1f1f", padding: "0 24px",
      }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/" style={{ fontSize: 22, fontWeight: 700, color: "#fff", textDecoration: "none", letterSpacing: "-0.5px" }}>
            Ziggy<span style={{ color: ACCENT }}>Pitch</span>
          </a>
          <div className="nav-links" style={{ display: "flex", gap: 28 }}>
            {[["Features", "/features"], ["Pricing", "/#pricing"], ["Contact", "/contact"], ["Blog", "/blog"], ["Sign In", `https://app.ziggypitch.com/login`]].map(([l, h]) => (
              <a key={l} href={h} style={{ color: "#888", fontSize: 15, textDecoration: "none", fontWeight: 500 }}>{l}</a>
            ))}
          </div>
          <a href={SIGNUP} style={{ background: ACCENT, color: "#fff", textDecoration: "none", padding: "9px 20px", borderRadius: 8, fontSize: 14, fontWeight: 700 }}>
            Start Free Trial
          </a>
        </div>
      </nav>

      <section style={{ padding: "80px 24px 40px", textAlign: "center", maxWidth: 680, margin: "0 auto" }}>
        <h1 style={{ fontSize: "clamp(36px,5vw,56px)", fontWeight: 700, letterSpacing: "-1.5px", marginBottom: 16 }}>
          Everything ZiggyPitch includes
        </h1>
        <p style={{ fontSize: 18, color: "#777", lineHeight: 1.6, marginBottom: 36 }}>
          Every feature. One flat price. No paywalls, no feature tiers.
        </p>
        <a href={SIGNUP} style={{
          display: "inline-block", background: ACCENT, color: "#fff", textDecoration: "none",
          padding: "13px 26px", borderRadius: 10, fontSize: 15, fontWeight: 700,
        }}>
          Start Free Trial — $29/mo after trial
        </a>
      </section>

      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px 100px" }}>
        {sections.map((section) => (
          <div key={section.name} style={{ marginBottom: 64 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.3px", marginBottom: 24, color: "#fff", borderBottom: "1px solid #1f1f1f", paddingBottom: 16 }}>
              {section.name}
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 16 }}>
              {section.features.map((f) => (
                <div key={f.title} style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 14, padding: "24px 22px" }}>
                  <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ fontSize: 13, color: "#666", lineHeight: 1.65 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Suite callout */}
        <div style={{ background: `rgba(249,115,22,0.06)`, border: `1px solid rgba(249,115,22,0.2)`, borderRadius: 16, padding: "32px 36px", textAlign: "center" }}>
          <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>Part of the ZiggyTech Business Suite</h3>
          <p style={{ fontSize: 15, color: "#666", marginBottom: 24, maxWidth: 560, margin: "0 auto 24px" }}>
            ZiggyPitch is one of 10 integrated apps. Get all of them — CRM, payroll, docs, scheduling, and more — for 
            <strong style={{ color: "#fff" }}>$179/mo flat</strong>.
          </p>
          <a href="https://ziggybusiness.com" style={{
            display: "inline-block", background: ACCENT, color: "#fff", textDecoration: "none",
            padding: "12px 24px", borderRadius: 9, fontSize: 14, fontWeight: 700,
          }}>
            See the Full Suite →
          </a>
        </div>
      </section>

      <footer style={{ background: "#050505", borderTop: "1px solid #111", padding: "40px 24px", textAlign: "center" }}>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center", marginBottom: 16 }}>
          {[["Home", "/"], ["Features", "/features"], ["Pricing", "/#pricing"], ["Contact", "/contact"], ["Blog", "/blog"]].map(([l, h]) => (
            <a key={l} href={h} style={{ color: "#555", fontSize: 14, textDecoration: "none" }}>{l}</a>
          ))}
        </div>
        <p style={{ fontSize: 13, color: "#2a2a2a" }}>© 2026 ZiggyPitch. All rights reserved.</p>
      </footer>
    </>
  )
}
