import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {BottomSheetBackdrop, BottomSheetModal} from '@gorhom/bottom-sheet';
import styled from 'styled-components/native';
import {Text} from 'react-native';
import PhotoIcon from '../../assets/vectors/photo-icon.svg';
import GalleryIcon from '../../assets/vectors/gallery-icon.svg';
import Toast from './Toast';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {launchImageLibrary} from 'react-native-image-picker';
import axiosInstance from '../../api/AxiosInstance';

interface Props {
  triggerConfetti: () => void;
  mission: any;
}

const HomeBottomSheet = ({triggerConfetti, mission}: Props) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['1%', '35%'], []);
  const [clear, setClear] = useState<boolean>(false);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
    if (index === -1) {
      triggerConfetti();
    }
  }, []);

  const renderBackdrop = useCallback(
    (props: any) => <BottomSheetBackdrop {...props} pressBehavior="close" />,
    [],
  );

  const showCamera = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 512,
        maxHeight: 512,
        includeBase64: true,
      },
      res => {
        const formdata = new FormData();
        const file = {
          name: res?.assets?.[0]?.fileName,
          type: res?.assets?.[0]?.type,
          uri: res?.assets?.[0]?.uri?.replace('file://', ''),
        };
        formdata.append('filedata', file);
        setClear(true);
        async () => {
          try {
            const response = await axiosInstance.post(
              `/api/v1/missions/${mission.userMissionId}`,
              formdata,
            );
            console.log('img-response', mission.userMissionId, response);
          } catch (error) {
            console.log('error', error);
          }
        };
      },
    );
  };

  const renderToast = useMemo(() => {
    return clear ? (
      <>
        <ImageView
          source={require('../../assets/image/mock-image.png')}
          resizeMode="cover">
          <ToastBottomView>
            <Toast mission={mission} type="digital" />
          </ToastBottomView>
        </ImageView>
      </>
    ) : (
      <ToastTopView>
        <TouchableOpacity onPress={handlePresentModalPress}>
          <Toast mission={mission} type="digital" />
        </TouchableOpacity>
      </ToastTopView>
    );
  }, [clear, mission]);

  return (
    <Container>
      {renderToast}
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}>
        <ChildView>
          <Text>인증 하기</Text>
          <BtnView>
            <ChildBtn onPress={triggerConfetti}>
              <PhotoIcon />
              <Text>사진 찍기</Text>
            </ChildBtn>
            <ChildBtn onPress={showCamera}>
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
