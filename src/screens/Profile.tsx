import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDopamineCategory} from '../store/dopamine';
import DopamineStick from '../components/TestResult/DopamineStick';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const {categoryList} = useDopamineCategory();
  const navigation: any = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.myProfile}>
        <View style={styles.profileImg} />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>도밤희</Text>
          <TouchableOpacity style={styles.profileEditBtn}>
            <Text style={styles.profileEditBtnText}>프로필 수정</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('MyDopamine')}>
        <DopamineStick categoryList={categoryList} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  //myProfile
  myProfile: {
    marginHorizontal: 24,
    marginVertical: 20,
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  profileImg: {
    width: 84,
    height: 84,
    borderRadius: 16,
    backgroundColor: '#D9D9D9',
  },
  profileInfo: {
    height: 84,
    justifyContent: 'space-between',
  },
  profileName: {
    fontSize: 24,
    lineHeight: 32,
  },
  profileEditBtn: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    backgroundColor: '#f6f7f8',
    borderRadius: 15,
  },
  profileEditBtnText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#79818f',
  },
});
export default Profile;
