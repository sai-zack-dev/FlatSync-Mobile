import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Tabs/HomeScreen";
import HistoryScreen from "../screens/Tabs/HistoryScreen";
import ActivityScreen from "../screens/Tabs/ActivityScreen";
import NotiScreen from "../screens/Tabs/NotiScreen";
import { Ionicons } from "@expo/vector-icons";
import colors from "../styles/colors";
import { Image, TouchableOpacity } from "react-native";
import { enableScreens } from "react-native-screens"; // Improves performance
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

type TabParamList = {
  Home: undefined;
  Activities: undefined;
  Notifications: undefined;
  History: undefined;
};

enableScreens();

const Tab = createBottomTabNavigator<TabParamList>();

const CustomHeader = () => {
  return {
    headerLeft: () => (
      <TouchableOpacity style={{ marginLeft: 15 }} onPress={() => console.log("Profile Clicked")}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }} // Replace with user's avatar
          style={{ width: 40, height: 40, borderRadius: 50 }}
        />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity style={{ marginRight: 15 }} onPress={() => console.log("Menu Clicked")}>
        <Ionicons name="menu" size={28} color="black" />
      </TouchableOpacity>
    )
  };
};

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName: keyof typeof Ionicons.glyphMap = "home-outline";

        if (route.name === "Home") {
          iconName = focused ? "home" : "home-outline";
        } else if (route.name === "Activities") {
          iconName = focused ? "list" : "list-outline";
        } else if (route.name === "Notifications") {
          iconName = focused ? "notifications" : "notifications-outline";
        } else if (route.name === "History") {
          iconName = focused ? "time" : "time-outline";
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: colors.secondary, // Active Tab Color
      tabBarInactiveTintColor: "gray", // Inactive Tab Color
      tabBarStyle: { backgroundColor: "#fff", paddingBottom: 5 }, // Customize Tab Bar
      ...CustomHeader(),
      headerStyle: {
        backgroundColor: "#0000",
        height: 125,
      },
      headerTitleStyle: {
        fontSize: 21,
        fontWeight: "bold",
        color: colors.secondary,
        textTransform: "uppercase",
      },
      headerTitleAlign: "center",
      swipeEnabled: true, // Enables swipe gestures
      animationEnabled: true, // Enables smooth animations
    })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Activities" component={ActivityScreen} />
      <Tab.Screen name="Notifications" component={NotiScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
