import { useInView } from '../hooks/useInView'
import SectionHeader from '../components/SectionHeader'
import IndustryCard from '../components/IndustryCard'
import { industries } from '../data'

export default function Industries() {
  const { ref, isInView } = useInView<HTMLElement>()

  return (
    <section
      id="industries"
      ref={ref}
      className="section-padding bg-gss-white"
    >
      <div className="container-gss">
        <SectionHeader
          eyebrow="Where We Help"
          title="Security Solutions for Every Setting"
          description="Professional security can make a difference across a wide range of environments and organisations."
          centered
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {industries.map((industry, i) => (
            <div
              key={industry.title}
              className={`transition-all duration-700 ease-out ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 75}ms` }}
            >
              <IndustryCard title={industry.title} icon={industry.icon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
