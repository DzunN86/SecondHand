import {Formik} from 'formik';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {
  BottomSheetComponent,
  CustomButton,
  CustomHeader,
  CustomInput,
  CardFoto,
  CardProduk,
  CardDeskripsi,
} from '../../components';
import {tawarSchema} from '../../plugins';
import {doBid, getDetail} from '../../store/actions';
import {
  addItemWishlist,
  deleteItemWishlist,
  getItemWishlist,
} from '../../store/actions/wishlist';
import {COLORS, FONTS} from '../../themes';
import {formatRupiah} from '../../utils';
import styles from './styles';

const DetailProduct = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {dataProduk, isLoading} = useSelector(state => state.detailReducer);
  const {id_product} = route.params;
  const LoadingSend = useSelector(state => state.commonReducers.isLoading);
  const {userData, isLogin} = useSelector(state => state.loginReducer);
  const [autoFocus, setAutoFocus] = useState(false);
  const sheetRef = useRef(null);
  const dataWishlist = useSelector(state =>
    state.wishlistReducer.dataWishlist.filter(
      item => item.product_id === id_product,
    ),
  );
  const [isBookmark, setIsBookmark] = useState(dataWishlist.length > 0);

  const handleSnapPress = useCallback(index => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  const handleToggleBookmark = () => {
    setIsBookmark(!isBookmark);
    if (isBookmark) {
      dispatch(deleteItemWishlist(dataWishlist[0]?.id));
    }
    if (!isBookmark) {
      dispatch(addItemWishlist(dataProduk?.id));
    }
  };

  useEffect(() => {
    dispatch(getDetail(id_product));
  }, []);

  useEffect(() => {
    if (isLogin) {
      dispatch(getItemWishlist());
    }
  }, [isBookmark]);

  const handleSheetChanges = useCallback(index => {
    if (index == 2) {
      setAutoFocus(true);
    } else {
      setAutoFocus(false);
    }
  }, []);

  const onPressBid = ({bid_price}) => {
    dispatch(doBid(id_product, bid_price, navigation));
    sheetRef.current?.snapToIndex(1);
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
              keyboardType="numeric"
              autoFocus={autoFocus}
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
              type="BackHeaderLove"
              onPress={() => navigation.goBack()}
              isLoved={isBookmark}
              presLoved={handleToggleBookmark}
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
              source={{uri: dataProduk?.User?.image_url}}
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
          title="Saya Tertarik dan ingin Nego"
          onPress={() => {
            if (userData?.access_token) {
              handleSnapPress(2);
            } else {
              navigation.navigate('LoginScreen');
            }
          }}
        />
      </View>
      <BottomSheetComponent
        sheetRef={sheetRef}
        height={'65%'}
        component={BottomSheetContent}
        onChange={handleSheetChanges}
      />
    </>
  );
};

export default DetailProduct;
