import { Eye } from "lucide-react";
import { useBi } from "@/lib/i18n";
import { useOnlineCount } from "@/hooks/use-online-count";

export function OnlineVisitors() {
  const bi = useBi();
  const count = useOnlineCount();

  return (
    <a
      href="#statistiques"
      className="fixed bottom-4 end-4 z-50 inline-flex items-center gap-2 rounded-full border border-border bg-background/90 px-3.5 py-2 text-xs font-semibold text-foreground shadow-lg backdrop-blur-md transition-transform hover:scale-105"
      aria-live="polite"
      title={bi("Visiteurs en ligne — voir les statistiques", "الزوار المتصلون الآن — عرض الإحصائيات")}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
      </span>
      <Eye className="h-3.5 w-3.5 text-primary" />
      <span className="tabular-nums">{count}</span>
      <span className="text-muted-foreground">{bi("en ligne", "متصل الآن")}</span>
    </a>
  );
}
