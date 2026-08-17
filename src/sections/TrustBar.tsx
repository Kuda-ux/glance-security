import { useInView } from '../hooks/useInView'
import { trustPoints } from '../data'

export default function TrustBar() {
  const { ref, isInView } = useInView<HTMLElement>()

  return (
    <section
      id="trust"
      ref={ref}
      className="relative z-20 -mt-12"
    >
      <div className="container-gss">
        <div
          className={`bg-gss-white rounded-2xl border border-gss-grey-100 shadow-xl p-6 lg:p-10 transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gss-navy-950 text-balance">
              Professional Security. Tailored to Your Needs.
            </h2>
            <p className="mt-2 text-gss-muted max-w-2xl mx-auto">
              We provide skilled and knowledgeable security officers and tailored security
              solutions designed around what matters most to you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {trustPoints.map((point, i) => (
              <div
                key={point.label}
                className={`group flex items-center gap-4 p-4 rounded-xl bg-gss-grey-50 hover:bg-gss-navy-950 transition-all duration-300 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gss-red-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <point.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <span className="font-bold text-gss-navy-950 group-hover:text-gss-white transition-colors duration-300">
                  {point.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
