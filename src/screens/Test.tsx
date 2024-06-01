import Question from '../component/test/question';
import Title from '../component/test/title';

const Test = () => {
  return (
    <>
      <Title title="디지털" tags={['숏폼', '휴대폰중독']} />
      <Question
        question={[
          '긴 글을 읽는 데 어려움을 느껴요',
          '알림이 올 때마다 휴대폰을 확인해요',
          '휴대폰이 없으면 불안해요',
        ]}
      />
    </>
  );
};
export default Test;
