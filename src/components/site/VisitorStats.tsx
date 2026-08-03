import { useEffect, useMemo, useState } from "react";
import { Eye, Users, CalendarDays, Activity } from "lucide-react";
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
} from "recharts";
import { supabase } from "@/integrations/supabase/client";
import { useBi, useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { useOnlineCount, visitSessionId } from "@/hooks/use-online-count";

type Bucket = "day" | "month" | "year";
type Row = { bucket_start: string; visits: number; sessions: number };
type Totals = {
  total_visits: number;
  total_sessions: number;
  today_visits: number;
  first_visit: string | null;
};

export function VisitorStats() {
  const bi = useBi();
  const { lang } = useI18n();
  const [bucket, setBucket] = useState<Bucket>("day");
  const [rows, setRows] = useState<Row[]>([]);
  const [totals, setTotals] = useState<Totals | null>(null);
  const online = useOnlineCount();
  const [loading, setLoading] = useState(true);

  // Record the visit once per browser session
  useEffect(() => {
    const sessionId = visitSessionId();
    try {
      if (sessionStorage.getItem("visit_recorded") === "1") return;
      sessionStorage.setItem("visit_recorded", "1");
    } catch {}
    supabase
      .from("site_visits")
      .insert({ session_id: sessionId, path: window.location.pathname })
      .then(() => {});
  }, []);

  // Stats
  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      const [statsRes, totalsRes] = await Promise.all([
        supabase.rpc("visitor_stats", { _bucket: bucket }),
        supabase.rpc("visitor_totals"),
      ]);
      if (cancelled) return;
      setRows((statsRes.data as Row[]) ?? []);
      const t = (totalsRes.data as Totals[] | Totals | null);
      setTotals(Array.isArray(t) ? (t[0] ?? null) : t);
      setLoading(false);
    };
    load();
    const timer = window.setInterval(load, 60000);
    return () => {
      cancelled = true;
      window.clearInterval(timer);
    };
  }, [bucket]);

  const locale = lang === "ar" ? "ar-MA" : "fr-FR";

  const data = useMemo(() => {
    const limited = bucket === "day" ? rows.slice(-30) : rows;
    return limited.map((r) => {
      const d = new Date(r.bucket_start);
      const label =
        bucket === "day"
          ? d.toLocaleDateString(locale, { day: "2-digit", month: "short" })
          : bucket === "month"
            ? d.toLocaleDateString(locale, { month: "short", year: "2-digit" })
            : d.getFullYear().toString();
      return { label, visits: Number(r.visits), sessions: Number(r.sessions) };
    });
  }, [rows, bucket, locale]);

  const buckets: { key: Bucket; fr: string; ar: string }[] = [
    { key: "day", fr: "Journalier", ar: "يومي" },
    { key: "month", fr: "Mensuel", ar: "شهري" },
    { key: "year", fr: "Annuel", ar: "سنوي" },
  ];

  const cards = [
    {
      icon: Activity,
      value: online,
      fr: "En ligne maintenant",
      ar: "متصل الآن",
    },
    {
      icon: Eye,
      value: Number(totals?.total_visits ?? 0),
      fr: "Visites totales",
      ar: "إجمالي الزيارات",
    },
    {
      icon: Users,
      value: Number(totals?.total_sessions ?? 0),
      fr: "Visiteurs uniques",
      ar: "زوار فريدون",
    },
    {
      icon: CalendarDays,
      value: Number(totals?.today_visits ?? 0),
      fr: "Visites aujourd'hui",
      ar: "زيارات اليوم",
    },
  ];

  return (
    <section id="statistiques" className="border-t border-border bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            {bi("Statistiques", "إحصائيات")}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
            {bi("Tableau de bord des visiteurs", "لوحة إحصائيات زوار الموقع")}
          </h2>
          <p className="mt-3 text-muted-foreground">
            {bi(
              "Suivi en temps réel de l'audience du site depuis sa création : visites journalières, mensuelles et annuelles.",
              "متابعة مباشرة لعدد زوار الموقع منذ إنشائه: زيارات يومية وشهرية وسنوية.",
            )}
          </p>
        </header>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {cards.map((c) => (
            <div
              key={c.fr}
              className="rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <c.icon className="h-5 w-5 text-primary" />
              <p className="mt-3 font-display text-3xl font-bold tabular-nums">
                {c.value.toLocaleString(locale)}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{bi(c.fr, c.ar)}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-card p-4 shadow-sm md:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="font-display text-lg font-semibold">
              {bi("Évolution des visites", "تطور الزيارات")}
            </h3>
            <div className="inline-flex rounded-full border border-border bg-muted p-1">
              {buckets.map((b) => (
                <button
                  key={b.key}
                  type="button"
                  onClick={() => setBucket(b.key)}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-xs font-semibold transition-colors",
                    bucket === b.key
                      ? "bg-primary text-primary-foreground shadow"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {bi(b.fr, b.ar)}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 h-72 w-full">
            {loading ? (
              <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                {bi("Chargement…", "جار التحميل…")}
              </div>
            ) : data.length === 0 ? (
              <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                {bi("Aucune donnée pour le moment.", "لا توجد بيانات حاليا.")}
              </div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ left: -20, right: 8, top: 8 }}>
                  <defs>
                    <linearGradient id="visitsFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.45} />
                      <stop offset="100%" stopColor="var(--primary)" stopOpacity={0.03} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" vertical={false} />
                  <XAxis dataKey="label" tickLine={false} axisLine={false} fontSize={11} />
                  <YAxis tickLine={false} axisLine={false} fontSize={11} allowDecimals={false} />
                  <Tooltip
                    contentStyle={{
                      background: "var(--card)",
                      border: "1px solid var(--border)",
                      borderRadius: 12,
                      fontSize: 12,
                      color: "var(--foreground)",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="visits"
                    name={bi("Visites", "الزيارات")}
                    stroke="var(--primary)"
                    strokeWidth={2}
                    fill="url(#visitsFill)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </div>

          {!loading && data.length > 0 && (
            <div className="mt-8 h-56 w-full">
              <h4 className="mb-3 text-sm font-semibold text-muted-foreground">
                {bi("Visiteurs uniques", "الزوار الفريدون")}
              </h4>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ left: -20, right: 8 }}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" vertical={false} />
                  <XAxis dataKey="label" tickLine={false} axisLine={false} fontSize={11} />
                  <YAxis tickLine={false} axisLine={false} fontSize={11} allowDecimals={false} />
                  <Tooltip
                    contentStyle={{
                      background: "var(--card)",
                      border: "1px solid var(--border)",
                      borderRadius: 12,
                      fontSize: 12,
                      color: "var(--foreground)",
                    }}
                  />
                  <Bar
                    dataKey="sessions"
                    name={bi("Visiteurs", "زوار")}
                    fill="var(--primary)"
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

          {totals?.first_visit && (
            <p className="mt-6 text-center text-xs text-muted-foreground">
              {bi("Données collectées depuis le ", "البيانات مجمعة منذ ")}
              {new Date(totals.first_visit).toLocaleDateString(locale, {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
