import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

type headerProp = {
  left: boolean;
  leftHandler?: () => void;
  right: boolean;
  rightHandler?: () => void;
};

const Header = ({left, leftHandler, right, rightHandler}: headerProp) => {
  const leftArrow = require('../../assets/icons/chevron-left.png');
  const rightArrow = require('../../assets/icons/chevron-right.png');
  return (
    <View style={styles.header}>
      {left ? (
        <TouchableOpacity onPress={leftHandler}>
          <Image source={leftArrow} style={styles.headerIcon} />
        </TouchableOpacity>
      ) : (
        <View></View>
      )}
      <View>
        <Text style={styles.headerText}>진단 결과</Text>
      </View>
      {right ? (
        <TouchableOpacity onPress={rightHandler}>
          <Image source={rightArrow} style={styles.headerIcon} />
        </TouchableOpacity>
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  //header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 18,
    marginVertical: 12,
  },
  headerIcon: {
    width: 24,
    height: 24,
  },
  headerText: {
    color: '#393F46',
    fontSize: 16,
    lineHeight: 18,
  },
});
