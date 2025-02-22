import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './app/screens/Screem';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* @ts-ignore */}
      <Stack.Navigator>
        <Stack.Screen name="Calculadora de Propinas" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
