import React from 'react';
// import { store } from './redux/store'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './navigation/tabs';

import {
  Restaurant,
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
        <Stack.Screen
          name="Home"
          component={Tabs}
        />
        <Stack.Screen name="Restaurant" component={Restaurant} />
        <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    // <Provider store={store}>
    <ThemeProvider>
      <Navigations />
    </ThemeProvider>
    // </Provider>
  );
}
