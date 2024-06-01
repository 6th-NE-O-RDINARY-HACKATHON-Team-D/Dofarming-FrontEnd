import {Text, View} from 'react-native';
import React from 'react';
import Toast from '../components/common/Toast';

const Home = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HOME</Text>
      <Toast mission="술 대신 콜라를 마시는 건 어떨까요" type="success" />
      {/* <Toast mission="Hello, World!" type="mission" /> */}
    </View>
  );
};

export default Home;
