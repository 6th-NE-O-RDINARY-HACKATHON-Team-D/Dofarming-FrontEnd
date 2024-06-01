import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import CATEGORY_COLOR from '../styles/color';
import Header from '../components/common/Header';
import DopamineStick from '../components/TestResult/DopamineStick';
import DopamineRanking from '../components/TestResult/DopamineRanking';

interface category {
  title: string;
  ratio: number;
  color: string;
}

const categoryList: category[] = [
  {
    title: '디지털',
    ratio: 20,
    color: CATEGORY_COLOR.orange,
  },
  {
    title: '게임',
    ratio: 20,
    color: CATEGORY_COLOR.green,
  },
  {
    title: '흡연',
    ratio: 15,
    color: CATEGORY_COLOR.purple,
  },
  {
    title: '과도한 투자',
    ratio: 15,
    color: CATEGORY_COLOR.blue,
  },
  {
    title: '쇼핑',
    ratio: 10,
    color: CATEGORY_COLOR.lightBlue,
  },
  {
    title: '음식',
    ratio: 10,
    color: CATEGORY_COLOR.brown,
  },
  {
    title: '음주',
    ratio: 10,
    color: CATEGORY_COLOR.yellow,
  },
];

const TestResult = ({navigation}: any) => {
  const [activate, setActivate] = useState<boolean>(false);
  const replayIcon = require('../assets/icons/replay.png');
  return (
    <SafeAreaView style={styles.container}>
      <Header
        left={true}
        leftHandler={() => navigation.goBack()}
        right={false}
      />
      <DopamineStick categoryList={categoryList} />
      <DopamineRanking categoryList={categoryList} />
      <View style={styles.btnGroup}>
        <TouchableOpacity style={styles.btn}>
          <Image source={replayIcon} style={styles.replayIcon} />
          <Text>다시하기</Text>
        </TouchableOpacity>
        {activate ? (
          <TouchableOpacity style={[styles.btn, {backgroundColor: '#000'}]}>
            <Text style={{color: '#fff'}}>뉴파밍 시작하기</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.btn, {backgroundColor: 'lightgray'}]}>
            <Text style={{color: 'gray3'}}>뉴파밍 시작하기</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default TestResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  btnGroup: {
    paddingVertical: 10,
    gap: 8,
    width: '100%',
  },
  btn: {
    marginHorizontal: 24,
    height: 42,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 11,
    borderRadius: 12,
  },
  replayIcon: {
    width: 15,
    height: 13,
  },
});
