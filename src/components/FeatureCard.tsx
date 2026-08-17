import type { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  title: string
  description?: string
  icon: LucideIcon
  variant?: 'light' | 'dark' | 'outline'
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
  variant = 'light',
}: FeatureCardProps) {
  const cardStyles = {
    light:
      'bg-gss-white border-gss-grey-100 text-gss-navy-950 shadow-sm hover:shadow-lg hover:border-gss-red-600/20',
    dark:
      'bg-gss-navy-950/40 border-gss-white/10 text-gss-white hover:bg-gss-navy-950/60 hover:border-gss-red-600/40',
    outline:
      'bg-gss-white border-gss-grey-100 text-gss-navy-950 shadow-sm hover:border-gss-red-600 hover:shadow-md',
  }

  const iconStyles = {
    light: 'bg-gss-red-600/10 text-gss-red-600',
    dark: 'bg-gss-red-600 text-gss-white',
    outline: 'bg-gss-navy-950 text-gss-white',
  }

  const textStyles = {
    light: 'text-gss-muted',
    dark: 'text-white/80',
    outline: 'text-gss-muted',
  }

  return (
    <article
      className={`group p-6 lg:p-8 rounded-2xl border transition-all duration-300 ease-out hover:-translate-y-1 ${cardStyles[variant]}`}
    >
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${iconStyles[variant]}`}
      >
        <Icon className="w-7 h-7" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      {description && <p className={`leading-relaxed text-balance ${textStyles[variant]}`}>{description}</p>}
    </article>
  )
}
