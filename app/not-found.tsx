'use client'

import { Home, Search, AlertCircle } from 'lucide-react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full relative">
        {/* Ícono principal */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-red-600 to-red-800 shadow-2xl shadow-red-900/30 mb-6 relative">
            <AlertCircle className="w-16 h-16 text-white" strokeWidth={2} />
            <div className="absolute inset-0 rounded-full bg-red-500 opacity-20 animate-ping"></div>
          </div>

          {/* Código de error */}
          <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-700 mb-4">
            404
          </h1>

          <h2 className="text-3xl font-semibold text-gray-900 mb-3">
            Página no encontrada
          </h2>

          <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
            Lo sentimos, la página que buscas no existe o ha sido movida.
            Verifica la URL o regresa al inicio.
          </p>
        </div>

        {/* Botones de acción - usar enlaces para ser prerenderable */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg shadow-lg shadow-red-900/30 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/50 hover:scale-105"
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Volver al Inicio
          </Link>

          <Link
            href="/"
            className="flex items-center gap-3 px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-lg border-2 border-gray-300 hover:border-gray-400 shadow-md transition-all duration-300 hover:scale-105"
          >
            <Search className="w-5 h-5" />
            Página Anterior
          </Link>
        </div>

        {/* Decoración inferior */}
        <div className="mt-16 text-center">
          <div className="inline-block px-6 py-2 bg-gray-100 border border-gray-300 rounded-full">
            <p className="text-gray-600 text-sm">¿Necesitas ayuda? Contáctanos</p>
          </div>
        </div>

        {/* Elementos decorativos de fondo */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-40 -z-10"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50 -z-10"></div>
      </div>
    </div>
  )
}

export default NotFound