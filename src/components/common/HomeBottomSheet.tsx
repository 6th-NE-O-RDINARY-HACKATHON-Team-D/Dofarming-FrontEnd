import React, {useCallback, useMemo, useRef} from 'react';
import {BottomSheetBackdrop, BottomSheetModal} from '@gorhom/bottom-sheet';
import styled from 'styled-components/native';

const HomeBottomSheet = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['10%', '30%'], []);

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
      <ModalBtn
        onPress={handlePresentModalPress}
        title="Present Modal"
        color="black"
      />
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}>
        <ChildView />
      </BottomSheetModal>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

const ChildView = styled.View`
  flex: 1;
  align-items: center;
`;

const ModalBtn = styled.Button`
  height: 10px;
`;

export default HomeBottomSheet;
