import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Parental Advisor</Text>
      <Text style={styles.description}>Monitor and support your child’s digital well-being.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#F0FFF0" },
  title: { fontSize: 24, fontWeight: "bold", color: "#007AFF" },
  description: { fontSize: 16, textAlign: "center", color: "#333", marginTop: 10 },
});
