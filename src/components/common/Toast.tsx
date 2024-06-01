import React, {useEffect, useRef, useState} from 'react';
import {Animated, View} from 'react-native';
import styled from 'styled-components';
import ChevronRight from '../../assets/vectors/ChevronRight';

const Toast = ({mission, type}: {mission: any; type: string}) => {
  const slideAnim = useRef(new Animated.Value(100)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;

  //   useEffect(() => {
  //     Animated.timing(slideAnim, {
  //       toValue: 0,
  //       duration: 300,
  //       useNativeDriver: true,
  //     }).start();

  //     const fadeOutTimer = setTimeout(() => {
  //       Animated.timing(fadeAnim, {
  //         toValue: 0,
  //         duration: 500,
  //         useNativeDriver: true,
  //       }).start();
  //     }, 3000);

  //     return () => clearTimeout(fadeOutTimer);
  //   }, [slideAnim, fadeAnim]);

  const getTimeLeftInDay = () => {
    const now = new Date();
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const timeDifference = endOfDay.getTime() - now.getTime();

    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);

    const time = hours === 0 ? `${minutes}분` : `${hours}시간 ${minutes}분`;

    return time;
  };

  const leftTime = getTimeLeftInDay();

  //   const [slideValue, setSlideValue] = useState(0);

  //   useEffect(() => {
  //     slideAnim.addListener(({value}: {value: any}) => {
  //       setSlideValue(value);
  //     });

  //     return () => {
  //       slideAnim.removeAllListeners();
  //     };
  //   }, [slideAnim]);

  console.log('s', mission);
  return (
    <Container
      style={{backgroundColor: !mission?.isSuccess ? '#393f46' : '#fff'}}>
      <Box />
      <TextBox>
        <MissionText
          style={{color: !mission?.isSuccess ? '#fff' : '#000'}}
          numberOfLines={1}>
          {mission?.missionContent}
        </MissionText>
        <TimeText style={{color: !mission?.isSuccess ? '#bec6d3' : '#79818F'}}>
          {mission?.isSuccess ? mission?.updatedAt : leftTime + ' 남았어요'}
        </TimeText>
      </TextBox>
      <Button>
        <ButtonText style={{color: !mission?.isSuccess ? '#fff' : '#000'}}>
          {mission?.isSuccess ? '' : '인증하기 '}
        </ButtonText>
        {!mission?.isSuccess ? <ChevronRight /> : <View style={{width: 8}} />}
      </Button>
    </Container>
  );
};

export default Toast;

const Container = styled.View`
  margin: 0 20px;
  padding: 16px;
  border-radius: 12px;
  background: #393f46;
  display: flex;
  flex-direction: row;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 343px;
`;

const Box = styled.View`
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: #f63;
`;

const TextBox = styled.View`
  margin-left: 12px;
  height: 46px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MissionText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;
  width: 160px;
`;

const TimeText = styled.Text`
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
`;

const Button = styled.TouchableOpacity`
  margin-left: auto;
  padding: 8px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 28px;
`;
