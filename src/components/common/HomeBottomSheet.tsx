import React, {useCallback, useMemo, useRef} from 'react';
import {BottomSheetBackdrop, BottomSheetModal} from '@gorhom/bottom-sheet';
import styled from 'styled-components/native';
import {Text} from 'react-native';
import PhotoIcon from '../../assets/vectors/photo-icon.svg';
import GalleryIcon from '../../assets/vectors/gallery-icon.svg';

const HomeBottomSheet = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['1%', '40%'], []);

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
      {/* <ModalBtn onPress={handlePresentModalPress} /> */}
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
            <ChildBtn>
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
  justify-content: center;
`;

const ChildView = styled.View`
  padding-top: 15px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 50px;
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
