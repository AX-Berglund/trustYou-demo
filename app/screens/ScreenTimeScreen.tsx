import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import { NativeModules } from "react-native";

const { ScreenTimeModule } = NativeModules;

export default function ScreenTimeScreen() {
  const [screenTimeData, setScreenTimeData] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    // Request permission when the screen loads
    ScreenTimeModule.requestAuthorization((granted: boolean) => {
      if (!granted) {
        Alert.alert("Permission Required", "Please allow screen time access in settings.");
      }
    });
  }, []);

  const fetchScreenTimeData = () => {
    ScreenTimeModule.getScreenTimeSummary((data: { [key: string]: string }) => {
      setScreenTimeData(data);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📊 Screen Time Report</Text>
      <Button title="Fetch Screen Time Data" onPress={fetchScreenTimeData} />
      
      {Object.entries(screenTimeData).length > 0 ? (
        <View style={styles.dataContainer}>
          {Object.entries(screenTimeData).map(([app, time]) => (
            <Text key={app} style={styles.dataText}>{app}: {time}</Text>
          ))}
        </View>
      ) : (
        <Text style={styles.infoText}>No data available. Press the button to fetch.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#F0FFF0" },
  title: { fontSize: 24, fontWeight: "bold", color: "#9370DB", marginBottom: 10 },
  infoText: { fontSize: 16, color: "#555", textAlign: "center", marginTop: 10 },
  dataContainer: { marginTop: 15, width: "100%", padding: 10, backgroundColor: "#FFF", borderRadius: 10 },
  dataText: { fontSize: 16, color: "#333", marginBottom: 5 },
});
