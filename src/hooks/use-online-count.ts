import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { RealtimeChannel } from "@supabase/supabase-js";

function getSessionId() {
  try {
    let id = sessionStorage.getItem("visit_session_id");
    if (!id) {
      id =
        (typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : Math.random().toString(36).slice(2)) + "-" + Date.now();
      sessionStorage.setItem("visit_session_id", id);
    }
    return id;
  } catch {
    return "anon-" + Date.now();
  }
}

export const visitSessionId = getSessionId;

let channel: RealtimeChannel | null = null;
let subscribers = 0;
let current = 1;
const listeners = new Set<(n: number) => void>();

function ensureChannel() {
  if (channel) return channel;
  channel = supabase.channel("online-visitors", {
    config: { presence: { key: getSessionId() } },
  });
  channel
    .on("presence", { event: "sync" }, () => {
      current = Object.keys(channel!.presenceState()).length || 1;
      listeners.forEach((l) => l(current));
    })
    .subscribe(async (status) => {
      if (status === "SUBSCRIBED") {
        await channel!.track({ online_at: new Date().toISOString() });
      }
    });
  return channel;
}

/** Shared live presence count — safe to use from multiple components. */
export function useOnlineCount() {
  const [count, setCount] = useState(current);

  useEffect(() => {
    subscribers += 1;
    ensureChannel();
    listeners.add(setCount);
    setCount(current);

    return () => {
      listeners.delete(setCount);
      subscribers -= 1;
      if (subscribers === 0 && channel) {
        supabase.removeChannel(channel);
        channel = null;
      }
    };
  }, []);

  return count;
}
