import React, {useCallback, useMemo, useRef, useState} from 'react';
import {BottomSheetBackdrop, BottomSheetModal} from '@gorhom/bottom-sheet';
import styled from 'styled-components/native';
import {Text} from 'react-native';
import PhotoIcon from '../../assets/vectors/photo-icon.svg';
import GalleryIcon from '../../assets/vectors/gallery-icon.svg';
import Toast from './Toast';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  triggerConfetti: () => void;
}

const HomeBottomSheet = ({triggerConfetti}: Props) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['1%', '35%'], []);
  const [clear, setClear] = useState<boolean>(false);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const renderBackdrop = useCallback(
    (props: any) => <BottomSheetBackdrop {...props} pressBehavior="close" />,
    [],
  );

  return (
    <Container>
      {clear ? (
        <>
          <ImageView
            source={require('../../assets/image/mock-image.png')}
            resizeMode="cover">
            <ToastBottomView>
              <Toast
                mission="술 대신 콜라를 마시는 건 어떨까요"
                type="digital"
                color={'light'}
                date="2024.06.01 21:52"
              />
            </ToastBottomView>
          </ImageView>
        </>
      ) : (
        <ToastTopView>
          <TouchableOpacity onPress={handlePresentModalPress}>
            <Toast
              mission="술 대신 콜라를 마시는 건 어떨까요"
              type="digital"
              color={'dark'}
            />
          </TouchableOpacity>
        </ToastTopView>
      )}
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}>
        <ChildView>
          <Text>인증 하기</Text>
          <BtnView>
            <ChildBtn>
              <PhotoIcon />
              <Text>사진 찍기</Text>
            </ChildBtn>
            <ChildBtn onPress={triggerConfetti}>
              <GalleryIcon />
              <Text>앨범에서 선택</Text>
            </ChildBtn>
          </BtnView>
        </ChildView>
      </BottomSheetModal>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: start;
`;

const ImageView = styled.ImageBackground`
  height: 100%;
`;

const ToastTopView = styled.View`
  padding-top: 20px;
`;

const ToastBottomView = styled.View`
  padding-top: 230px;
`;

const ChildView = styled.View`
  padding-top: 15px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 62px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const BtnView = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ChildBtn = styled.TouchableOpacity`
  height: 147px;
  width: 162px;
  padding-top: 44px;
  padding-bottom: 30px;
  background-color: #f6f7f8;
  border: 1px;
  border-color: #ebeef2;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export default HomeBottomSheet;
