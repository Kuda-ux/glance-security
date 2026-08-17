import { useInView } from '../hooks/useInView'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data'

export default function Services() {
  const { ref, isInView } = useInView<HTMLElement>()

  return (
    <section
      id="services"
      ref={ref}
      className="section-padding bg-gss-white"
    >
      <div className="container-gss">
        <SectionHeader
          eyebrow="Our Expertise"
          title="Our Security Services"
          description="Professional security solutions designed around the needs of your people, property and operations."
          centered
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`transition-all duration-700 ease-out ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
                objectPosition={service.objectPosition}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
