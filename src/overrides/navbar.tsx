'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Search, X } from 'lucide-react'
import { useState } from 'react'
import { SITE_CONFIG } from '@/lib/site-config'
import { cn } from '@/lib/utils'

export const NAVBAR_OVERRIDE_ENABLED = true

const primaryLinks = [
  { label: 'Latest News', href: '/updates' },
]

const secondaryLinks = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function NavbarOverride() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#8d637f]/35 bg-[linear-gradient(120deg,#49243e_0%,#704264_52%,#8b5f79_100%)] text-white shadow-[0_12px_40px_rgba(33,12,28,0.35)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="News Insight Zone" className="h-10 w-auto object-contain" />
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {primaryLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200',
                pathname.startsWith(item.href)
                  ? 'bg-white text-[#49243e] shadow-[0_8px_20px_rgba(18,7,14,0.22)]'
                  : 'bg-white/10 text-white hover:bg-white/18'
              )}
            >
              {item.label}
            </Link>
          ))}
          {secondaryLinks.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm text-[#f7e9ef] transition-colors hover:bg-white/12 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link href="/search" className="rounded-full bg-white/10 p-2.5 text-white transition hover:bg-white/20" aria-label="Search">
            <Search className="h-4 w-4" />
          </Link>
          <Link href="/login" className="rounded-full px-4 py-2 text-sm text-[#f7e9ef] transition hover:bg-white/12">
            Login
          </Link>
          <Link href="/create/mediaDistribution" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#49243e] transition hover:bg-[#f8e7ed]">
            Submit Release
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex rounded-full bg-white/10 p-2 text-white lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/20 bg-[#3d1d34]/95 px-4 py-4 lg:hidden">
          <div className="grid gap-2">
            {[...primaryLinks, ...secondaryLinks].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'rounded-xl px-4 py-3 text-sm font-medium',
                  pathname.startsWith(item.href) ? 'bg-white text-[#49243e]' : 'bg-white/10 text-white'
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <Link href="/search" onClick={() => setOpen(false)} className="rounded-xl bg-white/10 px-4 py-3 text-center text-sm text-white">
                Search
              </Link>
              <Link href="/create/mediaDistribution" onClick={() => setOpen(false)} className="rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-[#49243e]">
                Submit
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
