import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LineChart } from "react-native-chart-kit";

export default function EmotionScreen() {
  const [logs, setLogs] = useState<{ id: string; mood: string; time: string }[]>([]);
  const [emotion, setEmotion] = useState("");

  const addLog = () => {
    if (!emotion.trim()) return;
    const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setLogs([{ id: Date.now().toString(), mood: emotion, time: timestamp }, ...logs]);
    setEmotion("");
  };

  return (
    <FlatList
      data={logs}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <>
          <Text style={styles.title}>Emotional Well-being</Text>
          <Text style={styles.subtitle}>Track emotional trends and receive AI-driven insights.</Text>

          {/* Mood Logging Section */}
          <View style={styles.inputSection}>
            <TextInput
              style={styles.input}
              value={emotion}
              onChangeText={setEmotion}
              placeholder="How is your child feeling today?"
              placeholderTextColor="#555"
            />
            <TouchableOpacity style={styles.logButton} onPress={addLog}>
              <Text style={styles.logButtonText}>Log Emotion</Text>
            </TouchableOpacity>
          </View>

          {/* AI Emotional Insights */}
          <View style={styles.trendCard}>
            <View style={styles.cardHeader}>
              <Ionicons name="analytics-outline" size={28} color="#9370DB" />
              <Text style={styles.trendTitle}>AI Emotional Analysis</Text>
            </View>
            <Text style={styles.trendText}>😊 Positive mood detected 70% of the time.</Text>
            <Text style={styles.trendText}>⚠️ Some stress signals detected in late-night screen activity.</Text>
            <TouchableOpacity style={styles.trendButton}>
              <Text style={styles.trendButtonText}>View AI Recommendations</Text>
            </TouchableOpacity>
          </View>

          {/* Emotional Trends Chart */}
          <View style={styles.chartContainer}>
            <Text style={styles.chartTitle}>Mood Trends Over Time</Text>
            <LineChart
              data={{
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                datasets: [{ data: [2, 4, 3, 5, 4, 6, 3] }],
              }}
              width={Dimensions.get("window").width - 40}
              height={220}
              yAxisLabel=""
              yAxisSuffix=""
              chartConfig={{
                backgroundGradientFrom: "#F0FFF0",
                backgroundGradientTo: "#F0FFF0",
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(147, 112, 219, ${opacity})`, // #9370DB
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                propsForDots: { r: "6", strokeWidth: "2", stroke: "#9370DB" },
              }}
              bezier
              style={{ borderRadius: 10 }}
            />
          </View>

          <Text style={styles.logTitle}>Recent Emotional Logs</Text>
        </>
      }
      contentContainerStyle={styles.listContainer}
      renderItem={({ item }) => (
        <View style={styles.logItem}>
          <Text style={styles.logText}>{item.mood}</Text>
          <Text style={styles.logTime}>{item.time}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: { padding: 20, backgroundColor: "#F0FFF0" }, // Light background
  title: { fontSize: 28, fontWeight: "bold", color: "#9370DB", marginBottom: 5, textAlign: "center" }, // Medium Purple
  subtitle: { fontSize: 18, color: "#555", textAlign: "center", marginBottom: 20 },

  // Mood Logging Section
  inputSection: { marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#9370DB",
    padding: 14,
    borderRadius: 10,
    backgroundColor: "#fff",
    fontSize: 18,
    marginBottom: 10,
  },
  logButton: { backgroundColor: "#9370DB", padding: 14, borderRadius: 8, alignItems: "center" },
  logButtonText: { color: "white", fontSize: 18, fontWeight: "bold" },

  // AI Insights
  trendCard: { backgroundColor: "#D8BFD8", padding: 20, borderRadius: 12, marginBottom: 20, elevation: 3 }, // Thistle Purple
  cardHeader: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  trendTitle: { fontSize: 20, fontWeight: "bold", marginLeft: 10, color: "#9370DB" },
  trendText: { fontSize: 18, color: "#333", marginBottom: 5 },
  trendButton: { marginTop: 10, backgroundColor: "#9370DB", padding: 12, borderRadius: 8, alignItems: "center" },
  trendButtonText: { color: "white", fontSize: 16, fontWeight: "bold" },

  // Chart Section
  chartContainer: { marginBottom: 20, alignItems: "center", backgroundColor: "#D8BFD8", padding: 20, borderRadius: 12, elevation: 3 },
  chartTitle: { fontSize: 20, fontWeight: "bold", color: "#9370DB", marginBottom: 10 },

  // Log Section
  logTitle: { fontSize: 22, fontWeight: "bold", color: "#9370DB", marginBottom: 10 },
  logItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#D8BFD8", // Thistle Purple
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  logText: { fontSize: 18, color: "#333" },
  logTime: { fontSize: 16, color: "#555" },
});
