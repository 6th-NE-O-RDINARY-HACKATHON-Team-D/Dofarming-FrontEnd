import {StyleSheet, Animated, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Calendar from '../componets/calendar/Calendar';
import HomeBottomSheet from '../components/common/HomeBottomSheet';
import {useRef} from 'react';
import LottieView from 'lottie-react-native';
import Defarming from '../assets/vectors/defarming-txt.svg';

import axiosInstance from '../api/AxiosInstance';

const Home = () => {
  const confettiRef = useRef<LottieView>(null);
  const opacity = useRef(new Animated.Value(0)).current;

  const [todayMission, setTodayMission] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  const today = new Date();

  useEffect(() => {
    const fetchMission = async () => {
      try {
        const response = await axiosInstance.get('/api/v1/missions/calender');
        setTodayMission(response.data.result.todayMission);
        setLoading(false);
      } catch (error) {
        console.log('error', error);
        setError(error);
        setLoading(false);
      }
    };
    fetchMission();
  }, []);

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
      <HomeBottomSheet
        triggerConfetti={triggerConfetti}
        mission={todayMission}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f6f7f8',
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
    elevation: 4,
    pointerEvents: 'none',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
