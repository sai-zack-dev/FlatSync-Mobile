import React from 'react'
import AuthScreenTemplate from '../../components/AuthScreenTemplate'
import { AuthStackParamList } from "../../navigation/AuthStack";
import { StackNavigationProp } from '@react-navigation/stack';

type SignUpScreenProps = {
  navigation: StackNavigationProp<AuthStackParamList, "SignUp">;
};

const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  return (
    <AuthScreenTemplate navigation={navigation} />
  )
}

export default SignUpScreen