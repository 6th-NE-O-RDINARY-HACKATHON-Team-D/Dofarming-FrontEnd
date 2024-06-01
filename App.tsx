import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/router';

function App(): React.JSX.Element {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
