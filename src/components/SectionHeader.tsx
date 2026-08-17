interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
  light?: boolean
  className?: string
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  centered = true,
  light = false,
  className = '',
}: SectionHeaderProps) {
  return (
    <div
      className={`${centered ? 'text-center' : ''} ${light ? 'text-gss-white' : 'text-gss-dark'} ${className}`}
    >
      {eyebrow && (
        <span className="inline-block mb-3 text-sm font-bold tracking-[0.15em] uppercase text-gss-red-600">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-balance">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg sm:text-xl leading-relaxed max-w-3xl ${centered ? 'mx-auto' : ''} ${
            light ? 'text-white/80' : 'text-gss-muted'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
