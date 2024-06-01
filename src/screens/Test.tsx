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
      '긴 글을 읽는 데 어려움을 느껴요.',
      '알림이 올 때마다 휴대폰을 확인해요.',
      '휴대폰이 없으면 불안해요.',
    ],
  },
  {
    id: 1,
    title: '음식',
    tags: ['자극적인음식', '과음', '폭식'],
    questions: [
      '스트레스를 받으면 맵고 짠 음식부터 찾아요.',
      '배가 불러도 계속 군것질하고 싶어요.',
      '배달 음식을 자주 시켜요.',
    ],
  },
  {
    id: 2,
    title: '게임',
    tags: ['게임중독'],
    questions: [
      '게임 이외의 일에는 무관심해지는 것 같아요.',
      '꼭 해야할 일이 없으면 거의 모든 시간을 게임하는데 보내요.',
      '게임 한 판만 해야지.. 하는데 몇 시간이 지나있어요.',
    ],
  },
  {
    id: 3,
    title: '쇼핑',
    tags: ['택배', '과소비'],
    questions: [
      '사는 물건보다 물건을 사는 행위 그 자체를 더 즐겨요.',
      '내가 얼마나 쇼핑을 많이 하는지 다른 사람들이 알면 기절할 것 같아요.',
      '쌓여있는 택배를 열지 않고 방치해요.',
    ],
  },
  {
    id: 4,
    title: '음주',
    tags: ['과음'],
    questions: [
      '일주일에 3번 이상 술을 마셔요.',
      '다신 안먹겠다고 약속하지만 다시 술을 마시고 있어요.',
      '알코올 없이 잠에 들기 힘들어요.',
    ],
  },
  {
    id: 5,
    title: '투기',
    tags: ['도박', '과도한 투자'],
    questions: [
      '주식 수익률을 너무 자주 들여다봐요.',
      '결과를 알 수 없는 일에 도전하는 것에 빠져있어요',
      '주식 때문에 가족이나 친구들과 다툰적 있어요.',
    ],
  },
  {
    id: 6,
    title: '흡연',
    tags: ['니코틴'],
    questions: [
      '습관처럼 담배를 펴요.',
      '기분전환을 위해 담배를 피워요.',
      '담배가 없으면 하루를 망친 것 같아요.',
    ],
  },
];
