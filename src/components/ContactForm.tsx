import { useState } from 'react'
import { Send } from 'lucide-react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    setTimeout(() => setStatus('success'), 800)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact form">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-sm font-semibold text-gss-navy-950">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="John Doe"
            className="w-full rounded-xl border border-gss-grey-100 bg-gss-white px-4 py-3 text-gss-dark placeholder:text-gss-muted focus:border-gss-red-600 focus:ring-2 focus:ring-gss-red-600/20 outline-none transition-all"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="company" className="text-sm font-semibold text-gss-navy-950">
            Company / Organisation
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Optional"
            className="w-full rounded-xl border border-gss-grey-100 bg-gss-white px-4 py-3 text-gss-dark placeholder:text-gss-muted focus:border-gss-red-600 focus:ring-2 focus:ring-gss-red-600/20 outline-none transition-all"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-sm font-semibold text-gss-navy-950">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="0712008941"
            className="w-full rounded-xl border border-gss-grey-100 bg-gss-white px-4 py-3 text-gss-dark placeholder:text-gss-muted focus:border-gss-red-600 focus:ring-2 focus:ring-gss-red-600/20 outline-none transition-all"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="service" className="text-sm font-semibold text-gss-navy-950">
            Service Required
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className="w-full rounded-xl border border-gss-grey-100 bg-gss-white px-4 py-3 text-gss-dark focus:border-gss-red-600 focus:ring-2 focus:ring-gss-red-600/20 outline-none transition-all"
          >
            <option value="" disabled>
              Select a service
            </option>
            <option value="security-guard-services">Security Guard Services</option>
            <option value="video-surveillance">Video Surveillance</option>
            <option value="event-security">Event Security</option>
            <option value="receipt-checking">Receipt Checking</option>
            <option value="armed-guards">Armed Guards</option>
            <option value="undercover-security">Undercover Security</option>
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-sm font-semibold text-gss-navy-950">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your security requirements..."
          className="w-full rounded-xl border border-gss-grey-100 bg-gss-white px-4 py-3 text-gss-dark placeholder:text-gss-muted focus:border-gss-red-600 focus:ring-2 focus:ring-gss-red-600/20 outline-none transition-all resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting' || status === 'success'}
        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-gss-white bg-gss-red-600 hover:bg-gss-red-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gss-red-500 focus-visible:ring-offset-2"
      >
        {status === 'success' ? (
          'Request Submitted'
        ) : status === 'submitting' ? (
          'Submitting...'
        ) : (
          <>
            Submit Request <Send className="w-4 h-4" aria-hidden="true" />
          </>
        )}
      </button>

      {status === 'success' && (
        <p className="text-sm text-gss-navy-950 font-medium">
          Thank you. We have received your request and will contact you shortly.
        </p>
      )}
    </form>
  )
}
