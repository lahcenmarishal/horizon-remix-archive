import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useBi, useI18n } from "@/lib/i18n";
import logo from "@/assets/logo.jpeg";
import hero from "@/assets/hero.jpg";
import camp from "@/assets/camp.jpg";
import nature from "@/assets/nature.jpg";
import community from "@/assets/community.jpg";
import uniforme from "@/assets/uniforme.jpg";
import association from "@/assets/association.jpg";
import commandant from "@/assets/commandant.jpg";
import formationsImg from "@/assets/formations.webp";
import environnementImg from "@/assets/environnement.webp";
import rencontreHebdoImg from "@/assets/rencontre_hebdomadaire.webp";
import actionsSocialesImg from "@/assets/actions_sociales.webp";
import {
  Compass, Target, Heart, Leaf, Users, Award, Tent, GraduationCap,
  HandHeart, Sparkles, Globe2, Flag, TreePine, Flame, ChevronDown,
  ShieldCheck, BookOpen, MapPin, Mail, Phone, ArrowRight, Star,
  Radio, Recycle, ChevronLeft, ChevronRight, Laptop, Route,
} from "lucide-react";
import { useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export default function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <TrustStrip />
      <About />
      <MotCommandant />
      <VisionMission />
      <Values />
      <Objectives />
      <Branches />
      <MinisterialTrainings />
      <YouthTrainings />
      <Uniforme />
      <Activities />
      <Organization />
      <BureauOffice />
      <Membership />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------------------------------------------------------------- HERO */
function Hero() {
  const bi = useBi();
  return (
    <section className="relative isolate min-h-[calc(100svh-69px)] overflow-hidden md:min-h-0">
      <img
        src={hero}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[63%_center] sm:object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-foreground/90 via-foreground/76 to-primary/62" />
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-5 px-4 py-20 sm:gap-8 sm:px-6 sm:py-24 lg:px-8 lg:py-28 xl:py-32">
        <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-white backdrop-blur sm:px-4 sm:text-xs">
          <Star className="h-3.5 w-3.5" /> {bi("Mouvement scout marocain", "الحركة الكشفية المغربية")}
        </span>
        <div className="flex items-center gap-4 sm:gap-5">
          <img
            src={logo}
            alt="Logo Moroccan Scout Fields Association"
            className="h-20 w-20 rounded-full ring-4 ring-white/40 shadow-2xl sm:h-24 sm:w-24 md:h-28 md:w-28"
          />
          <div className="hidden sm:block h-16 w-px bg-white/30" />
          <div className="hidden sm:flex flex-col gap-1 text-white/90">
            <span className="text-xs uppercase tracking-widest text-white/70">{bi("Depuis toujours", "منذ التأسيس")}</span>
            <span className="text-sm font-medium">{bi("Éduquer · Développement communautaire · S'engager", "تربية · تنمية مجتمعية · التزام")}</span>
          </div>
        </div>
        <h1 dir="rtl" className="w-full max-w-4xl break-words text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl lg:text-6xl xl:text-7xl">
          جمعية الميادين الكشفية المغربية
        </h1>
        <h2 className="max-w-3xl text-xl font-semibold text-white/90 md:text-2xl">
          {bi(
            "Association des Champs Scouts Marocains — Moroccan Scout Fields Association",
            "جمعية تربوية تعمل تحت لواء الحركة الكشفية الوطنية والعالمية",
          )}
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
          {bi(
            "Nous contribuons à l'éducation et au développement des jeunes en cultivant les valeurs de citoyenneté positive et de responsabilité, à travers la méthode scoute — apprendre par la pratique, la vie en petites équipes et l'immersion dans la nature.",
            "نساهم في تربية وتنمية الشباب، وتعزيز قيم المواطنة الإيجابية والمسؤولية، عبر الطريقة الكشفية القائمة على التعلم بالممارسة، ونظام السداسيات، وحياة الخلاء والطبيعة.",
          )}
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#membership"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition hover:brightness-110"
          >
            {bi("Rejoindre l'association", "انضم إلى الجمعية")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
          >
            {bi("Découvrir", "اكتشف الجمعية")} <ChevronDown className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- BUREAU OFFICE */
function BureauOffice() {
  const bi = useBi();
  const members = [
    {
      name_ar: "رشيد حمويميد",
      name_fr: "Rachid Hamouimid",
      role_ar: "قائد عام",
      role_fr: "Commandant Général",
      icon: Star,
      accent: "from-primary to-accent",
    },
    {
      name_ar: "ايمان نعماري",
      name_fr: "Imane Naamari",
      role_ar: "كاتب عام",
      role_fr: "Secrétaire Générale",
      icon: BookOpen,
      accent: "from-secondary to-primary",
    },
    {
      name_ar: "زينب مورو",
      name_fr: "Zineb Mouro",
      role_ar: "أمين المال",
      role_fr: "Trésorière",
      icon: ShieldCheck,
      accent: "from-emerald-500 to-teal-500",
    },
    {
      name_ar: "يوسف حمويميد",
      name_fr: "Youssef Hamouimid",
      role_ar: "مدير البرامج والتخطيط الاستراتيجي",
      role_fr: "Directeur des Programmes et de la Planification Stratégique",
      icon: Target,
      accent: "from-blue-500 to-indigo-500",
    },
    {
      name_ar: "عبد الرحيم بنقسو",
      name_fr: "Abderrahim Benqassou",
      role_ar: "مدير العلاقات العامة",
      role_fr: "Directeur des Relations Publiques",
      icon: HandHeart,
      accent: "from-amber-500 to-orange-500",
    },
    {
      name_ar: "مسيرة اليازيدي",
      name_fr: "Massira El Yazidi",
      role_ar: "مدير التدريب وتنمية القيادات وتدبير المخيمات",
      role_fr: "Directeur de la Formation, du Développement des Cadres et de la Gestion des Camps",
      icon: GraduationCap,
      accent: "from-rose-500 to-pink-500",
    },
    {
      name_ar: "زينب قاص",
      name_fr: "Zineb Kass",
      role_ar: "مدير التسويق والإعلام",
      role_fr: "Directrice du Marketing et de la Communication",
      icon: Radio,
      accent: "from-fuchsia-500 to-purple-500",
    },
  ];
  return (
    <section id="bureau" className="scroll-mt-24 bg-gradient-to-br from-muted/40 via-background to-primary/5 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={bi("Gouvernance", "الحوكمة")}
          title={bi(
            "Membres du Bureau exécutif de l'Association",
            "أعضاء المكتب المسير للجمعية",
          )}
          subtitle={bi(
            "L'équipe dirigeante qui pilote la stratégie éducative, administrative et communicationnelle de l'Association.",
            "الفريق المسيّر الذي يقود الاستراتيجية التربوية والإدارية والتواصلية للجمعية.",
          )}
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m) => (
            <article
              key={m.name_ar}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:shadow-xl"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${m.accent}`} />
              <div className="flex items-start gap-4">
                <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${m.accent} text-white shadow-md`}>
                  <m.icon className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-foreground">
                    {bi(m.name_fr, m.name_ar)}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {bi(m.role_fr, m.role_ar)}
                  </p>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Flag className="h-3.5 w-3.5 text-primary" />
                  {bi("Bureau exécutif", "المكتب المسير")}
                </span>
                <span>{bi("Mandat 2026", "ولاية 2026")}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ TRUST / STATS */
function TrustStrip() {
  const bi = useBi();
  const stats = [
    { icon: Users, value: "3", label: bi("Branches d'âge", "مراحل عمرية") },
    { icon: Flag, value: "12", label: bi("Régions du Royaume", "جهات المملكة") },
    { icon: Tent, value: "12", label: bi("Mois d'activités", "شهرًا من الأنشطة") },
    { icon: Award, value: "100%", label: bi("Éducation & citoyenneté", "تربية ومواطنة") },
  ];
  return (
    <section className="border-b border-border bg-muted/30">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:grid-cols-4 sm:px-6 lg:px-8">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-2xl font-bold leading-none text-foreground">{value}</div>
              <div className="mt-1 text-xs font-medium text-muted-foreground">{label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------- ABOUT */
function SectionTitle({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function About() {
  const bi = useBi();
  return (
    <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            {bi("L'Association", "الجمعية")}
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
            {bi(
              "Une organisation éducative au service de la jeunesse marocaine",
              "جمعية تربوية في خدمة الشباب المغربي",
            )}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              {bi(
                "L'Association des Champs Scouts Marocains est l'une des organisations éducatives du Royaume du Maroc, œuvrant sous la bannière du mouvement scout national et mondial.",
                "جمعية الميادين الكشفية المغربية هي إحدى المنظمات التربوية في المملكة المغربية، وتعمل تحت لواء الحركة الكشفية الوطنية والعالمية.",
              )}
            </p>
            <p>
              {bi(
                "Elle vise essentiellement à contribuer à l'éducation et au développement des jeunes, et à renforcer chez eux les valeurs de citoyenneté positive et de responsabilité.",
                "تهدف الجمعية بشكل أساسي إلى المساهمة في تربية وتنمية الشباب، وتعزيز قيم المواطنة الإيجابية والمسؤولية لديهم.",
              )}
            </p>
            <p>
              {bi(
                "L'Association est un partenaire civil qui contribue, aux côtés des institutions officielles et éducatives, à former une génération marocaine équilibrée alliant authenticité scoute et ouverture aux défis de notre époque.",
                "تُعد الجمعية شريكًا مدنيًا يساهم إلى جانب المؤسسات الرسمية والتعليمية في تنشئة جيل مغربي متوازن، يجمع بين الأصالة الكشفية والانفتاح على تحديات العصر.",
              )}
            </p>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { i: Sparkles, l: bi("Apprentissage par la pratique", "التعلم بالممارسة") },
              { i: Users, l: bi("Sixaines & petites équipes", "نظام السداسيات") },
              { i: TreePine, l: bi("Vie de plein air", "حياة الخلاء والطبيعة") },
            ].map(({ i: Icon, l }) => (
              <div key={l} className="rounded-2xl border border-border bg-card p-4 text-center">
                <Icon className="mx-auto h-6 w-6 text-primary" />
                <div className="mt-2 text-xs font-semibold text-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5">
            <img src={association} alt="" width={1280} height={960} className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-6 -end-6 hidden max-w-xs rounded-2xl border border-border bg-card p-5 shadow-xl md:block">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="h-12 w-12 rounded-full ring-2 ring-primary/20" />
              <div>
                <div className="text-sm font-bold text-foreground">{bi("Champs Scouts marocains", "الميادين الكشفية المغربية")}</div>
                <div className="text-xs text-muted-foreground">{bi("Authenticité & ouverture", "أصالة وانفتاح")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- MOT COMMANDANT */
function MotCommandant() {
  const bi = useBi();
  return (
    <section id="mot-commandant" className="scroll-mt-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={bi("Message officiel", "كلمة رسمية")}
          title={bi(
            "Mot du Commandant Général — Ouverture de la saison éducative 2026",
            "كلمة السيد القائد العام بمناسبة افتتاح الموسم التربوي 2026",
          )}
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:items-center">
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5">
              <img
                src={commandant}
                alt={bi(
                  "Le Commandant Général de l'Association des Champs Scouts Marocains",
                  "القائد العام لجمعية الميادين الكشفية المغربية",
                )}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-5 text-white">
                <div className="text-xs font-semibold uppercase tracking-widest opacity-80">
                  {bi("Le Commandant Général", "القائد العام")}
                </div>
                <div className="text-sm font-bold">
                  {bi("Rachid Hamouimid", "رشيد حمويميد")}
                </div>
                <div className="text-xs opacity-80">
                  {bi("Association des Champs Scouts Marocains", "جمعية الميادين الكشفية المغربية")}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <article className="rounded-3xl border border-border bg-card p-8 shadow-sm md:p-10">
              <div className="text-6xl leading-none text-primary/40">“</div>
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  {bi(
                    "Chères sœurs, chers frères scouts, chers parents et partenaires,",
                    "أخواتي وإخواني الكشافة، أولياء الأمور والشركاء الكرام،",
                  )}
                </p>
                <p>
                  {bi(
                    "C'est avec une immense fierté et une profonde émotion que je déclare officiellement ouverte la saison éducative scoute 2026 de notre Association des Champs Scouts Marocains. Cette nouvelle année est une occasion renouvelée de servir notre patrie, de bâtir des générations engagées et de porter haut les valeurs éternelles du scoutisme.",
                    "بكلّ فخر واعتزاز، وبعميق الامتنان، أُعلن رسميًا افتتاح الموسم التربوي الكشفي 2026 لجمعيتنا، جمعية الميادين الكشفية المغربية. إن هذا الموسم الجديد فرصة متجددة لخدمة الوطن، وبناء أجيال ملتزمة، ورفع راية القيم الكشفية الخالدة.",
                  )}
                </p>
                <p>
                  {bi(
                    "Je tiens à saluer l'engagement de nos cheftaines et chefs, la persévérance de nos jeunes membres, ainsi que la confiance des familles qui nous accompagnent au quotidien. Ensemble, sous la bannière du Royaume du Maroc, nous poursuivrons notre mission éducative fondée sur la citoyenneté positive, la responsabilité et l'amour de la nature.",
                    "أتوجه بتحية التقدير إلى قائداتنا وقادتنا على تفانيهم، وإلى منخرطينا الشباب على مثابرتهم، وإلى الأسر الكريمة على ثقتها الدائمة. معًا، تحت راية المملكة المغربية، نواصل رسالتنا التربوية القائمة على المواطنة الإيجابية والمسؤولية وحب الطبيعة.",
                  )}
                </p>
                <p>
                  {bi(
                    "Que cette saison soit riche d'apprentissages, d'aventures et de fraternité. Toujours prêts à servir !",
                    "فليكن هذا الموسم زاخرًا بالتعلّم والمغامرة والأخوة. كونوا مستعدين دائمًا للخدمة!",
                  )}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
                <div className="h-1 w-12 bg-primary" />
                <div>
                  <div className="text-sm font-bold text-foreground">
                    {bi("Rachid Hamouimid", "رشيد حمويميد")}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {bi("Commandant Général", "القائد العام")}
                  </div>
                  <div className="text-[10px] text-muted-foreground/70">
                    {bi(
                      "Association des Champs Scouts Marocains",
                      "جمعية الميادين الكشفية المغربية",
                    )}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- VISION & MISSION */
function VisionMission() {
  const bi = useBi();
  const items = [
    {
      icon: Compass,
      color: "text-primary",
      title: bi("Vision", "الرؤية"),
      body: bi(
        "L'Association adopte une vision scoute traditionnelle et actualisée qui aspire à bâtir un citoyen vertueux, responsable et entreprenant.",
        "تتبنى الجمعية الرؤية الكشفية التقليدية المحدثة، والتي تسعى إلى بناء مواطن صالح ومسؤول ومبادر.",
      ),
    },
    {
      icon: Target,
      color: "text-secondary",
      title: bi("Mission", "الرسالة"),
      body: bi(
        "Permettre aux adolescents et aux jeunes de développer leurs capacités physiques, mentales, sociales et spirituelles pour devenir des acteurs engagés dans leurs communautés locales et nationales.",
        "تمكين الفتية والشباب من تطوير قدراتهم البدنية، العقلية، الاجتماعية، والروحية ليكونوا عناصر فاعلة في مجتمعاتهم المحلية والوطنية.",
      ),
    },
    {
      icon: BookOpen,
      color: "text-accent",
      title: bi("Méthode", "الأسلوب"),
      body: bi(
        "L'Association s'appuie sur la méthode scoute : l'apprentissage par la pratique, le système des petites équipes (sixaines), et la vie de plein air en pleine nature.",
        "تعتمد الجمعية على الطريقة الكشفية: التعلم بالممارسة، نظام المجموعات الصغيرة أو السداسيات، وحياة الخلاء والطبيعة.",
      ),
    },
  ];
  return (
    <section id="vision" className="scroll-mt-24 bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={bi("Notre identité", "هويتنا")}
          title={bi("Vision, Mission et Méthode éducative", "الرؤية والرسالة والأسلوب التربوي")}
          subtitle={bi(
            "Trois piliers indissociables qui guident notre action éducative auprès des jeunes marocains.",
            "ثلاث ركائز متكاملة توجه عملنا التربوي مع الشباب المغربي.",
          )}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, color, title, body }) => (
            <div key={title} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-muted ${color}`}>
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              <div className="absolute inset-x-0 bottom-0 h-1 scale-x-0 bg-gradient-to-r from-primary via-secondary to-accent transition group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- VALUES */
/* --------------------------------------------------------------- UNIFORME */
function Uniforme() {
  const bi = useBi();
  const rules = [
    {
      i: ShieldCheck,
      t: bi("Symbole d'appartenance", "رمز الانتماء"),
      b: bi(
        "L'uniforme incarne l'appartenance à la famille scoute et représente l'identité de l'association devant tous les publics.",
        "الزي الكشفي يجسّد الانتماء إلى الأسرة الكشفية ويمثّل هوية الجمعية أمام الجميع.",
      ),
    },
    {
      i: Sparkles,
      t: bi("Propreté et tenue soignée", "النظافة وحسن الهندام"),
      b: bi(
        "Chaque membre est tenu de porter un uniforme propre, repassé et complet lors de toutes les activités officielles.",
        "يلتزم كل منخرط بارتداء زيّ نظيف ومكوي وكامل خلال جميع الأنشطة الرسمية.",
      ),
    },
    {
      i: Award,
      t: bi("Insignes et foulard", "الشارات والمنديل"),
      b: bi(
        "Les insignes, badges et le foulard doivent être portés à leur place officielle, dans le respect du protocole scout.",
        "توضع الشارات والأوسمة والمنديل في أماكنها الرسمية وفق البروتوكول الكشفي المعتمد.",
      ),
    },
    {
      i: HandHeart,
      t: bi("Respect et discipline", "الاحترام والانضباط"),
      b: bi(
        "Porter l'uniforme engage à un comportement exemplaire : respect des chefs, des camarades et du public.",
        "ارتداء الزي يستوجب سلوكًا نموذجيًا: احترام القادة والرفاق والعموم.",
      ),
    },
  ];
  return (
    <section id="uniforme" className="scroll-mt-24 bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={bi("Notre uniforme", "الزي الكشفي")}
          title={bi(
            "Le respect de l'uniforme de l'association",
            "احترام الزي الرسمي للجمعية",
          )}
          subtitle={bi(
            "L'uniforme scout est bien plus qu'un vêtement : c'est le signe visible de notre engagement, de notre discipline et de notre appartenance à la grande famille des Champs Scouts Marocains.",
            "الزي الكشفي أكثر من مجرد لباس، فهو الرمز الظاهر لالتزامنا وانضباطنا وانتمائنا إلى أسرة الميادين الكشفية المغربية.",
          )}
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5">
            <img
              src={uniforme}
              alt={bi("Membres en uniforme scout marocain", "منخرطون بالزي الكشفي المغربي")}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {rules.map(({ i: Icon, t, b }) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-bold text-foreground">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- VALUES */
function Values() {
  const bi = useBi();
  const values = [
    { i: Heart, t: bi("Tolérance", "التسامح") },
    { i: HandHeart, t: bi("Coopération", "التعاون") },
    { i: ShieldCheck, t: bi("Respect d'autrui", "احترام الآخر") },
    { i: Flag, t: bi("Citoyenneté", "المواطنة") },
    { i: Users, t: bi("Solidarité", "التضامن") },
    { i: Leaf, t: bi("Écologie", "الوعي البيئي") },
    { i: Sparkles, t: bi("Éthique & spiritualité", "قيم أخلاقية وروحية") },
    { i: Globe2, t: bi("Ouverture universelle", "الانفتاح على الآخر") },
  ];
  return (
    <section id="values" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow={bi("Nos valeurs", "قيمنا")}
        title={bi(
          "Une éducation ancrée dans des valeurs éthiques, sociales et civiques",
          "التربية على القيم الاخلاقية و المجتمعية و المواطنة",
        )}
        subtitle={bi(
          "Nous consolidons chez nos membres un socle de valeurs qui les préparent à devenir des citoyens responsables et solidaires.",
          "نرسّخ لدى منخرطينا منظومة قيم تُعدّهم ليكونوا مواطنين مسؤولين ومتضامنين.",
        )}
      />
      <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
        {values.map(({ i: Icon, t }) => (
          <div key={t} className="group rounded-2xl border border-border bg-card p-6 text-center transition hover:border-primary hover:shadow-md">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary/15 via-secondary/15 to-accent/15 text-primary transition group-hover:scale-110">
              <Icon className="h-6 w-6" />
            </div>
            <div className="mt-4 text-sm font-semibold text-foreground">{t}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- OBJECTIVES */
type ObjSection = { heading_fr: string; heading_ar: string; body_fr: string; body_ar: string };
type ObjPage = {
  icon: typeof Users;
  tone: string;
  accent: string;
  soft: string;
  title_fr: string;
  title_ar: string;
  lead_fr: string;
  lead_ar: string;
  intro_fr: string;
  intro_ar: string;
  sections: ObjSection[];
  quote_fr: string;
  quote_ar: string;
  stats: { value: string; label_fr: string; label_ar: string }[];
};

function Objectives() {
  const bi = useBi();
  const { lang } = useI18n();
  const isAr = lang === "ar";

  const pages: ObjPage[] = [
    {
      icon: Users,
      tone: "bg-emerald-50 text-emerald-700 ring-emerald-200",
      accent: "bg-emerald-600",
      soft: "bg-emerald-50/60",
      title_fr: "Développer le leadership",
      title_ar: "تنمية القيادة",
      lead_fr:
        "Former des jeunes leaders capables de gérer des projets, d'animer des groupes locaux et de porter des initiatives citoyennes durables.",
      lead_ar:
        "إعداد قادة شباب قادرين على تدبير المشاريع، وتسيير الفروع المحلية، وحمل مبادرات مواطنة مستدامة.",
      intro_fr:
        "Le leadership scout ne se décrète pas, il se vit. À travers une pédagogie de l'engagement, l'Association accompagne chaque cheftaine et chaque chef pour qu'il devienne un référent inspirant dans son groupe local, sa région et sa communauté.",
      intro_ar:
        "القيادة الكشفية سلوك يُعاش، لا شعار يُرفع. عبر بيداغوجيا الالتزام، تواكب الجمعية كل قائدة وكل قائد ليصبح مرجعًا مُلهمًا داخل فرعه المحلي وجهته ومجتمعه.",
      sections: [
        {
          heading_fr: "Un parcours de formation gradué",
          heading_ar: "مسار تكويني متدرج",
          body_fr:
            "Les cadres suivent un cursus complet qui s'articule autour de six étapes successives : 1) Formation préparatoire scoute (Iʼdadi), 2) Formation de base scoute (Assassi), 3) Badge de Bois bilatéral (Chariguia Khachabiya Thounaïya), 4) Formation spécialisée et fonctionnelle, 5) Formation d'assistant chef de formation, 6) Formation de chef de formation. Chaque étape mêle théorie, ateliers de terrain et évaluation par les pairs.",
          body_ar:
            "يجتاز الأطر مسارًا متكاملًا يتمحور حول ست محطات متتالية: 1) التدريب الإعدادي الكشفي، 2) التدريب الأساسي الكشفي، 3) تدريب الشارة الخشبية الثنائية، 4) التدريب التخصصي والوظيفي، 5) تدريب مساعد قائد التدريب، 6) تدريب قائد التدريب. تجمع كل مرحلة بين النظرية والورشات الميدانية والتقييم من طرف الأقران.",
        },
        {
          heading_fr: "Ateliers de gestion de projet",
          heading_ar: "ورشات تدبير المشاريع",
          body_fr:
            "Les jeunes chefs apprennent à concevoir, planifier et évaluer un projet : cahier des charges, budget, calendrier, communication et bilan. Cette culture projet essaime dans les activités locales et les camps régionaux.",
          body_ar:
            "يتعلم القادة الشباب تصور المشاريع وتخطيطها وتقييمها: دفتر التحملات، الميزانية، الجدولة الزمنية، التواصل، وتقرير الحصيلة. تنتشر ثقافة المشروع هذه في الأنشطة المحلية والمخيمات الجهوية.",
        },
        {
          heading_fr: "Tutorat régional & mentorat",
          heading_ar: "التأطير الجهوي والمرافقة",
          body_fr:
            "Chaque nouveau chef est accompagné par un mentor expérimenté qui l'aide à trouver son style de leadership, à gérer les conflits, à animer un cercle et à conduire une veillée dans le respect de la méthode scoute.",
          body_ar:
            "يحظى كل قائد جديد بمواكبة قائد متمرس يساعده على اكتشاف أسلوبه القيادي، وتدبير النزاعات، وتنشيط الحلقات، وقيادة الأمسيات الكشفية وفق الطريقة الكشفية.",
        },
      ],
      quote_fr: "« Un chef est d'abord un serviteur : il éclaire le chemin avant de l'emprunter. »",
      quote_ar: "«القائد خادم قبل كل شيء: يُنير الطريق قبل أن يسلكه.»",
      stats: [
        { value: "6", label_fr: "étapes de formation", label_ar: "محطات تكوينية" },
        { value: "12", label_fr: "régions couvertes", label_ar: "جهة مغطاة" },
        { value: "100%", label_fr: "chefs formés", label_ar: "من القادة مؤطرون" },
      ],
    },
    {
      icon: Flag,
      tone: "bg-rose-50 text-rose-700 ring-rose-200",
      accent: "bg-rose-600",
      soft: "bg-rose-50/60",
      title_fr: "Citoyenneté & solidarité",
      title_ar: "المواطنة والتضامن",
      lead_fr:
        "Enraciner l'appartenance à la patrie et contribuer aux initiatives solidaires : campagnes de dons, soutien aux publics vulnérables, sensibilisation sanitaire.",
      lead_ar:
        "غرس قيم الانتماء للوطن والمساهمة في المبادرات التضامنية: حملات التبرع، ودعم الفئات الهشة، والتوعية الصحية.",
      intro_fr:
        "La citoyenneté positive est au cœur de la promesse scoute. Elle se traduit par des gestes concrets : aider un voisin, servir sa ville, protéger un plus fragile. Le scout marocain agit avec fierté sous le drapeau du Royaume.",
      intro_ar:
        "المواطنة الإيجابية جوهر الوعد الكشفي. تتجسد في أفعال ملموسة: مساعدة الجار، وخدمة المدينة، وحماية الأضعف. الكشاف المغربي يعمل بفخر تحت راية المملكة.",
      sections: [
        {
          heading_fr: "Campagnes solidaires nationales",
          heading_ar: "حملات تضامنية وطنية",
          body_fr:
            "Don du sang, distribution de fournitures scolaires, collectes de vêtements d'hiver : nos sections organisent chaque année des campagnes coordonnées à l'échelle du Royaume, en partenariat avec les collectivités et les hôpitaux.",
          body_ar:
            "التبرع بالدم، توزيع اللوازم المدرسية، جمع الملابس الشتوية: تُنظم فروعنا سنويًا حملات منسقة على مستوى المملكة بشراكة مع الجماعات الترابية والمستشفيات.",
        },
        {
          heading_fr: "Caravanes vers les zones enclavées",
          heading_ar: "قوافل نحو المناطق النائية",
          body_fr:
            "Chaque hiver, des caravanes scoutes rejoignent les villages de montagne pour distribuer couvertures, denrées et matériel scolaire, dans un esprit de fraternité nationale et de dignité.",
          body_ar:
            "كل شتاء، تنطلق قوافل كشفية نحو القرى الجبلية لتوزيع الأغطية والمواد الغذائية واللوازم المدرسية، في روح من الأخوة الوطنية وصون الكرامة.",
        },
        {
          heading_fr: "Éducation à la citoyenneté",
          heading_ar: "التربية على المواطنة",
          body_fr:
            "Les jeunes découvrent leurs droits et devoirs, les symboles de la nation, l'histoire du Royaume et le sens de l'engagement civique à travers des veillées, débats et jeux de rôle.",
          body_ar:
            "يكتشف الشباب حقوقهم وواجباتهم، رموز الأمة، وتاريخ المملكة، ومعنى الالتزام المدني عبر الأمسيات والنقاشات وألعاب الأدوار.",
        },
      ],
      quote_fr: "« Servir sans attendre en retour, c'est déjà être libre. »",
      quote_ar: "«الخدمة دون انتظار مقابل هي أولى درجات الحرية.»",
      stats: [
        { value: "50+", label_fr: "actions solidaires / an", label_ar: "عمل تضامني/سنة" },
        { value: "1000+", label_fr: "bénéficiaires directs", label_ar: "مستفيد مباشر" },
        { value: "12", label_fr: "régions mobilisées", label_ar: "جهة مُعبأة" },
      ],
    },
    {
      icon: Leaf,
      tone: "bg-lime-50 text-lime-700 ring-lime-200",
      accent: "bg-lime-600",
      soft: "bg-lime-50/60",
      title_fr: "Préserver l'environnement",
      title_ar: "الحفاظ على البيئة",
      lead_fr:
        "Ancrer une conscience écologique par des camps thématiques, du reboisement participatif et des campagnes de propreté.",
      lead_ar:
        "ترسيخ الوعي البيئي من خلال المخيمات الموضوعاتية وحملات التشجير التشاركية والنظافة.",
      intro_fr:
        "La nature est notre première salle de classe. Les scouts marocains apprennent à observer, respecter et protéger les écosystèmes du Royaume, des forêts de cèdres à l'Atlas jusqu'aux littoraux atlantique et méditerranéen.",
      intro_ar:
        "الطبيعة هي فصلنا الدراسي الأول. يتعلم الكشافة المغاربة ملاحظة النظم البيئية للمملكة واحترامها وحمايتها، من غابات الأرز في الأطلس إلى السواحل الأطلسية والمتوسطية.",
      sections: [
        {
          heading_fr: "Camps écologiques thématiques",
          heading_ar: "مخيمات بيئية موضوعاتية",
          body_fr:
            "Des camps sont dédiés à l'eau, à la forêt ou au littoral. Les scouts y mènent des observations naturalistes, des inventaires de biodiversité et des actions de nettoyage encadrées par des experts.",
          body_ar:
            "تُخصص مخيمات للماء أو الغابة أو الساحل. يقوم الكشافة خلالها بملاحظات طبيعية وجرد التنوع البيولوجي وأنشطة نظافة يؤطرها خبراء.",
        },
        {
          heading_fr: "Reboisement participatif",
          heading_ar: "تشجير تشاركي",
          body_fr:
            "En partenariat avec les Eaux et Forêts et les collectivités, les fédérations plantent chaque saison des essences locales adaptées, avec un suivi de croissance sur plusieurs années.",
          body_ar:
            "بشراكة مع المياه والغابات والجماعات الترابية، تغرس الفروع كل موسم أصنافًا محلية ملائمة، مع تتبع نموها على مدى سنوات.",
        },
        {
          heading_fr: "Éducation aux gestes verts",
          heading_ar: "التربية على السلوكيات الخضراء",
          body_fr:
            "Tri des déchets, économie de l'eau, alimentation responsable, mobilité douce : les scouts adoptent et diffusent des gestes simples dans leurs familles et leurs écoles.",
          body_ar:
            "فرز النفايات، اقتصاد الماء، الأكل المسؤول، التنقل النظيف: يتبنى الكشافة سلوكيات بسيطة وينشرونها في أسرهم ومدارسهم.",
        },
      ],
      quote_fr: "« Laisse le lieu meilleur que tu ne l'as trouvé. » — Baden-Powell",
      quote_ar: "«اترك المكان أفضل مما وجدته.» — بادن باول",
      stats: [
        { value: "5000+", label_fr: "arbres plantés", label_ar: "شجرة مغروسة" },
        { value: "30+", label_fr: "camps écologiques", label_ar: "مخيم بيئي" },
        { value: "12", label_fr: "sites protégés visités", label_ar: "موقع محمي مُزار" },
      ],
    },
    {
      icon: Heart,
      tone: "bg-amber-50 text-amber-700 ring-amber-200",
      accent: "bg-amber-500",
      soft: "bg-amber-50/60",
      title_fr: "Éducation par les valeurs",
      title_ar: "التربية على القيم",
      lead_fr:
        "Renforcer les valeurs éthiques, islamiques et universelles : tolérance, coopération, respect d'autrui, honnêteté et courage.",
      lead_ar:
        "تعزيز القيم الأخلاقية والإسلامية والكونية: التسامح، والتعاون، واحترام الآخر، والصدق، والشجاعة.",
      intro_fr:
        "La méthode scoute est une école de caractère. Elle façonne des jeunes debout, capables de dire la vérité, de tenir parole, de servir autrui et de puiser dans leur héritage spirituel une source de sérénité et d'ouverture.",
      intro_ar:
        "الطريقة الكشفية مدرسة لبناء الشخصية. تُشكّل شبابًا أشدّاء يقولون الحقيقة ويحفظون العهد ويخدمون الآخرين، ويستمدون من موروثهم الروحي طمأنينة وانفتاحًا.",
      sections: [
        {
          heading_fr: "Loi et Promesse scoutes",
          heading_ar: "القانون والوعد الكشفيان",
          body_fr:
            "Chaque scout s'engage librement à respecter la Loi scoute : honneur, loyauté, entraide, courtoisie, protection de la nature, discipline et joie. La Promesse est un moment fondateur de la vie scoute.",
          body_ar:
            "يلتزم كل كشاف بحرية بقانون الكشاف: الشرف، الوفاء، النجدة، اللباقة، حماية الطبيعة، الانضباط، والفرح. الوعد لحظة تأسيسية في الحياة الكشفية.",
        },
        {
          heading_fr: "Veillées et cercles de dialogue",
          heading_ar: "أمسيات وحلقات حوار",
          body_fr:
            "Autour du feu, les jeunes échangent sur des dilemmes moraux, la fraternité, la responsabilité et le vivre-ensemble. Le silence de la nuit rend la parole plus vraie.",
          body_ar:
            "حول النار، يتبادل الشباب النقاش حول المعضلات الأخلاقية، والأخوة، والمسؤولية، والعيش المشترك. صمت الليل يجعل الكلام أصدق.",
        },
        {
          heading_fr: "Patrimoine spirituel & culturel",
          heading_ar: "الموروث الروحي والثقافي",
          body_fr:
            "Nos programmes valorisent l'islam de la juste voie, la culture marocaine plurielle (amazighe, arabe, hassanie, andalouse) et l'ouverture aux autres cultures dans le respect et la curiosité.",
          body_ar:
            "تُثمّن برامجنا الإسلام الوسطي، والثقافة المغربية المتعددة (الأمازيغية، العربية، الحسّانية، الأندلسية)، والانفتاح على الثقافات الأخرى في احترام وفضول.",
        },
      ],
      quote_fr: "« La valeur d'un homme se mesure à ce qu'il fait quand personne ne le regarde. »",
      quote_ar: "«قيمة الإنسان تُقاس بما يفعله حين لا يراه أحد.»",
      stats: [
        { value: "10", label_fr: "articles de la Loi scoute", label_ar: "بنود قانون الكشاف" },
        { value: "3", label_fr: "engagements de la Promesse", label_ar: "التزامات الوعد" },
        { value: "∞", label_fr: "moments partagés", label_ar: "لحظات مشتركة" },
      ],
    },
    {
      icon: Recycle,
      tone: "bg-teal-50 text-teal-700 ring-teal-200",
      accent: "bg-teal-600",
      soft: "bg-teal-50/60",
      title_fr: "Développement durable",
      title_ar: "التنمية المستدامة",
      lead_fr:
        "Intégrer les Objectifs de Développement Durable (ODD) de l'ONU dans nos parcours éducatifs et nos actions de terrain.",
      lead_ar:
        "إدماج أهداف الأمم المتحدة للتنمية المستدامة في الحقائب التربوية والأنشطة الميدانية للجمعية.",
      intro_fr:
        "L'Association considère le scoutisme comme un levier concret de développement communautaire. Nos programmes préparent des jeunes conscients des grands enjeux planétaires et capables d'inventer des solutions locales pour le Maroc.",
      intro_ar:
        "تعتبر الجمعية العمل الكشفي رافعة أساسية للتنمية المجتمعية. تُعد برامجنا شبابًا واعين بالتحديات الكبرى للكوكب وقادرين على ابتكار حلول محلية للمغرب.",
      sections: [
        {
          heading_fr: "Modules éducatifs ODD",
          heading_ar: "وحدات تربوية حول SDGs",
          body_fr:
            "Des modules dédiés à l'eau propre (ODD 6), à la lutte contre le changement climatique (ODD 13) et à la protection de la biodiversité (ODD 15) sont intégrés dans les progressions des trois branches.",
          body_ar:
            "تُدمج وحدات مخصصة لنظافة المياه (SDG 6)، ومكافحة التغير المناخي (SDG 13)، وحماية التنوع البيولوجي (SDG 15) في المسارات التربوية للمراحل الثلاث.",
        },
        {
          heading_fr: "Insertion des jeunes & compétences",
          heading_ar: "إدماج الشباب وتطوير المهارات",
          body_fr:
            "Programmes destinés à la « Gen Z » : entrepreneuriat social, littératie numérique, leadership agile. Objectif : réduire le décrochage scolaire et préparer l'accès au marché du travail.",
          body_ar:
            "برامج موجهة لـ«جيل زد»: الريادة الاجتماعية، والتمكين الرقمي، والقيادة المرنة. الهدف: الحد من الهدر المدرسي وتأهيل الشباب لولوج سوق الشغل.",
        },
        {
          heading_fr: "Innovation sociale & partenariats",
          heading_ar: "الابتكار الاجتماعي والشراكات",
          body_fr:
            "Concours annuel de solutions locales aux défis environnementaux, en partenariat avec institutions publiques, universités et ONG. Impact mesuré et publié dans le rapport annuel.",
          body_ar:
            "مسابقة سنوية لحلول محلية للتحديات البيئية بشراكة مع المؤسسات العمومية والجامعات والمنظمات غير الحكومية. الأثر يُقاس ويُنشر في التقرير السنوي.",
        },
      ],
      quote_fr: "« Penser globalement, agir localement. »",
      quote_ar: "«تفكير عالمي وعمل محلي.»",
      stats: [
        { value: "17", label_fr: "ODD référencés", label_ar: "من أهداف SDGs" },
        { value: "3", label_fr: "ODD prioritaires", label_ar: "أهداف ذات أولوية" },
        { value: "20+", label_fr: "partenaires", label_ar: "شريك" },
      ],
    },
    {
      icon: Radio,
      tone: "bg-sky-50 text-sky-700 ring-sky-200",
      accent: "bg-sky-600",
      soft: "bg-sky-50/60",
      title_fr: "Tente Radio du Scout Sans Fil",
      title_ar: "خيمة راديو الكشاف اللاسلكي",
      lead_fr:
        "Un espace pédagogique dédié à la radio amateur et aux communications d'urgence dans nos camps régionaux et nationaux.",
      lead_ar:
        "فضاء تربوي مخصص للراديو الهواة والاتصالات في حالات الطوارئ داخل المخيمات الجهوية والوطنية.",
      intro_fr:
        "Héritière d'une longue tradition scoute mondiale (JOTA — Jamboree On The Air), la Tente Radio ouvre aux jeunes le monde des ondes : ils apprennent la science de la transmission et participent à des liaisons avec des scouts du monde entier.",
      intro_ar:
        "امتدادًا لتقليد كشفي عالمي عريق (JOTA — الجامبوري على الهواء)، تفتح خيمة الراديو للشباب عالم الموجات: يتعلمون علم الإرسال ويشاركون في اتصالات مع كشافة من مختلف أنحاء العالم.",
      sections: [
        {
          heading_fr: "Initiation aux ondes",
          heading_ar: "تلقين علم الموجات",
          body_fr:
            "Notions de propagation HF/VHF/UHF, lecture d'un indicatif d'appel, alphabet phonétique international, protocoles de courtoisie et code Q : les scouts découvrent un métier de précision.",
          body_ar:
            "مفاهيم انتشار HF/VHF/UHF، قراءة نداء الاتصال، الأبجدية الصوتية الدولية، بروتوكولات المجاملة، ورموز Q: يكتشف الكشافة حرفة دقيقة.",
        },
        {
          heading_fr: "Ateliers d'antennes",
          heading_ar: "ورشات الهوائيات",
          body_fr:
            "Montage d'antennes dipôles, verticales et boucles, mesures d'ondes stationnaires, essais de liaisons entre sous-camps. La théorie prend chair sur le mât et les câbles.",
          body_ar:
            "تركيب هوائيات ثنائية القطب وعمودية وحلقية، وقياس الموجات الواقفة، وتجارب الاتصال بين المخيمات الفرعية. تتجسّد النظرية على الصاري والأسلاك.",
        },
        {
          heading_fr: "Communications d'urgence",
          heading_ar: "الاتصالات في حالات الطوارئ",
          body_fr:
            "En cas de catastrophe, la radio amateur reste opérationnelle quand les réseaux tombent. Nos scouts s'entraînent à appuyer la Protection civile et le Croissant-Rouge marocain.",
          body_ar:
            "في حالات الكوارث، تبقى شبكة الراديو الهواة صامدة حين تنقطع الشبكات الأخرى. يتدرب كشافتنا على دعم الوقاية المدنية والهلال الأحمر المغربي.",
        },
      ],
      quote_fr: "« Toujours prêts — même quand plus rien ne fonctionne. »",
      quote_ar: "«مستعدون دائمًا — حتى حين يتعطل كل شيء.»",
      stats: [
        { value: "24/7", label_fr: "veille radio en camp", label_ar: "استماع دائم في المخيم" },
        { value: "3", label_fr: "bandes exploitées", label_ar: "نطاقات مستعملة" },
        { value: "∞", label_fr: "contacts internationaux", label_ar: "اتصالات دولية" },
      ],
    },
    {
      icon: ShieldCheck,
      tone: "bg-indigo-50 text-indigo-700 ring-indigo-200",
      accent: "bg-indigo-600",
      soft: "bg-indigo-50/60",
      title_fr: "Protection contre le préjudice",
      title_ar: "الحماية من الأذى",
      lead_fr:
        "Politique officielle 016/2026 — Garantir un environnement éducatif sûr, exempt de toute forme d'exploitation, d'abus ou de négligence.",
      lead_ar:
        "سياسة رسمية 016/2026 — ضمان بيئة تربوية آمنة وخالية من أي شكل من أشكال الاستغلال أو الإساءة أو الإهمال.",
      intro_fr:
        "L'Association des Champs Scouts Marocains adopte une politique stricte de protection : mesures préventives, mécanismes de signalement confidentiels, sanctions immédiates et audits réguliers. Chaque enfant et chaque jeune a droit à un espace scout sûr.",
      intro_ar:
        "تعتمد جمعية الميادين الكشفية المغربية سياسة صارمة للحماية: إجراءات وقائية، وآليات تبليغ سرية، وعقوبات فورية، وتدقيقات منتظمة. لكل طفل وكل شاب الحق في فضاء كشفي آمن.",
      sections: [
        {
          heading_fr: "1 — Procédures préventives strictes",
          heading_ar: "1 — إجراءات وقائية صارمة",
          body_fr:
            "Sélection rigoureuse : casier judiciaire vierge exigé, enquête sur le parcours éducatif. Signature annuelle obligatoire du code de conduite éthique. Formation obligatoire « Protection contre le préjudice » (modules préparatoire, badge et bois) avant tout encadrement direct d'enfants.",
          body_ar:
            "انتقاء دقيق: تقديم شهادة السجل العدلي إلزامي، وبحث السيرة التربوية. التوقيع السنوي الإلزامي على مدونة السلوك الأخلاقي. تكوين إجباري في «الحماية من الأذى» (وحدات الدورات التمهيدية والشارة والخشبية) قبل الإشراف المباشر على الأطفال.",
        },
        {
          heading_fr: "2 — Signalement & traitement des incidents",
          heading_ar: "2 — التبليغ والتعامل مع الحوادث",
          body_fr:
            "Comité National de Protection et de Sécurité, indépendant, qui reçoit les plaintes en toute confidentialité par courriel dédié et ligne d'écoute. Suspension conservatoire immédiate de toute personne soupçonnée, ouverture d'une enquête interne et saisine des autorités judiciaires si nécessaire.",
          body_ar:
            "اللجنة الوطنية للحماية والسلامة، لجنة مستقلة تتلقى الشكاوى بسرية تامة عبر بريد إلكتروني وخط ساخن مخصصين. التعليق الاحترازي الفوري لعضوية أي فرد تحوم حوله شبهة، وفتح تحقيق داخلي، وإخطار السلطات القضائية المختصة عند الاقتضاء.",
        },
        {
          heading_fr: "3 — Sécurité en activités & camps",
          heading_ar: "3 — السلامة في الأنشطة والمخيمات",
          body_fr:
            "Dossier médical obligatoire pour chaque participant. Assurance responsabilité civile & individuelle accident pour toute activité locale, régionale ou nationale. Chef sécurité titulaire du diplôme de premiers secours (Croissant-Rouge ou Protection civile) et pharmacie de camp complète.",
          body_ar:
            "ملف طبي إلزامي لكل مشارك. تأمين المسؤولية المدنية والحوادث الشخصية لكل نشاط محلي أو جهوي أو وطني. قائد مكلف بالسلامة حاصل على دبلوم الإسعافات الأولية (الهلال الأحمر أو الوقاية المدنية) وصيدلية ميدانية متكاملة.",
        },
        {
          heading_fr: "4 — Gestion des sites & risques",
          heading_ar: "4 — تدبير المواقع والمخاطر",
          body_fr:
            "Application du guide interne de gestion des risques : reconnaissance préalable du site, qualité de l'eau, sécurisation des cuisines, moyens de lutte contre l'incendie, veille de nuit organisée.",
          body_ar:
            "تطبيق دليل تدبير المخاطر الداخلي: مسح قبلي للموقع، جودة الماء، تأمين المطابخ، وسائل إطفاء الحرائق، ونقاط الحراسة الليلية المنظمة.",
        },
        {
          heading_fr: "5 — Audit & conformité internationale",
          heading_ar: "5 — التدقيق والامتثال الدولي",
          body_fr:
            "Audit interne annuel par la Commission de Planification, Suivi et Contrôle. Rapport de conformité soumis au Bureau National. Révision de la politique tous les deux ans pour l'aligner sur les standards internationaux et la législation marocaine.",
          body_ar:
            "تدقيق داخلي سنوي من طرف مفوضية التخطيط والمتابعة والرقابة. تقرير امتثال يُرفع إلى المكتب الوطني. مراجعة السياسة كل سنتين لملاءمتها مع المعايير الدولية والتشريعات الوطنية.",
        },
      ],
      quote_fr:
        "« La sécurité de l'enfant n'est jamais négociable — elle est la première promesse du scoutisme. »",
      quote_ar: "«سلامة الطفل ليست موضع تفاوض — هي أول وعد للحركة الكشفية.»",
      stats: [
        { value: "016/2026", label_fr: "note officielle", label_ar: "المذكرة الرسمية" },
        { value: "100%", label_fr: "chefs formés", label_ar: "من القادة مؤطرون" },
        { value: "24/7", label_fr: "ligne d'écoute", label_ar: "خط ساخن للتبليغ" },
      ],
    },
    {
      icon: Route,
      tone: "bg-orange-50 text-orange-700 ring-orange-200",
      accent: "bg-orange-600",
      soft: "bg-orange-50/60",
      title_fr: "Camp itinérant & tourisme scout",
      title_ar: "المخيم المتنقل والتجوال الكشفي",
      lead_fr:
        "Explorer le Royaume à pied, à vélo ou en caravane : découvrir les paysages, les cultures et les patrimoines du Maroc à travers le camp itinérant.",
      lead_ar:
        "استكشاف ربوع المملكة مشيًا أو على الدراجات أو ضمن قوافل: اكتشاف مناظر المغرب وثقافاته وموروثه عبر المخيم المتنقل والتجوال الكشفي.",
      intro_fr:
        "Le camp itinérant est une école de vie unique : chaque jour, un nouveau paysage, une nouvelle rencontre, un nouveau défi. Les scouts apprennent l'orientation, l'autonomie logistique, la lecture de carte et le respect des communautés qu'ils traversent.",
      intro_ar:
        "المخيم المتنقل مدرسة حياة فريدة: كل يوم منظر جديد، ولقاء جديد، وتحدٍ جديد. يتعلم الكشافة التوجه واعتماد اللوجستيك والاستقلالية وقراءة الخريطة واحترام الجماعات التي يعبرونها.",
      sections: [
        {
          heading_fr: "Itinéraires balisés à travers le Royaume",
          heading_ar: "مسارات موثقة عبر ربوع المملكة",
          body_fr:
            "Sentiers de l'Atlas, pistes du désert, chemins de l'arrière-pays atlantique, boucles culturelles autour des médinas : nos fédérations tracent chaque année des itinéraires progressifs adaptés à chaque branche.",
          body_ar:
            "مسالك الأطلس، ودروب الصحراء، وطرق الظهير الأطلسي، وحلقات ثقافية حول المدن العتيقة: تُعدّ فروعنا كل سنة مسارات متدرجة ملائمة لكل مرحلة كشفية.",
        },
        {
          heading_fr: "Autonomie, orientation et bivouac",
          heading_ar: "الاستقلالية والتوجّه والمبيت",
          body_fr:
            "Utilisation de la carte et de la boussole, choix du site de bivouac, gestion de l'eau et de la nourriture, montage rapide de tentes et laisser-aucune-trace : compétences indispensables du scout voyageur.",
          body_ar:
            "استعمال الخريطة والبوصلة، اختيار موقع المبيت، تدبير الماء والغذاء، النصب السريع للخيام، وعدم ترك أي أثر: مهارات أساسية للكشاف الرحّالة.",
        },
        {
          heading_fr: "Rencontres avec les communautés",
          heading_ar: "لقاءات مع الساكنة",
          body_fr:
            "À chaque étape, veillées avec les habitants, ateliers de savoirs partagés et micro-actions solidaires. Le scout devient ambassadeur d'une jeunesse ouverte, respectueuse et curieuse.",
          body_ar:
            "في كل محطة، أمسيات مع السكان، وورشات معارف مشتركة، ومبادرات تضامنية صغيرة. يصبح الكشاف سفيرًا لشباب منفتح ومحترم وفضولي.",
        },
      ],
      quote_fr: "« La route enseigne ce qu'aucun livre ne peut transmettre. »",
      quote_ar: "«الطريق يُعلّم ما لا يستطيع أي كتاب أن ينقله.»",
      stats: [
        { value: "500+", label_fr: "km parcourus / an", label_ar: "كلم مقطوعة سنويًا" },
        { value: "10", label_fr: "itinéraires officiels", label_ar: "مسارات رسمية" },
        { value: "12", label_fr: "régions traversées", label_ar: "جهة معبورة" },
      ],
    },
    {
      icon: Laptop,
      tone: "bg-violet-50 text-violet-700 ring-violet-200",
      accent: "bg-violet-600",
      soft: "bg-violet-50/60",
      title_fr: "Numérisation & digital scout",
      title_ar: "الرقمنة والديجتال الكشفي",
      lead_fr:
        "Faire du numérique un levier éducatif : plateforme d'adhésion en ligne, formations à distance, culture cyber-citoyenne et création de contenus responsables.",
      lead_ar:
        "جعل الرقمي رافعة تربوية: منصة انخراط رقمية، تكوينات عن بُعد، ثقافة المواطنة الرقمية، وإنتاج محتوى مسؤول.",
      intro_fr:
        "L'Association considère la transformation digitale comme un axe stratégique. Elle outille ses cadres et ses jeunes pour qu'ils maîtrisent les codes du numérique, s'y expriment avec responsabilité et en tirent parti au service du mouvement scout.",
      intro_ar:
        "تعتبر الجمعية التحول الرقمي محورًا استراتيجيًا. تُجهّز أطرها وشبابها للتمكن من مفاتيح الرقمي، وللتعبير فيه بمسؤولية، ولاستثماره في خدمة الحركة الكشفية.",
      sections: [
        {
          heading_fr: "Plateforme nationale intégrée",
          heading_ar: "منصة وطنية موحدة",
          body_fr:
            "Adhésion en ligne, cartes de membre numériques, gestion des cotisations, calendrier national des activités, base documentaire pédagogique et signalements sécurisés : tout est centralisé dans un espace unique.",
          body_ar:
            "الانخراط الرقمي، بطاقات العضوية الإلكترونية، تدبير الاشتراكات، الرزنامة الوطنية للأنشطة، القاعدة الوثائقية التربوية، والتبليغ الآمن: كل ذلك مُوحّد داخل فضاء واحد.",
        },
        {
          heading_fr: "Formations à distance & e-learning",
          heading_ar: "التكوين عن بُعد",
          body_fr:
            "Modules vidéo, quiz certifiants, classes virtuelles avec les formateurs nationaux : les cadres régionaux se forment sans se déplacer, dans les langues arabe et française.",
          body_ar:
            "وحدات فيديو، اختبارات إشهادية، أقسام افتراضية مع المكوّنين الوطنيين: يتكوّن الأطر الجهويون دون تنقل، باللغتين العربية والفرنسية.",
        },
        {
          heading_fr: "Cyber-citoyenneté & création responsable",
          heading_ar: "المواطنة الرقمية والإنتاج المسؤول",
          body_fr:
            "Protection des données personnelles, lutte contre la désinformation, empreinte numérique, création de contenus responsables sur les réseaux : les scouts apprennent à être des acteurs éclairés du web.",
          body_ar:
            "حماية المعطيات الشخصية، مكافحة الأخبار الزائفة، البصمة الرقمية، إنتاج محتوى مسؤول على الشبكات: يتعلم الكشافة أن يكونوا فاعلين مستنيرين في الفضاء الرقمي.",
        },
      ],
      quote_fr: "« Le numérique n'est utile que s'il rapproche les humains. »",
      quote_ar: "«الرقمي لا يكون نافعًا إلا إذا قرّب بين البشر.»",
      stats: [
        { value: "100%", label_fr: "adhésions dématérialisées", label_ar: "من الانخراطات رقمية" },
        { value: "20+", label_fr: "modules e-learning", label_ar: "وحدة رقمية" },
        { value: "3", label_fr: "langues d'interface", label_ar: "لغات للواجهة" },
      ],
    },
  ];

  const [page, setPage] = useState(0);
  const total = pages.length;
  const p = pages[page];
  const Icon = p.icon;
  const go = (dir: number) => setPage((v) => (v + dir + total) % total);

  // Touch swipe support
  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 50) return;
    // swipe left = next (in LTR), swipe right = prev; reverse in RTL
    const dir = dx < 0 ? 1 : -1;
    go(isAr ? -dir : dir);
  };

  const title = isAr ? p.title_ar : p.title_fr;
  const lead = isAr ? p.lead_ar : p.lead_fr;
  const intro = isAr ? p.intro_ar : p.intro_fr;
  const quote = isAr ? p.quote_ar : p.quote_fr;

  return (
    <section id="objectives" className="scroll-mt-24 bg-gradient-to-b from-background via-muted/30 to-background py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={bi("Objectifs stratégiques", "الأهداف الاستراتيجية")}
          title={bi(
            "Neuf axes qui structurent nos programmes — feuilletez notre livre",
            "تسعة محاور تُهيكل برامجنا — تصفّح كتاب الجمعية",
          )}
        />

        {/* Chapter tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {pages.map((it, i) => {
            const It = it.icon;
            const active = i === page;
            return (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                  active
                    ? "border-primary bg-primary text-primary-foreground shadow-sm"
                    : "border-border bg-card text-foreground/70 hover:border-primary/50 hover:text-primary"
                }`}
                aria-label={isAr ? `الفصل ${i + 1}` : `Chapitre ${i + 1}`}
              >
                <It className="h-3.5 w-3.5" />
                <span>{String(i + 1).padStart(2, "0")}</span>
              </button>
            );
          })}
        </div>

        {/* Book */}
        <div className="relative mt-8">
          {/* Left page-turn arrow */}
          <button
            onClick={() => go(isAr ? 1 : -1)}
            className={`absolute top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card p-2 text-foreground shadow-lg transition hover:border-primary hover:text-primary sm:p-3 ${isAr ? "right-1 sm:right-4" : "left-1 sm:left-4"}`}
            aria-label={isAr ? "الصفحة التالية" : "Page précédente"}
          >
            {isAr ? <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" /> : <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />}
          </button>

          {/* Right page-turn arrow */}
          <button
            onClick={() => go(isAr ? -1 : 1)}
            className={`absolute top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card p-2 text-foreground shadow-lg transition hover:border-primary hover:text-primary sm:p-3 ${isAr ? "left-1 sm:left-4" : "right-1 sm:right-4"}`}
            aria-label={isAr ? "الصفحة السابقة" : "Page suivante"}
          >
            {isAr ? <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" /> : <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />}
          </button>

          <article
            key={page}
            dir={isAr ? "rtl" : "ltr"}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            className="animate-float-in touch-pan-y overflow-hidden rounded-[1.25rem] border border-border bg-card shadow-xl ring-1 ring-black/5 sm:rounded-[2rem]"
          >
            {/* Cover header */}
            <header className={`relative overflow-hidden ${p.soft} px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14`}>
              <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 15% 20%, currentColor, transparent 45%)" }} />
              <div className="relative flex flex-col gap-5 sm:gap-6">
                <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground sm:text-[11px]">
                  <span>{isAr ? `الفصل ${String(page + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}` : `Chapitre ${String(page + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`}</span>
                  <span>{isAr ? "جمعية الميادين الكشفية المغربية" : "Association des Champs Scouts Marocains"}</span>
                </div>
                <div className="flex items-start gap-3 sm:gap-5">
                  <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ring-1 sm:h-16 sm:w-16 ${p.tone}`}>
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest ring-1 ${p.tone}`}>
                      {isAr ? "هدف استراتيجي" : "Objectif stratégique"}
                    </div>
                    <h3 className="mt-3 break-words text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-5xl">{title}</h3>
                    <div className={`mt-4 h-1 w-20 rounded-full ${p.accent}`} />
                  </div>
                </div>
                <p className="max-w-3xl text-sm leading-relaxed text-foreground/80 sm:text-base md:text-lg">{lead}</p>
              </div>
            </header>

            {/* Body */}
            <div className="grid gap-10 px-5 py-10 sm:px-8 sm:py-12 md:px-12 md:py-14 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-8">
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  <span className={`me-2 float-${isAr ? "right" : "left"} text-5xl font-bold leading-none ${p.accent.replace("bg-", "text-")}`}>
                    {intro.charAt(0)}
                  </span>
                  {intro.slice(1)}
                </p>


                <div className="space-y-6">
                  {p.sections.map((s, i) => (
                    <div key={i} className="rounded-2xl border border-border bg-background/60 p-6">
                      <div className="flex items-center gap-3">
                        <span className={`grid h-8 w-8 place-items-center rounded-full text-xs font-bold text-white ${p.accent}`}>
                          {i + 1}
                        </span>
                        <h4 className="text-lg font-bold text-foreground">
                          {isAr ? s.heading_ar : s.heading_fr}
                        </h4>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                        {isAr ? s.body_ar : s.body_fr}
                      </p>
                    </div>
                  ))}
                </div>

                <blockquote className={`rounded-2xl border-s-4 ${p.accent.replace("bg-", "border-")} ${p.soft} p-6 text-base italic leading-relaxed text-foreground/80 md:text-lg`}>
                  {quote}
                </blockquote>
              </div>

              <aside className="space-y-4">
                <div className={`rounded-2xl ${p.soft} p-6 ring-1 ring-black/5`}>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    {isAr ? "أرقام مفتاحية" : "Chiffres clés"}
                  </div>
                  <dl className="mt-4 space-y-4">
                    {p.stats.map((st, i) => (
                      <div key={i} className="border-b border-border/60 pb-3 last:border-0 last:pb-0">
                        <dt className={`text-3xl font-bold ${p.accent.replace("bg-", "text-")}`}>{st.value}</dt>
                        <dd className="mt-1 text-xs font-medium text-muted-foreground">
                          {isAr ? st.label_ar : st.label_fr}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="rounded-2xl border border-dashed border-border p-6 text-xs text-muted-foreground">
                  {isAr
                    ? "استخدم أزرار التنقل أدناه أو انقر على أرقام الفصول أعلاه لاستكشاف باقي الأهداف."
                    : "Utilisez les flèches de page, la pagination ci-dessous ou les numéros de chapitres ci-dessus pour parcourir le livre."}
                </div>
              </aside>
            </div>

            {/* Page footer */}
            <footer className="flex items-center justify-between border-t border-border bg-muted/30 px-8 py-4 text-[11px] text-muted-foreground md:px-12">
              <span>
                {isAr
                  ? "جمعية الميادين الكشفية المغربية · 2026"
                  : "Association des Champs Scouts Marocains · 2026"}
              </span>
              <span className="font-mono">— {String(page + 1).padStart(2, "0")} —</span>
            </footer>
          </article>
        </div>

        {/* Pager controls */}
        <div className="mt-6 flex items-center justify-between gap-4">
          <button
            onClick={() => go(isAr ? 1 : -1)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground shadow-sm transition hover:border-primary hover:text-primary"
          >
            <ChevronLeft className="h-4 w-4" />
            {bi("Précédent", "السابق")}
          </button>
          <div className="text-xs font-medium text-muted-foreground">
            {isAr ? `الصفحة ${page + 1} من ${total}` : `Page ${page + 1} sur ${total}`}
          </div>
          <button
            onClick={() => go(isAr ? -1 : 1)}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:brightness-110"
          >
            {bi("Suivant", "التالي")}
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- BRANCHES */
function Branches() {
  const bi = useBi();
  const [active, setActive] = useState(0);

  const branches = [
    {
      name_ar: "الأشبال والزهرات",
      name_fr: "Louveteaux & Jeannettes",
      age: bi("Enfants", "الناشئة الصغار"),
      color: "from-yellow-400 to-yellow-500",
      icon: Sparkles,
      body: bi(
        "Étape des Louveteaux et Jeannettes : centrée sur des activités récréatives et éducatives simples adaptées à l'éveil des plus jeunes.",
        "مرحلة الأشبال والزهرات (الناشئة الصغار): تركز على الأنشطة الترفيهية والتربوية البسيطة الملائمة لهذه الفئة.",
      ),
      pillars: [
        bi("Jeux éducatifs", "ألعاب تربوية"),
        bi("Découverte", "الاكتشاف"),
        bi("Éveil sensoriel", "التربية الحسية"),
      ],
    },
    {
      name_ar: "الكشافة والمرشدات",
      name_fr: "Scouts & Guides",
      age: bi("Adolescents", "اليافعون"),
      color: "from-primary to-emerald-600",
      icon: Tent,
      body: bi(
        "Étape des Scouts et Guides : apprentissage des techniques scoutes, autonomie personnelle et vie de plein air.",
        "مرحلة الكشافة والمرشدات: تركز على تعلم المهارات والاعتماد على النفس وحياة الخلاء.",
      ),
      pillars: [
        bi("Techniques scoutes", "المهارات الكشفية"),
        bi("Autonomie", "الاعتماد على النفس"),
        bi("Camps & bivouacs", "المخيمات والخرجات"),
      ],
    },
    {
      name_ar: "الجوالة والدليلات",
      name_fr: "Routiers & Guides Aînées",
      age: bi("Jeunes & jeunes adultes", "الشباب واليافعون"),
      color: "from-scout-red to-red-700",
      icon: Flame,
      body: bi(
        "Étape des Routiers et Guides Aînées : centrée sur le service public, la gestion et les projets de développement communautaire.",
        "مرحلة الجوالة والدليلات (الشباب واليافعون): تركز على الخدمة العامة، التدبير، والمشاريع التنموية.",
      ),
      pillars: [
        bi("Service public", "الخدمة العامة"),
        bi("Gestion de projets", "تدبير المشاريع"),
        bi("Leadership", "القيادة"),
      ],
    },
  ];

  return (
    <section id="branches" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow={bi("Branches scoutes", "المراحل الكشفية")}
        title={bi("Trois étapes pour accompagner chaque jeune", "ثلاث مراحل ترافق كل ناشئ")}
        subtitle={bi(
          "L'Association organise ses membres en tranches d'âge conformes à la structuration scoute, adaptées au développement psychologique et physique de chacun.",
          "تُقسم الجمعية أعضاءها إلى مراحل عمرية تماشيًا مع الهيكلة الكشفية المتعارف عليها لتناسب النمو النفسي والبدني لكل فئة.",
        )}
      />

      <div className="mt-12 flex flex-wrap justify-center gap-2">
        {branches.map((b, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              active === i
                ? "bg-primary text-primary-foreground shadow-md"
                : "border border-border bg-card text-foreground/70 hover:border-primary hover:text-foreground"
            }`}
          >
            {bi(b.name_fr, b.name_ar)}
          </button>
        ))}
      </div>

      <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
        <div className="grid gap-0 md:grid-cols-2">
          <div className={`relative bg-gradient-to-br ${branches[active].color} p-10 text-white md:p-14`}>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white, transparent 40%)" }} />
            <div className="relative">
              {(() => { const Icon = branches[active].icon; return <Icon className="h-14 w-14" />; })()}
              <div className="mt-6 text-xs font-bold uppercase tracking-widest text-white/80">{branches[active].age}</div>
              <h3 className="mt-2 text-3xl font-bold" dir="rtl">{branches[active].name_ar}</h3>
              <h4 className="text-lg font-medium text-white/90">{branches[active].name_fr}</h4>
            </div>
          </div>
          <div className="p-10 md:p-14">
            <p className="text-base leading-relaxed text-foreground">{branches[active].body}</p>
            <div className="mt-8 space-y-3">
              {branches[active].pillars.map((p) => (
                <div key={p} className="flex items-center gap-3 rounded-xl border border-border bg-muted/40 px-4 py-3">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary/15 text-primary">
                    <Star className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- ACTIVITIES */
function Activities() {
  const bi = useBi();
  const items = [
    {
      icon: Tent,
      img: camp,
      title: bi("Camps d'été et d'hiver", "المخيمات الصيفية والشتوية"),
      body: bi(
        "Organisation de séjours de camping dans la nature pour former les membres aux lois scoutes et à l'autonomie.",
        "تنظيم فترات تخييمية في الطبيعة لتدريب الأعضاء على القوانين الكشفية والاعتماد على الذات.",
      ),
      tag: bi("Vie de plein air", "حياة الخلاء"),
    },
    {
      icon: GraduationCap,
      img: formationsImg,
      title: bi("Formations & Wood Badge", "الدورات التكوينية"),
      body: bi(
        "Encadrement et formation des cheffes et chefs dans les domaines de la pédagogie scoute, des premiers secours et de l'animation socioculturelle.",
        "تأطير وتدريب القادة والقائدات في مجالات البيداغوجيا الكشفية، الإسعافات الأولية، والتنشيط السوسيوثقافي.",
      ),
      tag: bi("Cheffes & Chefs", "القادة والقائدات"),
    },
    {
      icon: HandHeart,
      img: actionsSocialesImg,
      title: bi("Actions sociales & humanitaires", "الأنشطة الاجتماعية والإنسانية"),
      body: bi(
        "Participation aux actions nationales (Ramadan, fêtes religieuses, réponse aux catastrophes naturelles) pour soutenir la société.",
        "المشاركة في الأنشطة الوطنية (رمضان، الأعياد، ومواجهة الكوارث الطبيعية) لتقديم الدعم للمجتمع.",
      ),
      tag: bi("Solidarité", "التضامن"),
    },
    {
      icon: Leaf,
      img: environnementImg,
      title: bi("Environnement & reboisement", "الأنشطة البيئية"),
      body: bi(
        "Campagnes de nettoyage de quartiers, reboisement d'espaces verts et éducation à l'écologie.",
        "حملات لتنظيف الأحياء، تشجير الفضاءات، والتربية البيئية.",
      ),
      tag: bi("Écologie", "بيئة"),
    },
    {
      icon: BookOpen,
      img: rencontreHebdoImg,
      title: bi("Rencontres hebdomadaires", "اللقاءات الأسبوعية"),
      body: bi(
        "Ateliers pédagogiques au siège pour apprendre les nœuds scouts, les premiers secours, les chants et les cris éducatifs.",
        "ورشات تربوية داخل المقر لتعلم العقد الكشفية، الإسعافات الأولية، الأناشيد، والصيحات التربوية.",
      ),
      tag: bi("Éducation", "تربية"),
    },
    {
      icon: Compass,
      img: nature,
      title: bi("Sorties & week-ends nature", "الخرجات الميدانية"),
      body: bi(
        "Sorties en forêt et dans les régions voisines pour vivre la vie scoute : randonnées, bivouacs et cuisine en plein air.",
        "خرجات إلى الغابات والمناطق المجاورة لتطبيق حياة الخلاء، والرحلات القصيرة، والطهي الخلوي.",
      ),
      tag: bi("Week-end", "نهاية الأسبوع"),
    },
  ];
  return (
    <section id="activities" className="scroll-mt-24 bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={bi("Activités", "الأنشطة")}
          title={bi("Un calendrier riche tout au long de l'année", "برنامج حافل على مدار السنة")}
          subtitle={bi(
            "Les activités de l'Association couvrent le champ éducatif, environnemental, social et humanitaire.",
            "تتنوع أنشطة الجمعية لتشمل المجال التربوي والبيئي والاجتماعي والإنساني.",
          )}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, img, title, body, tag }) => (
            <article key={title} className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={img} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                <span className="absolute start-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-foreground">
                  {tag}
                </span>
                <div className="absolute end-4 bottom-4 grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- ORGANIZATION */
function Organization() {
  const bi = useBi();
  const levels = [
    {
      icon: Flag,
      color: "bg-accent",
      title: bi("Niveau national", "المستوى الوطني"),
      body: bi(
        "L'organisation nationale pilote la stratégie éducative de l'Association sous la bannière du mouvement scout marocain et mondial.",
        "التنظيم الوطني يُوجّه الاستراتيجية التربوية للجمعية تحت لواء الحركة الكشفية المغربية والعالمية.",
      ),
    },
    {
      icon: MapPin,
      color: "bg-secondary",
      title: bi("Système régional", "النظام الجهوي"),
      body: bi(
        "La structuration régionale suit le découpage territorial du Royaume (régionalisation avancée), pour rapprocher l'administration des sections locales.",
        "تتبع الهيكلة الجهوية التنظيم الإداري والترابي للمملكة المغربية (نظام الجهوية المتقدمة)، لتقريب الإدارة من الفروع المحلية.",
      ),
    },
    {
      icon: Compass,
      color: "bg-primary",
      title: bi("Provinces & commissariats", "المفوضيات الإقليمية"),
      body: bi(
        "Des commissariats provinciaux et locaux animent le terrain et facilitent les activités des sections dans chaque ville et région.",
        "تنشط الجمعية عبر فروع ومفوضيات محلية وإقليمية في عدة مدن ومناطق بالمملكة، تُيسّر الأنشطة الميدانية.",
      ),
    },
    {
      icon: BookOpen,
      color: "bg-foreground",
      title: bi("Sections locales", "الفروع المحلية"),
      body: bi(
        "De nombreuses sections locales tiennent leurs rencontres hebdomadaires dans les Maisons de Jeunes du Ministère de la Jeunesse, de la Culture et de la Communication.",
        "تتخذ العديد من الفروع من دور الشباب التابعة لوزارة الشباب والثقافة والتواصل مقرًا للقاءاتها الأسبوعية.",
      ),
    },
  ];
  return (
    <section id="organization" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow={bi("Organisation", "الهيكلة")}
        title={bi("Un maillage territorial du national au local", "شبكة ترابية من الوطني إلى المحلي")}
        subtitle={bi(
          "Notre structure épouse la régionalisation avancée du Royaume pour rester proche du terrain et servir chaque communauté.",
          "تعتمد بنيتنا على الجهوية المتقدمة للمملكة لضمان القرب من الميدان وخدمة كل مجتمع محلي.",
        )}
      />
      <div className="mt-14 relative">
        <div className="absolute inset-x-4 top-8 hidden h-1 bg-gradient-to-r from-accent via-secondary to-primary md:block" />
        <div className="grid gap-6 md:grid-cols-4">
          {levels.map((l, i) => (
            <div key={l.title} className="relative rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className={`relative z-10 -mt-14 grid h-16 w-16 place-items-center rounded-2xl ${l.color} text-white shadow-lg`}>
                <l.icon className="h-7 w-7" />
              </div>
              <div className="mt-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-1 text-lg font-bold text-foreground">{l.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- MEMBERSHIP */
function Membership() {
  const bi = useBi();
  const [open, setOpen] = useState<number | null>(0);

  const steps = [
    {
      title: bi("1. Déterminer la tranche d'âge", "1. تحديد المرحلة العمرية"),
      body: bi(
        "L'adhérent est classé selon son âge : Louveteaux/Jeannettes pour les plus jeunes, Scouts/Guides pour les adolescents, Routiers/Guides Aînées pour les jeunes.",
        "يتم تصنيف المنخرط حسب سنه: الأشبال/الزهرات للصغار، الكشافة/المرشدات لليافعين، الجوالة/الدليلات للشباب.",
      ),
    },
    {
      title: bi("2. Constituer le dossier", "2. تجهيز الملف المطلوب"),
      body: bi(
        "Formulaire d'adhésion rempli, photos d'identité, certificat médical attestant l'aptitude aux activités scoutes et sportives (indispensable pour les sorties et camps), et autorisation parentale pour les mineurs (moins de 18 ans).",
        "ملء استمارة الانخراط، صور شمسية للمنخرط، شهادة طبية تثبت القدرة البدنية على ممارسة الأنشطة الكشفية والرياضية (ضرورية للخرجات والمخيمات)، وموافقة ولي الأمر بالنسبة للقاصرين دون 18 سنة.",
      ),
    },
    {
      title: bi("3. Cotisation annuelle", "3. أداء واجب الانخراط السنوي"),
      body: bi(
        "Règlement de la cotisation annuelle : un montant symbolique qui couvre l'assurance scoute et certaines fournitures de base comme le foulard scout.",
        "أداء واجب الانخراط السنوي، وهو مبلغ رمزي يغطي التأمين الكشفي وبعض اللوازم الأساسية كالمنديل الكشفي.",
      ),
    },
    {
      title: bi("4. Rejoindre une section locale", "4. الالتحاق بأقرب فرع"),
      body: bi(
        "Rendez-vous dans la Maison des Jeunes de votre ville — la plupart des sections y tiennent leurs rencontres hebdomadaires, souvent le dimanche.",
        "التوجه إلى دار الشباب في مدينتك؛ حيث تعقد معظم الفروع لقاءاتها الأسبوعية غالبًا يوم الأحد.",
      ),
    },
    {
      title: bi("5. Devenir cheffe / chef", "5. الانخراط كقائد/قائدة"),
      body: bi(
        "Les jeunes et étudiants peuvent accéder à des formations scoutes et pédagogiques pour obtenir les insignes de leadership reconnus et encadrer les jeunes.",
        "تتيح الجمعية للشباب والطلبة إمكانية الولوج إلى دورات تدريبية وتكوينية كشفية وبيداغوجية للحصول على شارات القيادة المعتمدة وتأطير الناشئة.",
      ),
    },
  ];

  return (
    <section id="membership" className="scroll-mt-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="inline-block rounded-full bg-primary/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              {bi("Adhésion", "الانخراط")}
            </span>
            <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
              {bi("Rejoignez l'aventure scoute marocaine", "انضم إلى المغامرة الكشفية المغربية")}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {bi(
                "L'Association est ouverte à toutes les tranches d'âge (filles et garçons) à travers ses sections locales. Suivez les étapes ci-contre pour rejoindre la section la plus proche de chez vous.",
                "الجمعية مفتوحة لجميع الفئات العمرية (ذكورًا وإناثًا) عبر فروعها المحلية. اتبع الخطوات التالية للانضمام إلى أقرب فرع منك.",
              )}
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
                <MapPin className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <div className="text-sm font-semibold text-foreground">{bi("Maisons des Jeunes", "دور الشباب")}</div>
                  <div className="text-xs text-muted-foreground">
                    {bi("Rencontres hebdomadaires, souvent le dimanche.", "اللقاءات الأسبوعية، غالبًا يوم الأحد.")}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
                <Globe2 className="mt-1 h-5 w-5 text-secondary" />
                <div>
                  <div className="text-sm font-semibold text-foreground">{bi("Contact digital", "التواصل الرقمي")}</div>
                  <div className="text-xs text-muted-foreground">
                    {bi(
                      "Recherchez la page officielle de votre section locale sur les réseaux sociaux.",
                      "ابحث عن الصفحة الرسمية للفرع المحلي لمدينتك على منصات التواصل الاجتماعي.",
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="space-y-3">
              {steps.map((s, i) => {
                const isOpen = open === i;
                return (
                  <div key={i} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-start"
                    >
                      <span className="text-sm font-semibold text-foreground md:text-base">{s.title}</span>
                      <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isOpen && (
                      <div className="border-t border-border px-5 pb-5 pt-4 text-sm leading-relaxed text-muted-foreground">
                        {s.body}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ CONTACT */
function Contact() {
  const bi = useBi();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error(bi("Veuillez remplir tous les champs.", "يرجى ملء جميع الحقول."));
      return;
    }
    setSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: form,
      });
      if (error || (data && (data as any).error)) {
        throw new Error(error?.message || (data as any)?.error || "Erreur");
      }
      toast.success(bi("Message envoyé avec succès !", "تم إرسال الرسالة بنجاح!"));
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error(bi("Échec de l'envoi. Réessayez plus tard.", "فشل الإرسال. حاول مرة أخرى لاحقًا."));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl bg-hero-gradient p-1">
        <div className="rounded-[calc(1.5rem-4px)] bg-card p-10 md:p-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <span className="inline-block rounded-full bg-primary/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                {bi("Contact", "اتصل بنا")}
              </span>
              <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
                {bi("Écrivez-nous", "راسلنا")}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {bi(
                  "Une question sur nos activités, une demande de partenariat, ou l'envie de vous engager ? Notre équipe est à votre écoute.",
                  "لأي استفسار حول أنشطتنا أو طلب شراكة أو رغبة في الانخراط، فريقنا في خدمتكم.",
                )}
              </p>
              <ul className="mt-8 space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:almayadineassociation@gmail.com" className="hover:text-primary">almayadineassociation@gmail.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:+212607771336" dir="ltr" className="hover:text-primary">+212 607 771 336</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:+212669102532" dir="ltr" className="hover:text-primary">+212 669 102 532</a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" /> {bi("Royaume du Maroc", "المملكة المغربية")}
                </li>
              </ul>
            </div>
            <form
              onSubmit={handleSubmit}
              className="grid gap-4 rounded-2xl border border-border bg-muted/30 p-6"
            >
              <div className="grid gap-2">
                <label className="text-xs font-semibold text-foreground">{bi("Nom complet", "الاسم الكامل")}</label>
                <input
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-xs font-semibold text-foreground">{bi("Email", "البريد الإلكتروني")}</label>
                <input
                  type="email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-xs font-semibold text-foreground">{bi("Message", "الرسالة")}</label>
                <textarea
                  rows={4}
                  required
                  maxLength={5000}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110 disabled:opacity-60"
              >
                {submitting ? bi("Envoi…", "جارٍ الإرسال…") : bi("Envoyer", "إرسال")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------ MINISTERIAL TRAININGS */
function MinisterialTrainings() {
  const bi = useBi();
  const { lang } = useI18n();
  const isAr = lang === "ar";
  const [active, setActive] = useState(0);

  const levels = [
    {
      icon: Sparkles,
      badge_fr: "Degré 1",
      badge_ar: "الدرجة الأولى",
      title_fr: "Animateur (Mounachit)",
      title_ar: "منشط",
      audience_fr: "Jeunes et étudiants engagés dans les associations éducatives (18 ans et plus).",
      audience_ar: "الشباب والطلبة الفاعلون في الجمعيات التربوية (18 سنة فما فوق).",
      content_fr:
        "Seuil d'accès au travail éducatif dans les centres de vacances. Le contenu porte sur la psychologie de l'enfant, les techniques des chants et des jeux, les premiers secours de base, et la responsabilité civile et pénale de l'encadrant.",
      content_ar:
        "عتبة الولوج الأولى للعمل التربوي داخل المخيمات. يركز على المهارات الأساسية: سيكولوجية الطفل، تقنيات الأناشيد والألعاب، الإسعافات الأولية الأساسية، والمسؤولية المدنية والجنائية للمؤطر.",
      practice_fr:
        "Stage pratique en tant qu'animateur assistant dans un centre de vacances estival sous la supervision d'un directeur pédagogique.",
      practice_ar:
        "فترة تطبيقية كمساعد منشط في أحد المخيمات الصيفية تحت إشراف مدير تربوي.",
      color: "from-emerald-500 to-teal-500",
      ring: "ring-emerald-200",
      soft: "bg-emerald-50",
    },
    {
      icon: Users,
      badge_fr: "Degré 2",
      badge_ar: "الدرجة الثانية",
      title_fr: "Éducateur / Gestionnaire (Mourabbi / Moudabbir)",
      title_ar: "مربّي / مدبّر",
      audience_fr: "Cadres ayant validé le 1er degré et démontré leurs compétences sur le terrain.",
      audience_ar: "الأطر الذين اجتازوا الدرجة الأولى بنجاح وأثبتوا كفاءتهم الميدانية.",
      content_fr:
        "Planification pédagogique, pédagogie de groupe, montage de projets pédagogiques, approfondissement des droits de l'enfant et des mécanismes de protection.",
      content_ar:
        "التخطيط التربوي، بيداغوجيا الجماعات، إعداد المشاريع البيداغوجية، وتعميق المعارف حول حقوق الطفل وآليات حمايته.",
      practice_fr:
        "Prise en charge autonome de l'animation pédagogique complète et de la gestion de groupes au sein du camp.",
      practice_ar:
        "ممارسة مهام التنشيط التربوي الكامل وإدارة المجموعات داخل المخيم بشكل مستقل.",
      color: "from-sky-500 to-indigo-500",
      ring: "ring-sky-200",
      soft: "bg-sky-50",
    },
    {
      icon: ShieldCheck,
      badge_fr: "Degré 3",
      badge_ar: "الدرجة الثالثة",
      title_fr: "Chef de camp",
      title_ar: "رئيس المخيم",
      audience_fr: "Cadres expérimentés ayant complété les degrés précédents.",
      audience_ar: "الأطر التربوية ذوي الخبرة الطويلة والذين استوفوا شروط التدرج في الدرجات السابقة.",
      content_fr:
        "Gestion administrative et financière du camp, direction de l'équipe des animateurs, résolution des conflits, alimentation et santé publique, application des dispositions légales et réglementaires du ministère de tutelle.",
      content_ar:
        "التدبير الإداري والمالي للمخيم، قيادة وفاق الأطر (المنشطين)، تسيير النزاعات، التغذية والصحة العامة بالمخيم، وتنزيل التدابير القانونية والتنظيمية الصادرة عن الوزارة الوصية.",
      practice_fr:
        "Direction complète d'un camp d'été en tant que directeur stagiaire, sous le contrôle et le suivi des inspecteurs du ministère.",
      practice_ar:
        "إدارة وتسيير مخيم صيفي كامل كمدير متدرب تحت مراقبة وتتبع مفتشي الوزارة.",
      color: "from-amber-500 to-orange-500",
      ring: "ring-amber-200",
      soft: "bg-amber-50",
    },
    {
      icon: GraduationCap,
      badge_fr: "Spécialisés",
      badge_ar: "التداريب المتخصصة",
      title_fr: "Formations parallèles & spécialisées",
      title_ar: "تداريب متخصصة (موازية)",
      audience_fr: "Cadres orientés vers une fonction spécifique du centre de vacances ou vers la formation des formateurs.",
      audience_ar: "الأطر الموجهون لوظيفة خاصة داخل مركز التخييم أو لتأطير المكونين.",
      content_fr:
        "Formations des économes (gestion financière, comptabilité, magasins, restauration), formations des formateurs (encadrement des degrés 1 et 2), et ateliers thématiques : expression corporelle et théâtre, chorale, camps de proximité et estivages.",
      content_ar:
        "تداريب المقتصدين (التدبير المالي والمحاسباتي وتدبير المخازن والتغذية)، تداريب المكونين لتأهيل الأطر العليا، وورشات مجالية متخصصة: التعبير الجسدي والمسرح، الكورال، وتداريب مخيمات القرب والمصطافات.",
      practice_fr:
        "Immersion dans la fonction visée avec évaluation par un cadre certifié du ministère.",
      practice_ar:
        "انغماس في الوظيفة المستهدفة مع تقييم من طرف مكوّن معتمد من الوزارة.",
      color: "from-rose-500 to-fuchsia-500",
      ring: "ring-rose-200",
      soft: "bg-rose-50",
    },
  ];

  const l = levels[active];
  const Icon = l.icon;

  return (
    <section id="trainings" className="scroll-mt-24 bg-gradient-to-b from-muted/40 via-background to-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={bi("Formations ministérielles", "التداريب الوزارية")}
          title={bi(
            "Progression des formations ministérielles",
            "تدرّج التداريب الوزارية",
          )}
          subtitle={bi(
            "Système de formation intégré du Ministère de la Jeunesse, de la Culture et de la Communication (Secteur Jeunesse), en partenariat avec la Fédération Nationale du Camping, destiné à qualifier les cadres pédagogiques et administratifs des centres de vacances et des activités destinées à l'enfance et à la jeunesse.",
            "المنظومة التكوينية المتكاملة لوزارة الشباب والثقافة والتواصل (قطاع الشباب) بشراكة مع الجامعة الوطنية للتخييم، المخصصة لتأهيل الأطر التربوية والإدارية التي تُشرف على المخيمات الصيفية والأنشطة الموجهة للطفولة والشباب.",
          )}
        />

        {/* Progress ladder */}
        <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {levels.map((lv, i) => {
            const It = lv.icon;
            const isActive = i === active;
            return (
              <li key={i}>
                <button
                  onClick={() => setActive(i)}
                  className={`group relative flex w-full items-start gap-3 rounded-2xl border p-4 text-start transition ${
                    isActive
                      ? "border-primary bg-card shadow-lg ring-2 ring-primary/30"
                      : "border-border bg-card/60 hover:border-primary/50 hover:bg-card"
                  }`}
                >
                  <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${lv.color} text-white shadow-sm`}>
                    <It className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      {isAr ? lv.badge_ar : lv.badge_fr}
                    </span>
                    <span className="mt-1 block text-sm font-semibold leading-snug text-foreground">
                      {isAr ? lv.title_ar : lv.title_fr}
                    </span>
                  </span>
                  <span className="absolute -top-2 end-3 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        {/* Detail card */}
        <article
          key={active}
          className="animate-float-in mt-8 overflow-hidden rounded-3xl border border-border bg-card shadow-xl"
        >
          <header className={`relative ${l.soft} px-6 py-8 sm:px-10 sm:py-10`}>
            <div className="flex items-start gap-4 sm:gap-6">
              <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${l.color} text-white shadow-md sm:h-20 sm:w-20`}>
                <Icon className="h-7 w-7 sm:h-10 sm:w-10" />
              </div>
              <div className="min-w-0 flex-1">
                <div className={`inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-foreground ring-1 ${l.ring}`}>
                  {isAr ? l.badge_ar : l.badge_fr}
                </div>
                <h3 className="mt-3 break-words text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-4xl">
                  {isAr ? l.title_ar : l.title_fr}
                </h3>
              </div>
            </div>
          </header>

          <div className="grid gap-6 px-6 py-8 sm:px-10 sm:py-10 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-background/60 p-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                <Users className="h-4 w-4" />
                {bi("Public visé", "المستفيدون")}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {isAr ? l.audience_ar : l.audience_fr}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background/60 p-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                <BookOpen className="h-4 w-4" />
                {bi("Contenu pédagogique", "المضمون التكويني")}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {isAr ? l.content_ar : l.content_fr}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background/60 p-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                <Tent className="h-4 w-4" />
                {bi("Volet pratique", "الشق العملي")}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {isAr ? l.practice_ar : l.practice_fr}
              </p>
            </div>
          </div>
        </article>

        {/* Footer note */}
        <p className="mt-6 text-center text-xs text-muted-foreground">
          {bi(
            "Système basé sur le cumul progressif et l'expérience de terrain, conformément aux dispositions du Ministère de tutelle.",
            "منظومة مبنية على نظام التراكم والخبرة الميدانية، وفقًا لمقتضيات الوزارة الوصية.",
          )}
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------ YOUTH TRAININGS */
function YouthTrainings() {
  const bi = useBi();
  const { lang } = useI18n();
  const isAr = lang === "ar";
  const [active, setActive] = useState(0);

  const levels = [
    {
      icon: Sparkles,
      badge_fr: "Étape 1",
      badge_ar: "المرحلة الأولى",
      title_fr: "Formation scoute préparatoire",
      title_ar: "التدريب الإعدادي الكشفي",
      audience_fr: "Nouveaux jeunes fraîchement engagés dans le mouvement scout et souhaitant intégrer le cursus de formation.",
      audience_ar: "الشباب الجدد المنخرطون حديثًا في الحركة الكشفية والراغبون في الالتحاق بمسار التكوين.",
      content_fr:
        "Introduction à l'histoire du scoutisme mondial et marocain, découverte de la loi et de la promesse, valeurs, symboles et cérémonial, notions d'hygiène, de sécurité et de vie en petite équipe.",
      content_ar:
        "التعريف بتاريخ الحركة الكشفية عالميًا ومغربيًا، التعرف على القانون والوعد، القيم والرموز والطقوس، ومبادئ النظافة والسلامة والحياة داخل السداسية.",
      practice_fr:
        "Camp d'initiation court, participation aux activités de l'unité et validation des acquis d'entrée dans le mouvement.",
      practice_ar:
        "مخيم استئناسي قصير، والمشاركة في أنشطة الوحدة، والتحقق من مكتسبات الولوج إلى الحركة.",
      color: "from-emerald-500 to-teal-500",
      ring: "ring-emerald-200",
      soft: "bg-emerald-50",
    },
    {
      icon: Compass,
      badge_fr: "Étape 2",
      badge_ar: "المرحلة الثانية",
      title_fr: "Formation scoute de base",
      title_ar: "التدريب الأساسي الكشفي",
      audience_fr: "Jeunes ayant validé la formation préparatoire et prononcé leur promesse scoute.",
      audience_ar: "الشباب الذين اجتازوا التدريب الإعدادي وأدّوا الوعد الكشفي.",
      content_fr:
        "Approfondissement des techniques scoutes (nœuds, orientation, campisme, secourisme, transmission), pédagogie de la branche, vie en patrouille et projet éducatif personnel.",
      content_ar:
        "تعميق التقنيات الكشفية (العقد، الاتجاهات، فنون التخييم، الإسعافات، الإشارات)، بيداغوجيا المرحلة، الحياة داخل الطليعة، والمشروع التربوي الشخصي.",
      practice_fr:
        "Stage pratique en camp, tenue d'un carnet de progression, obtention des premières classes et brevets de spécialité.",
      practice_ar:
        "فترة تطبيقية داخل المخيم، مسك دفتر التدرّج، والحصول على الأقسام الأولى وشارات التخصص.",
      color: "from-sky-500 to-indigo-500",
      ring: "ring-sky-200",
      soft: "bg-sky-50",
    },
    {
      icon: Award,
      badge_fr: "Étape 3",
      badge_ar: "المرحلة الثالثة",
      title_fr: "Formation Badge de Bois — 2 bûchettes",
      title_ar: "تدريب الشارة الخشبية الثنائية",
      audience_fr: "Cadres ayant complété la formation de base et engagés dans l'encadrement d'une unité.",
      audience_ar: "الأطر الذين اجتازوا التدريب الأساسي والملتزمون بتأطير إحدى الوحدات.",
      content_fr:
        "Approfondissement de la méthode scoute selon l'OMMS, pédagogie de la branche, planification pédagogique annuelle, gestion de l'unité et évaluation.",
      content_ar:
        "تعميق الطريقة الكشفية وفق المنظمة العالمية للحركة الكشفية، بيداغوجيا المرحلة، التخطيط التربوي السنوي، تدبير الوحدة والتقويم.",
      practice_fr:
        "Projet d'application encadré sur une saison complète, évaluation par un formateur agréé, obtention officielle des deux bûchettes du Badge de Bois.",
      practice_ar:
        "مشروع تطبيقي مؤطَّر على مدى موسم كامل، تقييم من طرف مكوّن معتمد، والحصول رسميًا على الشارة الخشبية الثنائية.",
      color: "from-amber-500 to-orange-500",
      ring: "ring-amber-200",
      soft: "bg-amber-50",
    },
    {
      icon: Radio,
      badge_fr: "Étape 4",
      badge_ar: "المرحلة الرابعة",
      title_fr: "Formations spécialisées et fonctionnelles",
      title_ar: "التدريب التخصصي والوظيفي",
      audience_fr: "Cadres titulaires du Badge de Bois souhaitant se spécialiser dans un domaine ou une fonction précise.",
      audience_ar: "الأطر الحاصلون على الشارة الخشبية الراغبون في التخصص في مجال أو وظيفة محددة.",
      content_fr:
        "Modules thématiques : international, environnement, plein air, expression et arts, communication, gestion de projet ; modules fonctionnels : commissariat, administration, finances, formation.",
      content_ar:
        "وحدات موضوعاتية: العلاقات الدولية، البيئة، الخلاء، التعبير والفنون، التواصل، تدبير المشاريع؛ ووحدات وظيفية: المفوّضية، الإدارة، المالية، التكوين.",
      practice_fr:
        "Mission spécialisée ou responsabilité fonctionnelle dans l'Association pendant une durée validée, avec rapport et évaluation.",
      practice_ar:
        "مهمة تخصصية أو مسؤولية وظيفية داخل الجمعية لمدة محددة، مع إنجاز تقرير وتقييم.",
      color: "from-cyan-500 to-blue-500",
      ring: "ring-cyan-200",
      soft: "bg-cyan-50",
    },
    {
      icon: Users,
      badge_fr: "Étape 5",
      badge_ar: "المرحلة الخامسة",
      title_fr: "Formation d'Assistant Chef de Formation",
      title_ar: "تدريب مساعد قائد التدريب",
      audience_fr: "Cadres expérimentés se destinant à devenir formateurs de cadres au sein de l'Association.",
      audience_ar: "الأطر ذوو الخبرة الذين يستعدون ليصبحوا مكوّنين للأطر داخل الجمعية.",
      content_fr:
        "Ingénierie de formation, andragogie, animation de sessions, évaluation des apprenants, éthique du formateur scout et référentiel de compétences des cadres.",
      content_ar:
        "هندسة التكوين، بيداغوجيا الكبار، تنشيط الحصص التكوينية، تقييم المتدربين، أخلاقيات المكوّن الكشفي ومرجع كفايات الأطر.",
      practice_fr:
        "Co-animation de modules dans les formations de base et de spécialisation, sous le tutorat d'un Chef de Formation certifié.",
      practice_ar:
        "المشاركة في تأطير وحدات التدريب الأساسي والتخصصي بمعية قائد تدريب معتمد ووفق مواكبته.",
      color: "from-rose-500 to-fuchsia-500",
      ring: "ring-rose-200",
      soft: "bg-rose-50",
    },
    {
      icon: GraduationCap,
      badge_fr: "Étape 6",
      badge_ar: "المرحلة السادسة",
      title_fr: "Formation de Chef de Formation",
      title_ar: "تدريب قائد التدريب",
      audience_fr: "Assistants Chefs de Formation ayant démontré leur maîtrise pédagogique et leur engagement durable.",
      audience_ar: "مساعدو قادة التدريب الذين أثبتوا تمكّنهم البيداغوجي والتزامهم المستدام.",
      content_fr:
        "Direction complète de sessions de formation, conception de référentiels et de curricula, supervision des formateurs, politique nationale de formation et représentation de l'Association.",
      content_ar:
        "الإدارة الكاملة لدورات التكوين، تصميم المراجع والمناهج، الإشراف على المكوّنين، السياسة الوطنية للتكوين، وتمثيل الجمعية.",
      practice_fr:
        "Direction d'une session nationale de formation et validation par la Commission Nationale de Formation, aboutissant à la certification de Chef de Formation.",
      practice_ar:
        "إدارة دورة تكوينية وطنية والمصادقة عليها من طرف اللجنة الوطنية للتكوين، تُتوَّج بالحصول على شهادة قائد التدريب.",
      color: "from-violet-600 to-purple-700",
      ring: "ring-violet-200",
      soft: "bg-violet-50",
    },
  ];

  const l = levels[active];
  const Icon = l.icon;

  return (
    <section id="youth-trainings" className="scroll-mt-24 bg-gradient-to-b from-background via-muted/20 to-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={bi("Formations des jeunes", "تكوين الشباب")}
          title={bi(
            "Parcours de formation scoute — de l'initiation au Chef de Formation",
            "المسار التكويني الكشفي — من الإعدادي إلى قائد التدريب",
          )}
          subtitle={bi(
            "Un cursus complet en six étapes qui accompagne le scout depuis la formation préparatoire jusqu'à la certification de Chef de Formation, en passant par la formation de base, le Badge de Bois (2 bûchettes), les modules spécialisés et fonctionnels, et l'assistanat de formation.",
            "مسار تكويني متكامل في ست مراحل يواكب الكشاف من التدريب الإعدادي إلى شهادة قائد التدريب، مرورًا بالتدريب الأساسي، الشارة الخشبية الثنائية، الوحدات التخصصية والوظيفية، ومساعدة قائد التدريب.",
          )}
        />

        {/* Progress ladder */}
        <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {levels.map((lv, i) => {
            const It = lv.icon;
            const isActive = i === active;
            return (
              <li key={i}>
                <button
                  onClick={() => setActive(i)}
                  className={`group relative flex w-full items-start gap-3 rounded-2xl border p-4 text-start transition ${
                    isActive
                      ? "border-primary bg-card shadow-lg ring-2 ring-primary/30"
                      : "border-border bg-card/60 hover:border-primary/50 hover:bg-card"
                  }`}
                >
                  <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${lv.color} text-white shadow-sm`}>
                    <It className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      {isAr ? lv.badge_ar : lv.badge_fr}
                    </span>
                    <span className="mt-1 block text-sm font-semibold leading-snug text-foreground">
                      {isAr ? lv.title_ar : lv.title_fr}
                    </span>
                  </span>
                  <span className="absolute -top-2 end-3 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        {/* Detail card */}
        <article
          key={active}
          className="animate-float-in mt-8 overflow-hidden rounded-3xl border border-border bg-card shadow-xl"
        >
          <header className={`relative ${l.soft} px-6 py-8 sm:px-10 sm:py-10`}>
            <div className="flex items-start gap-4 sm:gap-6">
              <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${l.color} text-white shadow-md sm:h-20 sm:w-20`}>
                <Icon className="h-7 w-7 sm:h-10 sm:w-10" />
              </div>
              <div className="min-w-0 flex-1">
                <div className={`inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-foreground ring-1 ${l.ring}`}>
                  {isAr ? l.badge_ar : l.badge_fr}
                </div>
                <h3 className="mt-3 break-words text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-4xl">
                  {isAr ? l.title_ar : l.title_fr}
                </h3>
              </div>
            </div>
          </header>

          <div className="grid gap-6 px-6 py-8 sm:px-10 sm:py-10 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-background/60 p-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                <Users className="h-4 w-4" />
                {bi("Public visé", "المستفيدون")}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {isAr ? l.audience_ar : l.audience_fr}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background/60 p-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                <BookOpen className="h-4 w-4" />
                {bi("Contenu pédagogique", "المضمون التكويني")}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {isAr ? l.content_ar : l.content_fr}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background/60 p-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                <Tent className="h-4 w-4" />
                {bi("Volet pratique", "الشق العملي")}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {isAr ? l.practice_ar : l.practice_fr}
              </p>
            </div>
          </div>
        </article>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          {bi(
            "Progression fondée sur la promesse, la loi scoute et l'obtention d'insignes, en cohérence avec la méthode scoute mondiale.",
            "تدرّج قائم على الوعد والقانون الكشفي والحصول على الشارات، وفق الطريقة الكشفية العالمية.",
          )}
        </p>
      </div>
    </section>
  );
}
