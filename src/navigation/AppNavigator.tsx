import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingStack from "./OnboardingStack";
import AuthStack from "./AuthStack";
import TabNavigator from "./TabNavigator";
import { Text } from "react-native";

const RootStack = createStackNavigator();

const AppNavigator: React.FC = () => {
  const [isNewUser, setIsNewUser] = useState<boolean>(true); // Replace with real logic
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false); // Replace with real auth logic

  return (
    <NavigationContainer>
      {/* {isNewUser ? (
        <OnboardingStack setIsNewUser={setIsNewUser} />
      ) : isAuthenticated ? (
        <TabNavigator />
      ) : (
        <AuthStack setIsAuthenticated={setIsAuthenticated} />
      )} */}
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="OnboardingStack" component={OnboardingStack} />
        <RootStack.Screen
          name="AuthStack"
          component={() => (
            <AuthStack setIsAuthenticated={setIsAuthenticated} />
          )}
        />
        <RootStack.Screen name="TabNavigator" component={TabNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
