import { StyleSheet } from 'react-native';
import colors from './colors';

const authStyles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 340,
  },
  form: {
    paddingHorizontal: 25,
    gap: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: colors.secondary,
    textAlign: "center",
  },
  redirectLabel: {
    textAlign: "center"
  },
  redirectLink:{
    textDecorationLine: "underline",
  }
});

export default authStyles;
