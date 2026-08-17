import { X } from 'lucide-react'
import { navLinks } from '../data'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-gss-navy-950/60 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="fixed top-0 right-0 h-full w-[min(85vw,360px)] bg-gss-white z-50 shadow-2xl transform transition-transform duration-300 ease-out lg:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between p-6 border-b border-gss-grey-100">
          <span className="text-lg font-extrabold text-gss-navy-950">GSS</span>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-gss-navy-950 hover:bg-gss-grey-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gss-red-500"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <nav className="p-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="block w-full px-4 py-3 rounded-xl text-lg font-semibold text-gss-navy-950 hover:bg-gss-grey-50 hover:text-gss-red-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={onClose}
            className="block w-full mt-4 px-4 py-3.5 rounded-xl text-center font-bold text-gss-white bg-gss-red-600 hover:bg-gss-red-500 transition-colors"
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </>
  )
}
