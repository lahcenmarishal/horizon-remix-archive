import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Globe } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import { useI18n, useBi } from "@/lib/i18n";

const nav = [
  { fr: "Accueil", ar: "الرئيسية", href: "#top" },
  { fr: "L'Association", ar: "الجمعية", href: "#about" },
  { fr: "Vision & Mission", ar: "الرؤية والرسالة", href: "#vision" },
  { fr: "Branches", ar: "المراحل الكشفية", href: "#branches" },
  { fr: "Formations jeunes", ar: "تكوين الشباب", href: "#youth-trainings" },
  { fr: "Activités", ar: "الأنشطة", href: "#activities" },
  { fr: "Organisation", ar: "التنظيم", href: "#organization" },
  { fr: "Bureau exécutif", ar: "المكتب المسير", href: "#bureau" },
  { fr: "Adhésion", ar: "الانخراط", href: "#membership" },
  { fr: "Contact", ar: "اتصل بنا", href: "#contact" },
];

export function Header() {
  const { lang, setLang } = useI18n();
  const bi = useBi();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="flex w-full items-center gap-2 px-4 py-3 sm:px-6 lg:px-5">
        <Link to="/" className="me-auto flex shrink-0 items-center gap-2 min-[900px]:me-0">
          <img src={logo} alt="Moroccan Scout Fields Association" className="h-11 w-11 rounded-full ring-2 ring-primary/20" />
          <div className="hidden leading-tight 2xl:block">
            <div className="text-[13px] font-semibold text-foreground">
              {bi("Champs Scouts Marocains", "الميادين الكشفية المغربية")}
            </div>
            <div className="text-[11px] text-muted-foreground">
              {bi("Moroccan Scout Fields Association", "جمعية تربوية")}
            </div>
          </div>
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0 min-[900px]:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-md px-1 py-2 text-[10px] font-semibold text-foreground/80 transition-colors hover:bg-muted hover:text-foreground xl:px-1.5 xl:text-[11px] 2xl:px-2 2xl:text-[13px]"
            >
              {bi(item.fr, item.ar)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setLang(lang === "fr" ? "ar" : "fr")}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-1.5 text-xs font-semibold text-foreground/80 transition hover:border-primary hover:text-primary"
            aria-label="Toggle language"
          >
            <Globe className="h-3.5 w-3.5" />
            {lang === "fr" ? "AR" : "FR"}
          </button>
          <a
            href="#membership"
            className="hidden items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:brightness-110 2xl:inline-flex"
          >
            {bi("Rejoindre", "انضم إلينا")}
          </a>
          <button
            className="rounded-md p-2 text-foreground hover:bg-muted min-[900px]:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background min-[900px]:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            <div className="grid gap-1">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted"
                >
                  {bi(item.fr, item.ar)}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}