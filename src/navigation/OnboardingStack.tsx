// OnboardingStack.tsx
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/OnBoarding/WelcomeScreen";
import IntroScreen from "../screens/OnBoarding/IntroScreen";
import GetStartScreen from "../screens/OnBoarding/GetStartScreen";

export type RootStackParamList = {
  Welcome: undefined;
  Intro: undefined;
  GetStart: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const OnboardingStack: React.FC = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="GetStart" component={GetStartScreen} />
      </Stack.Navigator>
  );
};

export default OnboardingStack;
