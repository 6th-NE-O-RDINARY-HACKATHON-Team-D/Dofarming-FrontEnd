import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import Profile from './screens/Profile';
import TestResult from './screens/TestResult';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

type MainTabParamList = {
  Home: undefined;
  Profile: undefined;
};

type RootStackParamList = {
  TestResult: undefined;
  MainTab: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const MainTab = () => {
  return (
    <BottomSheetModalProvider>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </BottomSheetModalProvider>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="TestResult" component={TestResult} />
    </Stack.Navigator>
  );
};

export default Router;
