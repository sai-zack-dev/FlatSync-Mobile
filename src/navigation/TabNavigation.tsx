import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Tabs/HomeScreen";
import FlatScreen from "../screens/Tabs/FlatScreen";
import NotificationsScreen from "../screens/Tabs/NotificationsScreen";
import HistoryScreen from "../screens/Tabs/HistoryScreen";

type TabParamList = {
  Home: undefined;
  Flat: undefined;
  Notifications: undefined;
  History: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Flat" component={FlatScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
