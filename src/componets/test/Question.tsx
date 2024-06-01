import styled from 'styled-components';
import {Text, View} from 'react-native';
import React, {useState} from 'react';
const Question = ({question}: {question: string[]}) => {
  const [answers, setAnswers] = useState<number[]>([2, 2, 2]);

  const handleAnswerChange = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answerIndex;
    setAnswers(newAnswers);
  };
  return (
    <Container>
      <Box>
        {question &&
          question.map((q, questionIndex) => (
            <View key={questionIndex}>
              <QuestionBox>
                <QuestionText>{q}</QuestionText>
              </QuestionBox>
              <AnswerBox>
                {[0, 1, 2, 3, 4].map((_, answerIndex) =>
                  answers[questionIndex] === answerIndex ? (
                    <Dot
                      key={answerIndex}
                      onPress={() =>
                        handleAnswerChange(questionIndex, answerIndex)
                      }
                    />
                  ) : (
                    <View key={answerIndex} style={{width: 20}}>
                      <SmallDot
                        onPress={() =>
                          handleAnswerChange(questionIndex, answerIndex)
                        }
                      />
                    </View>
                  ),
                )}
              </AnswerBox>
            </View>
          ))}
      </Box>
    </Container>
  );
};

export default Question;

const Container = styled.View``;

const Box = styled.View`
  padding: 0 24px;
  gap: 56px;
`;

const QuestionBox = styled.View`
  padding: 19px 0;
  background-color: #fff;
  justify-content: center;
  border: 1px solid #efefef;
  border-radius: 8px;
`;

const AnswerBox = styled.View`
  height: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  margin-top: 20px;
`;

const QuestionText = styled.Text`
  color: #393f46;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`;

const Dot = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  border-radius: 100px;
  background-color: #608fff;
`;

const SmallDot = styled.TouchableOpacity`
  width: 13px;
  height: 13px;
  border-radius: 100px;
  background-color: #bec6d3;
`;
