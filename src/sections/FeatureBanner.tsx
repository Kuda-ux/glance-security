import { useInView } from '../hooks/useInView'
import { ArrowRight } from 'lucide-react'

export default function FeatureBanner() {
  const { ref, isInView } = useInView<HTMLElement>()

  return (
    <section
      ref={ref}
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/images/glance-team.png"
          alt="GSS security team saluting at attention outside a commercial building"
          className="w-full h-full object-cover object-[center_65%]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gss-navy-950/85" />
      </div>

      {/* Geometric pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      <div className="container-gss relative z-10 text-center">
        <div
          className={`transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="w-24 h-1.5 bg-gss-red-600 rounded-full mx-auto mb-8" aria-hidden="true" />
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gss-white text-balance mb-6 leading-tight tracking-tight">
            Your Security. <span className="text-gss-red-500">Our Responsibility.</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-10 text-balance">
            Professional and tailored security solutions that help protect your people, property
            and operations. From visible guarding to discreet surveillance, GSS is ready when
            you need us.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-gss-white bg-gss-red-600 hover:bg-gss-red-500 shadow-2xl hover:shadow-red-950/25 transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gss-red-500 focus-visible:ring-offset-2"
          >
            Talk to GSS
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
