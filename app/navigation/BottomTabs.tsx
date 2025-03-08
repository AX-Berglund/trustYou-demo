import React from "react";
import { createBottomTabNavigator, BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import EmotionScreen from "../screens/EmotionScreen";
import { Ionicons } from "@expo/vector-icons";

// Define the tab navigator type
type BottomTabParamList = {
  Home: undefined;
  Chat: undefined;
  Emotion: undefined;
};

// Create the tab navigator with proper typing
const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      id={undefined}
      screenOptions={({ route }: { route: RouteProp<BottomTabParamList, keyof BottomTabParamList> }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;
          if (route.name === "Home") iconName = "home";
          else if (route.name === "Chat") iconName = "chatbubbles";
          else iconName = "happy";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Emotion" component={EmotionScreen} />
    </Tab.Navigator>
  );
}
