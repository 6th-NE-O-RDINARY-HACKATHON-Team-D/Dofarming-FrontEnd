import {View} from 'react-native';
import React from 'react';
import Toast from '../components/common/Toast';
import HomeBottomSheet from '../components/common/HomeBottomSheet';
import Calendar from '../componets/calendar/Calendar';

const Home = () => {
  return (
    <View>
      <Calendar />
      <Toast mission="술 대신 콜라를 마시는 건 어떨까요" type="success" />
      {/* <Toast mission="Hello, World!" type="mission" /> */}
      <HomeBottomSheet />
    </View>
  );
};

export default Home;
