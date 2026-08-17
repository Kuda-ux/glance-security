import { useInView } from '../hooks/useInView'
import { ArrowRight, Shield } from 'lucide-react'

export default function About() {
  const { ref, isInView } = useInView<HTMLElement>()

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding bg-gss-grey-50 overflow-hidden"
    >
      <div className="container-gss">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div
            className={`relative transition-all duration-700 ease-out ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-gss-grey-100">
              <img
                src="/images/glance-duo.png"
                alt="GSS security officer alongside a client representative"
                className="w-full h-full object-cover object-[center_25%]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gss-navy-950/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-white/95 backdrop-blur-sm border-l-4 border-gss-red-600 shadow-lg">
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-gss-red-600" aria-hidden="true" />
                  <span className="text-lg font-extrabold text-gss-navy-950">
                    Protection Tailored to You
                  </span>
                </div>
              </div>
            </div>
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border-[16px] border-gss-white/50 -z-10"
              aria-hidden="true"
            />
            <div
              className="absolute -top-6 -left-6 w-24 h-24 bg-gss-red-600/10 rounded-2xl -z-10"
              aria-hidden="true"
            />
          </div>

          <div
            className={`transition-all duration-700 ease-out delay-150 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <span className="inline-block mb-3 text-sm font-bold tracking-[0.15em] uppercase text-gss-red-600">
              About GSS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-gss-navy-950 text-balance mb-6">
              Protecting What Matters Most
            </h2>
            <div className="w-20 h-1.5 bg-gss-red-600 rounded-full mb-8" aria-hidden="true" />
            <p className="text-lg text-gss-muted leading-relaxed mb-6 text-balance">
              Glance Security Guard Services is built on a clear purpose: to provide skilled and
              knowledgeable security officers who are available around the clock, delivering
              complete security solutions tailored to individual requirements.
            </p>
            <p className="text-lg text-gss-muted leading-relaxed mb-8 text-balance">
              Whether you need a visible security presence, discreet monitoring or specialised
              support for an event, GSS works with you to understand your environment and build
              a security approach that fits.
            </p>

            <a
              href="#services"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-gss-white bg-gss-navy-950 hover:bg-gss-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gss-red-500 focus-visible:ring-offset-2"
            >
              Learn More About GSS
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
