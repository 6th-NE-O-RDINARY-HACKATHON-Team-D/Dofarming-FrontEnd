import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';

interface category {
  title: string;
  ratio: number;
  color: string;
  name: string;
}

type DopamineStickProp = {
  categoryList: category[];
  setActivate2: (value: boolean) => void;
};

type itemProp = {
  item: category;
};

type categoryItem = {
  item: category;
  checkNum: number;
  setCheckNum: (value: number) => void;
};

type categoryIconProp = {
  [key: string]: any;
};

const categoryIcons: categoryIconProp = {
  digital: require('../../assets/icons/categoryIcon/digitalIcon.png'),
  drink: require('../../assets/icons/categoryIcon/drinkIcon.png'),
  food: require('../../assets/icons/categoryIcon/foodIcon.png'),
  game: require('../../assets/icons/categoryIcon/gameIcon.png'),
  invest: require('../../assets/icons/categoryIcon/investIcon.png'),
  shopping: require('../../assets/icons/categoryIcon/shoppingIcon.png'),
  smoke: require('../../assets/icons/categoryIcon/smokeIcon.png'),
};

const CategoryItem = ({item, checkNum, setCheckNum}: categoryItem) => {
  const [activate, setActivate] = useState(false);
  const checkIcon = require('../../assets/icons/check.png');
  const checkBlueIcon = require('../../assets/icons/checkBlue.png');
  const icon = categoryIcons[item.name];
  const handlePress = () => {
    if (activate) {
      setCheckNum(checkNum - 1);
    } else {
      setCheckNum(checkNum + 1);
    }
    setActivate(!activate);
  };

  return (
    <View style={styles.categoryRankingElem}>
      <View style={styles.left}>
        <Image source={icon} style={{width: 46, height: 46}} />
        <View>
          <Text style={styles.categoryTitleText}>{item.title}</Text>
          <Text style={styles.categortyRatioText}>{item.ratio}%</Text>
        </View>
      </View>
      {activate ? (
        <TouchableOpacity
          onPress={handlePress}
          style={[styles.right, {backgroundColor: '#d7e9ff'}]}>
          <Image source={checkBlueIcon} style={styles.checkIcon} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handlePress} style={[styles.right]}>
          <Image source={checkIcon} style={styles.checkIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const DopamineRanking = ({categoryList, setActivate2}: DopamineStickProp) => {
  const [checkNum, setCheckNum] = useState<number>(0);
  const renderItem = ({item}: itemProp) => {
    return (
      <CategoryItem item={item} checkNum={checkNum} setCheckNum={setCheckNum} />
    );
  };
  useEffect(() => {
    if (checkNum > 0) {
      setActivate2(true);
    } else {
      setActivate2(false);
    }
  }, [checkNum]);

  return (
    <View style={styles.categoryRankingContainer}>
      <Text style={styles.categoryRankingTitleText}>
        개선하고 싶은 항목을 고르세요
      </Text>
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
  rightText: {
    fontSize: 14,
    lineHeight: 22,
  },
  right: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#F6f7f8',
    borderRadius: 8,
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcon: {
    width: 9.5,
    height: 8.7,
  },
});
