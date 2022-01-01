import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import First from './components/First';
import Login from './components/Login';
import Register from './components/Register';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const Stack = createNativeStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyCGg6mQLnCRgnjIe9v9l7I0sHdDOhXad_U",
  authDomain: "imago-29158.firebaseapp.com",
  projectId: "imago-29158",
  storageBucket: "imago-29158.appspot.com",
  messagingSenderId: "824882338075",
  appId: "1:824882338075:web:86d1f4e333506e15d31bbe",
  measurementId: "G-M52G0RTE7E"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='first'>
        <Stack.Screen name="Login/Register" component={First} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
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
