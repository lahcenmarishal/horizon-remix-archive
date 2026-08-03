CREATE TABLE public.site_visits (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  visited_at timestamptz NOT NULL DEFAULT now(),
  session_id text,
  path text
);

CREATE INDEX site_visits_visited_at_idx ON public.site_visits (visited_at);

GRANT INSERT ON public.site_visits TO anon, authenticated;
GRANT ALL ON public.site_visits TO service_role;

ALTER TABLE public.site_visits ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can record a visit"
ON public.site_visits FOR INSERT TO anon, authenticated
WITH CHECK (true);

CREATE OR REPLACE FUNCTION public.visitor_stats(_bucket text)
RETURNS TABLE (bucket_start timestamptz, visits bigint, sessions bigint)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT date_trunc(
           CASE WHEN _bucket IN ('day','month','year') THEN _bucket ELSE 'day' END,
           visited_at
         ) AS bucket_start,
         count(*) AS visits,
         count(DISTINCT session_id) AS sessions
  FROM public.site_visits
  GROUP BY 1
  ORDER BY 1
$$;

CREATE OR REPLACE FUNCTION public.visitor_totals()
RETURNS TABLE (total_visits bigint, total_sessions bigint, today_visits bigint, first_visit timestamptz)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT count(*),
         count(DISTINCT session_id),
         count(*) FILTER (WHERE visited_at >= date_trunc('day', now())),
         min(visited_at)
  FROM public.site_visits
$$;

GRANT EXECUTE ON FUNCTION public.visitor_stats(text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.visitor_totals() TO anon, authenticated;