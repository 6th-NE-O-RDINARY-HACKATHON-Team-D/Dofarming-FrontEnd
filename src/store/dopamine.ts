import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CATEGORY_COLOR from '../styles/color';

interface category {
  title: string;
  ratio: number;
  color: string;
  name: string;
}

interface storeState {
  categoryList: category[];
  setCategoryList: (value: category[]) => void;
}

export const useDopamineCategory = create<
  storeState,
  [['zustand/persist', unknown]]
>(
  persist(
    set => ({
      categoryList: [
        {
          title: '디지털',
          ratio: 20,
          color: CATEGORY_COLOR.orange,
          name: 'digital',
        },
        {
          title: '음식',
          ratio: 20,
          color: CATEGORY_COLOR.green,
          name: 'food',
        },
        {
          title: '투기',
          ratio: 15,
          color: CATEGORY_COLOR.purple,
          name: 'invest',
        },
        {
          title: '쇼핑',
          ratio: 15,
          color: CATEGORY_COLOR.blue,
          name: 'shopping',
        },
        {
          title: '음주',
          ratio: 10,
          color: CATEGORY_COLOR.lightBlue,
          name: 'drink',
        },
        {
          title: '흡연',
          ratio: 10,
          color: CATEGORY_COLOR.brown,
          name: 'smoke',
        },
        {
          title: '게임',
          ratio: 10,
          color: CATEGORY_COLOR.yellow,
          name: 'game',
        },
      ],
      setCategoryList: value => set({categoryList: value}),
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
