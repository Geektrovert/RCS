import { Suspense } from "react";

export default function useSuspensedRoute() {
  return (route: CustomRouteType) => ({
    ...route,
    Element: (
      <Suspense fallback={<div>Loading...</div>}>{route.Element}</Suspense>
    ),
  });
}
