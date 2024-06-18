import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://<project>.supabase.co",
  "<your-anon-key>"
);
