'use client'

import { useState } from 'react'
import { HelpCircle, ChevronDown, Phone } from 'lucide-react'

const Preguntas = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      pregunta: "¿Qué es un tratamiento de conducto (endodoncia)?",
      respuesta: "El tratamiento de conducto es un procedimiento que elimina la pulpa dental infectada o dañada del interior del diente. Se limpia, desinfecta y sella el conducto radicular para salvar el diente natural y evitar su extracción. Es un procedimiento común y muy efectivo para preservar tu sonrisa natural."
    },
    {
      pregunta: "¿El tratamiento de conducto es doloroso?",
      respuesta: "No, el tratamiento de conducto moderno es prácticamente indoloro. Utilizamos anestesia local efectiva y tecnología avanzada para asegurar tu comodidad durante todo el procedimiento. La mayoría de los pacientes reportan que el tratamiento es similar a una restauración dental regular. Además, eliminamos el dolor que causaba la infección, así que te sentirás mejor después del tratamiento."
    },
    {
      pregunta: "¿Cuánto tiempo dura un tratamiento de conducto?",
      respuesta: "La duración varía según la complejidad del caso. Generalmente, un tratamiento de conducto puede completarse en una o dos citas de 60 a 90 minutos cada una. Los casos más complejos o retratamientos pueden requerir citas adicionales. Durante tu consulta inicial, te proporcionaremos un plan de tratamiento detallado con tiempos estimados."
    },
    {
      pregunta: "¿Cuánto cuesta un tratamiento de endodoncia?",
      respuesta: "El costo varía dependiendo del diente afectado y la complejidad del caso. Durante tu consulta inicial, realizaremos una evaluación completa y te proporcionaremos un presupuesto detallado sin compromiso. Ofrecemos opciones de pago flexibles para que puedas recibir el tratamiento que necesitas."
    },
    {
      pregunta: "¿Qué pasa si no me hago el tratamiento de conducto?",
      respuesta: "Si no se trata, la infección puede extenderse, causando dolor severo, abscesos, inflamación facial e incluso pérdida del hueso que sostiene el diente. Esto eventualmente resulta en la pérdida del diente y puede afectar los dientes vecinos. El tratamiento de conducto es la mejor opción para salvar tu diente natural y mantener tu salud bucal."
    },
    {
      pregunta: "¿Necesito algún cuidado especial después del tratamiento?",
      respuesta: "Los cuidados post-tratamiento son sencillos. Debes evitar masticar con el diente tratado hasta que esté completamente restaurado, mantener una buena higiene oral y tomar los medicamentos prescritos. Es normal experimentar sensibilidad leve durante unos días. Te proporcionaremos instrucciones detalladas y estaremos disponibles para cualquier duda o emergencia."
    },
    {
      pregunta: "¿Cuál es la tasa de éxito de los tratamientos de conducto?",
      respuesta: "Los tratamientos de conducto tienen una tasa de éxito del 95-98% cuando se realizan correctamente. Con nuestra tecnología avanzada, incluyendo microscopía dental y radiografía digital, y nuestros 14 años de experiencia, logramos resultados excepcionales. Los dientes tratados adecuadamente pueden durar toda la vida con el cuidado apropiado."
    },
    {
      pregunta: "¿Aceptan seguros dentales?",
      respuesta: "Trabajamos con diversos seguros dentales. Te recomendamos contactarnos directamente para verificar tu cobertura específica. Nuestro equipo te ayudará a maximizar tus beneficios y te explicará cualquier costo adicional antes de comenzar el tratamiento."
    },
    {
      pregunta: "¿Atienden emergencias dentales?",
      respuesta: "Sí, entendemos que las emergencias dentales no esperan. Reservamos espacios en nuestra agenda para casos de emergencia como dolor severo, trauma dental o infecciones agudas. Si tienes una emergencia, llámanos inmediatamente al 878 782 8610 y haremos lo posible por atenderte el mismo día."
    },
    {
      pregunta: "¿Qué tecnología utilizan en sus tratamientos?",
      respuesta: "Utilizamos tecnología de última generación incluyendo: microscopía dental para mayor precisión, radiografía digital que reduce la radiación hasta un 90%, localizadores apicales electrónicos, instrumental rotatorio de níquel-titanio, y sistemas de obturación termoplástica. Esta tecnología nos permite ofrecer tratamientos más rápidos, precisos y cómodos."
    }
  ]

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
            Resolvemos tus dudas
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Preguntas{" "}
            <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              Frecuentes
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros tratamientos de endodoncia
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
            ¿Tienes más preguntas?
          </h3>
          <p className="text-red-100 mb-6">
            Estamos aquí para ayudarte. Contáctanos y resolveremos todas tus dudas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:8787828610"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-red-600 font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Llamar Ahora
            </a>
            <a 
              href="#mensaje"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-800 hover:bg-red-900 text-white font-bold rounded-xl transition-all duration-300 border-2 border-white/20"
            >
              Enviar Mensaje
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Preguntas