import { Clock, Shield, Phone } from 'lucide-react'
import Button from '../components/Button'
import { phone } from '../data'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gss-navy-950"
    >
      <div className="absolute inset-0">
        <img
          src="/images/glance-hero.png"
          alt="GSS security officers standing ready at a client building"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gss-navy-950/95 via-gss-navy-950/80 to-gss-navy-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-gss-navy-950 via-transparent to-gss-navy-950/30" />
      </div>

      {/* Decorative security-grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      {/* Red accent lines */}
      <div className="absolute top-1/4 left-0 w-1.5 h-32 bg-gss-red-600" aria-hidden="true" />
      <div className="absolute bottom-1/3 right-0 w-24 h-1.5 bg-gss-red-600" aria-hidden="true" />

      <div className="container-gss relative z-10 pt-28 pb-20 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/90 text-sm font-semibold mb-6">
              <Shield className="w-4 h-4 text-gss-red-500" aria-hidden="true" />
              <span>Zimbabwe&apos;s Professional Security Partner</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gss-white leading-[1.08] tracking-tight text-balance mb-6">
              Security You Can Trust.{' '}
              <span className="text-gss-red-500">Protection</span> You Can Rely On.
            </h1>
            <p className="text-lg sm:text-xl text-white/85 leading-relaxed max-w-xl mb-8 text-balance">
              Glance Security Guard Services provides professional security solutions tailored
              to your unique requirements. Skilled officers, around-the-clock availability and
              a commitment to keeping your people and property safe.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button as="a" href="#contact" size="lg" showArrow className="shadow-2xl">
                Request Security Services
              </Button>
              <Button as="a" href="#services" variant="outline" size="lg" showArrow>
                Explore Our Services
              </Button>
            </div>

            <a
              href={`tel:${phone}`}
              className="inline-flex items-center gap-3 text-white/90 hover:text-gss-white group"
              aria-label={`Call ${phone}`}
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gss-red-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-5 h-5" aria-hidden="true" />
              </span>
              <span className="text-left">
                <span className="block text-xs font-semibold tracking-wider uppercase text-white/60">
                  Available now
                </span>
                <span className="block text-2xl font-extrabold tracking-tight">{phone}</span>
              </span>
            </a>
          </div>

          {/* Floating info card */}
          <div className="hidden lg:block relative">
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-sm ml-auto shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gss-red-600" aria-hidden="true" />
              <div className="w-14 h-14 rounded-2xl bg-gss-red-600 flex items-center justify-center mb-6 shadow-lg">
                <Clock className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-extrabold text-white mb-2">Around-the-Clock</h2>
              <p className="text-white/80 leading-relaxed">
                Our skilled and knowledgeable security officers are available day and night,
                providing complete security solutions whenever you need them.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                <span className="text-sm font-semibold text-white/80">24/7 availability</span>
              </div>
            </div>
            {/* Decorative shield shape */}
            <div
              className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full border-2 border-white/10"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <a
        href="#trust"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
        aria-label="Scroll to trust section"
      >
        <span className="text-xs font-semibold tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1.5">
          <div className="w-1.5 h-2.5 rounded-full bg-current animate-bounce" aria-hidden="true" />
        </div>
      </a>
    </section>
  )
}
