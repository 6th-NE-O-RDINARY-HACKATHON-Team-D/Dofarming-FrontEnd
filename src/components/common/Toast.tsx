import React, {useEffect, useRef, useState} from 'react';
import {Animated, View} from 'react-native';
import styled from 'styled-components';
import ChevronRight from '../../assets/vectors/ChevronRight';

const Toast = ({
  mission,
  type,
}: {
  mission: string;
  type: 'success' | 'mission';
}) => {
  const slideAnim = useRef(new Animated.Value(100)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    const fadeOutTimer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }, 3000);

    return () => clearTimeout(fadeOutTimer);
  }, [slideAnim, fadeAnim]);

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

  const [slideValue, setSlideValue] = useState(0);

  useEffect(() => {
    slideAnim.addListener(({value}: {value: any}) => {
      setSlideValue(value);
    });

    return () => {
      slideAnim.removeAllListeners();
    };
  }, [slideAnim]);

  return (
    <Container style={{transform: [{translateY: slideValue}]}}>
      <Box />
      <TextBox>
        <MissionText numberOfLines={1}>{mission}</MissionText>
        <TimeText>{leftTime} 남았어요</TimeText>
      </TextBox>
      <Button>
        <ButtonText>
          {type === 'success' ? '인증 완료' : '인증하기 '}
        </ButtonText>
        {type === 'mission' ? <ChevronRight /> : <View style={{width: 8}} />}
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
  position: absolute;
  bottom: 20px;
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
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;
  width: 180px;
`;

const TimeText = styled.Text`
  color: #bec6d3;
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
