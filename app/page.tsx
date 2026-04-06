'use client'
import { useState } from 'react'
import Link from 'next/link'
import { MarketingNav } from '@/app/components/Nav'
import { MarketingFooter } from '@/app/components/Footer'

const features = [
  {
    icon: (
      <svg className="w-6 h-6 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: `Proposal Templates`, desc: `Start from professionally designed templates. Customize for your brand and reuse with one click.`
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    title: `E-Signatures`, desc: `Clients sign directly inside the proposal. No separate DocuSign step. Instant notification on sign.`
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: `View Tracking`, desc: `See exactly when a client opens your proposal, how long they spend on each section, and what they focus on.`
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: `Video Embeds`, desc: `Embed a personalized intro video or product demo directly inside your proposal.`
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: `Content Library`, desc: `Save your best proposal sections and reuse them across proposals with one click.`
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: `Stripe Payments`, desc: `Add a payment link directly to your proposal. Clients pay a deposit or full amount when they accept.`
  },
]
const heroFacts = [
  '$29/mo — Proposify charges $49',
  'View tracking built in',
  '10-app suite available',
  'Support from the team that built it',
]
const stats = [
  { value: '$29/mo', label: 'Starting price', color: '#f97316' },
  { value: '100%', label: 'View tracking', color: '#0ea5e9' },
  { value: 'E-sign', label: 'Built in', color: '#10b981' },
  { value: '14 days', label: 'Free to try', color: '#8b5cf6' },
]
const faqs = [
  { q: `How many proposals can I have active at once?`, a: `Starter allows 5 active proposals at $19/mo. Pro allows unlimited active proposals at $29/mo.` },
  { q: `Can clients sign inside the proposal?`, a: `Yes. Clients sign directly within ZiggyPitch — no separate DocuSign step needed. You receive an instant notification the moment they sign.` },
  { q: `Does view tracking actually work?`, a: `Yes. Every time a client opens your proposal, ZiggyPitch logs the event with timestamps and time-on-page for each section.` },
  { q: `Can I collect payment when the proposal is accepted?`, a: `Yes (Pro plan). Add a Stripe payment link to your proposal — clients can pay a deposit or full amount when they accept.` },
  { q: `Can I use my own branding?`, a: `Yes. All plans include custom branding — your logo, brand colors, and custom domain for proposal links. Pro removes ZiggyPitch branding entirely.` },
]

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <MarketingNav />

      <section className="relative overflow-hidden pt-32 pb-24 px-4">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#f97316]/12 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)', backgroundSize: '64px 64px' }} />
        </div>
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f97316]/10 border border-[#f97316]/20 text-[#f97316] text-xs font-semibold uppercase tracking-widest mb-8">
            ZiggyPitch — Proposals for local business
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Proposals that close deals
          </h1>
          <p className="text-xl md:text-2xl text-[#b3b3b3] max-w-3xl mx-auto leading-relaxed mb-10">
            We were sending proposals in Google Docs. Couldn't tell if clients opened them, couldn't collect signatures, couldn't track what worked. We built the fix — for less than $30/mo.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Link href="https://app.ziggypitch.com/signup" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f97316] text-white rounded-xl font-semibold text-lg hover:opacity-90 hover:scale-105 transition-all">
              Start Free Trial
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href="/features" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f97316]/10 border border-[#f97316]/30 text-[#f97316] rounded-xl font-semibold text-lg hover:bg-[#f97316]/20 transition-all">
              See Features
            </Link>
          </div>
          <p className="text-sm text-[#b3b3b3]/60">14-day free trial · No credit card required · Cancel anytime</p>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-[#1f1f1f]">
            {heroFacts.map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm text-[#b3b3b3]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />{f}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#0c0f14] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#f97316] mb-3">Features</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Everything you need</h2>
            <p className="text-lg text-[#b3b3b3] max-w-2xl mx-auto">The tools that actually move your business forward.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 md:p-8 hover:border-[#f97316]/30 hover:shadow-[0_0_30px_rgba(249,115,22,0.08)] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#f97316]/10 border border-[#f97316]/20 flex items-center justify-center mb-5 group-hover:bg-[#f97316]/20 transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{f.title}</h3>
                <p className="text-[#b3b3b3] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/features" className="inline-flex items-center gap-2 px-8 py-4 bg-[#f97316]/10 border border-[#f97316]/30 text-[#f97316] rounded-xl font-semibold hover:bg-[#f97316]/20 transition-all">
              View all features
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 md:py-32 px-4 bg-gradient-to-br from-[#080c10] via-[#0d1828] to-[#080c10]">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[#f97316]/6 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#f97316] mb-4">Our story</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">We&apos;ve been in your shoes</h2>
          <div className="space-y-6 text-lg text-[#b3b3b3] leading-relaxed">
            <p>We were sending proposals in Google Docs. Couldn't tell if clients opened them, couldn't collect signatures, couldn't track what worked. We built the fix — for less than $30/mo.</p>
            <p className="text-white font-medium">That&apos;s ZiggyPitch. Built by people who get it, for people who need it.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {stats.map((s, i) => (
              <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-5 text-center hover:border-[#f97316]/30 transition-colors">
                <p className="text-2xl font-bold mb-1" style={{ color: s.color }}>{s.value}</p>
                <p className="text-sm text-[#b3b3b3]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-4 bg-gradient-to-b from-[#0d0d0d] via-[#0a0e14] to-[#0d0d0d]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#f97316] mb-4">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Simple, honest pricing</h2>
          <p className="text-lg text-[#b3b3b3] mb-12 max-w-2xl mx-auto">No seat traps. No hidden fees. No contact sales.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-8 text-left">
              <p className="text-sm font-semibold text-[#b3b3b3] uppercase tracking-wider mb-2">Starter</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-5xl font-bold text-white">$19</span>
                <span className="text-[#b3b3b3] mb-2">/mo</span>
              </div>
              <p className="text-sm text-[#b3b3b3] mb-6">5 active proposals</p>
              <Link href="https://app.ziggypitch.com/signup" className="block w-full text-center px-6 py-3 bg-[#f97316]/10 border border-[#f97316]/30 text-[#f97316] rounded-xl font-semibold hover:bg-[#f97316]/20 transition-all">Start free trial</Link>
            </div>
            <div className="bg-[#111111] border-2 border-[#f97316]/40 rounded-2xl p-8 text-left relative">
              <div className="absolute -top-3 left-6"><span className="px-3 py-1 bg-[#f97316] text-white text-xs font-bold rounded-full uppercase">Most Popular</span></div>
              <p className="text-sm font-semibold text-[#b3b3b3] uppercase tracking-wider mb-2">Pro</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-5xl font-bold text-white">$29</span>
                <span className="text-[#b3b3b3] mb-2">/mo</span>
              </div>
              <p className="text-sm text-[#b3b3b3] mb-6">Unlimited proposals</p>
              <Link href="https://app.ziggypitch.com/signup" className="block w-full text-center px-6 py-3 bg-[#f97316] text-white rounded-xl font-semibold hover:opacity-90 transition-all">Start free trial</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto mb-4">
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-5 text-center">
              <p className="text-[#b3b3b3] text-sm mb-1">Proposify</p>
              <p className="text-3xl font-bold text-white">$49<span className="text-lg text-[#b3b3b3]">/mo</span></p>
              <p className="text-[#e11d48] text-sm mt-1">$30 more per month</p>
            </div>
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-5 text-center">
              <p className="text-[#b3b3b3] text-sm mb-1">PandaDoc</p>
              <p className="text-3xl font-bold text-white">$35<span className="text-lg text-[#b3b3b3]">/mo</span></p>
              <p className="text-[#e11d48] text-sm mt-1">costs more per month</p>
            </div>
          </div>
          <div className="p-4 bg-[#22c55e]/10 border border-[#22c55e]/20 rounded-xl max-w-2xl mx-auto mb-8">
            <p className="text-[#22c55e] font-bold text-lg">Save up to $360/year with ZiggyPitch</p>
          </div>
          <Link href="/pricing" className="inline-flex items-center gap-2 text-[#f97316] hover:underline font-medium">
            View full pricing
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>

      <section className="py-24 md:py-32 px-4 bg-[#080808]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#f97316] mb-4">FAQ</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Common questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-2xl overflow-hidden hover:border-[#f97316]/20 transition-colors">
                <button className="w-full flex items-center justify-between p-6 md:p-8 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="text-white font-semibold text-lg pr-4">{faq.q}</span>
                  <svg className={`w-5 h-5 text-[#f97316] flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && <div className="px-6 md:px-8 pb-6 md:pb-8"><p className="text-[#b3b3b3] text-lg leading-relaxed">{faq.a}</p></div>}
              </div>
            ))}
          </div>
          <p className="text-center text-[#b3b3b3] mt-8">More questions? <Link href="/faq" className="text-[#f97316] hover:underline">View full FAQ</Link></p>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 md:py-32 px-4 bg-gradient-to-br from-[#080c10] via-[#0c1520] to-[#080c10]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to run your business<br />
            <span className="text-[#f97316]">the smarter way?</span>
          </h2>
          <p className="text-xl text-[#b3b3b3] mb-10">14 days free. No credit card. Cancel anytime.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="https://app.ziggypitch.com/signup" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#f97316] text-white rounded-xl font-bold text-xl hover:opacity-90 hover:scale-105 transition-all">
              Start Free Trial
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href="/pricing" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#f97316]/10 border border-[#f97316]/30 text-[#f97316] rounded-xl font-bold text-xl hover:bg-[#f97316]/20 transition-all">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  )
}
