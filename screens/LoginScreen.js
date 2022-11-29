import { useState, useContext } from "react";
import { Alert } from "react-native";

import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { login } from "../services/auth";
import { AuthContext } from "../context/User";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const { authenticate } = useContext(AuthContext);

  const loginHandler = async ({ email, password }) => {
    setIsAuthenticating(true);

    try {
      const data = await login(email, password);
      authenticate(data?.idToken);
    } catch {
      Alert.alert("Authentication failed", "Try again later");
      setIsAuthenticating(false);
    }
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
