'use client'
import Link from 'next/link'
import { useState } from 'react'

const features = [
  { title: 'Proposal Templates', desc: 'Start from a library of proven templates. Customize with your brand, pricing tables, and service packages in minutes.' },
  { title: 'View Tracking', desc: 'Know the instant your proposal is opened. See how long they spent on each section. Follow up at exactly the right moment.' },
  { title: 'E-Signatures', desc: 'Collect legally binding signatures without leaving the platform. Full audit trail. No printing, scanning, or back-and-forth.' },
  { title: 'Video Embeds', desc: 'Embed a personal video introduction or product walkthrough directly in your proposal. Stand out from everyone else\'s PDF.' },
  { title: 'Content Library', desc: 'Save your best case studies, pricing blocks, and boilerplate sections. Reuse them across proposals without starting from scratch.' },
  { title: 'Stripe Payments', desc: 'Collect a deposit or full payment directly from the proposal. One click for the client. Stripe-powered, professionally presented.' },
]

const faqs = [
  { q: 'How is ZiggyPitch different from Google Docs or Word?', a: 'You can\'t track whether a client opened your Google Doc. You can\'t collect a signature in Word. ZiggyPitch gives you view tracking, e-signatures, and Stripe payments in one place.' },
  { q: 'What counts as an "active proposal"?', a: 'An active proposal is one that\'s been sent but not yet accepted, declined, or archived. On Starter you can have 5 active at a time — close one to open a new slot. Pro has unlimited.' },
  { q: 'Are the e-signatures legally binding?', a: 'Yes. Our e-signatures meet eSign Act and ESIGN standards. Full audit trail with timestamps and IP addresses on every signed document.' },
  { q: 'How does view tracking work?', a: 'When your client opens the proposal link, you get an instant notification. You can see total views, time spent, and which sections they lingered on.' },
  { q: 'Can I collect payment when they sign?', a: 'Yes. Connect Stripe and add a payment block to collect a deposit or full payment at signature. Clients pay without leaving the proposal.' },
  { q: 'How does the free trial work?', a: '14 days of full Pro access. No credit card required. After 14 days, choose a plan or your account moves to read-only.' },
]

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur border-b border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-bold text-2xl tracking-tight">
              <span style={{ color: '#f97316' }}>Ziggy</span><span className="text-white">Pitch</span>
            </Link>
            <div className="hidden md:flex items-center gap-1 text-xs text-[#b3b3b3]">
              {[['Features', '/features'], ['Pricing', '/pricing'], ['Suite', '/suite'], ['vs Proposify', '/compare/proposify'], ['vs PandaDoc', '/compare/pandadoc']].map(([label, href]) => (
                <Link key={label} href={href} className="px-3 py-2 hover:text-white transition-colors rounded-lg hover:bg-[#1a1a1a]">{label}</Link>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <Link href="https://app.ziggypitch.com/login" className="hidden md:block text-sm text-[#b3b3b3] hover:text-white transition-colors">Sign In</Link>
              <Link href="https://app.ziggypitch.com/signup" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f97316] text-white rounded-xl font-semibold text-sm hover:bg-[#f97316]/90 hover:scale-105 transition-all">Start Free Trial</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24 px-4 bg-[#0a0a0a]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#f97316]/8 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        </div>
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f97316]/10 border border-[#f97316]/20 text-[#f97316] text-xs font-semibold uppercase tracking-widest mb-8">
            ZiggyPitch — Proposal Software
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Proposals that <span style={{ color: '#f97316' }}>close deals</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#b3b3b3] max-w-3xl mx-auto leading-relaxed mb-10">
            We were sending proposals in Google Docs. Couldn&apos;t tell if clients opened them, couldn&apos;t collect signatures, couldn&apos;t track what worked. We built the fix &mdash; and it costs less than your morning coffee per day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Link href="https://app.ziggypitch.com/signup" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f97316] text-white rounded-xl font-semibold text-lg hover:bg-[#f97316]/90 hover:scale-105 transition-all">
              Start Free Trial
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href="/features" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f97316]/10 border border-[#f97316]/30 text-[#f97316] rounded-xl font-semibold text-lg hover:bg-[#f97316]/20 transition-all">
              See Features
            </Link>
          </div>
          <p className="text-sm text-[#b3b3b3]/60">14-day free trial · No credit card required · Cancel anytime</p>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-[#1f1f1f]">
            {['$19/mo Starter — less than Proposify', 'Know the instant your proposal is opened', 'E-signatures built in', 'Win/loss tracking'].map((fact) => (
              <div key={fact} className="flex items-center gap-2 text-sm text-[#b3b3b3]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
                {fact}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product preview placeholder */}
      <section className="py-16 px-4 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl border border-[#1f1f1f] overflow-hidden bg-[#111111]" style={{ aspectRatio: '16/9' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#f97316]/5 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#f97316]/10 border border-[#f97316]/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <p className="text-white font-semibold text-lg">Product demo coming soon</p>
                <p className="text-[#b3b3b3] text-sm mt-1">See ZiggyPitch in action</p>
                <Link href="https://app.ziggypitch.com/signup" className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 bg-[#f97316] text-white rounded-lg text-sm font-medium hover:bg-[#f97316]/90 transition-colors">Start free trial instead</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 md:py-32 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#0c0f14] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#f97316] mb-3">Features</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Everything you need to win more deals.</h2>
            <p className="text-lg text-[#b3b3b3] max-w-2xl mx-auto leading-relaxed">Stop sending static PDFs into the void. ZiggyPitch turns proposals into interactive, trackable, signable documents.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 md:p-8 hover:border-[#f97316]/30 hover:shadow-[0_0_30px_rgba(249,115,22,0.08)] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#f97316]/10 border border-[#f97316]/20 flex items-center justify-center mb-5 group-hover:bg-[#f97316]/20 transition-colors">
                  <svg className="w-6 h-6 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{f.title}</h3>
                <p className="text-[#b3b3b3] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/features" className="inline-flex items-center gap-2 px-8 py-4 bg-[#f97316]/10 border border-[#f97316]/30 text-[#f97316] rounded-xl font-semibold hover:bg-[#f97316]/20 transition-all">View all features</Link>
          </div>
        </div>
      </section>

      {/* Founding story */}
      <section className="relative overflow-hidden py-24 md:py-32 px-4 bg-gradient-to-br from-[#080c10] via-[#0d1828] to-[#080c10]">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[#f97316]/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[#f97316]/4 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#f97316] mb-4">Our story</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">We built this because proposals were broken</h2>
          <div className="space-y-6 text-lg text-[#b3b3b3] leading-relaxed">
            <p>Proposify wanted $49/month. PandaDoc wanted $35. We built proposal software with the same features for $19/month on Starter and $29/month for unlimited proposals.</p>
            <p>We were sending proposals in Google Docs, following up blind, and losing deals we never even knew were in play. Once we added view tracking, everything changed.</p>
            <p className="text-white font-medium">That&apos;s ZiggyPitch. Built by people who were frustrated with losing deals in the dark.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { value: '$19/mo', label: 'Starting price', color: '#f97316' },
              { value: 'Unlimited', label: 'Proposals on Pro', color: '#0ea5e9' },
              { value: 'Real-time', label: 'View notifications', color: '#84cc16' },
              { value: '14 days', label: 'Free to try', color: '#8b5cf6' },
            ].map((item, i) => (
              <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-5 text-center hover:border-[#f97316]/30 transition-colors">
                <p className="text-2xl font-bold mb-1" style={{ color: item.color }}>{item.value}</p>
                <p className="text-sm text-[#b3b3b3]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="py-24 md:py-32 px-4 bg-gradient-to-b from-[#0d0d0d] via-[#0a0e14] to-[#0d0d0d]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#f97316] mb-4">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Simple, honest pricing</h2>
          <p className="text-lg text-[#b3b3b3] mb-12 max-w-2xl mx-auto leading-relaxed">Proposify charges $49/mo. PandaDoc charges $35–$65/mo. We start at $19/mo. Full features. No BS.</p>

          {/* Competitor comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
            {[
              { name: 'Proposify', price: '$49/mo', note: 'Per user pricing' },
              { name: 'PandaDoc', price: '$35–$65/mo', note: 'Essential to Business plans' },
            ].map((comp) => (
              <div key={comp.name} className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-5 text-left opacity-60">
                <p className="text-sm font-semibold text-[#b3b3b3] mb-1">{comp.name}</p>
                <p className="text-xl font-bold text-white line-through decoration-red-500">{comp.price}</p>
                <p className="text-xs text-[#b3b3b3] mt-1">{comp.note}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-8 text-left">
              <p className="text-sm font-semibold text-[#b3b3b3] uppercase tracking-wider mb-2">Starter</p>
              <div className="flex items-end gap-1 mb-1"><span className="text-5xl font-bold text-white">$19</span><span className="text-[#b3b3b3] mb-2">/mo</span></div>
              <p className="text-sm text-[#b3b3b3] mb-6">5 active proposals</p>
              <Link href="https://app.ziggypitch.com/signup" className="block w-full text-center px-6 py-3 bg-[#f97316]/10 border border-[#f97316]/30 text-[#f97316] rounded-xl font-semibold hover:bg-[#f97316]/20 transition-all">Start free trial</Link>
            </div>
            <div className="bg-[#111111] border-2 border-[#f97316]/40 rounded-2xl p-8 text-left relative shadow-[0_0_40px_rgba(249,115,22,0.12)]">
              <div className="absolute -top-3 left-6"><span className="px-3 py-1 bg-[#f97316] text-white text-xs font-bold rounded-full uppercase tracking-wide">Most Popular</span></div>
              <p className="text-sm font-semibold text-[#b3b3b3] uppercase tracking-wider mb-2">Pro</p>
              <div className="flex items-end gap-1 mb-1"><span className="text-5xl font-bold text-white">$29</span><span className="text-[#b3b3b3] mb-2">/mo</span></div>
              <p className="text-sm text-[#b3b3b3] mb-6">Unlimited proposals · All features</p>
              <Link href="https://app.ziggypitch.com/signup" className="block w-full text-center px-6 py-3 bg-[#f97316] text-white rounded-xl font-semibold hover:bg-[#f97316]/90 transition-all">Start free trial</Link>
            </div>
          </div>
          <Link href="/pricing" className="inline-flex items-center gap-2 text-[#f97316] hover:underline font-medium">
            View full pricing and compare plans
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-4 bg-[#080808]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#f97316] mb-4">FAQ</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Common questions</h2>
            <p className="text-lg text-[#b3b3b3]">Everything you need to know before you start.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-2xl overflow-hidden hover:border-[#f97316]/20 transition-colors">
                <button className="w-full flex items-center justify-between p-6 md:p-8 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="text-white font-semibold text-lg pr-4">{faq.q}</span>
                  <svg className={`w-5 h-5 text-[#f97316] flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <p className="text-[#b3b3b3] text-lg leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-[#b3b3b3] mt-8">More questions? <Link href="/faq" className="text-[#f97316] hover:underline">View full FAQ</Link></p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 md:py-32 px-4 bg-gradient-to-br from-[#080c10] via-[#0c1520] to-[#080c10]">
        <div className="absolute inset-0 bg-[#f97316]/4 blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Ready to send proposals<br /><span style={{ color: '#f97316' }}>that close?</span></h2>
          <p className="text-xl text-[#b3b3b3] mb-10 leading-relaxed">Track opens. Collect signatures. Get paid.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="https://app.ziggypitch.com/signup" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#f97316] text-white rounded-xl font-bold text-xl hover:bg-[#f97316]/90 hover:scale-105 transition-all shadow-[0_0_40px_rgba(249,115,22,0.3)]">
              Start Free Trial
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href="/pricing" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#f97316]/10 border border-[#f97316]/30 text-[#f97316] rounded-xl font-bold text-xl hover:bg-[#f97316]/20 transition-all">View Pricing</Link>
          </div>
          <p className="text-sm text-[#b3b3b3]/60 mt-6">14-day free trial · No credit card required · Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1f1f1f] py-12 px-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-bold text-white mb-4"><span style={{ color: '#f97316' }}>Ziggy</span><span className="text-white">Pitch</span></p>
              <p className="text-sm text-[#b3b3b3] leading-relaxed">Proposal software that helps you close more deals.</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#b3b3b3] mb-4">Product</p>
              {[['Features', '/features'], ['Pricing', '/pricing'], ['Suite', '/suite'], ['Changelog', '/changelog'], ['Security', '/security']].map(([label, href]) => (
                <Link key={label} href={href} className="block text-sm text-[#b3b3b3] hover:text-white mb-2 transition-colors">{label}</Link>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#b3b3b3] mb-4">Compare</p>
              {[['vs Proposify', '/compare/proposify'], ['vs PandaDoc', '/compare/pandadoc'], ['FAQ', '/faq'], ['Blog', '/blog']].map(([label, href]) => (
                <Link key={label} href={href} className="block text-sm text-[#b3b3b3] hover:text-white mb-2 transition-colors">{label}</Link>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#b3b3b3] mb-4">Legal</p>
              {[['Privacy Policy', '/privacy'], ['Terms of Service', '/terms'], ['Cookie Policy', '/cookies']].map(([label, href]) => (
                <Link key={label} href={href} className="block text-sm text-[#b3b3b3] hover:text-white mb-2 transition-colors">{label}</Link>
              ))}
            </div>
          </div>
          <div className="border-t border-[#1f1f1f] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#b3b3b3]">© 2026 ZiggyTech Ventures LLC</p>
            <Link href="https://ziggybusiness.com" className="text-sm text-[#b3b3b3] hover:text-white transition-colors">Part of the ZiggyTech Business Suite →</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
