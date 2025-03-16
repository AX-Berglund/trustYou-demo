import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import InsightsScreen from "../screens/InsightsScreen";
import { Ionicons } from "@expo/vector-icons";

// Define the tab navigator type
type BottomTabParamList = {
  Home: undefined;
  Chat: undefined;
  Insights: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      id = {undefined}
      screenOptions={({ route }: { route: RouteProp<BottomTabParamList, keyof BottomTabParamList> }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;
          if (route.name === "Home") iconName = "home";
          else if (route.name === "Chat") iconName = "chatbubbles";
          else iconName = "bar-chart";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
        headerShown: false,  // ✅ Hides the cropped header from all pages
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Insights" component={InsightsScreen} />
    </Tab.Navigator>
  );
}
