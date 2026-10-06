import type { Config } from "@react-router/dev/config";

export default {
  // SPA mode: Supabase keeps the session in the browser, so there is no
  // runtime server. The root route is pre-rendered to build/client/index.html.
  ssr: false,
} satisfies Config;
