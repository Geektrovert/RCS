import { IconType } from "react-icons/lib";

export { };

declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */
  type CustomRouteType = {
    path: string;
    Element: React.ReactElement;
    title: string;
    showInMenu?: boolean;
    hasMenu?: boolean;
    icon?: IconType,
    needsAuth: boolean,
    isPermissioned: boolean,
    allowedRoles?: string[],
  }
}
