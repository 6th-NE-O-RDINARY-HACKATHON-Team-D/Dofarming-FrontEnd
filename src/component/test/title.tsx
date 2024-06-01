import {View, Text} from 'react-native';
import styled from 'styled-components';

const Title = ({
  title = '디지털',
  tags = ['숏폼', '휴대폰중독'],
}: {
  title: string;
  tags: string[];
}) => {
  return (
    <Container>
      <Box>
        <ImageBox></ImageBox>
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
      <View></View>
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
