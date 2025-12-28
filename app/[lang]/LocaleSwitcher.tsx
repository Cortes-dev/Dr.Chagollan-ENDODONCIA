"use client";

import { useRouter, usePathname } from "next/navigation";
import { memo, useTransition } from "react";

type Locale = "es" | "en";

const LocaleSwitcher = memo(() => {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const currentLocale = pathname.split("/")[1] as Locale;

  const changeLocale = (locale: Locale) => {
    if (locale === currentLocale) return;

    const segments = pathname.split("/");
    segments[1] = locale;

    startTransition(() => {
      router.push(segments.join("/"));
    });
  };

  const baseBtn =
    "relative flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300";

  const activeBtn =
    "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/40 scale-105";

  const inactiveBtn =
    "text-gray-400 hover:text-white hover:bg-white/10";

  return (
    <div className="fixed top-6 right-6 z-40">
      <div className="relative flex items-center bg-black/80 border border-red-500/20 rounded-full p-1 backdrop-blur-xl shadow-xl">
        {/* ES */}
        <button
          aria-label="Cambiar idioma a Español"
          disabled={isPending}
          onClick={() => changeLocale("es")}
          className={`${baseBtn} ${
            currentLocale === "es" ? activeBtn : inactiveBtn
          }`}
        >
          <span className="text-base">🇲🇽</span>
          ES
        </button>

        <span className="mx-1 h-5 w-px bg-red-500/30" />

        {/* EN */}
        <button
          aria-label="Change language to English"
          disabled={isPending}
          onClick={() => changeLocale("en")}
          className={`${baseBtn} ${
            currentLocale === "en" ? activeBtn : inactiveBtn
          }`}
        >
          <span className="text-base">🇺🇸</span>
          EN
        </button>

        {/* Loading indicator */}
        {isPending && (
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-red-500 animate-ping" />
        )}
      </div>
    </div>
  );
});

LocaleSwitcher.displayName = "LocaleSwitcher";
export default LocaleSwitcher;
