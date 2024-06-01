import React from 'react';
import {StyleSheet} from 'react-native';
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

      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarStyle: {...styles.tabContainer},
          tabBarIcon: ({focused, color, size}) => {
            let IconComponent: React.FC<{
              width: number;
              height: number;
              fill: string;
            }> | null = null;
            switch (route.name) {
              case 'Home':
                IconComponent = DefamineIcon;
                break;
              case 'Profile':
                IconComponent = ReportIcon;
                break;
              default:
                IconComponent = null;
            }
            const iconColor = focused ? '#000' : 'gray';
            return (
              IconComponent && (
                <IconComponent width={size} height={size} fill={iconColor} />
              )
            );
          },
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={Home} options={{title: ''}} />
        <Tab.Screen name="Profile" component={Profile} options={{title: ''}} />

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

const styles = StyleSheet.create({
  tabContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
  },
});

export default Router;

import DefamineIcon from './assets/vectors/bottomTab/Defamine.tsx';
import ReportIcon from './assets/vectors/bottomTab/report.tsx';
