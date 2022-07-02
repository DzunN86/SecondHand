import {View, Text, ScrollView} from 'react-native';
import React, {createRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import {Formik} from 'formik';
import styles from './styles';
import {updateSchema} from '../../plugins';
import {CustomHeader, CustomButton, CustomSelect, CustomInput, Upload} from '../../components';
import {kota} from '../../utils';
import {doUpdate} from '../../store/actions/akun';

const bs = createRef();
const fall = new Animated.Value(1);

export default function InfoAkun({navigation}) {

  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => state.commonReducers);
  const {userProfile} = useSelector(state => state.getUserReducer);

  const onPressUpdate = (data) => {
    const formData = new FormData();
    const update = update

    formData.append('full_name', data.nama);
    formData.append('city', data.kota);
    formData.append('address', data.alamat);
    formData.append('phone_number', data.phone_number);
    formData.append('image', {
      uri: `https://ui-avatars.com/api/?name=${data.nama}`,
      type: 'image/jpeg',
      name: 'image.jpg',
    });
    dispatch(doUpdate(formData, update, navigation));
  };

  const [image, setImage] = useState(userProfile.image_url);

  const fromCamera = () => (
      ImagePicker.openCamera({
        compressImageMaxWidth: 300,
        compressImageMaxHeight: 300,
        cropping: true,
        compressImageQuality: 0.7
      }).then(image => {
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
        onPress={() => navigation.goBack()} />
      <BottomSheet
        ref={bs}
        snapPoints={[285, 0]}
        renderContent={BottomSheetContent}
        renderHeader={BottomSheetHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <Animated.View style={{opacity: Animated.add(0.1, Animated.multiply(fall, 1.0))}}>  
        <View style={styles.form}>
          <Formik
            initialValues={{
              image: userProfile.image_url,
              nama: userProfile.full_name,
              phone_number: userProfile.phone_number,
              alamat: userProfile.address,
              kota: userProfile.city,
            }}
            validationSchema={updateSchema}
            onSubmit={values => onPressUpdate(values)}>
            {({handleChange, handleSubmit, values, errors, isValid, dirty}) => (
              <>
                <Upload source={{uri: image}} onPress={() => bs.current.snapTo(0)} name="camera" />
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