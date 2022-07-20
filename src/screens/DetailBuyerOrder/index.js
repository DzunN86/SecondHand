import {useIsFocused} from '@react-navigation/native';
import {Formik} from 'formik';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {
  BottomSheetComponent,
  CardDeskripsi,
  CardFoto,
  CardProduk,
  CustomButton,
  CustomHeader,
  CustomInput,
} from '../../components';
import {tawarSchema} from '../../plugins';
import {doBid, delBuyerOrder, putBuyerOrder} from '../../store/actions';
import {fetchDetailBuyerOrder} from '../../store/actions/buyer/buyerOrder';
import {COLORS, FONTS} from '../../themes';
import {formatRupiah} from '../../utils';
import styles from './styles';

const DetailOrderBuyer = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {dataDetailOrder, isLoading} = useSelector(state => state.buyerReducer);
  const {id_order} = route.params;
  const LoadingSend = useSelector(state => state.commonReducers.isLoading);
  const {userData} = useSelector(state => state.loginReducer);
  const [autoFocus, setAutoFocus] = useState(false);
  const sheetRef = useRef(null);
  const isFocused = useIsFocused();

  const handleSnapPress = useCallback(index => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  useEffect(() => {
    dispatch(fetchDetailBuyerOrder(id_order));
  }, [isFocused]);

  const handleSheetChanges = useCallback(index => {
    if (index == 2) {
      setAutoFocus(true);
    } else {
      setAutoFocus(false);
    }
  }, []);

  const onPressBid = ({bid_price}) => {
    if (dataDetailOrder?.status == 'pending') {
      dispatch(putBuyerOrder(id_order, dataDetailOrder?.product_id, bid_price));
    } else {
      dispatch(doBid(dataDetailOrder?.product_id, bid_price, navigation));
    }
  };

  const onDeleteOrder = () => {
    dispatch(delBuyerOrder(id_order, navigation));
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
          text1={dataDetailOrder?.name}
          text2={formatRupiah(dataDetailOrder?.base_price)}
          source={{uri: dataDetailOrder?.image_url}}
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
  if (LoadingSend && isLoading) {
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
            source={{uri: dataDetailOrder?.Product?.image_url}}
            style={styles.bgProduk}>
            <CustomHeader
              type="BackHeader"
              onPress={() => navigation.navigate('MainApp')}
            />
          </ImageBackground>
          <View style={styles.containerKeterangan}>
            <CardProduk
              nameProduk={
                dataDetailOrder?.Product?.name
                  ? dataDetailOrder?.Product?.name
                  : '-'
              }
              kategori={dataDetailOrder?.Product?.Categories}
              price={dataDetailOrder?.base_price}
              bid_price={dataDetailOrder?.price}
              status={dataDetailOrder?.status}
            />
            <CardFoto
              text1={dataDetailOrder?.Product?.User?.full_name}
              text2={
                dataDetailOrder?.Product?.User?.city
                  ? dataDetailOrder?.Product?.User?.city
                  : '-'
              }
              source={{uri: dataDetailOrder?.Product?.User?.image_url || `https://ui-avatars.com/api/?name=${dataDetailOrder?.Product?.User?.full_name}&background=01A0C7&color=fff`}}
            />
            <CardDeskripsi
              title="Deskripsi"
              deskripsi={dataDetailOrder?.Product?.description}
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
        <CustomButton
          primary
          disabled={!userData.access_token}
          title="Saya Tertarik dan ingin Nego"
          onPress={() => handleSnapPress(2)}
        />
        {dataDetailOrder?.status == 'pending' && (
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <CustomButton
              style={{width: '48%'}}
              danger
              loading={isLoading}
              disabled={!userData.access_token || isLoading}
              title="Batalkan Penawaran"
              onPress={onDeleteOrder}
            />
            <CustomButton
              style={{width: '48%'}}
              primary
              disabled={!userData.access_token}
              title="Ubah Penawaran"
              onPress={() => handleSnapPress(2)}
            />
          </View>
        )}
      </View>
      <BottomSheetComponent
        sheetRef={sheetRef}
        height={'63%'}
        component={BottomSheetContent}
        onChange={handleSheetChanges}
      />
    </>
  );
};

export default DetailOrderBuyer;
