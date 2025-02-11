import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import authStyles from "../styles/auth";
import Input from "./Input";
import Button from "./Button";
import colors from "../styles/colors";

interface AuthScreenTemplateProps {
  login?: boolean;
  navigation: any;
}

const AuthScreenTemplate: React.FC<AuthScreenTemplateProps> = ({
  login = false,
  navigation,
}) => {
  return (
    <View>
      <Image
        source={require("../assets/images/logo.png")}
        style={authStyles.logo}
      />
      <View style={authStyles.form}>
        <Text style={authStyles.title}>{login ? "LOG IN" : "SIGN UP"}</Text>
        {!login && <Input placeholder="Username" />}
        <Input placeholder="Email" />
        <Input placeholder="Password" password />
        <Button
          color={colors.secondary}
          bg={colors.primary}
          title="Submit"
          bold
        />
        {login ? (
          <Text style={authStyles.redirectLabel}>
            Don’t have an account?
            <Text
              style={authStyles.redirectLink}
              onPress={() => navigation.navigate("SignUp")}
            >
              {" "}
              Sign Up
            </Text>
          </Text>
        ) : (
          <>
          <Text style={authStyles.redirectLink}>Forgot Password?</Text>
            <Text style={authStyles.redirectLabel}>
              Already have an account.
              <Text
                style={authStyles.redirectLink}
                onPress={() => navigation.navigate("Login")}
              >
                {" "}
                Log In
              </Text>
            </Text>
          </>
        )}
      </View>
    </View>
  );
};

export default AuthScreenTemplate;
