import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/OnboardingStack";
import OnboardingTemplate from "../../components/OnboardingTemplate";
import colors from '../../styles/colors';

type IntroScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Intro">;
};

const IntroScreen: React.FC<IntroScreenProps> = ({ navigation }) => {
  return (
    <OnboardingTemplate
      image={require("../../assets/images/intro.png")}
      title={"Save Time and Effort"}
      text={"Easily manage rental payments, organize chores, and ensure everyone contributes."}
      bg={colors.pearl_haze}
      previous={true}
      next={"GetStart"}
      navigation={navigation}
    />
  );
};

export default IntroScreen;
