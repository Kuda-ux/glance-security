import type { LucideIcon } from 'lucide-react'

interface IndustryCardProps {
  title: string
  icon: LucideIcon
}

export default function IndustryCard({ title, icon: Icon }: IndustryCardProps) {
  return (
    <article className="group relative flex items-center gap-4 p-5 rounded-xl bg-gss-white border border-gss-grey-100 shadow-sm hover:shadow-lg hover:border-gss-red-600/20 hover:-translate-y-1 transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-gss-navy-950 text-gss-white flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-gss-red-600">
        <Icon className="w-6 h-6" aria-hidden="true" />
      </div>
      <h3 className="text-base font-bold text-gss-navy-950">{title}</h3>
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gss-red-600 rounded-full group-hover:w-full transition-all duration-300" />
    </article>
  )
}
