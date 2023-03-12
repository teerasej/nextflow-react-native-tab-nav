import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeBaseProvider, Icon } from "native-base";
import { FontAwesome } from '@expo/vector-icons';
import HomePage from './pages/HomePage'
import ChatPage from './pages/ChatPage'
import SettingPage from './pages/SettingPage'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home" 
            component={HomePage} 
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon as={FontAwesome} name="home" color={color} size={size} />
              )
            }} 
          />
          <Tab.Screen
            name="Chat" 
            component={ChatPage} 
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon as={FontAwesome} name="comment" color={color} size={size} />
              )
            }} 
          />
          <Tab.Screen 
            name="Setting" 
            component={SettingPage} 
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon as={FontAwesome} name="gear" color={color} size={size} />
              )
            }} 
          />
        </Tab.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
