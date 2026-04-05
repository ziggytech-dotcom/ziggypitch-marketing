"use client"
import Link from 'next/link'
import { MarketingNav } from '@/app/components/Nav'
import { MarketingFooter } from '@/app/components/Footer'

const posts = [
  { tag: `Sales Strategy`, title: `Why most proposals don't close — and how view tracking changes everything`, excerpt: `When you can see that a client opened your proposal 4 times but hasn't responded, you know exactly when to follow up.`, readTime: `5 min read` },
  { tag: `Proposal Tips`, title: `The 5-section proposal structure that converts at 60%+`, excerpt: `Most proposals are too long, too product-focused, and don't build enough trust. Here's the structure that closes.`, readTime: `7 min read` },
  { tag: `Product`, title: `Using video in proposals: how a 90-second intro increases close rates`, excerpt: `Clients who watch a video intro are 40% more likely to accept. Here's how to add one to your next proposal.`, readTime: `4 min read` },
]

export default function BlogPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <MarketingNav />
      <section className="pt-20 pb-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">ZiggyPitch Blog</h1>
          <p className="text-xl text-[#b3b3b3] max-w-xl mx-auto">Proposals tips, strategies, and updates for businesses that want to grow.</p>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {posts.map((p) => (
              <div key={p.title} className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-xl overflow-hidden hover:border-[#f97316]/30 transition-colors">
                <div className="aspect-[16/9] bg-[#111] flex items-center justify-center border-b border-[#2d2d2d]">
                  <p className="text-[#555] text-xs">Article image coming soon</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#f97316] text-xs font-medium">{p.tag}</span>
                    <span className="bg-[#2d2d2d] text-[#b3b3b3] text-xs px-2 py-0.5 rounded-full">Coming Soon</span>
                  </div>
                  <h3 className="text-white font-semibold mb-2 leading-tight">{p.title}</h3>
                  <p className="text-[#b3b3b3] text-sm leading-relaxed mb-4">{p.excerpt}</p>
                  <p className="text-[#555] text-xs">{p.readTime}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#111111] border border-[#f97316]/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Stay in the loop</h2>
            <p className="text-[#b3b3b3] mb-6">Get new articles and product updates in your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" placeholder="your@email.com" className="flex-1 px-4 py-3 bg-[#1a1a1a] border border-[#2d2d2d] rounded-xl text-white text-sm focus:outline-none" />
              <button className="px-6 py-3 bg-[#f97316] text-white rounded-xl font-medium text-sm hover:opacity-90">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
      <MarketingFooter />
    </div>
  )
}
