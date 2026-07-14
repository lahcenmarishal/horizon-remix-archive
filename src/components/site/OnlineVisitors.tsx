import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useBi } from "@/lib/i18n";

export function OnlineVisitors() {
  const bi = useBi();
  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    const visitorId =
      (typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : Math.random().toString(36).slice(2)) + "-" + Date.now();

    const channel = supabase.channel("online-visitors", {
      config: { presence: { key: visitorId } },
    });

    channel
      .on("presence", { event: "sync" }, () => {
        const state = channel.presenceState();
        setCount(Object.keys(state).length || 1);
      })
      .subscribe(async (status) => {
        if (status === "SUBSCRIBED") {
          await channel.track({ online_at: new Date().toISOString() });
        }
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div
      className="fixed bottom-4 end-4 z-50 inline-flex items-center gap-2 rounded-full border border-border bg-background/90 px-3.5 py-2 text-xs font-semibold text-foreground shadow-lg backdrop-blur-md"
      aria-live="polite"
      title={bi("Visiteurs en ligne", "الزوار المتصلون الآن")}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
      </span>
      <Eye className="h-3.5 w-3.5 text-primary" />
      <span className="tabular-nums">{count}</span>
      <span className="text-muted-foreground">
        {bi(count > 1 ? "en ligne" : "en ligne", "متصل الآن")}
      </span>
    </div>
  );
}
