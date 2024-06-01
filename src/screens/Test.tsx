import Question from '../componets/test/Question';
import Title from '../componets/test/Title';
import styled from 'styled-components';
import Button from '../componets/test/Button';
import LeftArrowIcon from '../assets/vectors/LeftArrowIcon';
import {View} from 'react-native';

const Test = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#F6F7F8'}}>
      <Title title="디지털" tags={['숏폼', '휴대폰중독']} />
      <Question
        question={[
          '긴 글을 읽는 데 어려움을 느껴요',
          '알림이 올 때마다 휴대폰을 확인해요',
          '휴대폰이 없으면 불안해요',
        ]}
      />
      <Buttons>
        <Button direction="left" />
        <Button direction="right" />
      </Buttons>
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
