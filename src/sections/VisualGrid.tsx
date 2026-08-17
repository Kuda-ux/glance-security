import { useInView } from '../hooks/useInView'

const images = [
  {
    src: '/images/glance-hero.png',
    alt: 'GSS security team outside a commercial building',
    span: 'sm:col-span-2 sm:row-span-2',
    position: 'object-cover object-[center_55%]',
  },
  {
    src: '/images/glance-duo.png',
    alt: 'GSS security officer with a client representative',
    span: 'sm:row-span-2',
    position: 'object-cover object-[center_25%]',
  },
  {
    src: '/images/glance-baton.png',
    alt: 'GSS security officer on patrol with a baton',
    span: '',
    position: 'object-cover object-[center_30%]',
  },
  {
    src: '/images/glance-patrol.png',
    alt: 'GSS security personnel on patrol at a client site',
    span: '',
    position: 'object-cover object-[center_30%]',
  },
  {
    src: '/images/glance-team.png',
    alt: 'GSS security team saluting at attention',
    span: 'sm:col-span-2',
    position: 'object-cover object-[center_60%]',
  },
  {
    src: '/images/glance-guard.png',
    alt: 'GSS security officer in branded uniform',
    span: 'sm:col-span-2',
    position: 'object-cover object-[center_35%]',
  },
]

export default function VisualGrid() {
  const { ref, isInView } = useInView<HTMLElement>()

  return (
    <section ref={ref} className="bg-gss-navy-950 py-20 overflow-hidden">
      <div className="container-gss">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gss-white text-balance">
            Security Across Every Environment
          </h2>
          <div className="w-20 h-1.5 bg-gss-red-600 rounded-full mx-auto mt-6" aria-hidden="true" />
        </div>
      </div>

      <div className="container-gss">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 auto-rows-[180px] sm:auto-rows-[220px]">
          {images.map((img, i) => (
            <div
              key={img.src}
              className={`relative rounded-2xl overflow-hidden group ${img.span} ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } transition-all duration-700 ease-out`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`w-full h-full transition-transform duration-700 ease-out group-hover:scale-110 ${img.position}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gss-navy-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="h-1 w-0 bg-gss-red-600 rounded-full group-hover:w-12 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
