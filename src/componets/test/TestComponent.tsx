import Question from '../../componets/test/Question';
import Title from '../../componets/test/Title';
import styled from 'styled-components';
import Button, {SubmittButton} from '../../componets/test/Button';
import {View} from 'react-native';

const TestComponent = ({
  questions,
  handelPageChange,
  number,
}: {
  questions: {title: string; tags: string[]; questions: string[]};
  handelPageChange: (direction: string) => void;
  number: number;
}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#F6F7F8'}}>
      <Title id={questions.id} title={questions.title} tags={questions.tags} />
      <Question question={questions.questions} />
      <Buttons>
        {number === 0 ? (
          <View />
        ) : (
          <Button direction="left" onPress={() => handelPageChange('left')} />
        )}
        {number === 6 ? (
          <SubmittButton />
        ) : (
          <Button direction="right" onPress={() => handelPageChange('right')} />
        )}
      </Buttons>
    </View>
  );
};
export default TestComponent;

const Buttons = styled.View`
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 21px;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 24px;
`;
