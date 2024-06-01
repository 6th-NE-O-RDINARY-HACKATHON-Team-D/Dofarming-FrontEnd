import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import Profile from './screens/Profile';
import TestResult from './screens/TestResult';

import MyDopamine from './screens/MyDopamine';

import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import SplashScreen from './screens/Splash';
import Onboarding from './screens/Onboarding';


type MainTabParamList = {
  Home: undefined;
  Profile: undefined;
};

type RootStackParamList = {
  TestResult: undefined;
  MyDopamine: undefined;
  MainTab: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const MainTab = () => {
  return (

    <BottomSheetModalProvider>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </BottomSheetModalProvider>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="TestResult" component={TestResult} />
      <Stack.Screen name="MyDopamine" component={MyDopamine} />
    </Stack.Navigator>
  );
};

export default Router;
