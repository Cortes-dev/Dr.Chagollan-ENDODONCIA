"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useCallback, memo } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "react";
import { useTranslations } from "next-intl";

const PHONE_NUMBER = "+528787828610";

/* ---------------------------------- */
/* Hook reutilizable para idioma */
/* ---------------------------------- */
const useLocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const currentLocale =
    pathname.split("/")[1] === "en" ? "en" : "es";

  const changeLocale = (locale: "es" | "en") => {
    if (locale === currentLocale) return;

    const segments = pathname.split("/");
    segments[1] = locale;

    startTransition(() => {
      router.push(segments.join("/"));
    });
  };

  return { currentLocale, changeLocale, isPending };
};

/* ---------------------------------- */
/* NavLink */
/* ---------------------------------- */
const NavLink = memo(
  ({
    href,
    label,
    mobile = false,
    onClick,
  }: {
    href: string;
    label: string;
    mobile?: boolean;
    onClick?: () => void;
  }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
      <Link
        href={href}
        onClick={onClick}
        className={`relative font-medium transition-all
          ${
            mobile
              ? "block px-4 py-3 rounded-lg text-gray-700 hover:bg-red-50"
              : "px-4 py-2 rounded-lg"
          }
          ${isActive ? "text-red-600" : "text-gray-700 hover:text-red-600"}
        `}
      >
        {label}
        {!mobile && (
          <span
            className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all
              ${isActive ? "w-full" : "w-0 group-hover:w-full"}
            `}
          />
        )}
      </Link>
    );
  }
);
NavLink.displayName = "NavLink";

/* ---------------------------------- */
/* CTA */
/* ---------------------------------- */
const CTAButton = memo(
  ({ label, mobile = false, onClick }: any) => (
    <a
      href={`tel:${PHONE_NUMBER}`}
      onClick={onClick}
      className={`flex items-center justify-center gap-2 px-6 py-3
        bg-gradient-to-r from-red-600 to-red-700
        hover:from-red-700 hover:to-red-800
        text-white font-semibold rounded-xl shadow-lg
        transition-all hover:scale-105
        ${mobile ? "w-full" : ""}
      `}
    >
      <Phone className="w-5 h-5" />
      {label}
    </a>
  )
);
CTAButton.displayName = "CTAButton";

/* ---------------------------------- */
/* Locale Switcher */
/* ---------------------------------- */
const LocaleSwitcher = ({ mobile = false }: { mobile?: boolean }) => {
  const { currentLocale, changeLocale, isPending } =
    useLocaleSwitcher();

  return (
    <div
      className={`flex items-center rounded-full border-2 border-red-600 p-1
        ${mobile ? "w-full" : ""}
      `}
    >
      {(["es", "en"] as const).map((lang) => (
        <button
          key={lang}
          onClick={() => changeLocale(lang)}
          disabled={isPending}
          className={`flex-1 px-4 py-2 rounded-full font-bold text-sm transition-all
            ${
              currentLocale === lang
                ? "bg-red-600 text-white scale-105"
                : "text-gray-700 hover:bg-red-100"
            }
          `}
        >
          {lang === "es" ? "🇲🇽 ES" : "🇺🇸 EN"}
        </button>
      ))}
    </div>
  );
};

/* ---------------------------------- */
/* Navbar */
/* ---------------------------------- */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useCallback(() => setIsOpen((p) => !p), []);
  const close = useCallback(() => setIsOpen(false), []);
  const t = useTranslations("navbar-home");

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 sm:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Inicio">
            <Image
              src="/images/logo-chagollan.png"
              alt="Logo"
              width={140}
              height={60}
              priority
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink href="/" label={t("home.label")} />
            <NavLink href={t("services.href")} label={t("services.label")} />
            <NavLink href={t("testimonials.href")} label={t("testimonials.label")} />
            <NavLink href={t("about.href")} label={t("about.label")} />
            <NavLink href={t("contact.href")} label={t("contact.label")} />
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-4">
            <LocaleSwitcher />
            <CTAButton label={t("cta")} />
          </div>

          {/* Mobile toggle */}
          <button
            onClick={toggle}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-6 space-y-2">
          <NavLink href="/" label={t("home.label")} mobile onClick={close} />
          <NavLink href={t("services.href")} label={t("services.label")} mobile onClick={close} />
          <NavLink href={t("testimonials.href")} label={t("testimonials.label")} mobile onClick={close} />
          <NavLink href={t("about.href")} label={t("about.label")} mobile onClick={close} />
          <NavLink href={t("contact.href")} label={t("contact.label")} mobile onClick={close} />

          <div className="pt-4">
            <LocaleSwitcher mobile />
          </div>

          <div className="pt-2">
            <CTAButton mobile label={t("cta")} onClick={close} />
          </div>
        </div>
      )}
    </nav>
  );
}
