import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  // Public routes
  index("routes/home.tsx"),
  route("auth/sign-in", "routes/auth/sign-in.tsx"),
  route("auth/sign-up", "routes/auth/sign-up.tsx"),

  // Auth protected routes
  layout("routes/auth-protected-layout.tsx", [
    route("protected", "routes/protected.tsx"),
  ]),

  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
