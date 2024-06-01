
import {View, StyleSheet, Button, Animated} from 'react-native';

import React from 'react';
import Calendar from '../componets/calendar/Calendar';
import HomeBottomSheet from '../components/common/HomeBottomSheet';
import {useRef} from 'react';
import LottieView from 'lottie-react-native';
import Defarming from '../assets/vectors/defarming-txt.svg';

const Home = () => {
  const confettiRef = useRef<LottieView>(null);
  const opacity = useRef(new Animated.Value(0)).current;

  function triggerConfetti() {
    confettiRef.current?.play(0);
    Animated.timing(opacity, {
      toValue: 0.5,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(opacity, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }).start();
      }, 1000);
    });
  }

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.overlay, {opacity}]}>
        <Defarming />
      </Animated.View>
      <LottieView
        ref={confettiRef}
        source={require('../assets/confetti.json')}
        autoPlay={false}
        loop={false}
        style={styles.lottie}
        resizeMode="cover"
      />
      <Calendar />
      {/* <Toast
        mission="술 대신 콜라를 마시는 건 어떨까요"
        type="digital"
        color={'dark'}
      />
      <Toast
        mission="술 대신 콜라를 마시는 건 어떨까요"
        type="digital"
        color={'light'}
        date="2024.06.01 21:52"
      /> */}
      <HomeBottomSheet />
      <Button title="Trigger" onPress={triggerConfetti} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lottie: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    pointerEvents: 'none',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    pointerEvents: 'none',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
