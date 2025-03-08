import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";

export default function EmotionScreen() {
  const [logs, setLogs] = useState<{ id: string; text: string }[]>([]);
  const [emotion, setEmotion] = useState("");

  const addLog = () => {
    if (!emotion.trim()) return;
    setLogs([{ id: Date.now().toString(), text: emotion }, ...logs]);
    setEmotion("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emotional Well-being Log</Text>
      <TextInput style={styles.input} value={emotion} onChangeText={setEmotion} placeholder="How are you feeling today?" />
      <Button title="Log Emotion" onPress={addLog} />
      <FlatList data={logs} keyExtractor={(item) => item.id} renderItem={({ item }) => <Text style={styles.logItem}>{item.text}</Text>} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F0FFF0" },
  title: { fontSize: 22, fontWeight: "bold", color: "#007AFF", marginBottom: 10 },
  input: { borderWidth: 1, borderColor: "#ddd", padding: 10, borderRadius: 5, backgroundColor: "#fff", marginBottom: 10 },
  logItem: { padding: 10, borderBottomWidth: 1, borderBottomColor: "#ddd" },
});
