'use client'
import { Star, Quote, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

const CasosClinicos = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonios = [
    {
      id: 1,
      nombre: "Alison Vera Jimenez",
      rating: 5,
      comentario: "Excelente atención por parte del Dr. Y por parte de su personal. El procedimiento no fue para nada doloroso. Además, en todo momento transmite mucha calma al paciente. 🤗…",
      fecha: "Hace 1 meses"
    },
    {
      id: 2,
      nombre: "Marcos Becerra",
      rating: 5,
      comentario: "Excelente servicio y atención con un equipo muy amable, que te deja sin ninguna duda referente a tu tratamiento a realizar, el Doctor Chagollan con verdadera ética y vocacion  realizó su trabajo tan profesional que me sentí tan relajado y comfortable , no experimente dolor alguno durante el proceso ni despues del tratamiento.",
      fecha: "Hace 5 meses"
    },
    {
      id: 3,
      nombre: "Ana Martínez",
      rating: 5,
      comentario: "Ético y profesional y se porta super bien el Doc me ayudo con mi problema de endodoncia mal hecho por otro dr de acuña coah. Me realizó retratamiento y me mostró por radiografía el cambio de mis raíces que no las habían bajado bien. Sus asistentes medicas muy lindas y serviciales! Soy de la ciudad Sterling Texas le doy mucha fé al dr Enrique!",
      fecha: "Hace 3 meses"
    },
    {
      id: 4,
      nombre: "Juanita Velazquez",
      rating: 5,
      comentario: "Muy amables , y creo que en la cara de mi hijo pude ver el buen trabajo del Dr Enrique Chagollan ...estamos muy satisfechos muy buen dr sabe hacer su trabajo",
      fecha: "Hace 1 año"
    },
    {
      id: 5,
      nombre: "julissa Lucero",
      rating: 5,
      comentario: "Muy profesional, me encanto mi experiencia y eso que soy algo nerviosa 😅, Muy limpio todo, el personal muy amables muy lindas! Y el Doctor Enrique muy buena gente y te explica todo muy bien en lo que se necesita que hacer!",
      fecha: "Hace 2 meses"
    }
  ]

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
            Lo que dicen nuestros pacientes
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Testimonios{" "}
            <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              Reales
            </span>
          </h2>

          {/* Rating destacado */}
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-5xl font-bold text-gray-900">4.9</span>
                <div className="flex flex-col items-start">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className={`w-5 h-5 ${star === 5 ? 'text-gray-300' : 'text-red-500 fill-red-500'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">de 5 estrellas</span>
                </div>
              </div>
              <p className="text-gray-600">Basado en <span className="font-semibold text-gray-900">74 opiniones</span> en Google</p>
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
            href="https://www.google.com/maps/place/Doctor+Enrique+Chagollan+Endodoncista/@28.7054746,-100.5220217,17z/data=!4m8!3m7!1s0x865f8d127e14dff7:0xda398f2bd806eeca!8m2!3d28.7054699!4d-100.5194468!9m1!1b1!16s%2Fg%2F11g2qmdn8z?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-red-600 hover:text-red-700 font-semibold transition-colors duration-300 group mb-6"
          >
            <ExternalLink className="w-5 h-5" />
            Ver todas las reseñas en Google Maps
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <div>
            <p className="text-gray-600 mb-6 text-lg">
              ¿Listo para tener una experiencia igual de satisfactoria?
            </p>
            <a 
              href="tel:8787828610"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-xl shadow-xl shadow-red-900/30 transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/50 hover:scale-105"
            >
              Agenda tu Consulta Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CasosClinicos