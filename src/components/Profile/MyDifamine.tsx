import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';

const MyDifamine = () => {
  const title = require('../../assets/icons/myDifamine.png');
  const defarming = require('../../assets/icons/defarming.png');
  const report = require('../../assets/icons/report.png');
  return (
    <ScrollView
      style={styles.myDifamineContainer}
      showsVerticalScrollIndicator={false}>
      <View style={styles.myDifamineHeader}>
        <Image source={title} style={styles.myDifamineTitle} />
        <View></View>
      </View>
      <View style={styles.total}>
        <View
          style={{
            flexDirection: 'row',
            gap: 8,
            alignItems: 'center',
            marginBottom: 27,
          }}>
          <Text style={{fontSize: 14, lineHeight: 20, color: '#79818f'}}>
            전체 수행률
          </Text>
          <Text style={{fontSize: 12, lineHeight: 20, color: '#79818f'}}>
            2024.06.01 기준
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View style={styles.graphGroup}>
            <View style={styles.week}>
              <View style={styles.stick}>
                <View style={[styles.gage, {height: '43%'}]} />
              </View>
              <Text style={{fontSize: 20, lineHeight: 20}}>43%</Text>
              <Text style={{fontSize: 14, lineHeight: 20, color: '#79818f'}}>
                저번 주
              </Text>
            </View>
            <View style={styles.week}>
              <View style={styles.stick}>
                <View style={[styles.gage, {height: '70%'}]} />
              </View>
              <Text style={{fontSize: 20, lineHeight: 20}}>70%</Text>
              <Text style={{fontSize: 14, lineHeight: 20, color: '#79818f'}}>
                이번 주
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.summaryContainer}>
          <Text style={{fontSize: 20, lineHeight: 20}}>
            저번 주 대비 {(((70 - 43) / 43) * 100).toFixed(0)}% 증가
          </Text>
        </View>
      </View>
      <View style={styles.category}>
        <Text style={{fontSize: 14, lineHeight: 20, color: '#79818f'}}>
          항목 별 수행률
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginBottom: 36,
          }}>
          <Image source={defarming} style={{width: 44, height: 54}} />
          <Image source={report} style={{width: 44, height: 54}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginBottom: 43,
          }}>
          <View style={{alignItems: 'center', gap: 2}}>
            <Text style={{fontSize: 20, lineHeight: 20}}>43%</Text>
            <Text style={{color: '#79818f'}}>1위 디지털</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 20, lineHeight: 20}}>43%</Text>
            <Text style={{color: '#79818f'}}>1위 디지털</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 20, lineHeight: 20}}>43%</Text>
            <Text style={{color: '#79818f'}}>1위 디지털</Text>
          </View>
        </View>
        <View style={styles.summaryContainer}>
          <Text style={{fontSize: 20, lineHeight: 20}}>
            디지털 디파밍 성공!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default MyDifamine;

const styles = StyleSheet.create({
  //myDifamine
  myDifamineContainer: {
    marginHorizontal: 24,
    marginBottom: 24,
  },
  myDifamineHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  myDifamineTitle: {
    width: 136,
    height: 18,
  },
  //total
  total: {
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 24,
  },
  graphGroup: {
    flexDirection: 'row',
    gap: 58,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  week: {
    alignItems: 'center',
  },
  stick: {
    width: 50,
    height: 140,
    backgroundColor: '#ebeef2',
    borderRadius: 12,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    marginBottom: 12,
  },
  gage: {
    width: 50,
    backgroundColor: '#608fff',
  },
  summaryContainer: {
    paddingVertical: 12,
    paddingHorizontal: 37,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f7f8',
  },
  //category
  category: {
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 40,
  },
});
