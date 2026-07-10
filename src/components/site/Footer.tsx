import logo from "@/assets/logo.jpeg";
import { useBi } from "@/lib/i18n";
import { Facebook, Instagram, Youtube, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const bi = useBi();
  return (
    <footer className="mt-24 border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="h-14 w-14 rounded-full ring-2 ring-white/20" />
              <div>
                <div className="text-lg font-bold">
                  {bi("Champs Scouts Marocains", "جمعية الميادين الكشفية المغربية")}
                </div>
                <div className="text-xs text-background/60">
                  {bi("Moroccan Scout Fields Association", "جمعية تربوية وطنية")}
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-background/70">
              {bi(
                "Une organisation éducative œuvrant sous la bannière du mouvement scout national et mondial, engagée dans la formation d'une citoyenneté responsable et active.",
                "جمعية تربوية تعمل تحت لواء الحركة الكشفية الوطنية والعالمية، وتساهم في بناء مواطن صالح ومسؤول ومبادر.",
              )}
            </p>
            <div className="mt-5 flex gap-3">
                {[
                  { Icon: Facebook, href: "https://www.facebook.com/share/18ucsNra6i/", label: "Facebook" },
                  { Icon: Instagram, href: "https://www.instagram.com/?utm_source=pwa_homescreen&__pwa=1", label: "Instagram" },
                  { Icon: Youtube, href: "https://www.youtube.com/channel/UC0fGXvxaQh2HrzXdPr9_1-w", label: "YouTube" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/%D8%AC%D9%85%D8%B9%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D9%8A%D8%A7%D8%AF%D9%8A%D9%86-%D8%A7%D9%84%D9%83%D8%B4%D9%81%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8%D9%8A%D8%A9-6b0716420/", label: "LinkedIn" },
                ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-full border border-white/15 p-2 text-background/70 hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background">
              {bi("Navigation", "روابط")}
            </h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#about" className="hover:text-primary">{bi("L'Association", "الجمعية")}</a></li>
              <li><a href="#vision" className="hover:text-primary">{bi("Vision & Mission", "الرؤية والرسالة")}</a></li>
              <li><a href="#branches" className="hover:text-primary">{bi("Branches", "المراحل الكشفية")}</a></li>
              <li><a href="#activities" className="hover:text-primary">{bi("Activités", "الأنشطة")}</a></li>
              <li><a href="#membership" className="hover:text-primary">{bi("Adhésion", "الانخراط")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background">
              {bi("Contact", "اتصل بنا")}
            </h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> {bi("Royaume du Maroc", "المملكة المغربية")}</li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-primary" /> <a href="mailto:almayadineassociation@gmail.com" className="hover:text-primary">almayadineassociation@gmail.com</a></li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-primary" /> <a href="tel:+212607771336" dir="ltr" className="hover:text-primary">+212 607 771 336</a></li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-primary" /> <a href="tel:+212669102532" dir="ltr" className="hover:text-primary">+212 669 102 532</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-background/50 md:flex-row">
          <div>{bi("© 2026 Association des Champs Scouts Marocains. Tous droits réservés.", "© 2026 جمعية الميادين الكشفية المغربية. جميع الحقوق محفوظة.")}</div>
          <div>{bi("Éducation · Citoyenneté · Nature · Engagement", "تربية · مواطنة · طبيعة · التزام")}</div>
        </div>
      </div>
    </footer>
  );
}