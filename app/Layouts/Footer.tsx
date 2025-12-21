"use client";
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Facebook,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const menuItems = [
    { href: "/", label: "Inicio" },
    { href: "/services", label: "Servicios" },
    { href: "/about", label: "Sobre Mí" },
    { href: "/contact", label: "Contacto" },
  ];

  const servicios = [
    "Endodoncia",
    "Apicoformación",
    "Revascularización",
    "Blanqueamiento Interno",
    "Retratamiento",
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-900/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-800/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sección principal */}
        <div className="py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Columna 1: Información principal */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src="/images/logo-chagollan.png"
                alt="Dr. Chagollán"
                className="h-12 w-auto mb-4 brightness-0 invert opacity-90"
              />
              <h3 className="text-xl font-bold text-white mb-2">
                Dr. Enrique A. Chagollán B.
              </h3>
              <p className="text-sm text-gray-400">
                Especialista Certificado en Endodoncia
              </p>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              14 años de experiencia salvando sonrisas con tecnología de punta y
              atención personalizada.
            </p>

            {/* Redes sociales */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/drkikechagollan"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/drkikechagollan"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-red-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Servicios</h4>
            <ul className="space-y-3">
              {servicios.map((servicio) => (
                <li key={servicio}>
                  <a
                    href={`#${servicio}`}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-red-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {servicio}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm text-gray-400">Juárez 114, Zona Centro</p>
                  <p className="text-sm text-gray-400">
                    26000 Piedras Negras, Coah.
                  </p>
                </div>
              </li>



              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a
                  href="tel:8787828610"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  878 782 8610
                </a>
              </li>

              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a
                  href="mailto:contacto@drchagollan.com"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  contacto@drchagollan.com
                </a>
              </li>

              <li className="flex items-start gap-3 group">
                <Clock className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div className="text-sm text-gray-400">
                  <p>Lun - Vie: 9:00 - 18:00</p>
                  <p>Sáb: 9:00 - 14:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700"></div>

        {/* Sección inferior */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © 2025 Dr. Enrique Alejandro Chagollán Benavides. Todos los
              derechos reservados.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
              <a
                href="/privacidad"
                className="text-gray-400 hover:text-red-500 transition-colors duration-300"
              >
                Aviso de Privacidad
              </a>
              <span className="hidden sm:inline text-gray-600">•</span>
              <a
                target="_blank"
                href="https://cortes-dev.vercel.app"
                className="text-gray-400 hover:text-red-500 transition-colors duration-300 group flex items-center gap-1"
              >
                Diseñado con
                <span className="text-red-500 group-hover:scale-125 transition-transform inline-block">
                  ♥
                </span>
                por Diego Cortes
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
