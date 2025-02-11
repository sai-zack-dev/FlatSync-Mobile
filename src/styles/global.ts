import { StyleSheet } from 'react-native';
import colors from './colors';

const global = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
  },
  inputLabel: {
    color: colors.secondary,
    marginBottom: 5,
  },
  inputRequired: {
    color: "red",
  },
  button: {
    padding: 15,
    borderRadius: 10,
  },
  buttonTitle: {
    textAlign: "center",
  }
});

export default global;
