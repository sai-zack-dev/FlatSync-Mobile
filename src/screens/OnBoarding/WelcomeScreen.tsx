import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/OnboardingStack";
import OnboardingTemplate from "../../components/OnboardingTemplate";
import colors from "../../styles/colors";

type WelcomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Welcome">;
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  return (
    <OnboardingTemplate
      image={require("../../assets/images/welcome.png")}
      title={"Welcome to Flat Sync!"}
      text={"Manage your shared living space effortlessly."}
      bg={colors.mist_blue}
      previous={false}
      next={"Intro"}
      navigation={navigation}
    />
  );
};

export default WelcomeScreen;
