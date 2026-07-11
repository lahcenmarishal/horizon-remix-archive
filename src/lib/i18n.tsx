import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "fr" | "ar";

type Dict = Record<string, { fr: string; ar: string }>;

// Only used for chrome/nav strings. Content sections render bilingual blocks inline.
export const T: Dict = {
  brand_ar: { fr: "جمعية الميادين الكشفية المغربية", ar: "جمعية الميادين الكشفية المغربية" },
  brand_fr: { fr: "Association des Almayadine scouts marocaine", ar: "الجمعية المغربية للميادين الكشفية" },
  nav_home: { fr: "Accueil", ar: "الرئيسية" },
  nav_about: { fr: "L'Association", ar: "الجمعية" },
  nav_vision: { fr: "Vision & Mission", ar: "الرؤية والرسالة" },
  nav_values: { fr: "Valeurs", ar: "القيم" },
  nav_objectives: { fr: "Objectifs", ar: "الأهداف" },
  nav_branches: { fr: "Branches", ar: "المراحل الكشفية" },
  nav_activities: { fr: "Activités", ar: "الأنشطة" },
  nav_org: { fr: "Organisation", ar: "التنظيم" },
  nav_membership: { fr: "Adhésion", ar: "الانخراط" },
  nav_contact: { fr: "Contact", ar: "اتصل بنا" },
  cta_join: { fr: "Rejoindre l'association", ar: "انضم إلينا" },
  cta_discover: { fr: "Découvrir", ar: "اكتشف الجمعية" },
  lang_switch: { fr: "العربية", ar: "Français" },
  footer_rights: {
    fr: "© 2026 Association des Almayadine scouts marocaine. Tous droits réservés.",
    ar: "© 2026 جمعية الميادين الكشفية المغربية. جميع الحقوق محفوظة.",
  },
};

type Ctx = {
  lang: Lang;
  dir: "ltr" | "rtl";
  setLang: (l: Lang) => void;
  t: (key: keyof typeof T) => string;
};

const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang") as Lang | null;
      if (saved === "fr" || saved === "ar") setLangState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("lang", l); } catch {}
  };

  const value: Ctx = {
    lang,
    dir: lang === "ar" ? "rtl" : "ltr",
    setLang,
    t: (key) => T[key][lang],
  };

  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

// Helper: render bilingual pair (FR/AR) — picks according to current lang.
export function useBi() {
  const { lang } = useI18n();
  return (fr: string, ar: string) => (lang === "ar" ? ar : fr);
}
