import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';

interface category {
  title: string;
  ratio: number;
  color: string;
}

type DopamineStickProp = {
  categoryList: category[];
};

type categoryItem = {
  item: category;
};

const CategoryItem = ({item}: categoryItem) => {
  const [activate, setActivate] = useState(false);
  const handlePress = () => {
    setActivate(!activate);
  };
  return (
    <View style={styles.categoryRankingElem}>
      <View style={styles.left}>
        <View
          style={{
            width: 46,
            height: 46,
            backgroundColor: item.color,
            borderRadius: 12,
          }}
        />
        <View>
          <Text style={styles.categoryTitleText}>{item.title}</Text>
          <Text style={styles.categortyRatioText}>{item.ratio}%</Text>
        </View>
      </View>
      {activate ? (
        <TouchableOpacity
          onPress={handlePress}
          style={[styles.right, {backgroundColor: 'lightblue'}]}>
          <Text style={[styles.rightText, {color: 'blue'}]}>개선하기</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handlePress} style={[styles.right]}>
          <Text style={styles.rightText}>개선하기</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const DopamineRanking = ({categoryList}: DopamineStickProp) => {
  const renderItem = ({item}: categoryItem) => {
    return <CategoryItem item={item} />;
  };

  return (
    <View style={styles.categoryRankingContainer}>
      <Text style={styles.categoryRankingTitleText}>순위</Text>
      <FlatList
        data={categoryList}
        renderItem={renderItem}
        keyExtractor={item => item.title}
        removeClippedSubviews
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default DopamineRanking;

const styles = StyleSheet.create({
  //categoryTanking
  categoryRankingContainer: {
    marginHorizontal: 24,
    flex: 1,
  },
  categoryRankingTitleText: {
    color: 'gray',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
  },
  categoryRankingElem: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  categoryTitleText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#393F46',
  },
  categortyRatioText: {
    fontSize: 14,
    color: 'gray',
  },
  right: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: 'lightgray',
    borderRadius: 8,
  },
  rightText: {
    fontSize: 14,
    lineHeight: 22,
  },
});
