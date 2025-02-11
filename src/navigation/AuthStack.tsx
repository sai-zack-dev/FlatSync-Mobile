import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from "../screens/Auth/SignUpScreen";
import LoginScreen from "../screens/Auth/LoginScreen";

export type AuthStackParamList = {
  SignUp: undefined;
  Login: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack: React.FC<{ setIsAuthenticated: (value: boolean) => void }> = ({
  setIsAuthenticated,
}) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Login" children={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
