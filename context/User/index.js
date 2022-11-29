import { createContext, useState } from "react";

export const AuthContext = createContext({
  authToken: "",
  isAuthenticated: false,
  authenticate: (authToken) => {},
  logout: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState();

  const authenticate = (authToken) => {
    setAuthToken(authToken);
  };

  const logout = () => {
    setAuthToken(null);
  };

  const value = {
    authToken,
    isAuthenticated: !!authToken,
    authenticate,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
