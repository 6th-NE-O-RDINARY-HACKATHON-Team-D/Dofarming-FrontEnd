import {TouchableOpacity, Text} from 'react-native';
import styled from 'styled-components';

import LeftArrowIcon from '../../assets/vectors/LeftArrowIcon';
import RightArrowIcon from '../../assets/vectors/RightArrowIcon';
import {useNavigation} from '@react-navigation/native';
const Button = ({
  direction,
  onPress,
}: {
  direction: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {direction === 'left' ? <LeftArrowIcon /> : <RightArrowIcon />}
    </TouchableOpacity>
  );
};

export const SubmittButton = () => {
  const navigation = useNavigation();
  return (
    <SubmitBox onPress={() => navigation.navigate('TestResult')}>
      <SubmitText>완료하기</SubmitText>
    </SubmitBox>
  );
};

export default Button;

const SubmitBox = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #393f46;
  width: 112px;
  height: 50px;
`;
const SubmitText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`;
