import React from 'react';
import HomeBottomSheet from '../components/common/HomeBottomSheet';
import styled from 'styled-components/native';
import Calendar from '../componets/calendar/Calendar';

const Home = () => {
  return (
    <Wrapper>
      <Calendar />
      <HomeBottomSheet />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.View`
  flex: 1;
`;
