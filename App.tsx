// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { Button } from '@react-navigation/elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/Home';
import DetailsScreen from './components/Details';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './slices//counterSlice'; // Your component that uses Redux

const Stack = createNativeStackNavigator();

function RootStack() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: () => (
            <Button onPress={() => navigation.navigate('Details')}>
                🛒 {'x 0'}
              </Button>
          ),
        }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}