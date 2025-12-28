"use client";

import { useRouter, usePathname } from "next/navigation";
import { useTransition, memo, useState, useEffect } from "react";

const LocaleSwitcher = memo(() => {
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
    <div className="fixed top-6 right-6 z-40">
      <div className="relative flex items-center gap-1 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-full shadow-2xl p-1 border border-red-500/30 backdrop-blur-sm">
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-red-600/10 blur-xl"></div>
        
        <button
          onClick={() => changeLocale("es")}
          disabled={isPending || currentLocale === "es"}
          className={`relative px-4 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 text-xs uppercase tracking-wider ${
            currentLocale === "es"
              ? "bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white shadow-lg shadow-red-500/50 scale-105"
              : "text-gray-400 hover:text-white hover:bg-white/5"
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          <span className="text-lg drop-shadow-lg">🇲🇽</span>
          <span className="font-bold">ES</span>
          {currentLocale === "es" && (
            <div className="absolute inset-0 rounded-full bg-red-500/20 animate-pulse"></div>
          )}
        </button>

        <div className="w-px h-6 bg-gradient-to-b from-transparent via-red-500/50 to-transparent"></div>

        <button
          onClick={() => changeLocale("en")}
          disabled={isPending || currentLocale === "en"}
          className={`relative px-4 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 text-xs uppercase tracking-wider ${
            currentLocale === "en"
              ? "bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white shadow-lg shadow-red-500/50 scale-105"
              : "text-gray-400 hover:text-white hover:bg-white/5"
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          <span className="text-lg drop-shadow-lg">🇺🇸</span>
          <span className="font-bold">EN</span>
          {currentLocale === "en" && (
            <div className="absolute inset-0 rounded-full bg-red-500/20 animate-pulse"></div>
          )}
        </button>

        {isPending && (
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3">
            <div className="w-full h-full bg-red-500 rounded-full animate-ping"></div>
          </div>
        )}
      </div>
    </div>
  );
});

LocaleSwitcher.displayName = "LocaleSwitcher";
export default LocaleSwitcher;