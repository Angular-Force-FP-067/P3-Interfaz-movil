import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import PlayersScreen from './src/screens/PlayersScreen';
import DetailScreen from './src/screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#FF4400' },
        headerTintColor: '#ffffff',
        headerTitleStyle: { fontWeight: '700' },
      }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Equipo Basket' }} />
        <Stack.Screen name="Players" component={PlayersScreen} options={{ title: 'Jugadores' }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detalles' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}