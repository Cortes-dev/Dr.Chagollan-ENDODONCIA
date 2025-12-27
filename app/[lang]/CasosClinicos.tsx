'use client'
import { Star, Quote, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"

const CasosClinicos = () => {
  const t = useTranslations("testimonios-section")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Obtener testimonios dinámicamente
  const testimoniosCount = 5
  const testimonios = Array.from({ length: testimoniosCount }, (_, i) => ({
    id: t(`items.${i}.id`),
    nombre: t(`items.${i}.nombre`),
    rating: Number(t(`items.${i}.rating`)),
    comentario: t(`items.${i}.comentario`),
    fecha: t(`items.${i}.fecha`)
  }))

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonios.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonios.length) % testimonios.length)
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, currentIndex])

  const getVisibleTestimonios = () => {
    const visible = []
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + testimonios.length) % testimonios.length
      visible.push({ ...testimonios[index], position: i })
    }
    return visible
  }

  return (
    <section id="testimonio" className="relative py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full text-red-700 font-medium text-sm mb-6">
            <Quote className="w-4 h-4" />
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

          {/* Rating destacado */}
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-5xl font-bold text-gray-900">
                  {t("header.rating.value")}
                </span>
                <div className="flex flex-col items-start">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className={`w-5 h-5 ${star === 5 ? 'text-gray-300' : 'text-red-500 fill-red-500'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {t("header.rating.label")}
                  </span>
                </div>
              </div>
              <p className="text-gray-600">
                {t.rich("header.rating.reviews", {
                  highlight: (chunks) => (
                    <span className="font-semibold text-gray-900">{chunks}</span>
                  )
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Carrusel */}
        <div className="relative max-w-5xl mx-auto">
          <div 
            className="relative h-[400px] sm:h-[350px] flex items-center justify-center"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {getVisibleTestimonios().map((testimonio) => (
              <div
                key={testimonio.id}
                className={`absolute transition-all duration-500 ease-out ${
                  testimonio.position === 0
                    ? 'z-30 scale-100 opacity-100 translate-x-0'
                    : testimonio.position === -1
                    ? 'z-10 scale-90 opacity-40 -translate-x-[60%] hidden sm:block'
                    : 'z-10 scale-90 opacity-40 translate-x-[60%] hidden sm:block'
                }`}
                style={{ width: '90%', maxWidth: '600px' }}
              >
                <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-2xl border border-gray-100 relative">
                  {/* Quote icon decorativo */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-lg">
                    <Quote className="w-6 h-6 text-white" />
                  </div>

                  {/* Estrellas */}
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className={`w-5 h-5 ${star <= testimonio.rating ? 'text-red-500 fill-red-500' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>

                  {/* Comentario */}
                  <p className="text-gray-700 text-lg leading-relaxed mb-6 min-h-[120px]">
                    "{testimonio.comentario}"
                  </p>

                  {/* Autor */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{testimonio.nombre}</h4>
                      <p className="text-sm text-gray-500">{testimonio.fecha}</p>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-red-100 to-red-50 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-bold text-lg">
                        {testimonio.nombre.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controles */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 w-12 h-12 bg-white hover:bg-red-50 rounded-full shadow-lg hover:shadow-xl border border-gray-200 hover:border-red-200 flex items-center justify-center transition-all duration-300 z-40 group"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-red-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 w-12 h-12 bg-white hover:bg-red-50 rounded-full shadow-lg hover:shadow-xl border border-gray-200 hover:border-red-200 flex items-center justify-center transition-all duration-300 z-40 group"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-red-600" />
          </button>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonios.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-red-600 to-red-700'
                    : 'w-2 bg-gray-300 hover:bg-red-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA final */}
        <div className="text-center mt-16">
          <a
            href={t("cta-final.url")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-red-600 hover:text-red-700 font-semibold transition-colors duration-300 group mb-6"
          >
            <ExternalLink className="w-5 h-5" />
            {t("cta-final.text")}
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default CasosClinicos