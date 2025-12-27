'use client'
import { Microscope, Shield, Sparkles, RefreshCw, Camera, CheckCircle } from "lucide-react"
import { useTranslations } from "next-intl"

const iconMap: Record<string, any> = {
  Microscope,
  Shield,
  Sparkles,
  RefreshCw,
  Camera,
  CheckCircle
}

const Services = () => {
  const t = useTranslations("services-section")

  // Obtener la cantidad de servicios dinámicamente
  const servicesCount = 6 // O puedes usar t.raw('items').length si está disponible
  const services = Array.from({ length: servicesCount }, (_, i) => {
    const index = i
    return {
      id: t(`items.${index}.id`),
      icon: t(`items.${index}.icon`),
      title: t(`items.${index}.title`),
      subtitle: t(`items.${index}.subtitle`),
      description: t(`items.${index}.description`),
      features: [
        t(`items.${index}.features.0`),
        t(`items.${index}.features.1`),
        t(`items.${index}.features.2`)
      ]
    }
  })

  return (
    <section id="services" className="relative py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-20 translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full text-red-700 font-medium text-sm mb-6">
            <Microscope className="w-4 h-4" />
            {t("header.badge")}
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t.rich("header.title", {
              highlight: (chunks) => (
                <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                  {chunks}
                </span>
              )
            })}
          </h2>
          
          <p className="text-lg text-gray-600">
            {t("header.description")}
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon]
            return (
              <div
                id={service.title} 
                key={service.id}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-red-200 transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradiente hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
                
                <div className="relative">
                  {/* Icono */}
                  <div className="w-14 h-14 bg-gradient-to-br from-red-100 to-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {Icon && <Icon className="w-7 h-7 text-red-600" />}
                  </div>

                  {/* Contenido */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm font-medium text-red-600 mb-4">
                    {service.subtitle}
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Características */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            )
          })}
        </div>

        {/* CTA final */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-2xl shadow-red-900/30">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                {t("cta-final.title")}
              </h3>
              <p className="text-red-100">
                {t("cta-final.description")}
              </p>
            </div>
            <a 
              href={t("cta-final.button.phone")}
              className="flex-shrink-0 px-8 py-4 bg-white hover:bg-gray-50 text-red-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {t("cta-final.button.text")}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services