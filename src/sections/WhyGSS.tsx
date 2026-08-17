import { useInView } from '../hooks/useInView'
import SectionHeader from '../components/SectionHeader'
import FeatureCard from '../components/FeatureCard'
import { whyGSS } from '../data'

export default function WhyGSS() {
  const { ref, isInView } = useInView<HTMLElement>()

  return (
    <section
      id="why-gss"
      ref={ref}
      className="section-padding bg-gss-grey-50"
    >
      <div className="container-gss">
        <SectionHeader
          eyebrow="Why GSS"
          title="Why Choose Glance Security Guard Services?"
          centered
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {whyGSS.map((feature, i) => (
            <div
              key={feature.title}
              className={`transition-all duration-700 ease-out ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
