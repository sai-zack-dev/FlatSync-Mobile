import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import global from './src/styles/global';

export default function App() {
  return (
    <View style={global.container}>
      <AppNavigator />
      <StatusBar style="auto" />
    </View>
  );
}
