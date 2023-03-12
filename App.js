import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Icon } from "native-base";
import { FontAwesome } from '@expo/vector-icons';
import HomePage from './pages/HomePage'
import ChatPage from './pages/ChatPage'
import SettingPage from './pages/SettingPage'


export default function App() {
  return (
    <NativeBaseProvider>
      
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}
