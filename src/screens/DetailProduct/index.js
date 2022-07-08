import { Text, View, ImageBackground, Image, ScrollView } from 'react-native';
import React, {useEffect, createRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {Formik} from 'formik';
import styles from './styles';
import { CustomHeader, CustomButton, CustomInput } from '../../components';
import { getDetail, doBid } from '../../store/actions'
import { COLORS, FONTS, SIZES } from '../../themes';
import { tawarSchema } from '../../plugins';

const CardFoto = ({ text1, text2, source, style }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperPenjual}>
        <Image
          resizeMode="contain"
          style={styles.imagePenjual}
          source={source}
        />
        <View>
          <Text style={styles.namaPenjual}>{text1}</Text>
          <Text style={[styles.namaKota, style]}>{text2}</Text>
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
  const {isLoading} = useSelector(state => state.commonReducers);

  useEffect(() => {
    dispatch(getDetail(id_product));
  }, []);

  const onPressBid = ({bid_price}) => {
    const notif = notif
    dispatch(doBid(id_product, bid_price));
  };
  const BottomSheetContent = () => (
    <View style={styles.bSheet}>
      <View>
        <Text style={styles.bSheetTitle}>
          Masukkan Harga Tawarmu
        </Text>
        <Text style={styles.bSheetSubtitle}>
          Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu akan segera dihubungi penjual.
        </Text>
        <CardFoto  
          text1={dataProduk.name} 
          text2={`Rp ${dataProduk.base_price}`}
          source={{uri: dataProduk.image_url}}
          style={{...FONTS.h4, color: COLORS.black}} />
      </View>
      <Formik
        initialValues={{bid_price: ''}}
        validationSchema={tawarSchema}
        onSubmit={values => onPressBid(values)}>
        {({handleChange, handleSubmit, values, errors, isValid, dirty}) => (
          <>
            <CustomInput
              testID="input-bid"
              label="Harga Tawar"
              name="bid_price"
              onChangeText={handleChange('bid_price')}
              value={values.bid_price}
              error={errors.bid_price}
              iconPosition="right"
              placeholder="Rp 0,00"
            />
            <CustomButton
              testID="btn-login"
              loading={isLoading}
              disabled={isLoading}
              primary
              title="Kirim"
              disable={!(dirty && isValid)}
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
      <CustomButton
        primary
        title="Cancel"
        onPress={() => thisRef.current.snapTo(1)}
        style={{marginBottom: 50}}
      />
    </View>
  );

  return (
    <View>
      <Animated.View style={{opacity: Animated.add(0.3, Animated.multiply(anim, 1.0))}}>
      <ImageBackground source={{uri: dataProduk.image_url}} style={styles.bgProduk}>
        <CustomHeader type="BackHeader" onPress={() => navigation.navigate('MainApp')} />
        <View style={styles.containerKeterangan}>
          <CardProduk 
            nameProduk={dataProduk.name} 
            kategori={dataProduk['Categories']?.[0]?.name} 
            price={`Rp ${dataProduk.base_price}`} />
          <CardFoto 
            text1={dataProduk['User']?.full_name} 
            text2={dataProduk.location} 
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
        snapPoints={[550, 0]}
        renderContent={BottomSheetContent}
        initialSnap={1}
        callbackNode={anim}
        enabledGestureInteraction={true}
    />  
    </View>
    )
}

export default Preview
