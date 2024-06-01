import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/common/Header';
import DopamineStick from '../components/TestResult/DopamineStick';
import DopamineSelection from '../components/MyDopamine/DopamineSelection';
import {useDopamineCategory} from '../store/dopamine';

const {width} = Dimensions.get('window');

const UpdateCategory = ({selectedItem, editType}: any) => {
  const plusIcon = require('../assets/icons/plus.png');
  const minusIcon = require('../assets/icons/minus.png');
  return (
    <>
      {selectedItem && (
        <View style={styles.categoryRankingElem}>
          <View style={styles.left}>
            <View
              style={{
                width: 46,
                height: 46,
                backgroundColor: selectedItem.color,
                borderRadius: 12,
              }}
            />
            <View>
              <Text style={styles.categoryTitleText}>{selectedItem.title}</Text>
              {editType === 'add' ? (
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
                  <Image source={plusIcon} style={{width: 12, height: 12}} />
                  <Text style={styles.categortyRatioText}>
                    항목이 추가되었어요
                  </Text>
                </View>
              ) : (
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
                  <Image source={minusIcon} style={{width: 12, height: 12}} />
                  <Text style={styles.categortyRatioText}>
                    항목이 삭제되었어요
                  </Text>
                </View>
              )}
            </View>
          </View>
        </View>
      )}
    </>
  );
};

const MyDopamine = ({navigation}: any) => {
  const {categoryList} = useDopamineCategory();
  const [editVisible, setEditVisible] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<any>();
  const [addOrRemove, setAddOrRemove] = useState<any>();
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (selectedItem !== null && addOrRemove !== null) {
      setEditVisible(true);
      if (timer) {
        clearTimeout(timer);
      }
      const newTimer = setTimeout(() => {
        setEditVisible(false);
      }, 1500);
      setTimer(newTimer);
    }
  }, [selectedItem, addOrRemove]);

  const replayIcon = require('../assets/icons/replay.png');
  const testAgainHandler = () => {
    console.log('다시 진단하기');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header
        left={true}
        leftHandler={() => navigation.goBack()}
        right={false}
      />
      <DopamineStick categoryList={categoryList} />
      <DopamineSelection
        categoryList={categoryList}
        setSelectedItem={setSelectedItem}
        setAddOrRemove={setAddOrRemove}
      />
      <View style={styles.btnGroup}>
        <TouchableOpacity style={styles.btn} onPress={testAgainHandler}>
          <Image source={replayIcon} style={styles.replayIcon} />
          <Text>다시 진단하기</Text>
        </TouchableOpacity>
      </View>
      {selectedItem !== null && editVisible && (
        <UpdateCategory selectedItem={selectedItem} editType={addOrRemove} />
      )}
    </SafeAreaView>
  );
};

export default MyDopamine;

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

  // edit
  categoryRankingElem: {
    width: width - 48,
    marginHorizontal: 24,
    marginVertical: 10,
    backgroundColor: '#f6f7f8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    padding: 16,
    bottom: 0,
    left: 0,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  categoryTitleText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#393F46',
    lineHeight: 28,
  },
  categortyRatioText: {
    fontSize: 14,
    color: 'gray',
  },
});
