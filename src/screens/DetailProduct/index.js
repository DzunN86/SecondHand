import {Formik} from 'formik';
import React, {useCallback, useEffect, useRef} from 'react';
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {
  BottomSheetComponent,
  CustomButton,
  CustomHeader,
  CustomInput,
} from '../../components';
import {tawarSchema} from '../../plugins';
import {doBid, getDetail} from '../../store/actions';
import {COLORS, FONTS} from '../../themes';
import {formatRupiah} from '../../utils';
import styles from './styles';

const CardFoto = ({text1, text2, source, style}) => {
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
};
const CardProduk = ({nameProduk, kategori, price}) => {
  return (
    <View style={styles.produk}>
      <View style={styles.wrapperProduk}>
        <View>
          <Text style={styles.namaProduk}>{nameProduk}</Text>
          <Text style={styles.kategori}>
            {kategori?.length > 0
              ? kategori.map(item => item.name).join(', ')
              : '-'}
          </Text>
          <Text style={styles.price}>{formatRupiah(price)}</Text>
        </View>
      </View>
    </View>
  );
};
const CardDeskripsi = ({title, deskripsi}) => {
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
};

const DetailProduct = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {dataProduk, isLoading} = useSelector(state => state.detailReducer);
  const {id_product} = route.params;
  const LoadingSend = useSelector(state => state.commonReducers.isLoading);
  const {userData} = useSelector(state => state.loginReducer);
  const sheetRef = useRef(null);

  const handleSnapPress = useCallback(index => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  useEffect(() => {
    dispatch(getDetail(id_product));
  }, []);

  const onPressBid = ({bid_price}) => {
    dispatch(doBid(id_product, bid_price));
  };
  const BottomSheetContent = () => (
    <View style={styles.bSheet}>
      <View>
        <Text style={styles.bSheetTitle}>Masukkan Harga Tawarmu</Text>
        <Text style={styles.bSheetSubtitle}>
          Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu akan
          segera dihubungi penjual.
        </Text>
        <CardFoto
          text1={dataProduk?.name}
          text2={formatRupiah(dataProduk?.base_price)}
          source={{uri: dataProduk?.image_url}}
          style={{...FONTS.body3, color: COLORS.black}}
        />
      </View>
      <Formik
        initialValues={{bid_price: ''}}
        validationSchema={tawarSchema}
        onSubmit={values => onPressBid(values)}>
        {({
          handleChange,
          handleSubmit,
          values,
          touched,
          errors,
          isValid,
          dirty,
        }) => (
          <>
            <CustomInput
              testID="input-bid"
              label="Harga Tawar"
              name="bid_price"
              onChangeText={handleChange('bid_price')}
              value={values.bid_price}
              error={touched.bid_price && errors.bid_price}
              iconPosition="right"
              placeholder="Rp 0,00"
            />
            <CustomButton
              testID="btn-login"
              loading={LoadingSend}
              primary
              title="Kirim"
              disabled={!(dirty && isValid) || LoadingSend}
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </View>
  );
  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="small" color={COLORS.primary} />
      </View>
    );
  }

  return (
    <>
      <ScrollView>
        <View>
          <ImageBackground
            source={{uri: dataProduk?.image_url}}
            style={styles.bgProduk}>
            <CustomHeader
              type="BackHeader"
              onPress={() => navigation.navigate('MainApp')}
            />
          </ImageBackground>
          <View style={styles.containerKeterangan}>
            <CardProduk
              nameProduk={dataProduk?.name ? dataProduk.name : '-'}
              kategori={dataProduk?.Categories}
              price={dataProduk?.base_price}
            />
            <CardFoto
              text1={dataProduk.User?.full_name}
              text2={dataProduk?.location}
              source={{uri: dataProduk.User?.image_url}}
            />
            <CardDeskripsi
              title="Deskripsi"
              deskripsi={dataProduk?.description}
            />
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 16,
          paddingHorizontal: 16,
        }}>
        <CustomButton
          primary
          disabled={!userData.access_token}
          title="Saya Tertarik dan ingin Nego"
          onPress={() => handleSnapPress(2)}
        />
      </View>
      <BottomSheetComponent
        sheetRef={sheetRef}
        component={BottomSheetContent}
      />
    </>
  );
};

export default DetailProduct;
