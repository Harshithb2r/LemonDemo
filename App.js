import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/screens/LoginSignup/Welcome';
import Login from './src/screens/LoginSignup/Login';
import RootNavigation from './src/RootNavigation';

export default function App() {
  return (
    <RootNavigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
