'use client'

import { useState } from 'react'
import { HelpCircle, ChevronDown, Phone } from 'lucide-react'
import { useTranslations } from 'next-intl'

const Preguntas = () => {
  const t = useTranslations("faq-section")
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  // FAQs dinámicos desde i18n
  const faqsCount = 10
  const faqs = Array.from({ length: faqsCount }, (_, i) => ({
    pregunta: t(`faqs.${i}.question`),
    respuesta: t(`faqs.${i}.answer`)
  }))

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full text-red-700 font-medium text-sm mb-6">
            <HelpCircle className="w-4 h-4" />
            {t("badge")}
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t("title.normal")}{" "}
            <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              {t("title.highlight")}
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Acordeón de preguntas */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left transition-colors duration-200 hover:bg-gray-50"
              >
                <span className="font-semibold text-gray-900 text-lg pr-8">
                  {faq.pregunta}
                </span>
                <ChevronDown 
                  className={`w-6 h-6 text-red-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.respuesta}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-center shadow-2xl shadow-red-900/30">
          <h3 className="text-2xl font-bold text-white mb-3">
            {t("cta.title")}
          </h3>
          <p className="text-red-100 mb-6">
            {t("cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:8787828610"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-red-600 font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              {t("cta.call")}
            </a>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-800 hover:bg-red-900 text-white font-bold rounded-xl transition-all duration-300 border-2 border-white/20"
            >
              {t("cta.message")}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Preguntas