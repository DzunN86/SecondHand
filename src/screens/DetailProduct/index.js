import { Text, View, ImageBackground, Image, ScrollView } from 'react-native';
import React, {useEffect, createRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {Formik} from 'formik';
import styles from './styles';
import { CustomHeader, CustomButton, CustomInput } from '../../components';
import { getDetail } from '../../store/actions'
import { COLORS, FONTS, SIZES } from '../../themes';
import { tawarSchema } from '../../plugins';

const CardPenjual = ({ name, city, source, style }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperPenjual}>
        <Image
          resizeMode="contain"
          style={styles.imagePenjual}
          source={source}
        />
        <View>
          <Text style={styles.namaPenjual}>{name}</Text>
          <Text style={[styles.namaKota, style]}>{city}</Text>
        </View>
      </View>
    </View>
  );
}
const CardProduk = ({ nameProduk, kategori, price }) => {
  return (
    <View style={styles.produk}>
      <View style={styles.wrapperProduk}>
        <View>
          <Text style={styles.namaProduk}>{nameProduk}</Text>
          <Text style={styles.kategori}>{kategori}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
    </View>
  );
}
const CardDeskripsi = ({ title, deskripsi }) => {
  return (
    <View style={styles.deskripsi}>
      <View style={styles.wrapperDeskripsi}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Text style={styles.deskripsiText}>{deskripsi}</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const thisRef = createRef();
const anim = new Animated.Value(1);

const Preview = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const {dataProduk} = useSelector(state => state.detailReducer);
  const {id_product} = route.params

  useEffect(() => {
    dispatch(getDetail(id_product));
  }, []);

  const BottomSheetContent = () => (
    <View style={styles.bSheet}>
      <View>
        <Text style={styles.bSheetTitle}>
          Masukkan Harga Tawarmu
        </Text>
        <Text style={styles.bSheetSubtitle}>
          Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu akan segera dihubungi penjual.
        </Text>
        <CardPenjual  
          name={dataProduk.name} 
          city={`Rp ${dataProduk.base_price}`}
          source={{uri: dataProduk.image_url}}
          style={{...FONTS.h4, color: COLORS.black}} />
      </View>
      <Formik
              initialValues={{harga: ''}}
              validationSchema={tawarSchema}
              onSubmit={values => onPressLogin(values)}>
              {({handleChange, handleSubmit, values, errors, isValid, dirty}) => (
                <>
                  <CustomInput
                    testID="input-harga"
                    label="Harga Tawar"
                    name="harga"
                    onChangeText={handleChange('harga')}
                    value={values.harga}
                    error={errors.harga}
                    iconPosition="right"
                    placeholder="Rp 0,00"
                  />
                  <CustomButton
                    testID="btn-login"
                    primary
                    title="Kirim"
                    disable={!(dirty && isValid)}
                    onPress={handleSubmit}
                  />
                </>
              )}
            </Formik>
      <CustomButton primary style={{}} title="Cancel" onPress={() => thisRef.current.snapTo(1)} />
    </View>
  );
  
  const BottomSheetHeader = () => (
    <View style={styles.bSheetContainer}>
      <View style={styles.bSheetHeader} />
    </View>
  );

  return (
    <View>
      <Animated.View style={{opacity: Animated.add(0.1, Animated.multiply(anim, 1.0))}}>
      <ImageBackground source={{uri: dataProduk.image_url}} style={styles.bgProduk}>
        <CustomHeader type="BackHeader" onPress={() => navigation.navigate('MainApp')} />
        <View style={styles.containerKeterangan}>
          <CardProduk 
            nameProduk={dataProduk.name} 
            kategori={dataProduk['Categories']?.[0]?.name} 
            price={`Rp ${dataProduk.base_price}`} />
          <CardPenjual 
            name={dataProduk['User']?.full_name} 
            city={dataProduk.location} 
            source={{uri: dataProduk['User']?.image_url}} />
          <CardDeskripsi title='Deskripsi' deskripsi={dataProduk.description} />
        </View>
      </ImageBackground>
      <View style={{height: SIZES.height * 0.7}}>
      </View>
      <View style={styles.button} >
        <CustomButton primary title="Saya Tertarik dan ingin Nego" onPress={() => thisRef.current.snapTo(0)} />
      </View>
    </Animated.View>
    <BottomSheet
        ref={thisRef}
        snapPoints={[570, 0]}
        renderContent={BottomSheetContent}
        renderHeader={BottomSheetHeader}
        initialSnap={1}
        callbackNode={anim}
        enabledGestureInteraction={true}
    />  
    </View>
    )
}

export default Preview
