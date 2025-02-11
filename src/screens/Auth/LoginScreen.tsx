import { View, Text } from 'react-native'
import React from 'react'
import AuthScreenTemplate from '../../components/AuthScreenTemplate'
import { AuthStackParamList } from "../../navigation/AuthStack";
import { StackNavigationProp } from '@react-navigation/stack';

type LoginScreenProps = {
  navigation: StackNavigationProp<AuthStackParamList, "Login">;
};

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  return (
    <AuthScreenTemplate navigation={navigation} login />
  )
}

export default LoginScreen