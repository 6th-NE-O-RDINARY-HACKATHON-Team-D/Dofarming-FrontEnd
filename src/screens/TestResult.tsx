import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/common/Header';
import DopamineStick from '../components/TestResult/DopamineStick';
import DopamineRanking from '../components/TestResult/DopamineRanking';
import {useDopamineCategory} from '../store/dopamine';

const TestResult = ({navigation}: any) => {
  const {categoryList} = useDopamineCategory();
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
      <DopamineRanking categoryList={categoryList} setActivate2={setActivate} />
      <View style={styles.btnGroup}>
        <TouchableOpacity style={styles.btn}>
          <Image source={replayIcon} style={styles.replayIcon} />
          <Text>다시하기</Text>
        </TouchableOpacity>
        {activate ? (
          <TouchableOpacity style={[styles.btn, {backgroundColor: '#000'}]}>
            <Text style={{color: '#fff'}}>디파밍 시작하기</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.btn, {backgroundColor: 'lightgray'}]}>
            <Text style={{color: 'gray3'}}>디파밍 시작하기</Text>
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
