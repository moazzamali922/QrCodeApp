import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Splash from './src/Splash';
import Create from './src/Create';
import QrCodeGenerator from './src/QrCodeGenerator';
import ColorPickerr from './src/Components/ColorPicker';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawer() {
  return (
    <Drawer.Navigator initialRouteName="QrCodeGenerator">
      <Drawer.Screen
        name="Create"
        component={Create}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="QrCodeGenerator"
        component={QrCodeGenerator}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="ColorPicker"
        component={ColorPickerr}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {/* <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: true }}
        /> */}

        <Stack.Screen
          name="Root"
          component={CustomDrawer}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
