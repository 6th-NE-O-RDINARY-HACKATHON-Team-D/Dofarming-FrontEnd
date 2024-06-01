import styled from 'styled-components';
import {View} from 'react-native';
import TestComponent from '../componets/test/TestComponent';
import React, {useState} from 'react';

const Test = () => {
  const [number, setNumber] = useState<number>(0);

  const handlePageChange = (direction: string) => {
    if (direction === 'left') {
      setNumber(number - 1);
    } else {
      setNumber(number + 1);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#F6F7F8'}}>
      <TestComponent
        questions={Questions[number]}
        handelPageChange={handlePageChange}
        number={number}
      />
    </View>
  );
};
export default Test;

const Buttons = styled.View`
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 21px;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 24px;
`;

const Questions = [
  {
    id: 0,
    title: '디지털',
    tags: ['숏폼', '휴대폰중독'],
    questions: [
      '긴 글을 읽는 데 어려움을 느껴요',
      '알림이 올 때마다 휴대폰을 확인해요',
      '휴대폰이 없으면 불안해요',
    ],
  },
  {
    id: 1,
    title: '음식',
    tags: ['자극적인음식', '과음', '폭식'],
    questions: [
      '자극적인 음식을 좋아해요',
      '자주 과식을 해요',
      '한번에 많은 양을 먹어요',
    ],
  },
  {
    id: 2,
    title: '음식2',
    tags: ['자극적인음식', '과음', '폭식'],
    questions: [
      '자극적인 음식을 좋아해요',
      '자주 과식을 해요',
      '한번에 많은 양을 먹어요',
    ],
  },
  {
    id: 3,
    title: '음식3',
    tags: ['자극적인음식', '과음', '폭식'],
    questions: [
      '자극적인 음식을 좋아해요',
      '자주 과식을 해요',
      '한번에 많은 양을 먹어요',
    ],
  },
  {
    id: 4,
    title: '음식4',
    tags: ['자극적인음식', '과음', '폭식'],
    questions: [
      '자극적인 음식을 좋아해요',
      '자주 과식을 해요',
      '한번에 많은 양을 먹어요',
    ],
  },
  {
    id: 5,
    title: '음식5',
    tags: ['자극적인음식', '과음', '폭식'],
    questions: [
      '자극적인 음식을 좋아해요',
      '자주 과식을 해요',
      '한번에 많은 양을 먹어요',
    ],
  },
  {
    id: 6,
    title: '음식6',
    tags: ['자극적인음식', '과음', '폭식'],
    questions: [
      '자극적인 음식을 좋아해요',
      '자주 과식을 해요',
      '한번에 많은 양을 먹어요',
    ],
  },
];
