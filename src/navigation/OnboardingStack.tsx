import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/Onboarding/WelcomeScreen";
import AboutAppScreen from "../screens/Onboarding/AboutAppScreen";
import GetStartScreen from "../screens/Onboarding/GetStartScreen";

type OnboardingStackParamList = {
  Welcome: undefined;
  AboutApp: undefined;
  GetStart: undefined;
};

const Stack = createStackNavigator<OnboardingStackParamList>();

const OnboardingStack: React.FC<{ setIsNewUser: (value: boolean) => void }> = ({
  setIsNewUser,
}) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="AboutApp" component={AboutAppScreen} />
      <Stack.Screen
        name="GetStart"
        children={(props) => <GetStartScreen {...props} setIsNewUser={setIsNewUser} />}
      />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
