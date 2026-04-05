import Link from 'next/link'
import { MarketingNav } from '@/app/components/Nav'
import { MarketingFooter } from '@/app/components/Footer'

const features = [
  { title: `Proposal Templates`, desc: `Start from professionally designed templates. Customize for your brand and reuse with one click.`, bullets: [`Template library included`, `Save custom templates`, `Section reordering`, `Cover page builder`, `Pricing table builder`, `Template analytics`] },
  { title: `E-Signatures`, desc: `Clients sign directly inside the proposal. No separate DocuSign step. Instant notification on sign.`, bullets: [`In-proposal signing`, `Instant notification`, `Legally binding (ESIGN/UETA)`, `Audit trail included`, `Multi-signer support`, `Certificate download`] },
  { title: `View Tracking`, desc: `See exactly when a client opens your proposal, how long they spend on each section, and what they focus on.`, bullets: [`Open notifications`, `Time-per-section tracking`, `Visit frequency data`, `Page scroll depth`, `Multi-viewer tracking`, `Follow-up timing signals`] },
  { title: `Video Embeds`, desc: `Embed a personalized intro video or product demo directly inside your proposal.`, bullets: [`YouTube and Vimeo embed`, `Loom integration`, `Custom video upload`, `Autoplay options`, `Video view tracking`, `Thumbnail customization`] },
  { title: `Content Library`, desc: `Save your best proposal sections and reuse them across proposals with one click.`, bullets: [`Reusable content blocks`, `Image and media library`, `Pricing table library`, `Team bio blocks`, `Case study blocks`, `Version history`] },
  { title: `Stripe Payments`, desc: `Add a payment link directly to your proposal. Clients pay a deposit or full amount when they accept.`, bullets: [`Pay-on-accept option`, `Deposit collection`, `Stripe integration`, `Auto-receipt`, `Recurring payment setup`, `Invoice auto-generated`] },
]

export default function FeaturesPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <MarketingNav />
      <section className="relative overflow-hidden pt-20 pb-16 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#f97316]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#f97316] mb-4">Features</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Everything ZiggyPitch can do</h1>
          <p className="text-xl text-[#b3b3b3] max-w-2xl mx-auto mb-8">Every feature explained. No fluff.</p>
          <Link href="https://app.ziggypitch.com/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-[#f97316] text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-all">
            Start Free Trial — 14 days free
          </Link>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          {features.map((f, i) => (
            <div key={f.title} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-start`}>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-4">{f.title}</h2>
                <p className="text-lg text-[#b3b3b3] leading-relaxed mb-6">{f.desc}</p>
                <ul className="space-y-2">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-[#b3b3b3]">
                      <div className="w-5 h-5 rounded-full bg-[#f97316]/20 border border-[#f97316]/40 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 bg-[#111111] border border-[#1f1f1f] rounded-2xl aspect-video flex items-center justify-center">
                <p className="text-[#555] text-sm">Screenshot coming soon</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to see it in action?</h2>
          <p className="text-xl text-[#b3b3b3] mb-8">14-day free trial. No credit card required.</p>
          <Link href="https://app.ziggypitch.com/signup" className="inline-flex items-center gap-2 px-10 py-5 bg-[#f97316] text-white rounded-xl font-bold text-xl hover:opacity-90 transition-all">Start Free Trial</Link>
        </div>
      </section>
      <MarketingFooter />
    </div>
  )
}
