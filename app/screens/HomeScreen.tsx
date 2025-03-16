import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>TrustYou AI Dashboard</Text>
      <Text style={styles.subtitle}>AI-driven insights to support your child's digital well-being.</Text>

      {/* Screen Time Insights */}
      <View style={styles.infoCard}>
        <View style={styles.cardHeader}>
          <Ionicons name="time-outline" size={28} color="#9370DB" />
          <Text style={styles.infoTitle}>Screen Time Summary</Text>
        </View>
        <Text style={styles.infoText}>✅ Balanced usage this week.</Text>
        <Text style={styles.infoText}>⚠️ 45% increase in social media use at night.</Text>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Adjust Screen Limits</Text>
        </TouchableOpacity>
      </View>

      {/* Emotional Trends */}
      <View style={styles.infoCard}>
        <View style={styles.cardHeader}>
          <Ionicons name="heart-outline" size={28} color="#9370DB" />
          <Text style={styles.infoTitle}>Emotional Trends</Text>
        </View>
        <Text style={styles.infoText}>😊 Mostly positive interactions.</Text>
        <Text style={styles.infoText}>⚠️ AI detected increased stress in evening chats.</Text>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>View Emotional Insights</Text>
        </TouchableOpacity>
      </View>

      {/* Nudges & Suggestions */}
      <View style={styles.infoCard}>
        <View style={styles.cardHeader}>
          <Ionicons name="bulb-outline" size={28} color="#9370DB" />
          <Text style={styles.infoTitle}>Suggestions</Text>
        </View>
        <Text style={styles.infoText}>Try reducing screen time before bedtime.</Text>
        <Text style={styles.infoText}>AI suggests adding more educational app usage.</Text>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Apply AI Suggestions</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: "#F0FFF0", alignItems: "center" }, // Light Greenish Pastel
  title: { fontSize: 28, fontWeight: "bold", color: "#9370DB", marginBottom: 10 }, // Medium Purple
  subtitle: { fontSize: 18, color: "#555", textAlign: "center", marginBottom: 20 },

  infoCard: { 
    backgroundColor: "#D8BFD8", // Thistle Purple
    padding: 20, 
    borderRadius: 12, 
    width: "100%", 
    marginBottom: 15, 
    elevation: 3 
  },

  cardHeader: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  infoTitle: { fontSize: 20, fontWeight: "bold", marginLeft: 10, color: "#9370DB" }, // Medium Purple
  infoText: { fontSize: 18, color: "#333", marginBottom: 5 },

  actionButton: { 
    marginTop: 10, 
    backgroundColor: "#9370DB", // Medium Purple
    padding: 12, 
    borderRadius: 8, 
    alignItems: "center" 
  },

  actionButtonText: { color: "white", fontSize: 16, fontWeight: "bold" },
});
