"use client";
import {
  Phone,
  Shield,
  Clock,
  Award,
  ArrowRight,
  Zap,
  Heart,
  Microscope,
} from "lucide-react";
import { useTranslations } from "next-intl";

const iconMap: Record<string, any> = {
  Zap,
  Heart,
  Microscope,
  Shield,
  Clock,
  Award,
  ArrowRight,
  Phone,
};

const Header = () => {
  const t = useTranslations("header");

  const cards = [
    {
      icon: t("item-card.icon-1"),
      title: t("item-card.title-1"),
      description: t("item-card.description-1"),
    },
    {
      icon: t("item-card.icon-2"),
      title: t("item-card.title-2"),
      description: t("item-card.description-2"),
    },
    {
      icon: t("item-card.icon-3"),
      title: t("item-card.title-3"),
      description: t("item-card.description-3"),
    },
  ];

  return (
    <header className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-red-50">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-100 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gray-200 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contenido principal */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full text-red-700 font-medium text-sm shadow-sm">
              <Award className="w-4 h-4 text-red-600" />
              {t("etiqueta")}
            </div>

            {/* Título */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {t.rich("title", {
                highlight: (chunks) => (
                  <span className="text-red-600 font-bold">{chunks}</span>
                ),
              })}
            </h1>

            {/* Descripción */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <span className="font-semibold text-gray-900">
                Dr. Enrique Alejandro Chagollán Benavides
              </span>
              , {t("description")}
            </p>

            {/* Tarjetas dinámicas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {cards.map((card, index) => {
                const IconComponent = iconMap[card.icon];
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md border border-gray-100 hover:border-red-200 transition-all duration-300"
                  >
                    <div className="p-2 bg-red-50 rounded-lg">
                      {IconComponent && (
                        <IconComponent className="w-5 h-5 text-red-600" />
                      )}
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-bold text-gray-900">
                        {card.title}
                      </div>
                      <div className="text-xs text-gray-600">
                        {card.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={t("cta.phone")}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-xl shadow-xl shadow-red-900/30 transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/50 hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                {t("buttons-header.agendar")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#services"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-red-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t("buttons-header.conocer")}
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-red-600">
                  {t("stats.patients.value")}
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  {t("stats.patients.label")}
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-red-600">
                  {t("stats.experience.value")}
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  {t("stats.experience.label")}
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-red-600">
                  {t("stats.dedication.value")}
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  {t("stats.dedication.label")}
                </div>
              </div>
            </div>
          </div>

          {/* Imagen profesional */}
          <div className="relative">
            <div className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white">
              <img
                src="/images/Dr. Enrique.jpeg"
                alt="Dr. Enrique Alejandro Chagollán Benavides - Especialista en Endodoncia"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  if (target.parentElement) {
                    target.parentElement.className +=
                      " bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center";
                    target.parentElement.innerHTML =
                      '<div class="flex flex-col items-center justify-center p-8 text-red-600"><Shield class="w-32 h-32 mb-4" stroke="currentColor" /><p class="text-lg font-semibold">Dr. Chagollán Benavides</p><p class="text-sm text-gray-600">Especialista en Endodoncia</p></div>';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
            </div>

            {/* Tarjeta flotante */}
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-2xl animate-float border border-red-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-50 rounded-lg">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    {t("floating-card.title")}
                  </div>
                  <div className="text-xs text-gray-600">
                    {t("floating-card.description")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animación CSS */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;