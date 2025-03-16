import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Ionicons } from "@expo/vector-icons";

export default function InsightsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Insights Dashboard</Text>

      {/* Emotional Well-being */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Emotional Well-being</Text>
        <LineChart
          data={{
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [{ data: [3, 4, 3, 5, 4, 6, 3] }],
          }}
          width={Dimensions.get("window").width - 40}
          height={200}
          chartConfig={{
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(147, 112, 219, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          bezier
        />
      </View>

      {/* Screen Time Trends */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>⏳ Screen Time Trends</Text>
        <Text style={styles.insightText}>Your child used the phone 3h 10m today. AI suggests reducing late-night usage.</Text>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="time-outline" size={20} color="white" />
          <Text style={styles.actionButtonText}>Adjust Limits</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F0FFF0" },
  title: { fontSize: 24, fontWeight: "bold", color: "#9370DB", textAlign: "center", marginBottom: 10 },
  section: { marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#9370DB", marginBottom: 5 },
  actionButton: { backgroundColor: "#9370DB", padding: 10, borderRadius: 8, flexDirection: "row", alignItems: "center", justifyContent: "center" },
  actionButtonText: { color: "white", fontSize: 16, marginLeft: 5 },
  insightText: { color: "#333", marginBottom: 10 }
});
