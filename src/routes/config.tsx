import { lazy } from "react";
import { FiHome } from "react-icons/fi";

const Home = lazy(() => import("../pages/Home"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Login = lazy(() => import("../pages/Login"));

const routes: CustomRouteType[] = [
  {
    path: "/",
    Element: <Home />,
    title: "Home",
    showInMenu: true,
    hasMenu: true,
    icon: FiHome,
    needsAuth: false,
    isPermissioned: false,
  },
  {
    path: "/dashboard",
    Element: <Dashboard />,
    title: "Dashboard",
    showInMenu: true,
    hasMenu: true,
    icon: FiHome,
    needsAuth: true,
    isPermissioned: false,
  },
  {
    path: "/dashboard/admin",
    Element: <Dashboard />,
    title: "Admin Dashboard",
    showInMenu: true,
    hasMenu: true,
    icon: FiHome,
    needsAuth: true,
    isPermissioned: true,
    allowedRoles: ["admin", "moderator"],
  },
  {
    path: "/login",
    Element: <Login />,
    title: "Login",
    showInMenu: true,
    hasMenu: false,
    icon: FiHome,
    needsAuth: false,
    isPermissioned: false,
  },
];

export default routes;
