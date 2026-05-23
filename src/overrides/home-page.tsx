import Link from 'next/link'
import { ArrowRight, BarChart3, Globe2, Megaphone, Newspaper, Radar, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import { ContentImage } from '@/components/shared/content-image'

export const HOME_PAGE_OVERRIDE_ENABLED = true

function imageFromPost(post: any) {
  const media = Array.isArray(post?.media) ? post.media : []
  const mediaUrl = media.find((item: any) => typeof item?.url === 'string' && item.url)?.url
  const contentImages = post?.content && typeof post.content === 'object' ? (post.content as any).images : []
  const fallback = Array.isArray(contentImages) ? contentImages.find((item: unknown) => typeof item === 'string') : null
  return mediaUrl || fallback || '/freepik-assets/news-media-distribution.svg'
}

export async function HomePageOverride() {
  const posts = await fetchTaskPosts('mediaDistribution', 14, { fresh: true })
  const lead = posts[0]
  const heroPosts = posts.slice(0, 5)
  const features = [
    {
      icon: Megaphone,
      title: 'Press Distribution',
      description: 'Publish updates across media-ready channels with consistent formatting and clear structure.',
      href: '/create/mediaDistribution',
    },
    {
      icon: TrendingUp,
      title: 'Visibility Growth',
      description: 'Turn announcements into discoverable stories with stronger headline hierarchy and semantic metadata.',
      href: '/updates',
    },
    {
      icon: BarChart3,
      title: 'Coverage Analytics',
      description: 'Track story engagement, category momentum, and content performance from one newsroom flow.',
      href: '/pricing',
    },
    {
      icon: Globe2,
      title: 'Global Reach',
      description: 'Support local and global communication campaigns through one scalable publishing destination.',
      href: '/contact',
    },
  ]

  const testimonials = [
    {
      quote: 'News Insight Zone gave our PR team a polished and reliable publishing workflow in less than a week.',
      name: 'Ritika Sharma',
      company: 'NexaFin Technologies',
    },
    {
      quote: 'The newsroom layout improved readability and helped our releases earn better pickup from journalists.',
      name: 'Jordan Miller',
      company: 'CloudReef Media',
    },
    {
      quote: 'We needed speed without sacrificing presentation quality. This platform delivered both.',
      name: 'Aman Verma',
      company: 'Vertex Mobility',
    },
  ]

  const brands = ['Bloomberg', 'Reuters', 'Forbes', 'TechCrunch', 'Mint', 'CNBC']

  const solutions = [
    { icon: Newspaper, label: 'Corporate Announcements' },
    { icon: Radar, label: 'Product Launches' },
    { icon: ShieldCheck, label: 'Crisis Communication' },
    { icon: Sparkles, label: 'Brand Storytelling' },
    { icon: TrendingUp, label: 'Investor Updates' },
  ]

  const referenceImages = ['/freepik-assets/news-media-distribution.svg', '/freepik-assets/signup-registration.svg', '/freepik-assets/contact-page-business.svg']

  return (
    <div className="min-h-screen bg-[#fcf7f9] text-[#2f1d2b]">
      <NavbarShell />
      <main>
        <section className="bg-[linear-gradient(135deg,#49243e_0%,#704264_58%,#bb8493_100%)] text-white">
          <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 lg:py-24">
            <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
              Media press media platform
            </p>
            <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">The News Starts Here</h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#f4dde6] sm:text-lg">
              Publish high-impact announcements, distribute press-ready stories, and build newsroom authority with a clean SaaS publishing experience.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link href="/updates" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#49243e] transition hover:bg-[#f7e9ef]">
                Browse Latest News
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#704264]">Trending releases</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em]">Latest News</h2>
            </div>
            <Link href="/updates" className="text-sm font-semibold text-[#704264] hover:text-[#49243e]">View all</Link>
          </div>
          <div className="flex snap-x gap-5 overflow-x-auto pb-3">
            {heroPosts.map((post) => (
              <Link
                key={post.id}
                href={`/updates/${post.slug}`}
                className="group min-w-[280px] snap-start overflow-hidden rounded-3xl border border-[#d9bcc8] bg-white shadow-[0_15px_40px_rgba(73,36,62,0.1)] transition hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(73,36,62,0.18)] sm:min-w-[330px]"
              >
                <div className="relative h-44 overflow-hidden">
                  <ContentImage src={imageFromPost(post)} alt={post.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="line-clamp-2 text-lg font-semibold leading-snug text-[#3b1f33]">{post.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <div className="rounded-[2rem] bg-white p-7 shadow-[0_16px_45px_rgba(73,36,62,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#704264]">Core capabilities</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">Turn Your News into Headlines</h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="rounded-2xl border border-[#e6ced7] bg-[#fff9fb] p-5 transition hover:border-[#bb8493]">
                  <feature.icon className="h-5 w-5 text-[#704264]" />
                  <h3 className="mt-3 text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#6e4f62]">{feature.description}</p>
                  <Link href={feature.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#704264] hover:text-[#49243e]">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-[-0.03em]">Testimonials</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-2xl border border-[#dec3cd] bg-white p-6 shadow-[0_12px_36px_rgba(73,36,62,0.08)]">
                <p className="text-sm leading-7 text-[#5f3f54]">"{item.quote}"</p>
                <p className="mt-5 text-base font-semibold text-[#3b1f33]">{item.name}</p>
                <p className="text-sm text-[#8d637f]">{item.company}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-[-0.03em]">Trusted by Brands</h2>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {brands.map((brand) => (
              <div key={brand} className="group rounded-xl border border-[#dcc4cd] bg-white px-4 py-4 text-center text-sm font-semibold text-[#8f7485] transition hover:text-[#49243e]">
                <span className="inline-block grayscale transition duration-300 group-hover:grayscale-0">{brand}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="rounded-[2rem] bg-[linear-gradient(125deg,#fff9fb_0%,#f7e6ec_100%)] p-7">
            <h2 className="text-3xl font-semibold tracking-[-0.03em]">Solutions for Every Communication Team</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[#65495c]">
              Choose the lane that fits your publishing workflow. Every solution is optimized for clarity, trust, and media-ready delivery.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {solutions.map((item) => (
                <div key={item.label} className="rounded-2xl border border-[#dcc3ce] bg-white p-4">
                  <item.icon className="h-5 w-5 text-[#704264]" />
                  <p className="mt-2 text-sm font-semibold text-[#3e2035]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <div className="grid gap-6 rounded-[2rem] border border-[#dbc1cc] bg-white p-6 shadow-[0_18px_55px_rgba(73,36,62,0.08)] lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#704264]">Discover</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">Discover Your Next Story</h2>
              <p className="mt-4 text-sm leading-8 text-[#644a5c]">
                Explore timely topics, sector-specific updates, and brand announcements in one streamlined newsroom surface.
              </p>
              <Link href={lead ? `/updates/${lead.slug}` : '/updates'} className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#49243e] px-5 py-3 text-sm font-semibold text-white hover:bg-[#3d1d34]">
                Read highlighted story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {referenceImages.map((img, idx) => (
                <div key={img} className={idx === 0 ? 'relative h-44 overflow-hidden rounded-2xl sm:col-span-2' : 'relative h-36 overflow-hidden rounded-2xl'}>
                  <ContentImage src={img} alt="News Insight Zone visual reference" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="rounded-[2rem] bg-[linear-gradient(120deg,#49243e_0%,#704264_68%)] px-6 py-12 text-center text-white sm:px-10">
            <h2 className="text-3xl font-semibold tracking-[-0.03em]">Ready to Share Your News?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#ead4de]">
              Publish your next release with a newsroom-first layout built for credibility, discovery, and conversion.
            </p>
            <Link href="/create/mediaDistribution" className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#49243e] hover:bg-[#f7e9ef]">
              Submit Press Media
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
