import {View, Text, TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import React, {createRef, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import {Formik} from 'formik';
import {registerSchema} from '../../plugins';
import {doUpdate} from '../../store/actions/akun';
import {CustomHeader, CustomButton, CustomSelect, CustomInput} from '../../components/atoms';
import styles from './styles';
import {COLORS} from '../../themes';
import {kota} from '../../utils';

bs = createRef();
fall = new Animated.Value(1);

function Upload({source, name}) {
  return (
    <TouchableOpacity
      onPress={() => bs.current.snapTo(0)}               
      style={styles.container}>
        <ImageBackground
          source={source}
          style={styles.container}
          imageStyle={{borderRadius: 15}}>
            <Icon
              name={name}
              size={35}
              color={COLORS.white}
              style={styles.icon}
            />
        </ImageBackground>
    </TouchableOpacity>
  )
}

export default function InfoAkun({navigation}) {

  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => state.commonReducers);
  // const {dataProfile} = useSelector(state => state.updateUserReducer)
  const {dataProfile} = useSelector(state => state.getUserReducer);

  const onPressLogin = (data) => {
    const formData = new FormData();

    formData.append('full_name', data.nama);
    formData.append('city', data.kota);
    formData.append('address', data.alamat);
    formData.append('phone_number', data.phone_number);
    formData.append('image', {
      uri: `https://ui-avatars.com/api/?name=${data.nama}`,
      type: 'image/jpeg',
      name: 'image.jpg',
    });
    dispatch(doUpdate(formData, navigation));
  };

  const {image, setImage} = useState(dataProfile.image_url);

  const fromCamera = () => (
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
  
  const fromLibrary = () => (
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
        <CustomButton primary title="Cancel" onPress={() => bs.current.snapTo(1)} />
      </View>
    );
  
  const BottomSheetHeader = () => (
      <View style={styles.bSheetContainer}>
        <View style={styles.bSheetHeader} />
      </View>
    );

  return (
    <ScrollView style={{height: "100%"}}>
      <CustomHeader 
        type="BackTitle" 
        title="Lengkapi Info Akun" 
        onPress={() => navigation.navigate("MainApp")} />
      <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        renderContent={BottomSheetContent}
        renderHeader={BottomSheetHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <Animated.View style={{opacity: Animated.add(0.1, Animated.multiply(fall, 1.0))}}>  
        <Upload source={{uri: image}} name="camera" />
        <View style={styles.form}>
          <Formik
            initialValues={{
              nama: dataProfile.full_name,
              phone_number: dataProfile.phone_number,
              alamat: dataProfile.address,
              kota: dataProfile.city,
            }}
            validationSchema={registerSchema}
            onSubmit={values => onPressLogin(values)}>
            {({handleChange, handleSubmit, values, errors, isValid, dirty}) => (
              <>
                <CustomInput
                  testID="input-nama"
                  label="Nama"
                  name="nama"
                  onChangeText={handleChange('nama')}
                  value={values.nama}
                  error={errors.nama}
                  iconPosition="right"
                  placeholder="Nama Lengkap"
                />
                <CustomInput
                  testID="input-phone_number"
                  label="Nomor Telepon"
                  name="phone_number"
                  onChangeText={handleChange('phone_number')}
                  value={values.phone_number}
                  error={errors.phone_number}
                  iconPosition="right"
                  placeholder="+62 xx xxx xxx xxx"
                />
                <CustomInput
                  testID="input-alamat"
                  label="Alamat"
                  name="alamat"
                  onChangeText={handleChange('alamat')}
                  value={values.alamat}
                  error={errors.alamat}
                  iconPosition="right"
                  placeholder="Alamat Lengkap"
                />
                <CustomSelect
                  label="Kota"
                  name="kota"
                  onSelectChange={handleChange('kota')}
                  value={values.kota}
                  error={errors.kota}
                  iconPosition="left"
                  selectData={kota}
                />
                <CustomButton
                  testID="btn-login"
                  loading={isLoading}
                  disabled={isLoading}
                  primary
                  title="Simpan"
                  disable={!(dirty && isValid)}
                  onPress={handleSubmit}
                />
              </>
            )}
          </Formik>
        </View>
      </Animated.View>
    </ScrollView>
  );
}