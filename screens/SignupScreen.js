import { useState, useContext } from "react";
import { Alert } from "react-native";

import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { createUser } from "../services/auth";
import { AuthContext } from "../context/User";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const { authenticate } = useContext(AuthContext);

  const signUpHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      const data = await createUser(email, password);
      authenticate(data?.idToken);
    } catch {
      Alert.alert("Operation failed", "Try again");
      setIsAuthenticating(false);
    }
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
