import {View, Text} from 'react-native';
import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import BottomSheet from 'reanimated-bottom-sheet';
import {CustomButton} from '../../atoms';
import styles from './styles';

export default function BottomUpload({setAvatar, thisRef, anim}) {

  // let image = {image}

  const fromCamera = () => (
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      setAvatar(image.path);
      thisRef.current.snapTo(1);
    })
  )

  const fromLibrary = () => (
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      setAvatar(image.path);
      thisRef.current.snapTo(1);
    })
  )

  const BottomSheetContent = () => (
    <View style={styles.bSheet}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.bSheetTitle}>
          Upload Photo
        </Text>
        <Text style={styles.bSheetSubtitle}>
          Choose your avatar
        </Text>
      </View>
      <CustomButton primary title="Take photo" onPress={fromCamera} />
      <CustomButton primary title="Choose from gallery" onPress={fromLibrary} />
      <CustomButton primary title="Cancel" onPress={() => thisRef.current.snapTo(1)} />
    </View>
  );

  const BottomSheetHeader = () => (
      <View style={styles.bSheetContainer}>
        <View style={styles.bSheetHeader} />
      </View>
    );

  return (
    <BottomSheet
      ref={thisRef}
      snapPoints={[320, 0]}
      renderContent={BottomSheetContent}
      renderHeader={BottomSheetHeader}
      initialSnap={1}
      callbackNode={anim}
      enabledGestureInteraction={true}
  />
  )
}