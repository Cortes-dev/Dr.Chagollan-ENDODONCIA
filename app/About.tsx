'use client'
import { Award, Heart, Lightbulb, Shield, Users, Microscope, Clock, Target } from "lucide-react"

const About = () => {
  const valores = [
    {
      icon: Heart,
      title: "Empatía",
      description: "Entendemos el miedo dental y trabajamos para crear un ambiente de confianza y tranquilidad."
    },
    {
      icon: Award,
      title: "Excelencia",
      description: "Nos comprometemos con los más altos estándares de calidad en cada procedimiento."
    },
    {
      icon: Lightbulb,
      title: "Innovación",
      description: "Utilizamos tecnología de última generación para ofrecer los mejores resultados."
    },
    {
      icon: Shield,
      title: "Confianza",
      description: "Construimos relaciones duraderas basadas en la transparencia y profesionalismo."
    }
  ]

  const stats = [
    { number: "14+", label: "Años de Experiencia", icon: Clock },
    { number: "600+", label: "Pacientes por Año", icon: Users },
    { number: "98%", label: "Tasa de Éxito", icon: Target },
    { number: "100%", label: "Tecnología Digital", icon: Microscope }
  ]

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-40 -left-20 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-40 -right-20 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full text-red-700 font-medium text-sm mb-6">
            <Users className="w-4 h-4" />
            Nuestro Equipo
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Acerca de{" "}
            <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              Nosotros
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Un equipo dedicado a preservar tu sonrisa natural con experiencia, tecnología y calidez humana
          </p>
        </div>

        {/* Sección principal: Foto + Descripción */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Imagen del equipo */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/team.png"
                alt="Equipo Dr. Chagollán - Especialistas en Endodoncia"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    target.parentElement.className += ' bg-gradient-to-br from-gray-100 to-gray-200 aspect-[4/3] flex items-center justify-center';
                    target.parentElement.innerHTML = '<div class="flex flex-col items-center justify-center p-8 text-gray-400"><Users class="w-32 h-32 mb-4" stroke="currentColor" /><p class="text-lg font-semibold">Nuestro Equipo Profesional</p></div>';
                  }
                }}
              />
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent" />
            </div>

            {/* Tarjeta flotante */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-2xl border border-red-100 max-w-xs hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-50 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">14 Años</div>
                  <div className="text-sm text-gray-600">Salvando Sonrisas</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contenido */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Un Equipo Comprometido con tu Salud Dental
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              Bajo el liderazgo del <span className="font-semibold text-gray-900">Dr. Enrique Alejandro Chagollán Benavides</span>, 
              especialista certificado en endodoncia con más de 14 años de experiencia, nuestro equipo se dedica 
              a ofrecer tratamientos de la más alta calidad.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Cada miembro de nuestro equipo está altamente capacitado y comparte nuestra visión: hacer que cada 
              visita sea una experiencia positiva, donde el paciente se sienta cómodo, informado y seguro de que 
              está recibiendo el mejor cuidado posible.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Combinamos años de experiencia con tecnología de última generación, incluyendo microscopía dental, 
              radiografía digital y técnicas mínimamente invasivas para garantizar resultados excepcionales y 
              procedimientos prácticamente indoloros.
            </p>

            {/* Lista de características */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Microscope className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Tecnología Avanzada</h4>
                  <p className="text-sm text-gray-600">Equipos de última generación</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Heart className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Atención Personalizada</h4>
                  <p className="text-sm text-gray-600">Cada paciente es único</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl hover:border-red-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Valores */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestros{" "}
              <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                Valores
              </span>
            </h3>
            <p className="text-gray-600">
              Los principios que guían cada uno de nuestros tratamientos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => {
              const Icon = valor.icon
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-red-200 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-red-100 to-red-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-red-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{valor.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{valor.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 lg:p-12 text-center shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            ¿Listo para conocernos?
          </h3>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Agenda tu consulta y descubre por qué más de 600 pacientes al año confían en nosotros
          </p>
          <a 
            href="tel:8787828610"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-red-600 font-bold rounded-xl shadow-xl transition-all duration-300 hover:scale-105"
          >
            Agenda tu Cita Ahora
          </a>
        </div>
      </div>
    </section>
  )
}

export default About