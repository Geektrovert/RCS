import { useMemo } from "react";
import { Routes as RouteSwitch, Route } from "react-router-dom";

import routes from "./config";
import useSuspensedRoute from "../hooks/useSuspensedRoute";
import usePermissionedRoute from "../hooks/usePermissionedRoute";
import { useIsAuthenticated, useAuthContext } from "../contexts/AuthContext";

export default function Routes() {
  const { user } = useAuthContext();

  const suspense = useSuspensedRoute();
  const checkPermission = usePermissionedRoute(user);

  const routesToRender = useMemo(
    () => routes.map(checkPermission).map(suspense),
    [routes]
  );

  return (
    <RouteSwitch>
      {routesToRender.map((route) => (
        <Route key={route.path} path={route.path} element={route.Element} />
      ))}
    </RouteSwitch>
  );
}
