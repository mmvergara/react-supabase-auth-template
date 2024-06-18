if (!import.meta.env.VITE_SUPABASE_ANON_KEY)
  throw new Error("VITE_SUPABASE_ANON_KEY is required");
if (!import.meta.env.VITE_SUPABASE_URL)
  throw new Error("VITE_SUPABASE_URL is required");

export const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
