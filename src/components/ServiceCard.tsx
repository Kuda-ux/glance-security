import { ArrowRight, type LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  image: string
  objectPosition?: string
  icon: LucideIcon
}

export default function ServiceCard({ title, description, image, objectPosition = 'object-cover', icon: Icon }: ServiceCardProps) {
  return (
    <article className="group relative flex flex-col h-full bg-gss-white rounded-2xl border border-gss-grey-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-1.5">
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={`${title} — Glance Security Guard Services`}
          loading="lazy"
          className={`w-full h-full transition-transform duration-700 ease-out group-hover:scale-110 ${objectPosition}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gss-navy-950/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-gss-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-5 h-5" aria-hidden="true" />
        </div>
      </div>
      <div className="relative flex-1 flex flex-col p-6">
        <div className="absolute top-0 left-6 -translate-y-1/2 w-10 h-1 bg-gss-red-600 rounded-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
        <h3 className="text-xl font-bold text-gss-navy-950 mb-2 group-hover:text-gss-red-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gss-muted leading-relaxed flex-1 text-balance">{description}</p>
        <div className="mt-5 flex items-center gap-2 text-gss-red-600 font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
        </div>
      </div>
    </article>
  )
}
