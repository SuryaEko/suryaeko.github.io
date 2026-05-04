import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";

export default async function handler(
  _req: VercelRequest,
  res: VercelResponse
) {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
  );

  const { data, error } = await supabase
    .from("profile")
    .select("*")
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate");
  return res.json(data);
}
