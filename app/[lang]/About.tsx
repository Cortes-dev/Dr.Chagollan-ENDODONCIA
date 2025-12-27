'use client'

import { useState } from 'react'
import {
  Award,
  Heart,
  Lightbulb,
  Shield,
  Users,
  Microscope,
  Clock,
  Target
} from 'lucide-react'
import { useTranslations } from 'next-intl'

const iconMap: Record<string, any> = {
  Award,
  Heart,
  Lightbulb,
  Shield,
  Users,
  Microscope,
  Clock,
  Target
}

const About = () => {
  const t = useTranslations('about-section')
  const [imageError, setImageError] = useState(false)

  // Valores
  const valores = Array.from({ length: 4 }, (_, i) => ({
    icon: t(`values.${i}.icon`),
    title: t(`values.${i}.title`),
    description: t(`values.${i}.description`)
  }))

  // Stats
  const stats = Array.from({ length: 4 }, (_, i) => ({
    icon: t(`stats.${i}.icon`),
    number: t(`stats.${i}.number`),
    label: t(`stats.${i}.label`)
  }))

  // Features
  const features = Array.from({ length: 2 }, (_, i) => ({
    icon: t(`main.features.${i}.icon`),
    title: t(`main.features.${i}.title`),
    description: t(`main.features.${i}.description`)
  }))

  return (
    <section
      id="about"
      className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
    >
      {/* Decoración */}
      <div className="absolute top-40 -left-20 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-40 -right-20 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full text-red-700 font-medium text-sm mb-6">
            <Users className="w-4 h-4" />
            {t('header.badge')}
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t.rich('header.title', {
              highlight: (chunks) => (
                <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                  {chunks}
                </span>
              )
            })}
          </h2>

          <p className="text-lg text-gray-600">
            {t('header.description')}
          </p>
        </div>

        {/* Imagen + contenido */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">

          {/* Imagen */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">

              {!imageError ? (
                <img
                  src="/images/equipo.jpeg"
                  alt={t('image.alt')}
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center text-gray-400">
                  <Users className="w-24 h-24 mb-4" />
                  <p className="text-lg font-semibold">
                    {t('image.fallback')}
                  </p>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent" />
            </div>

            {/* Tarjeta flotante */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-2xl border border-red-100 max-w-xs hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {t('floating.years')}
                  </div>
                  <div className="text-sm text-gray-600">
                    {t('floating.label')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              {t('main.lead')}
            </h3>

            {['0', '1', '2'].map((i) => (
              <p key={i} className="text-gray-600">
                {i === '0'
                  ? t.rich(`main.paragraphs.${i}`, {
                      highlight: (chunks) => (
                        <span className="font-semibold text-gray-900">
                          {chunks}
                        </span>
                      )
                    })
                  : t(`main.paragraphs.${i}`)}
              </p>
            ))}

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, i) => {
                const Icon = iconMap[feature.icon]
                return (
                  <div key={i} className="flex gap-3">
                    <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center">
                      {Icon && <Icon className="w-4 h-4 text-red-600" />}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => {
            const Icon = iconMap[stat.icon]
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition"
              >
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {Icon && <Icon className="w-6 h-6 text-red-600" />}
                </div>
                <div className="text-3xl font-bold text-gray-900">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>

        {/* Valores */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {t.rich('values.title', {
                highlight: (chunks) => (
                  <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                    {chunks}
                  </span>
                )
              })}
            </h3>
            <p className="text-gray-600">
              {t('values.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, i) => {
              const Icon = iconMap[valor.icon]
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition"
                >
                  <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                    {Icon && <Icon className="w-7 h-7 text-red-600" />}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {valor.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {valor.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 lg:p-12 text-center shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            {t('cta.title')}
          </h3>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <a
            href={t('cta.button.url')}
            className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-bold rounded-xl hover:scale-105 transition"
          >
            {t('cta.button.text')}
          </a>
        </div>

      </div>
    </section>
  )
}

export default About
