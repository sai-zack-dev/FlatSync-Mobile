import { StyleSheet } from 'react-native';

const onboardingStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  info: {
    flex: 1,
    width: "100%",
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20,
    paddingHorizontal: 25,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  image: {
    width: "100%"
  }
});

export default onboardingStyles;
