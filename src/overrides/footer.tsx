import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'

export const FOOTER_OVERRIDE_ENABLED = true

export function FooterOverride() {
  return (
    <footer className="mt-16 border-t border-[#8d637f]/35 bg-[linear-gradient(180deg,#2d1630_0%,#49243e_100%)] text-[#f7ebf0]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <p className="text-lg font-semibold">{SITE_CONFIG.name}</p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-[#dcc2cc]">
              Modern media distribution for brands, founders, and communication teams publishing timely press media.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e1c9d2]">Primary</p>
            <div className="mt-4 space-y-3 text-sm">
              <Link href="/updates" className="block text-[#f7ebf0] hover:text-white">Latest News</Link>
              <Link href="/create/mediaDistribution" className="block text-[#f7ebf0] hover:text-white">Submit Release</Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e1c9d2]">Company</p>
            <div className="mt-4 space-y-3 text-sm">
              <Link href="/about" className="block text-[#f7ebf0] hover:text-white">About Us</Link>
              <Link href="/contact" className="block text-[#f7ebf0] hover:text-white">Contact</Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e1c9d2]">Legal</p>
            <div className="mt-4 space-y-3 text-sm">
              <Link href="/privacy" className="block text-[#f7ebf0] hover:text-white">Privacy</Link>
              <Link href="/terms" className="block text-[#f7ebf0] hover:text-white">Terms</Link>
              <Link href="/cookies" className="block text-[#f7ebf0] hover:text-white">Cookies</Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/15 pt-5 text-sm text-[#d8bac6]">&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</div>
      </div>
    </footer>
  )
}
