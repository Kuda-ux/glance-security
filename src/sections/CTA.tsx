import { useInView } from '../hooks/useInView'
import { Phone, MessageSquare, ArrowRight } from 'lucide-react'
import { phone } from '../data'

export default function CTA() {
  const { ref, isInView } = useInView<HTMLElement>()

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-32 bg-gss-navy-950 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gss-blue-800/30 to-transparent"
        aria-hidden="true"
      />

      <div className="container-gss relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block mb-4 text-sm font-bold tracking-[0.15em] uppercase text-gss-red-500">
            Get Started
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gss-white text-balance mb-6 leading-tight tracking-tight">
            Let&apos;s Talk About Your Security Needs
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
            Every security requirement is different. Speak with Glance Security Guard Services
            about a solution tailored to your needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${phone}`}
              className="group inline-flex items-center gap-3 w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-gss-white bg-gss-red-600 hover:bg-gss-red-500 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gss-red-500 focus-visible:ring-offset-2"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call {phone}
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-gss-navy-950 bg-gss-white hover:bg-gss-grey-50 shadow-xl transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gss-red-500 focus-visible:ring-offset-2"
            >
              <MessageSquare className="w-5 h-5" aria-hidden="true" />
              Contact GSS
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
