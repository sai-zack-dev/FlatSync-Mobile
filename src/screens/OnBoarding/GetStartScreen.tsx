import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

interface GetStartScreenProps {
  setIsNewUser: (value: boolean) => void;
}

const GetStartScreen: React.FC<GetStartScreenProps> = ({ setIsNewUser }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get Started</Text>
      <Button title="Sign Up" onPress={() => setIsNewUser(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold" },
});

export default GetStartScreen;
