import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';

const {width} = Dimensions.get('window');

interface category {
  title: string;
  ratio: number;
  color: string;
}

type DopamineStickProp = {
  categoryList: category[];
};

const DopamineStick = ({categoryList}: DopamineStickProp) => {
  return (
    <View style={styles.myDopamineStickContainer}>
      <Text style={styles.myDopamineStickText}>나의 도파민</Text>
      <View style={styles.myDopamineStick}>
        {categoryList.map(e => (
          <View
            style={{
              width: (width - 48 - 18) * (e.ratio / 100),
              backgroundColor: e.color,
              overflow: 'hidden',
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default DopamineStick;

const styles = StyleSheet.create({
  //myDopamineStick
  myDopamineStickContainer: {
    paddingTop: 19,
    paddingBottom: 24,
    paddingHorizontal: 24,
  },
  myDopamineStickText: {
    color: 'gray',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
  },
  myDopamineStick: {
    // width: '100%',
    height: 32,
    borderRadius: 12,
    flexDirection: 'row',
    gap: 3,
    overflow: 'hidden',
  },
});
