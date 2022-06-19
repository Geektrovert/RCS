import { useIsAuthenticated } from "../contexts/AuthContext";

export default function useSuspensedRoute(user: { name: string } | null) {
  const isAuthenticated = useIsAuthenticated();

  return (route: CustomRouteType) => {
    const shouldRender = isAuthenticated && route.needsAuth;
    const PermissionedElement = shouldRender ? (
      route.Element
    ) : (
      <>Permission Denied</>
    );

    return {
      ...route,
      Element: route.needsAuth ? PermissionedElement : route.Element,
    };
  };
}
