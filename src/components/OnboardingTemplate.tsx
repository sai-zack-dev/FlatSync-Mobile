import { View, Text, Image, Button } from "react-native";
import React from "react";
import onboarding from "../styles/onboarding";

type OnboardingTemplateProps = {
  image: any;
  title: string;
  text: string;
  bg: any;
  previous: boolean;
  next: string;
  navigation: any;
};

const OnboardingTemplate: React.FC<OnboardingTemplateProps> = ({
  image,
  title,
  text,
  bg,
  previous,
  next,
  navigation,
}) => {
  return (
    <View style={[onboarding.container, { backgroundColor: bg }]}>
      <Image source={image} style={onboarding.image} />
      <View style={onboarding.info}>
        <View>
          <Text style={onboarding.title}>{title}</Text>
          <Text style={onboarding.text}>{text}</Text>
        </View>
        <View style={onboarding.buttonContainer}>
          {next !== "Auth" ? (
            <>
              <View>
                {previous && (
                  <Button
                    title="<< Previous"
                    onPress={() => navigation.goBack()}
                  />
                )}
              </View>
              <Button
                title="Next >>"
                onPress={() => navigation.navigate(next)}
              />
            </>
          ) : (
            <>
              <Button
                title="Log In"
                onPress={() => navigation.navigate('AuthStack', { screen: 'Login' })}
              />
              <Button
                title="Sign Up"
                onPress={() => navigation.navigate('AuthStack', { screen: 'SignUp' })}
              />
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default OnboardingTemplate;
