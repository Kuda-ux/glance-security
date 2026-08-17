import { useEffect, useState } from 'react'
import { Menu, Phone } from 'lucide-react'
import { navLinks, phone } from '../data'
import MobileMenu from './MobileMenu'
import Button from './Button'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out border-b ${
          scrolled
            ? 'bg-gss-white/95 backdrop-blur-md border-gss-grey-100 shadow-sm py-3'
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="container-gss flex items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-3 group"
            aria-label="Glance Security Guard Services - Home"
          >
            <img
              src="/logo.png"
              alt="GSS logo"
              className={`w-auto object-contain transition-all duration-300 ${
                scrolled ? 'h-10' : 'h-12'
              }`}
            />
            <div className="hidden sm:block leading-tight">
              <span
                className={`block font-extrabold tracking-tight transition-colors duration-300 ${
                  scrolled ? 'text-gss-navy-950' : 'text-gss-white'
                }`}
              >
                GSS
              </span>
              <span
                className={`block text-[10px] font-semibold tracking-wider uppercase transition-colors duration-300 ${
                  scrolled ? 'text-gss-muted' : 'text-white/70'
                }`}
              >
                Security Guard Services
              </span>
            </div>
          </a>

          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-200 hover:text-gss-red-600 ${
                  scrolled ? 'text-gss-navy-950' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${phone}`}
              className={`flex items-center gap-2 text-sm font-bold transition-colors duration-200 hover:text-gss-red-600 ${
                scrolled ? 'text-gss-navy-950' : 'text-gss-white'
              }`}
              aria-label={`Call ${phone}`}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {phone}
            </a>
            <Button as="a" href="#contact" size="sm" showArrow>
              Get in Touch
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className={`lg:hidden p-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gss-red-500 ${
              scrolled
                ? 'text-gss-navy-950 hover:bg-gss-grey-50'
                : 'text-gss-white hover:bg-white/10'
            }`}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="w-7 h-7" aria-hidden="true" />
          </button>
        </div>
      </header>
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
