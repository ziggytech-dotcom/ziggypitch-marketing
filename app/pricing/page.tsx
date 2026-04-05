import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing — ZiggyPitch",
  description: "Simple, transparent pricing. ZiggyPitch starts at $29/mo. Starter, Pro, and Business plans for freelancers, agencies, and sales teams.",
  openGraph: {
    title: "ZiggyPitch Pricing — Proposals that win clients",
    description: "Starter $29/mo · Pro $59/mo · Business $119/mo. 14-day free trial, no credit card required.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
}

const ACCENT = "#f97316"
const SIGNUP = "https://app.ziggypitch.com/signup"
const LOGIN  = "https://app.ziggypitch.com/login"

const tiers = [
  {
    name: "Starter",
    price: "$29",
    period: "/mo",
    description: "For freelancers sending their first proposals.",
    features: [
      "1 user seat",
      "Up to 5 proposals/mo",
      "Proposal templates",
      "E-signature collection",
      "View tracking",
      "PDF export",
      "Email delivery",
    ],
    cta: "Start Free Trial",
    href: SIGNUP,
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$59",
    period: "/mo",
    description: "For agencies that close deals with beautiful decks.",
    features: [
      "5 user seats",
      "Unlimited proposals",
      "Stripe payment collection",
      "Proposal analytics",
      "Zapier + API integrations",
      "Custom branding",
      "Content library",
      "Client approval workflow",
    ],
    cta: "Start Free Trial",
    href: SIGNUP,
    highlighted: true,
  },
  {
    name: "Business",
    price: "$119",
    period: "/mo",
    description: "For sales teams closing at scale.",
    features: [
      "15 user seats",
      "Everything in Pro",
      "Priority support",
      "Custom domain",
      "Team proposal library",
      "SSO login",
      "Advanced analytics",
      "CRM integrations",
    ],
    cta: "Start Free Trial",
    href: SIGNUP,
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Enterprise proposal infrastructure.",
    features: [
      "Unlimited users",
      "Everything in Business",
      "Dedicated account manager",
      "SLA guarantee",
      "Custom integrations",
      "White-label option",
      "Onboarding & training",
    ],
    cta: "Contact Sales",
    href: "mailto:hello@ziggypitch.com",
    highlighted: false,
  },
]

export default function PricingPage() {
  return (
    <>
      <style>{`@media(max-width:768px){.nav-links{display:none!important}}`}</style>

      {/* Nav */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(10,10,10,0.92)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid #1f1f1f", padding: "0 24px",
      }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/" style={{ textDecoration: "none", fontSize: 22, fontWeight: 700, color: "#fff", letterSpacing: "-0.5px" }}>
            Ziggy<span style={{ color: ACCENT }}>Pitch</span>
          </a>
          <div className="nav-links" style={{ display: "flex", gap: 28 }}>
            {[["Features", "/features"], ["Pricing", "/pricing"], ["Blog", "/blog"], ["Sign In", LOGIN]].map(([l, h]) => (
              <a key={l} href={h} style={{ color: l === "Pricing" ? "#fff" : "#888", fontSize: 15, textDecoration: "none", fontWeight: l === "Pricing" ? 600 : 500 }}>{l}</a>
            ))}
          </div>
          <a href={SIGNUP} style={{ background: ACCENT, color: "#fff", textDecoration: "none", padding: "9px 20px", borderRadius: 8, fontSize: 14, fontWeight: 700 }}>
            Start Free Trial
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: 680, margin: "0 auto" }}>
        <div style={{
          display: "inline-block", background: `${ACCENT}18`, border: `1px solid ${ACCENT}40`,
          borderRadius: 99, padding: "6px 16px", fontSize: 13, color: ACCENT, fontWeight: 600,
          marginBottom: 24, letterSpacing: "0.02em",
        }}>
          Simple, transparent pricing
        </div>
        <h1 style={{ fontSize: "clamp(36px,5vw,56px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: 20, color: "#fff" }}>
          Proposals that win clients.<br />
          <span style={{ background: `linear-gradient(135deg, #fff 0%, ${ACCENT} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Pricing you can afford.
          </span>
        </h1>
        <p style={{ fontSize: 18, color: "#888", lineHeight: 1.6, maxWidth: 520, margin: "0 auto" }}>
          ZiggyPitch helps you create stunning proposals, collect e-signatures, and get paid — all in one place.
        </p>
      </section>

      {/* Pricing Cards */}
      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {tiers.map((tier) => (
            <div
              key={tier.name}
              style={{
                position: "relative",
                background: tier.highlighted ? `${ACCENT}0d` : "#111",
                border: `1px solid ${tier.highlighted ? ACCENT : "#1f1f1f"}`,
                borderRadius: 20,
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {tier.highlighted && (
                <div style={{
                  position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                  background: ACCENT, color: "#fff", padding: "4px 14px", borderRadius: 99,
                  fontSize: 12, fontWeight: 700, whiteSpace: "nowrap",
                }}>
                  Most Popular
                </div>
              )}

              <div style={{ marginBottom: 20 }}>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{tier.name}</h3>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 8 }}>
                  <span style={{ fontSize: 40, fontWeight: 700, color: tier.highlighted ? ACCENT : "#fff", letterSpacing: "-1px" }}>{tier.price}</span>
                  {tier.period && <span style={{ color: "#666", fontSize: 14 }}>{tier.period}</span>}
                </div>
                <p style={{ color: "#666", fontSize: 13, lineHeight: 1.5 }}>{tier.description}</p>
              </div>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                {tier.features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, color: "#888", fontSize: 13 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={tier.href}
                style={{
                  display: "block", textAlign: "center", padding: "11px 16px", borderRadius: 10,
                  fontSize: 14, fontWeight: 600, textDecoration: "none",
                  background: tier.highlighted ? ACCENT : "transparent",
                  color: tier.highlighted ? "#fff" : "#ccc",
                  border: tier.highlighted ? "none" : "1px solid #2d2d2d",
                }}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", fontSize: 14, color: "#555", marginTop: 36 }}>
          All plans include a 14-day free trial. No credit card required.{" "}
          <a href={LOGIN} style={{ color: ACCENT, textDecoration: "none" }}>Already have an account?</a>
        </p>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: 700, margin: "0 auto", padding: "0 24px 100px" }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, textAlign: "center", marginBottom: 36 }}>Common questions</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { q: "Can I switch plans anytime?", a: "Yes. Upgrade or downgrade at any time — changes take effect immediately and billing is prorated." },
            { q: "What happens after the free trial?", a: "You'll be prompted to pick a plan. If you don't, your account is paused (not deleted). Your data is safe." },
            { q: "Do you offer annual billing?", a: "Coming soon. For now, all plans are month-to-month with no annual commitment." },
            { q: "Can I use ZiggyPitch with my existing CRM?", a: "Yes — we have Zapier integration and a public API. Connect to HubSpot, ZiggyHQ, or any tool you use." },
          ].map((item) => (
            <div key={item.q} style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 14, padding: "20px 24px" }}>
              <h3 style={{ fontSize: 15, fontWeight: 600, color: "#fff", marginBottom: 8 }}>{item.q}</h3>
              <p style={{ fontSize: 14, color: "#666", lineHeight: 1.6, margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #1a1a1a", padding: "32px 24px", textAlign: "center" }}>
        <p style={{ color: "#555", fontSize: 13 }}>
          © 2026 ZiggyPitch · <a href="/privacy" style={{ color: "#555", textDecoration: "none" }}>Privacy</a> · <a href="/terms" style={{ color: "#555", textDecoration: "none" }}>Terms</a>
        </p>
      </footer>
    </>
  )
}
