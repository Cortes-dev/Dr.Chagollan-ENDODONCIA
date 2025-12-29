'use client'

import { useState } from 'react'
import { Microscope, ArrowRight, ChevronLeft, ChevronRight, Sparkles, Check } from 'lucide-react'
import { useTranslations } from 'next-intl'

const CasosClinicos = () => {
  const t = useTranslations("casos_clinicos")
  const [currentCase, setCurrentCase] = useState(0)

  // Casos dinámicos desde las traducciones
  const casosCount = 5
  const casos = Array.from({ length: casosCount }, (_, i) => ({
    id: i + 1,
    titulo: t(`casos.${i}.titulo`),
    imagen: t(`casos.${i}.imagen`),
    descripcion: t(`casos.${i}.descripcion`)
  }))

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % casos.length)
  }

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + casos.length) % casos.length)
  }

  const caso = casos[currentCase]
  const isVertical = currentCase === 4 // El último caso (blanqueamiento) es vertical

  return (
    <section id="casos" className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 -left-20 w-80 h-80 bg-red-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-50 to-transparent rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-full text-red-700 font-semibold text-sm mb-6 shadow-sm">
            <Sparkles className="w-4 h-4" />
            {t("header.badge.text")}
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 md:mb-6">
            {t("header.titulo")}{" "}
            <span className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
              {t("header.titulo_destacado")}
            </span>
          </h2>
          
          <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
            {t("header.descripcion")}
          </p>
        </div>

        {/* Caso Principal */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            
            {/* Contenedor de imagen */}
            <div className={`relative bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden ${
              isVertical 
                ? 'h-auto' 
                : 'h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px]'
            }`}>
              
              {/* Badge flotante con tipo de comparación */}
              <div className="absolute top-3 left-3 md:top-4 md:left-4 z-20">
                <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg border border-gray-200">
                  <span className="text-xs md:text-sm font-bold text-gray-900 flex items-center gap-1.5">
                    <Microscope className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-600" />
                    {t("imagen_slider.label_instruccion.antes")} / {t("imagen_slider.label_instruccion.despues")}
                  </span>
                </div>
              </div>

              {/* Imagen */}
              <img 
                src={caso.imagen}
                alt={`${caso.titulo} - Comparación antes y después`}
                className={`w-full object-contain ${
                  isVertical 
                    ? 'h-auto max-h-[800px]' 
                    : 'h-full object-center'
                }`}
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    target.parentElement.className += ' flex items-center justify-center min-h-[300px]';
                    target.parentElement.innerHTML = `
                      <div class="text-center p-8">
                        <div class="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 bg-red-50 rounded-full flex items-center justify-center">
                          <svg class="w-10 h-10 md:w-12 md:h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                        </div>
                        <p class="text-gray-600 font-semibold text-sm md:text-base">${caso.titulo}</p>
                        <p class="text-gray-500 text-xs md:text-sm mt-2">Comparación antes y después</p>
                      </div>
                    `;
                  }
                }}
              />

              {/* Overlay inferior con labels */}
              {!isVertical && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 md:p-6">
                  <div className="flex items-center justify-between max-w-5xl mx-auto">
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-lg">
                      <span className="text-white font-bold text-sm md:text-base">
                        {t("imagen_slider.overlay_texto.izquierda")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-lg">
                      <span className="text-white font-bold text-sm md:text-base">
                        {t("imagen_slider.overlay_texto.derecha")}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Para imagen vertical, labels arriba y abajo */}
              {isVertical && (
                <>
                  <div className="absolute top-2 md:top-4 left-[70%] -translate-x-1/2 z-10">
                    <div className="bg-black/70 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full">
                      <span className="text-white font-bold text-sm md:text-base">
                        {t("imagen_slider.overlay_texto.izquierda")}
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 md:bottom-6 left-[70%] -translate-x-1/2 z-10">
                    <div className="bg-black/70 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full">
                      <span className="text-white font-bold text-sm md:text-base">
                        {t("imagen_slider.overlay_texto.derecha")}
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Información del caso */}
            <div className="p-6 md:p-8 lg:p-12">
              <div className="max-w-4xl mx-auto">
                
                {/* Título y badge */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                    {caso.titulo}
                  </h3>
                  
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-xl">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-red-600" />
                    <span className="text-xs md:text-sm font-bold text-red-700">
                      Caso {currentCase + 1} de {casos.length}
                    </span>
                  </div>
                </div>
                
                {/* Descripción mejorada */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 md:p-6 lg:p-8 border border-gray-100 shadow-sm">
                  <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                    {caso.descripcion}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navegación mejorada */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 md:mb-12">
            
            {/* Botón anterior */}
            <button
              onClick={prevCase}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 md:px-6 py-3 md:py-3.5 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-red-600 rounded-xl font-semibold text-gray-700 hover:text-red-600 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>{t("navegacion.boton_anterior")}</span>
            </button>

            {/* Indicadores de progreso */}
            <div className="flex gap-2 order-first sm:order-none">
              {casos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCase(index)}
                  className={`h-2 md:h-2.5 rounded-full transition-all duration-300 ${
                    index === currentCase
                      ? 'w-10 md:w-12 bg-gradient-to-r from-red-600 to-red-700 shadow-lg'
                      : 'w-2 md:w-2.5 bg-gray-300 hover:bg-red-400 hover:w-6'
                  }`}
                  aria-label={`${t("navegacion.aria_label")} ${index + 1}`}
                />
              ))}
            </div>

            {/* Botón siguiente */}
            <button
              onClick={nextCase}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 md:px-6 py-3 md:py-3.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>{t("navegacion.boton_siguiente")}</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* CTA final rediseñado */}
          <div className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 shadow-2xl overflow-hidden">
            {/* Decoración de fondo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
            
            <div className="relative text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                Atención Personalizada
              </div>
              
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
                {t("cta_final.titulo")}
              </h3>
              
              <p className="text-sm md:text-base lg:text-lg text-red-50 mb-6 md:mb-8 leading-relaxed">
                {t("cta_final.descripcion")}
              </p>
              
              <a
                href={`tel:${t("cta_final.telefono")}`}
                className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-white hover:bg-gray-50 text-red-600 font-bold rounded-xl md:rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl text-sm md:text-base"
              >
                {t("cta_final.boton_texto")}
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CasosClinicos