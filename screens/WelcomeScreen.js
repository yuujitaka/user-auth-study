import { StyleSheet, Text, View } from "react-native";
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../context/User";
import axios from "axios";

function WelcomeScreen() {
  const [fetchedText, setFetchedText] = useState();
  const { authToken } = useContext(AuthContext);

  useEffect(() => {
    const fetchText = async () => {
      const response = await axios.get(
        `https://expense-app-8e835-default-rtdb.firebaseio.com/message.json?auth=${authToken}`
      );
      setFetchedText(response.data);
    };
    fetchText();
  }, [authToken]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedText}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
