import React, {useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import Splash from '../assets/image/Splash.png';
import styled from 'styled-components';
import Kakao from '../assets/vectors/Kakao';
import {useNavigation} from '@react-navigation/native';

const Onboarding = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true); // 로딩 상태를 true로 설정하여 로딩 화면을 표시합니다.

    setTimeout(() => {
      navigation.navigate('MainTab');
      setLoading(false); // 로딩 상태를 false로 설정하여 로딩 화면을 숨깁니다.
    }, 2000);
  };

  return (
    <Container>
      <StyledImage source={Splash} />
      <Button onPress={handleLogin}>
        {loading ? (
          <ActivityIndicator color="#ffffff" />
        ) : (
          <>
            <Kakao />
            <ButtonText>카카오톡으로 로그인</ButtonText>
          </>
        )}
      </Button>
    </Container>
  );
};

export default Onboarding;

const Container = styled.View`
  flex: 1;
  position: relative;
`;

const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
`;

const Button = styled.TouchableOpacity`
  border-radius: 12px;
  width: 345px;
  height: 50px;
  background: #fee500;
  align-self: center;
  bottom: 58px;
  justify-content: center;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;

const ButtonText = styled.Text`
  color: #181818;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  line-height: 24px;
`;
