"use client";

import { useState } from "react";
import { Phone, MapPin, Mail, Clock, Send, MessageCircle } from "lucide-react";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Formatear el mensaje para WhatsApp
    const mensaje =
      `*Nueva Solicitud de Consulta*%0A%0A` +
      `*Nombre:* ${formData.nombre}%0A` +
      `*Teléfono:* ${formData.telefono}%0A` +
      `*Motivo de consulta:* ${formData.servicio}%0A` +
      `*Mensaje:* ${formData.mensaje || "No especificado"}`;

    // Número de WhatsApp
    const numeroWhatsApp = "528787850943";

    // Abrir WhatsApp
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, "_blank");

    // Limpiar formulario
    setFormData({
      nombre: "",
      telefono: "",
      servicio: "",
      mensaje: "",
    });
  };

  const servicios = [
    "Dolor Dental",
    "Tratamiento de Conducto (Endodoncia)",
    "Retratamiento de Conducto",
    "Apicoformación",
    "Revascularización Dental",
    "Blanqueamiento Interno",
    "Evaluación de Infección",
    "Trauma Dental",
    "Segunda Opinión",
    "Consulta General",
    "Otro",
  ];

  const infoContacto = [
    {
      icon: MapPin,
      title: "Ubicación",
      content: "Acoros 250",
      subcontent: "Piedras Negras, Coahuila",
      link: "https://maps.google.com/?q=Acoros+250+Piedras+Negras",
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "878 782 8610",
      subcontent: "Llamadas y WhatsApp",
      link: "tel:8787828610",
    },
    {
      icon: Mail,
      title: "Email",
      content: "contacto@drchagollan.com",
      subcontent: "Respuesta en 24hrs",
      link: "mailto:contacto@drchagollan.com",
    },
    {
      icon: Clock,
      title: "Horarios",
      content: "Lun - Vie: 9:00 - 18:00",
      subcontent: "Sáb: 9:00 - 14:00",
      link: null,
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full text-red-700 font-medium text-sm mb-6">
            <MessageCircle className="w-4 h-4" />
            Estamos aquí para ayudarte
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Agenda tu{" "}
            <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              Consulta
            </span>
          </h2>

          <p className="text-lg text-gray-600">
            Completa el formulario y nos pondremos en contacto contigo vía
            WhatsApp
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Información de contacto - Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Información de Contacto
              </h3>
              <p className="text-gray-600 mb-6">
                Estamos disponibles para atenderte y resolver todas tus dudas
                sobre nuestros tratamientos
              </p>
            </div>

            {/* Cards de información */}
            <div className="space-y-4">
              {infoContacto.map((info, index) => {
                const Icon = info.icon;
                const content = info.link ? (
                  <a
                    href={info.link}
                    target={info.link?.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      info.link?.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="block group"
                  >
                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md border border-gray-100 hover:border-red-200 hover:shadow-lg transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h4>
                        <p className="text-gray-900 text-sm font-medium">
                          {info.content}
                        </p>
                        <p className="text-gray-500 text-xs">
                          {info.subcontent}
                        </p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md border border-gray-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-gray-900 text-sm font-medium">
                        {info.content}
                      </p>
                      <p className="text-gray-500 text-xs">{info.subcontent}</p>
                    </div>
                  </div>
                );

                return <div key={index}>{content}</div>;
              })}
            </div>

            {/* CTA de llamada directa */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-xl p-6 text-white">
              <h4 className="font-bold text-lg mb-2">
                ¿Tienes una Emergencia?
              </h4>
              <p className="text-red-100 text-sm mb-4">
                Llámanos directamente para atención inmediata
              </p>
              <a
                href="tel:8787828610"
                className="flex items-center justify-center gap-2 w-full bg-white hover:bg-gray-50 text-red-600 font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Llamar Ahora
              </a>
            </div>
          </div>

          {/* Formulario */}
          <div id="#mensaje" className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Envíanos un Mensaje
              </h3>

              <div className="space-y-6">
                {/* Nombre */}
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Nombre Completo <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-red-600 focus:bg-white transition-all"
                    placeholder="Ej: Juan Pérez"
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label
                    htmlFor="telefono"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Teléfono <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-red-600 focus:bg-white transition-all"
                    placeholder="878 123 4567"
                  />
                </div>

                {/* Servicio */}
                <div>
                  <label
                    htmlFor="servicio"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Motivo de Consulta <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    required
                    value={formData.servicio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-red-600 focus:bg-white transition-all appearance-none cursor-pointer"
                  >
                    <option value="">
                      Selecciona el motivo de tu consulta
                    </option>
                    {servicios.map((servicio, index) => (
                      <option key={index} value={servicio}>
                        {servicio}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Mensaje Adicional
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-red-600 focus:bg-white transition-all resize-none"
                    placeholder="Describe brevemente tus síntomas o el motivo de tu consulta..."
                  ></textarea>
                </div>

                {/* Botón */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-xl shadow-red-900/30 hover:shadow-2xl hover:shadow-red-900/50"
                >
                  <Send className="w-5 h-5" />
                  Enviar por WhatsApp
                </button>

                <p className="text-gray-500 text-sm text-center">
                  Al enviar el formulario serás redirigido a WhatsApp para
                  completar tu solicitud
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
