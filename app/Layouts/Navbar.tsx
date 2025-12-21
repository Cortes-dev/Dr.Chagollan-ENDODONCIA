'use client'
import Link from "next/link"
import { useState, useCallback, memo } from "react"
import { Menu, X, Phone } from "lucide-react"

const MENU_ITEMS = [
  { href: "", label: "Inicio" },
  { href: "#services", label: "Servicios" },
  { href: "#testimonio", label: "Testimonios" },
  { href: "#about", label: "Quiénes Somos" },
  { href: "#contact", label: "Contacto" }
] as const

const PHONE_NUMBER = "+52XXXXXXXXXX"

const NavLink = memo(({ href, label, onClick, mobile = false }: { href: string; label: string; onClick?: () => void; mobile?: boolean }) => (
  <Link 
    href={href}
    onClick={onClick}
    className={`${
      mobile 
        ? "block w-full text-left px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 font-medium text-base border-b border-gray-100 last:border-0"
        : "px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-all duration-300 font-medium relative group"
    }`}
  >
    {label}
    {!mobile && (
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-800 group-hover:w-full transition-all duration-300" />
    )}
  </Link>
))

NavLink.displayName = 'NavLink'

const CTAButton = memo(({ className = "", mobile = false, onClick }: { className?: string; mobile?: boolean; onClick?: () => void }) => (
  <a 
    href={`tel:${PHONE_NUMBER}`}
    onClick={onClick}
    className={`flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg shadow-lg shadow-red-900/30 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/50 ${!mobile && 'hover:scale-105'} ${
      mobile ? 'w-full text-base' : ''
    } ${className}`}
  >
    <Phone className="w-5 h-5" />
    <span>{mobile ? 'Agendar Cita' : 'Agendar Cita'}</span>
  </a>
))

CTAButton.displayName = 'CTAButton'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), [])
  const closeMenu = useCallback(() => setIsOpen(false), [])

  return (
    <nav className="bg-white/95 shadow-md border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Logo */}
          <Link href="/" className="w-28 h-12 sm:w-32 sm:h-14 flex-shrink-0" aria-label="Ir al inicio">
            <img 
              className="w-full h-full object-contain" 
              src="/images/logo-chagollan.png" 
              alt="Logo Chagollán" 
              width="128"
              height="56"
              loading="eager"
            />
          </Link>

          {/* Menú desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {MENU_ITEMS.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <CTAButton />
          </div>

          {/* Botón menú móvil */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors duration-300 active:scale-95"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 bg-white border-t border-gray-200 shadow-inner">
          {MENU_ITEMS.map((item) => (
            <NavLink key={item.href} {...item} onClick={closeMenu} mobile />
          ))}
          
          <div className="pt-4">
            <CTAButton mobile onClick={closeMenu} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar