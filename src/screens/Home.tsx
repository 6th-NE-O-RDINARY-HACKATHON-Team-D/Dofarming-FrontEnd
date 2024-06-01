import {View} from 'react-native';
import React from 'react';
import Toast from '../components/common/Toast';
import HomeBottomSheet from '../components/common/HomeBottomSheet';
import Calendar from '../componets/calendar/Calendar';

const Home = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HOME</Text>
      <Toast
        mission="술 대신 콜라를 마시는 건 어떨까요"
        type="digital"
        color={'dark'}
      />
      <Toast
        mission="술 대신 콜라를 마시는 건 어떨까요"
        type="digital"
        color={'light'}
        date="2024.06.01 21:52"
      />
    </View>
  );
};

export default Home;
