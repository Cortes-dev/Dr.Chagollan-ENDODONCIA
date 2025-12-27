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
      <div className="flex items-center gap-0 bg-black rounded-full shadow-2xl p-1.5 border-2 border-red-600">
        <button
          onClick={() => changeLocale("es")}
          disabled={isPending || currentLocale === "es"}
          className={`px-5 py-2.5 rounded-full font-bold transition-all duration-300 flex items-center gap-2 text-sm uppercase tracking-wide ${
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
          className={`px-5 py-2.5 rounded-full font-bold transition-all duration-300 flex items-center gap-2 text-sm uppercase tracking-wide ${
            currentLocale === "en"
              ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg scale-105"
              : "text-white hover:bg-red-600/20 hover:text-red-400"
          } disabled:opacity-60 disabled:cursor-not-allowed`}
        >
          <span className="text-base">🇺🇸</span>
          <span>English</span>
        </button>
      </div>
    </div>
  );
});

LocaleSwitcher.displayName = "LocaleSwitcher";
export default LocaleSwitcher;
