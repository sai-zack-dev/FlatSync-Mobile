import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import OnboardingStack from "./OnboardingStack";
import AuthStack from "./AuthStack";
import TabNavigator from "./TabNavigator";

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
      <OnboardingStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
