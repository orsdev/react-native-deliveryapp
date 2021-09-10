import React from 'react';
// import { store } from './redux/store'
import { Provider } from 'react-redux'
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  Restaurant,
  Home,
  OrderDelivery
} from './screens/Index';

const Stack = createNativeStackNavigator();

const Navigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Home"}
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    // <Provider store={store}>
    <ThemeProvider>
      <SafeAreaProvider>
        <Navigations />
      </SafeAreaProvider>
    </ThemeProvider>
    // </Provider>
  );
}
