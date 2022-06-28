import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {createRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import {CustomHeader, CustomButton} from '../../components/atoms';
import styles from './styles';
import {COLORS} from '../../themes';

bs = createRef();
fall = new Animated.Value(1);

function fromCamera() {
  return (
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
      bs.current.snapTo(1);
    })
  )
}

function fromLibrary() {
  return (
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
      bs.current.snapTo(1);
    })
  )
}

function BottomSheetContent() {
  return (
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
      <CustomButton primary title="Choose from library" onPress={fromLibrary} />
      <CustomButton primary title="Cancel" onPress={() => bs.current.snapTo(1)} />
    </View>
  );
}

function BottomSheetHeader() {
  return (
    <View style={styles.bSheetContainer}>
      <View style={styles.bSheetHeader} />
    </View>
  );
}

function Upload() {
  return (
    <TouchableOpacity
      onPress={() => bs.current.snapTo(0)}               
      style={styles.container}>
        <Icon
          name="camera"
          size={35}
          color={COLORS.white}
          style={styles.icon}
        />
      </TouchableOpacity>
  )
}

function InputForm({title, keyboardType, placeholder, multiline, numberOfLines, maxLength}) {
  return (
    <View>
    <Text style={styles.textLabel}>{title}</Text>
        <TextInput 
          style={styles.action}
          placeholder={placeholder}
          placeholderTextColor={COLORS.lightGray1}
          keyboardType={keyboardType}
          autoCorrect={false}
          multiline={multiline}
          numberOfLines={numberOfLines}
          maxLength={maxLength}
        />
   </View>   
  )
}

export default function InfoAkun({navigation}) {
  return (
    <View style={{height: "100%"}}>
      <CustomHeader 
        type="BackTitle" 
        title="Lengkapi Info Akun" 
        onPress={() => navigation.navigate("MainApp")} />
      <Animated.View style={{margin: 20,
        opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
      }}>
        <Upload />
        <View style={styles.menuWrapper}>
          <InputForm 
            title="Alamat*" 
            placeholder="Contoh: Jalan Daendles 55"
            multiline={true}
            numberOfLines={4}
          />
          <InputForm 
            title="No Handphone*" 
            placeholder="Contoh: 088980623792"
            keyboardType="numeric"
            numberOfLines={1}
            maxLength={13}
          />
        </View>
      </Animated.View>
      <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        renderContent={BottomSheetContent}
        renderHeader={BottomSheetHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <CustomButton primary title="Simpan" style={styles.button} />
    </View>
  );
}