import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';

interface category {
  title: string;
  ratio: number;
  color: string;
}

type DopamineSelectionProp = {
  categoryList: category[];
  setSelectedItem: (value: category) => void;
  setAddOrRemove: (value: string) => void;
};

type renderItemProp = {
  item: category;
};

type categoryItemProp = {
  item: category;
  setSelectedItem: (value: category) => void;
  setAddOrRemove: (value: string) => void;
};

const CategoryItem = ({
  item,
  setSelectedItem,
  setAddOrRemove,
}: categoryItemProp) => {
  const [activate, setActivate] = useState(false);
  const checkIcon = require('../../assets/icons/check.png');
  const checkBlueIcon = require('../../assets/icons/checkBlue.png');
  const handlePress = () => {
    setSelectedItem(item);
    if (activate) {
      setAddOrRemove('remove');
    } else {
      setAddOrRemove('add');
    }

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

const DopamineSelection = ({
  categoryList,
  setSelectedItem,
  setAddOrRemove,
}: DopamineSelectionProp) => {
  const renderItem = ({item}: renderItemProp) => {
    return (
      <CategoryItem
        item={item}
        setSelectedItem={setSelectedItem}
        setAddOrRemove={setAddOrRemove}
      />
    );
  };

  return (
    <View style={styles.categoryRankingContainer}>
      <Text style={styles.categoryRankingTitleText}>
        항목을 수정해 미션을 받을 수 있어요.
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

export default DopamineSelection;

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
