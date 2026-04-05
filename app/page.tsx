import Script from "next/script"

const ACCENT = "#f97316"
const SIGNUP = "https://app.ziggypitch.com/signup"
const LOGIN  = "https://app.ziggypitch.com/login"

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "ZiggyPitch",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "url": "https://ziggypitch.com",
      "description": "Proposal, quote, and business pitch software for freelancers, agencies, and consultants. Built-in e-signature, video embeds, analytics, and content library.",
      "offers": [
        { "@type": "Offer", "name": "Starter", "price": "19.00", "priceCurrency": "USD" },
        { "@type": "Offer", "name": "Pro",     "price": "29.00", "priceCurrency": "USD" },
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does ZiggyPitch cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ZiggyPitch starts at $19/mo (Starter: 5 active proposals, 10 templates, e-sign, basic analytics). Pro is $29/mo — unlimited proposals, full analytics, video embeds, content library, custom branding, viewed notifications. Both plans start with a 14-day free trial, no credit card required."
          }
        },
        {
          "@type": "Question",
          "name": "How is ZiggyPitch different from Proposify?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Proposify starts at $49/mo. ZiggyPitch Pro is $29/mo — unlimited proposals, video embeds, full analytics, e-sign included. That's 41% cheaper with every feature you actually use."
          }
        },
        {
          "@type": "Question",
          "name": "Does ZiggyPitch have e-signature built in?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. E-signature is included on both Starter and Pro plans — no DocuSign, no HelloSign, no third-party tool needed. Your clients sign directly inside the proposal on any device."
          }
        },
        {
          "@type": "Question",
          "name": "How does the 14-day free trial work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sign up and get 14 days free — no credit card required. Full access to all features. If it's not for you, just walk away. Nothing to cancel."
          }
        },
        {
          "@type": "Question",
          "name": "Can I add video to my proposals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — on the Pro plan. Embed a personal intro video at the top of any proposal. Clients see your face, hear your voice, and connect with you before they ever sign. It's one of the highest-impact features for improving close rates."
          }
        },
        {
          "@type": "Question",
          "name": "Will I know when a client opens my proposal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Pro plan includes 'viewed' notifications — you get an alert the moment a prospect opens your proposal. You'll also see time spent per section and scroll depth, so you know exactly what they read and what they skipped."
          }
        }
      ]
    }
  ]
}

export default function Home() {
  return (
    <>
      <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <style>{`@media(max-width:768px){.nav-links{display:none!important}}`}</style>

      {/* ── NAV ── */}
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
            {[["Features", "#features"], ["Compare", "/vs/proposify"], ["Pricing", "#pricing"], ["Blog", "/blog"], ["Sign In", LOGIN]].map(([label, href]) => (
              <a key={label} href={href} style={{ color: "#888", fontSize: 15, textDecoration: "none", fontWeight: 500 }}>{label}</a>
            ))}
          </div>

          <a href={SIGNUP} style={{
            background: ACCENT, color: "#fff", textDecoration: "none",
            padding: "9px 20px", borderRadius: 8, fontSize: 14, fontWeight: 700, whiteSpace: "nowrap",
          }}>
            Start Free Trial
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ padding: "100px 24px 80px", textAlign: "center", maxWidth: 820, margin: "0 auto" }}>
        <div style={{
          display: "inline-block",
          background: `rgba(249,115,22,0.1)`, border: `1px solid rgba(249,115,22,0.25)`,
          borderRadius: 99, padding: "6px 16px", fontSize: 13, color: ACCENT, fontWeight: 600,
          marginBottom: 28, letterSpacing: "0.02em",
        }}>
          Proposify Alternative · 41% less at $29/mo
        </div>

        <h1 style={{
          fontSize: "clamp(42px,6vw,68px)", fontWeight: 700, lineHeight: 1.08,
          letterSpacing: "-1.5px", marginBottom: 24, color: "#fff",
        }}>
          Proposals that win.<br />
          <span style={{
            background: `linear-gradient(135deg,#fff 0%,${ACCENT} 100%)`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>At a price that doesn&apos;t hurt.</span>
        </h1>

        <p style={{ fontSize: 19, color: "#888", lineHeight: 1.6, marginBottom: 40, maxWidth: 600, margin: "0 auto 40px" }}>
          Professional proposals with e-signature, video embeds, and real-time analytics — all in one tool.{" "}
          <strong style={{ color: "#fff" }}>Starting at $19/mo.</strong>
        </p>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 24 }}>
          <a href={SIGNUP} style={{
            background: ACCENT, color: "#fff", textDecoration: "none",
            padding: "15px 30px", borderRadius: 10, fontSize: 16, fontWeight: 700,
          }}>
            Start Free Trial — 14 days free
          </a>
          <a href="#pricing" style={{
            background: "transparent", color: "#fff", textDecoration: "none",
            padding: "15px 30px", borderRadius: 10, fontSize: 16, fontWeight: 600, border: "1px solid #333",
          }}>
            See Pricing
          </a>
        </div>

        <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
          {["14-day free trial", "No credit card", "Cancel anytime"].map(badge => (
            <span key={badge} style={{ fontSize: 13, color: "#555", display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ color: ACCENT, fontWeight: 700 }}>✓</span> {badge}
            </span>
          ))}
        </div>
      </section>

      {/* ── PROBLEM STRIP ── */}
      <section style={{
        background: "#0f0f0f", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f", padding: "56px 24px",
      }}>
        <div style={{
          maxWidth: 1000, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 32, textAlign: "center",
        }}>
          {[
            { emoji: "📄", headline: "Your proposals look like everyone else's.", body: "A Word doc or a PDF with your logo slapped on it. Your prospect reads it on their phone, it's a mess, and they move on to the next vendor who sent something impressive." },
            { emoji: "👻", headline: "You don't know if they even opened it.", body: "You sent the proposal three days ago. Radio silence. Did they read it? Did it go to spam? You have no idea when to follow up — so you wait, and the deal goes cold." },
            { emoji: "💸", headline: "Proposify charges $49/mo just to start.", body: "And you still need DocuSign on top. ZiggyPitch is $29/mo with e-sign built in, video embeds, full analytics, and unlimited proposals. No hidden fees." },
          ].map(({ emoji, headline, body }) => (
            <div key={headline}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>{emoji}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{headline}</h3>
              <p style={{ fontSize: 15, color: "#666", lineHeight: 1.6 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" style={{ padding: "96px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2 style={{ fontSize: "clamp(32px,4vw,48px)", fontWeight: 700, letterSpacing: "-1px", marginBottom: 16 }}>
            Everything a winning proposal needs.
          </h2>
          <p style={{ fontSize: 17, color: "#666", maxWidth: 500, margin: "0 auto" }}>
            From first impression to signed contract — every tool you need to close faster and look more professional.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20 }}>
          {[
            { icon: "🎨", title: "Professional Templates", desc: "Design, marketing, dev, consulting, construction — ready-to-use templates for every industry. Start from scratch or customize to match your brand." },
            { icon: "🖱️", title: "Drag-and-Drop Builder", desc: "Build any proposal visually. Add sections, reorder blocks, embed pricing tables. No coding, no export — just a clean, live document your client can open anywhere." },
            { icon: "✍️", title: "Built-in E-Signature", desc: "Legally binding e-signature included on every plan. No DocuSign, no HelloSign, no extra monthly fee. Your client signs in seconds from any device." },
            { icon: "🎥", title: "Video Embeds", desc: "Add a personal intro video to any proposal. Your face, your voice, your enthusiasm — before they read a single word. One of the highest-impact features for close rate." },
            { icon: "👁️", title: "Viewed Notifications", desc: "Know the exact moment a prospect opens your proposal. Strike while the iron's hot — follow up when you know they're looking." },
            { icon: "📊", title: "Proposal Analytics", desc: "Time spent per section, scroll depth, opens, and views. Know exactly what they read and what they skipped so you can follow up on the right thing." },
            { icon: "📚", title: "Content Library", desc: "Save your best sections, case studies, and testimonials. Build a new proposal in minutes by snapping together reusable blocks. Never write the same thing twice." },
            { icon: "🎯", title: "Custom Branding", desc: "Your logo, your colors, your custom domain. Proposals that look 100% like they came from your agency — not a tool with your logo pasted on top." },
          ].map(({ icon, title, desc }) => (
            <div key={title} style={{
              background: "#111", border: "1px solid #1f1f1f", borderRadius: 16, padding: "28px 24px",
            }}>
              <div style={{ fontSize: 32, marginBottom: 14 }}>{icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 10 }}>{title}</h3>
              <p style={{ fontSize: 14, color: "#666", lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 32, background: "#111", border: "1px solid #1f1f1f", borderRadius: 16,
          padding: "28px 32px", display: "flex", flexWrap: "wrap", gap: "12px 40px",
        }}>
          <p style={{ color: "#555", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", width: "100%", marginBottom: 4 }}>Also included</p>
          {["Accept/decline tracking with timestamp", "Multi-currency pricing tables", "Client approval workflow", "Custom proposal URLs", "Password-protected proposals", "Mobile-friendly viewing", "Export to PDF", "14-day free trial"].map(f => (
            <span key={f} style={{ fontSize: 14, color: "#888", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ color: ACCENT, fontWeight: 700 }}>✓</span> {f}
            </span>
          ))}
        </div>
      </section>

      {/* ── COMING SOON STRIP ── */}
      <section style={{
        background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f", padding: "64px 24px",
      }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>What's coming next</h2>
            <p style={{ color: "#555", fontSize: 15 }}>We ship fast. Here's what's already in development.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16 }}>
            {[
              { icon: "💳", title: "Payment on Acceptance", sub: "Collect deposits instantly", badge: "In Development", badgeColor: "#ff9500", desc: "When a client accepts your proposal, charge the deposit automatically. No more chasing invoices after the handshake." },
              { icon: "🔗", title: "CRM Sync", sub: "Connect your pipeline", badge: "In Development", badgeColor: "#ff9500", desc: "Automatically sync accepted proposals to your CRM as won deals. No manual data entry, no copy-paste between tools." },
              { icon: "⏰", title: "Proposal Expiry Dates", sub: "Create urgency that converts", badge: "Coming Soon", badgeColor: "#0066ff", desc: "Set an expiry on any proposal. Your client sees a countdown timer. Urgency is real — and close rates go up." },
            ].map(({ icon, title, sub, badge, badgeColor, desc }) => (
              <div key={title} style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 14, padding: "24px 22px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                  <span style={{ fontSize: 28 }}>{icon}</span>
                  <span style={{
                    background: `${badgeColor}20`, color: badgeColor, border: `1px solid ${badgeColor}40`,
                    borderRadius: 99, padding: "3px 10px", fontSize: 11, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase",
                  }}>{badge}</span>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 2 }}>{title}</h3>
                <p style={{ fontSize: 12, color: "#555", marginBottom: 8 }}>{sub}</p>
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6, marginTop: 6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section style={{ padding: "96px 24px", background: "#080808", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "clamp(30px,4vw,46px)", fontWeight: 700, letterSpacing: "-1px", marginBottom: 14, color: "#fff" }}>
              Built for your business
            </h2>
            <p style={{ fontSize: 17, color: "#666", maxWidth: 500, margin: "0 auto" }}>
              Whether you're a solo freelancer or a 20-person agency, ZiggyPitch has templates and workflows built for how you sell.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 16, marginBottom: 40 }}>
            {[
              { icon: "🎨", name: "Marketing & Creative Agencies", desc: "Campaign proposals, retainer agreements, and creative briefs that land clients and set clear expectations from day one." },
              { icon: "🔨", name: "Contractors & Construction", desc: "Project quotes, scope of work, and change order proposals. Get the deposit fast and protect yourself with signed scopes." },
              { icon: "💻", name: "Web & Software Development", desc: "Project proposals, maintenance retainers, and sprint plans. Show clients exactly what they're getting — and sign it." },
              { icon: "🎓", name: "Coaches & Consultants", desc: "Program proposals, advisory agreements, and workshop packages. Close high-ticket engagements with polished, branded proposals." },
              { icon: "📸", name: "Photography & Video", desc: "Shoot packages, licensing agreements, and event quotes. Show your work, set the terms, get the signature." },
              { icon: "🏠", name: "Real Estate Services", desc: "CMA presentations, listing proposals, and buyer packages. Stand out from every other agent with a proposal that looks the part." },
              { icon: "🎯", name: "PR & Communications", desc: "Campaign pitches, media packages, and retainer proposals. Win the account before the first meeting is even over." },
              { icon: "🏢", name: "B2B Sales Teams", desc: "RFP responses, enterprise proposals, and custom pricing packages. Close bigger deals with proposals that match the size of the opportunity." },
            ].map(({ icon, name, desc }) => (
              <div key={name} style={{
                background: "#111", border: "1px solid #1f1f1f", borderRadius: 14,
                padding: "24px 22px", display: "flex", alignItems: "flex-start", gap: 16,
              }}>
                <span style={{ fontSize: 32, flexShrink: 0, lineHeight: 1 }}>{icon}</span>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 5 }}>{name}</h3>
                  <p style={{ fontSize: 13, color: "#666", lineHeight: 1.55, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: `rgba(249,115,22,0.06)`, border: `1px solid rgba(249,115,22,0.2)`,
            borderRadius: 14, padding: "32px 36px",
            display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 20,
          }}>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 6 }}>Need a custom proposal template?</h3>
              <p style={{ fontSize: 15, color: "#888", maxWidth: 480, lineHeight: 1.6, margin: 0 }}>
                We build custom templates for any industry or proposal type. Every plan includes onboarding support.
              </p>
            </div>
            <a href="mailto:hello@ziggypitch.com" style={{
              background: ACCENT, color: "#fff", textDecoration: "none",
              padding: "13px 26px", borderRadius: 9, fontSize: 15, fontWeight: 700, whiteSpace: "nowrap", flexShrink: 0,
            }}>
              Contact Us →
            </a>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section style={{ padding: "96px 24px", maxWidth: 960, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 700, letterSpacing: "-0.8px", marginBottom: 12 }}>
            ZiggyPitch vs Proposify
          </h2>
          <p style={{ color: "#666", fontSize: 16 }}>
            Every feature you actually use. 41% cheaper. Cancel anytime.
          </p>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "14px 20px", color: "#555", fontWeight: 600, fontSize: 13, borderBottom: "1px solid #1f1f1f" }}>Feature</th>
                <th style={{ textAlign: "center", padding: "14px 20px", color: ACCENT, fontWeight: 700, fontSize: 15, borderBottom: "1px solid #1f1f1f", background: `rgba(249,115,22,0.05)` }}>ZiggyPitch</th>
                <th style={{ textAlign: "center", padding: "14px 20px", color: "#555", fontWeight: 600, fontSize: 13, borderBottom: "1px solid #1f1f1f" }}>Proposify</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Starting price", "$19/mo", "$49/mo"],
                ["Unlimited proposals", "✅ Pro plan ($29/mo)", "❌ Limited on base plan"],
                ["E-signature included", "✅ Both plans", "✅ Yes"],
                ["Video embeds", "✅ Yes (Pro)", "❌ Not available"],
                ["Viewed notifications", "✅ Yes (Pro)", "✅ Yes"],
                ["Proposal analytics", "✅ Full (Pro)", "✅ Basic"],
                ["Time-on-page per section", "✅ Yes (Pro)", "❌ Not available"],
                ["Content library", "✅ Yes (Pro)", "✅ Yes"],
                ["Custom branding", "✅ Yes (Pro)", "✅ Paid plans"],
                ["Accept/decline tracking", "✅ With timestamp", "✅ Yes"],
                ["Per-seat pricing", "No — flat rate", "Yes — adds up fast"],
                ["14-day free trial", "✅ No card needed", "✅ Available"],
              ].map(([feature, ziggy, them], i) => (
                <tr key={feature} style={{ background: i % 2 === 0 ? "transparent" : "#0d0d0d" }}>
                  <td style={{ padding: "14px 20px", color: "#888", borderBottom: "1px solid #161616" }}>{feature}</td>
                  <td style={{ padding: "14px 20px", color: "#fff", textAlign: "center", borderBottom: "1px solid #161616", background: `rgba(249,115,22,0.03)`, fontWeight: 500 }}>{ziggy}</td>
                  <td style={{ padding: "14px 20px", color: "#555", textAlign: "center", borderBottom: "1px solid #161616" }}>{them}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{
          marginTop: 24, background: `rgba(249,115,22,0.06)`, border: `1px solid rgba(249,115,22,0.2)`,
          borderRadius: 12, padding: "20px 24px",
        }}>
          <p style={{ fontSize: 15, color: "#ccc", lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: ACCENT }}>Bottom line:</strong> Proposify starts at $49/mo for their base plan. Our Pro is $29/mo — unlimited proposals, video embeds, full analytics, e-sign included. That's <strong style={{ color: ACCENT }}>41% cheaper</strong> with every feature you actually use.
          </p>
        </div>

        <div style={{ marginTop: 16, textAlign: "center" }}>
          <a href="/vs/proposify" style={{ color: ACCENT, fontSize: 14, textDecoration: "underline" }}>
            See the full ZiggyPitch vs Proposify comparison →
          </a>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{ padding: "96px 24px", background: "#080808", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 700, letterSpacing: "-0.8px", marginBottom: 12 }}>
              Simple pricing. No surprises.
            </h2>
            <p style={{ color: "#666", fontSize: 16 }}>
              Two plans. Everything included. No per-seat fees.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
            {[
              {
                name: "Starter", price: "$19", sub: "/mo", highlight: false,
                desc: "For freelancers and solo operators sending a handful of proposals per month.",
                features: ["5 active proposals", "10 templates", "Basic analytics", "E-signature included", "Accept/decline tracking", "Email support"],
                cta: "Start Free Trial",
              },
              {
                name: "Pro", price: "$29", sub: "/mo", highlight: true,
                desc: "For agencies and consultants who live in proposals and need every edge.",
                features: ["Unlimited proposals", "All templates", "Full analytics (time-on-page, scroll depth)", "Viewed notifications", "Video embeds", "Content library", "Custom branding", "Priority support"],
                cta: "Start Free Trial",
              },
            ].map(({ name, price, sub, highlight, desc, features, cta }) => (
              <div key={name} style={{
                background: "#111",
                border: highlight ? `2px solid ${ACCENT}` : "1px solid #1f1f1f",
                borderRadius: 20, padding: "36px 28px",
                position: "relative",
              }}>
                {highlight && (
                  <div style={{
                    position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
                    background: ACCENT, color: "#fff", fontSize: 11, fontWeight: 700,
                    padding: "4px 14px", borderRadius: 99, letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap",
                  }}>Most Popular</div>
                )}
                <div style={{ fontSize: 13, fontWeight: 700, color: highlight ? ACCENT : "#555", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>{name}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 8 }}>
                  <span style={{ fontSize: 52, fontWeight: 700, color: "#fff", letterSpacing: "-2px" }}>{price}</span>
                  <span style={{ fontSize: 16, color: "#555" }}>{sub}</span>
                </div>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.6, marginBottom: 28 }}>{desc}</p>
                <ul style={{ listStyle: "none", padding: 0, marginBottom: 28 }}>
                  {features.map(item => (
                    <li key={item} style={{ padding: "7px 0", fontSize: 14, color: "#ccc", display: "flex", alignItems: "center", gap: 10, borderBottom: "1px solid #1a1a1a" }}>
                      <span style={{ color: ACCENT, fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
                <a href={SIGNUP} style={{
                  display: "block", textDecoration: "none", textAlign: "center",
                  background: highlight ? ACCENT : "transparent",
                  color: highlight ? "#fff" : "#fff",
                  border: highlight ? "none" : "1px solid #333",
                  padding: "14px", borderRadius: 10, fontSize: 15, fontWeight: 700,
                }}>
                  {cta}
                </a>
              </div>
            ))}
          </div>

          <p style={{ textAlign: "center", marginTop: 24, fontSize: 13, color: "#444" }}>
            All plans include a 14-day free trial · No credit card required · Cancel anytime
          </p>

          <div style={{
            marginTop: 32, background: "#111", border: "1px solid #1f1f1f", borderRadius: 14,
            padding: "22px 24px", textAlign: "center",
          }}>
            <p style={{ color: "#888", fontSize: 14, lineHeight: 1.6 }}>
              🏢 <strong style={{ color: "#fff" }}>Running a full business?</strong> Get all 10 ZiggyTech apps — including ZiggyPitch — for{" "}
              <strong style={{ color: ACCENT }}>$179/mo flat</strong> with the ZiggyTech Business Suite.{" "}
              <a href="https://ziggybusiness.com" style={{ color: ACCENT, textDecoration: "underline" }}>Learn more →</a>
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "96px 24px", maxWidth: 740, margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(28px,4vw,38px)", fontWeight: 700, letterSpacing: "-0.6px", marginBottom: 48, textAlign: "center" }}>
          Questions? We've got answers.
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {[
            { q: "How much does ZiggyPitch cost?", a: "Starter is $19/mo — 5 active proposals, 10 templates, basic analytics, e-sign. Pro is $29/mo — unlimited proposals, full analytics, viewed notifications, video embeds, content library, and custom branding. Both start with a 14-day free trial, no credit card required." },
            { q: "How is ZiggyPitch different from Proposify?", a: "Proposify starts at $49/mo for their base plan. ZiggyPitch Pro is $29/mo — unlimited proposals, video embeds, full analytics, e-sign included. That's 41% cheaper with every feature you actually use. Plus Proposify has per-seat pricing that adds up fast; ZiggyPitch is flat-rate." },
            { q: "Does ZiggyPitch have e-signature built in?", a: "Yes. E-signature is included on both Starter and Pro plans — no DocuSign, no HelloSign, no third-party tool needed. Your clients sign directly inside the proposal on any device. It's legally binding and you get a timestamped record of acceptance." },
            { q: "Will I know when a client opens my proposal?", a: "Yes — on the Pro plan. You get a 'viewed' notification the moment a prospect opens your proposal. You also see time spent per section and scroll depth, so you know exactly what they read and what they skipped before you follow up." },
            { q: "Can I add video to my proposals?", a: "Yes, on the Pro plan. Embed a personal intro video at the top of any proposal. Your client sees your face, hears your voice, and connects with you before they read a single word. It's one of the highest-impact features for improving close rates." },
            { q: "How does the 14-day free trial work?", a: "Sign up and get 14 days free — no credit card required. Full access to your plan's features from day one. If it's not for you, just walk away. Nothing to cancel, no automatic charges." },
          ].map(({ q, a }) => (
            <details key={q} style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 10, overflow: "hidden" }}>
              <summary style={{
                padding: "20px 24px", fontSize: 16, fontWeight: 600, color: "#fff",
                cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                {q}
                <span style={{ color: ACCENT, fontSize: 20, fontWeight: 400, flexShrink: 0 }}>+</span>
              </summary>
              <div style={{ padding: "0 24px 20px", fontSize: 15, color: "#777", lineHeight: 1.7, borderTop: "1px solid #1a1a1a" }}>
                <p style={{ marginTop: 16 }}>{a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{
        padding: "100px 24px", textAlign: "center",
        background: "linear-gradient(180deg,#0a0a0a 0%,#0d0500 100%)",
        borderTop: "1px solid #1f1f1f",
      }}>
        <h2 style={{ fontSize: "clamp(36px,5vw,58px)", fontWeight: 700, letterSpacing: "-1.5px", marginBottom: 20, lineHeight: 1.1 }}>
          Stop sending proposals<br />
          <span style={{
            background: `linear-gradient(135deg,#fff 0%,${ACCENT} 100%)`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>that look like everyone else&apos;s.</span>
        </h2>
        <p style={{ fontSize: 18, color: "#555", marginBottom: 40 }}>
          14 days free. No credit card. Cancel anytime.
        </p>
        <a href={SIGNUP} style={{
          display: "inline-block", background: ACCENT, color: "#fff", textDecoration: "none",
          padding: "18px 40px", borderRadius: 12, fontSize: 18, fontWeight: 700, letterSpacing: "-0.2px",
        }}>
          Start Free Trial →
        </a>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#050505", borderTop: "1px solid #111", padding: "40px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 20, textAlign: "center" }}>
          <div style={{ display: "flex", gap: 28, flexWrap: "wrap", justifyContent: "center" }}>
            {[["Home", "/"], ["Features", "#features"], ["Compare", "/vs/proposify"], ["Pricing", "#pricing"], ["Blog", "/blog"], ["Privacy", "/privacy"], ["Terms", "/terms"], ["Sign In", LOGIN]].map(([label, href]) => (
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
