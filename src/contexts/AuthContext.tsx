import { createContext, useState, useContext } from "react";

type AuthContextValue = {
  isAuthenticated: boolean;
  user: {
    name: string;
  } | null;
  login: () => void;
  logout: () => void;
};
type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextValue>({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
});

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ name: string } | null>(null);

  const login = () => {
    setIsAuthenticated(true);
    setUser({ name: "John Doe" });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }
  return context;
};

const useIsAuthenticated = () => {
  const { isAuthenticated } = useAuthContext();
  return isAuthenticated;
};

export { AuthProvider, useAuthContext, useIsAuthenticated };
