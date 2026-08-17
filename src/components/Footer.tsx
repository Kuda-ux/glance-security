import { Phone } from 'lucide-react'
import { navLinks, phone } from '../data'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gss-navy-950 text-gss-white">
      <div className="container-gss pt-16 pb-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-white/10">
          <div className="lg:col-span-5 space-y-5">
            <a href="#home" className="inline-flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="GSS logo"
                className="h-14 w-auto object-contain bg-white rounded-xl p-1.5"
              />
              <span className="text-2xl font-extrabold tracking-tight">GSS</span>
            </a>
            <p className="text-white/70 leading-relaxed max-w-md">
              Glance Security Guard Services provides skilled and knowledgeable security
              officers who are available around the clock to provide complete security
              solutions tailored to individual requirements.
            </p>
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center gap-2 text-lg font-bold text-gss-red-500 hover:text-gss-red-400 transition-colors"
              aria-label={`Call ${phone}`}
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              {phone}
            </a>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <h3 className="text-sm font-bold tracking-[0.15em] uppercase text-white/50 mb-4">
              Navigation
            </h3>
            <nav className="space-y-3" aria-label="Footer navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-base text-white/80 hover:text-gss-red-500 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold tracking-[0.15em] uppercase text-white/50 mb-4">
              Contact
            </h3>
            <div className="space-y-3 text-white/80">
              <p>
                <span className="font-semibold text-white">Glance Security Guard Services</span>
              </p>
              <p>
                Phone:{' '}
                <a href={`tel:${phone}`} className="text-gss-red-500 hover:text-gss-red-400">
                  {phone}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>&copy; {currentYear} Glance Security Guard Services. All rights reserved.</p>
          <div className="h-0.5 w-8 bg-gss-red-600 rounded-full" aria-hidden="true" />
        </div>
      </div>
    </footer>
  )
}
