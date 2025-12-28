"use client";

import { useTranslations } from "next-intl";

import Link from "next/link";
import { useState, useCallback, memo } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useTransition, useEffect } from "react";

const PHONE_NUMBER = "+528787828610";

const NavLink = memo(
  ({
    href,
    label,
    onClick,
    mobile = false,
  }: {
    href: string;
    label: string;
    onClick?: () => void;
    mobile?: boolean;
  }) => (
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
  )
);

NavLink.displayName = "NavLink";

const CTAButton = memo(
  ({
    className = "",
    mobile = false,
    onClick,
    label,
  }: {
    className?: string;
    mobile?: boolean;
    onClick?: () => void;
    label: string;
  }) => (
    <a
      href={`tel:${PHONE_NUMBER}`}
      onClick={onClick}
      className={`flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg shadow-lg shadow-red-900/30 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/50 ${
        !mobile && "hover:scale-105"
      } ${mobile ? "w-full text-base" : ""} ${className}`}
    >
      <Phone className="w-5 h-5" />
      <span>{label}</span>
    </a>
  )
);

CTAButton.displayName = "CTAButton";

// LocaleSwitcher para Desktop
const LocaleSwitcherDesktop = memo(() => {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [currentLocale, setCurrentLocale] = useState<"es" | "en">("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const locale = pathname.split("/")[1];
    if (locale === "en" || locale === "es") {
      setCurrentLocale(locale as "es" | "en");
    }
  }, [pathname]);

  const changeLocale = (newLocale: "es" | "en") => {
    if (newLocale === currentLocale) return;

    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPathname = segments.join("/");

    startTransition(() => {
      router.push(newPathname);
    });
  };

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-0 rounded-full shadow-lg p-1 border-2 border-red-600">
      <button
        onClick={() => changeLocale("es")}
        disabled={isPending || currentLocale === "es"}
        className={`px-3 py-1.5 rounded-full font-bold transition-all duration-300 flex items-center gap-1.5 text-xs uppercase tracking-wide ${
          currentLocale === "es"
            ? "bg-gradient-to-r from-red-600 to-red-700 text-black shadow-lg scale-105"
            : "text-black hover:bg-red-600/20 hover:text-red-400"
        } disabled:opacity-60 disabled:cursor-not-allowed`}
      >
        <span className="text-sm">🇲🇽</span>
        <span>ES</span>
      </button>

      <div className="w-px h-6 bg-red-600/30"></div>

      <button
        onClick={() => changeLocale("en")}
        disabled={isPending || currentLocale === "en"}
        className={`px-3 py-1.5 rounded-full font-bold transition-all duration-300 flex items-center gap-1.5 text-xs uppercase tracking-wide ${
          currentLocale === "en"
            ? "bg-gradient-to-r from-red-600 to-red-700 text-black shadow-lg scale-105"
            : "text-black hover:bg-red-600/20 hover:text-red-400"
        } disabled:opacity-60 disabled:cursor-not-allowed`}
      >
        <span className="text-sm">🇺🇸</span>
        <span>EN</span>
      </button>
    </div>
  );
});

LocaleSwitcherDesktop.displayName = "LocaleSwitcherDesktop";

// LocaleSwitcher para Mobile
const LocaleSwitcherMobile = memo(() => {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [currentLocale, setCurrentLocale] = useState<"es" | "en">("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const locale = pathname.split("/")[1];
    if (locale === "en" || locale === "es") {
      setCurrentLocale(locale as "es" | "en");
    }
  }, [pathname]);

  const changeLocale = (newLocale: "es" | "en") => {
    if (newLocale === currentLocale) return;

    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPathname = segments.join("/");

    startTransition(() => {
      router.push(newPathname);
    });
  };

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-0 rounded-full shadow-lg p-1.5 border-2 border-red-600">
      <button
        onClick={() => changeLocale("es")}
        disabled={isPending || currentLocale === "es"}
        className={`flex-1 px-4 py-2.5 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 text-sm uppercase tracking-wide ${
          currentLocale === "es"
            ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg scale-105"
            : "text-white hover:bg-red-600/20 hover:text-red-400"
        } disabled:opacity-60 disabled:cursor-not-allowed`}
      >
        <span className="text-base">🇲🇽</span>
        <span>Español</span>
      </button>

      <div className="w-px h-8 bg-red-600/30"></div>

      <button
        onClick={() => changeLocale("en")}
        disabled={isPending || currentLocale === "en"}
        className={`flex-1 px-4 py-2.5 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 text-sm uppercase tracking-wide ${
          currentLocale === "en"
            ? "bg-gradient-to-r from-red-600 to-red-700 text-black shadow-lg scale-105"
            : "text-black hover:bg-red-600/20 hover:text-red-400"
        } disabled:opacity-60 disabled:cursor-not-allowed`}
      >
        <span className="text-base">🇺🇸</span>
        <span>English</span>
      </button>
    </div>
  );
});

LocaleSwitcherMobile.displayName = "LocaleSwitcherMobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  const t = useTranslations("navbar-home");

  return (
    <nav className="bg-white/95 shadow-md border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="w-28 h-12 sm:w-32 sm:h-14 flex-shrink-0"
            aria-label="Ir al inicio"
          >
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
            <NavLink href="/" label={t("home.label")} />
            <NavLink href={t("services.href")} label={t("services.label")} />
            <NavLink
              href={t("testimonials.href")}
              label={t("testimonials.label")}
            />
            <NavLink href={t("about.href")} label={t("about.label")} />
            <NavLink href={t("contact.href")} label={t("contact.label")} />
          </div>

          {/* CTA + Selector de idioma Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <LocaleSwitcherDesktop />
            <CTAButton label={t("cta")} />
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
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 bg-white border-t border-gray-200 shadow-inner">
          <NavLink href="/" label={t("home.label")} onClick={closeMenu} mobile />
          <NavLink href={t("services.href")} label={t("services.label")} onClick={closeMenu} mobile />
          <NavLink
            href={t("testimonials.href")}
            label={t("testimonials.label")}
            onClick={closeMenu}
            mobile
          />
          <NavLink href={t("about.href")} label={t("about.label")} onClick={closeMenu} mobile />
          <NavLink href={t("contact.href")} label={t("contact.label")} onClick={closeMenu} mobile />

          {/* Selector de idioma móvil */}
          <div className="pt-4 pb-2">
            <LocaleSwitcherMobile />
          </div>

          {/* CTA móvil */}
          <div className="pt-2">
            <CTAButton mobile onClick={closeMenu} label={t("cta")} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;