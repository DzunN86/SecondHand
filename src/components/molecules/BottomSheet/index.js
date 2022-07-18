import React, {useMemo, useCallback} from 'react';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {COLORS} from '../../../themes';

function BottomSheetComponent({sheetRef, component, onChange, height}) {
  // variables
  const snapPoints = useMemo(() => ['1%', '1%', height], []);

  // const handleClosePress = () => sheetRef.current.close();

  // renders
  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior="close"
        disappearsOnIndex={1}
        appearsOnIndex={2}
      />
    ),
    [],
  );

  return (
    <BottomSheet
      index={0}
      ref={sheetRef}
      snapPoints={snapPoints}
      enableHandlePanningGesture
      enableContentPanningGesture
      enableOverDrag
      handleIndicatorStyle={{backgroundColor: COLORS.grey8}}
      animateOnMount
      backdropComponent={renderBackdrop}
      onChange={onChange}>
      {component}
    </BottomSheet>
  );
}

export default BottomSheetComponent;
