import React, { useState, useRef } from "react";
import { View, TextInput, FlatList, Text, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity, ActivityIndicator, Keyboard, TouchableWithoutFeedback, ScrollView, Button } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello! How can I help you today?', sender: 'bot' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const flatListRef = useRef<FlatList>(null);
  const insets = useSafeAreaInsets();

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = { id: Date.now().toString(), text: inputText, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]); // Append new message
    setInputText('');

    // Scroll to bottom when a new message is sent
    setTimeout(() => flatListRef.current?.scrollToEnd({ animated: true }), 100);

    setIsTyping(true);
    try {
      const response = await fetch("http://192.168.0.67:5001/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage.text })
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { id: Date.now().toString(), text: data.reply, sender: "bot" }]);
    } catch (error) {
      console.error(error);
    }
    setIsTyping(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.container, { paddingBottom: insets.bottom }]}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.chatContainer}>
          <FlatList
            ref={flatListRef}
            data={[...messages].reverse()}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={[styles.messageContainer, item.sender === 'user' ? styles.userMessage : styles.botMessage]}>
                <Text style={styles.messageText}>{item.text}</Text>
              </View>
            )}
            contentContainerStyle={{ paddingBottom: 10 }}
            inverted
            onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
            onLayout={() => flatListRef.current?.scrollToEnd({ animated: true })}
          />

          {isTyping && (
            <View style={styles.typingIndicator}>
              <ActivityIndicator size="small" color="#999" />
              <Text style={styles.typingText}>Thinking...</Text>
            </View>
          )}

          <View style={[styles.inputContainer, { marginBottom: insets.bottom + 10 }]}>
            <TextInput
              style={styles.input}
              value={inputText}
              onChangeText={setInputText}
              placeholder="Type a message..."
              placeholderTextColor="#888"
              onSubmitEditing={sendMessage}
            />
            <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
              <Ionicons name="send" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0FFF0' },
  chatContainer: { flex: 1, paddingLeft: 10, paddingRight: 10 },
  messageContainer: { maxWidth: '80%', padding: 12, borderRadius: 12, marginVertical: 5 },
  userMessage: { backgroundColor: '#9370DB', alignSelf: 'flex-end' },
  botMessage: { backgroundColor: '#D8BFD8', alignSelf: 'flex-start' },
  messageText: { fontSize: 16, color: '#fff' },
  typingIndicator: { flexDirection: 'row', alignItems: 'center', padding: 5, marginBottom: 10 },
  typingText: { marginLeft: 8, color: '#666' },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 110,
    paddingHorizontal: 10,
    backgroundColor: '#F0FFF0',
    borderTopWidth: 1,
    borderColor: '#F0FFF0',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
