import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/OnboardingStack";
import OnboardingTemplate from "../../components/OnboardingTemplate";
import colors from "../../styles/colors";

type GetStartScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "GetStart">;
};

const GetStartScreen: React.FC<GetStartScreenProps> = ({ navigation }) => {
  return (
    <OnboardingTemplate
      image={require("../../assets/images/getstart.png")}
      title={"Get Started"}
      text={"Make living together easier and more enjoyable with FlatSync!"}
      bg={colors.frost_veil}
      previous={true}
      next={"Welcome"}
      navigation={navigation}
    />
  );
};

export default GetStartScreen;