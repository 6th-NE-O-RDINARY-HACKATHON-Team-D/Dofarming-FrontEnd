import React from 'react';
import {View, Image} from 'react-native';
import styled from 'styled-components/native';
import Digital from '../../assets/vectors/test/digital.svg';
import Food from '../../assets/vectors/test/food.svg';
import Drink from '../../assets/vectors/test/drink.svg';
import Shopping from '../../assets/vectors/test/shopping.svg';
import Coin from '../../assets/vectors/test/coin.svg';
import Smoke from '../../assets/vectors/test/smoke.svg';
import Game from '../../assets/vectors/test/game.svg';

interface Props {
  id: number;
  title: string;
  tags: string[];
}

const Title = ({id, title, tags}: Props) => {
  return (
    <Container>
      <Box>
        {id === 0 && <Digital />}
        {id === 1 && <Food />}
        {id === 2 && <Drink />}
        {id === 3 && <Shopping />}
        {id === 4 && <Coin />}
        {id === 5 && <Smoke />}
        {id === 6 && <Game />}
        <TextBox>
          <TitleText>{title} 도파민</TitleText>
          <Tags>
            {tags?.map((tag, index) => (
              <Tag key={index}>
                <TagText>{tag}</TagText>
              </Tag>
            ))}
          </Tags>
        </TextBox>
      </Box>
      <View />
    </Container>
  );
};

export default Title;

const Container = styled.View`
  background-color: #fff;
  padding: 20px 24px;
  margin-bottom: 24px;
`;

const Box = styled.View`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const TitleText = styled.Text`
  color: #393f46;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
`;

const ImageBox = styled.View`
  width: 84px;
  height: 84px;
  border-radius: 16px;
  background-color: #d9d9d9;
  overflow: hidden;
`;

const TextBox = styled.View`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
`;

const Tags = styled.View`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const Tag = styled.View`
  background-color: #434a54;
  display: flex;
  padding: 4px 12px;
  align-items: flex-start;
  border-radius: 16px;
`;

const TagText = styled.Text`
  color: #fff;
  font-size: 14px;
  line-height: 22px;
`;
