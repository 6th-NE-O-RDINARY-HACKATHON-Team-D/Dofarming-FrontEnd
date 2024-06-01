import {Text, View} from 'react-native';
import {Image} from 'react-native';
import Splash from '../assets/image/Splash.png';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View>
      <StyledImage source={Splash} />
    </View>
  );
};

export default SplashScreen;

const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
`;
