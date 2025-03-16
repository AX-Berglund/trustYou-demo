import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Greeting and Summary */}
      <Text style={styles.title}>TrustYou AI Dashboard</Text>
      <Text style={styles.subtitle}>AI-driven insights to support your child's digital well-being.</Text>

      {/* AI Summary Section */}
      <View style={styles.summaryCard}>
        <Text style={styles.sectionTitle}>📊 AI Summary</Text>
        <Text style={styles.summaryText}>Your child's screen time is balanced today. Some stress detected at night.</Text>
        <TouchableOpacity 
          style={styles.viewButton} 
          onPress={() => navigation.navigate("Insights")}
        >
          <Text style={styles.viewButtonText}>View Full Insights</Text>
        </TouchableOpacity>
      </View>

      {/* Key Metrics */}
      <View style={styles.metricsContainer}>
        <View style={styles.metricCard}>
          <Ionicons name="time-outline" size={28} color="#9370DB" />
          <Text style={styles.metricTitle}>Screen Time</Text>
          <Text style={styles.metricValue}>2h 30m</Text>
        </View>
        <View style={styles.metricCard}>
          <Ionicons name="happy-outline" size={28} color="#9370DB" />
          <Text style={styles.metricTitle}>Emotional Well-being</Text>
          <Text style={styles.metricValue}>😊 Mostly Positive</Text>
        </View>
      </View>

      {/* AI Nudges & Alerts */}
      <View style={styles.alertCard}>
        <Text style={styles.sectionTitle}>⚠️ AI Insights</Text>
        <Text style={styles.alertText}>Increased social media usage at night.</Text>
        <TouchableOpacity 
          style={styles.adjustButton} 
          onPress={() => navigation.navigate("ScreenTimeSettings")}
        >
          <Text style={styles.adjustButtonText}>Adjust Screen Limits</Text>
        </TouchableOpacity>
      </View>

      {/* Quick Actions */}
      <View style={styles.actionContainer}>
        <TouchableOpacity 
          style={styles.actionButton} 
          onPress={() => navigation.navigate("InsightsScreen")}
        >
          <Ionicons name="bar-chart-outline" size={24} color="white" />
          <Text style={styles.actionButtonText}>View Insights</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.actionButton} 
          onPress={() => navigation.navigate("SettingsScreen")}
        >
          <Ionicons name="settings-outline" size={24} color="white" />
          <Text style={styles.actionButtonText}>Manage Settings</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: "#F0FFF0", alignItems: "center" },
  title: { fontSize: 28, fontWeight: "bold", color: "#9370DB", marginBottom: 10 },
  subtitle: { fontSize: 18, color: "#555", textAlign: "center", marginBottom: 20 },

  summaryCard: { backgroundColor: "#D8BFD8", padding: 20, borderRadius: 12, width: "100%", marginBottom: 15, elevation: 3 },
  sectionTitle: { fontSize: 20, fontWeight: "bold", color: "#9370DB", marginBottom: 5 },
  summaryText: { fontSize: 16, color: "#333", marginBottom: 10 },
  viewButton: { backgroundColor: "#9370DB", padding: 10, borderRadius: 8, alignItems: "center" },
  viewButtonText: { color: "white", fontSize: 16, fontWeight: "bold" },

  metricsContainer: { flexDirection: "row", justifyContent: "space-between", width: "100%", marginBottom: 15 },
  metricCard: { backgroundColor: "#FFF", padding: 15, borderRadius: 12, alignItems: "center", flex: 1, marginHorizontal: 5, elevation: 2 },
  metricTitle: { fontSize: 16, fontWeight: "bold", color: "#9370DB" },
  metricValue: { fontSize: 18, color: "#333", marginTop: 5 },

  alertCard: { backgroundColor: "#FFDAB9", padding: 15, borderRadius: 12, width: "100%", marginBottom: 15, elevation: 3 },
  alertText: { fontSize: 16, color: "#333", marginBottom: 10 },
  adjustButton: { backgroundColor: "#FFA07A", padding: 10, borderRadius: 8, alignItems: "center" },
  adjustButtonText: { color: "white", fontSize: 16, fontWeight: "bold" },

  actionContainer: { flexDirection: "row", justifyContent: "space-between", width: "100%" },
  actionButton: { flexDirection: "row", alignItems: "center", backgroundColor: "#9370DB", padding: 12, borderRadius: 8, flex: 1, justifyContent: "center", marginHorizontal: 5 },
  actionButtonText: { color: "white", fontSize: 16, fontWeight: "bold", marginLeft: 5 },
});
