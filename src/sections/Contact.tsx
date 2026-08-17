import { useInView } from '../hooks/useInView'
import { Phone, Clock, Shield } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import { phone } from '../data'

export default function Contact() {
  const { ref, isInView } = useInView<HTMLElement>()

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding bg-gss-grey-50"
    >
      <div className="container-gss">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div
            className={`transition-all duration-700 ease-out ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <span className="inline-block mb-3 text-sm font-bold tracking-[0.15em] uppercase text-gss-red-600">
              Contact Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-gss-navy-950 text-balance mb-6">
              Get in Touch with GSS
            </h2>
            <div className="w-20 h-1.5 bg-gss-red-600 rounded-full mb-8" aria-hidden="true" />

            <p className="text-lg text-gss-muted leading-relaxed mb-8 text-balance">
              Ready to discuss your security requirements? Contact Glance Security Guard
              Services and let us know how we can help.
            </p>

            <div className="space-y-6">
              <a
                href={`tel:${phone}`}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-gss-white border border-gss-grey-100 shadow-sm hover:shadow-lg hover:border-gss-red-600/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gss-red-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <span className="block text-sm font-semibold text-gss-muted uppercase tracking-wider">
                    Phone
                  </span>
                  <span className="text-xl font-extrabold text-gss-navy-950 group-hover:text-gss-red-600 transition-colors">
                    {phone}
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-gss-white border border-gss-grey-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-gss-navy-950 text-white flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <span className="block text-sm font-semibold text-gss-muted uppercase tracking-wider">
                    Availability
                  </span>
                  <span className="text-xl font-extrabold text-gss-navy-950">
                    Around-the-clock
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-gss-white border border-gss-grey-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-gss-navy-950 text-white flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <span className="block text-sm font-semibold text-gss-muted uppercase tracking-wider">
                    Company
                  </span>
                  <span className="text-xl font-extrabold text-gss-navy-950">
                    Glance Security Guard Services
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 ease-out delay-150 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="bg-gss-white rounded-2xl border border-gss-grey-100 shadow-xl p-6 sm:p-10">
              <h3 className="text-2xl font-extrabold text-gss-navy-950 mb-2">
                Request Security Services
              </h3>
              <p className="text-gss-muted mb-8">
                Fill in the form below and we will respond as soon as possible.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
