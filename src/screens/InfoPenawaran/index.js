import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Alert, Image, Linking, ScrollView, Text, View} from 'react-native';
import {GestureHandlerRootView, RectButton} from 'react-native-gesture-handler';
import {ActivityIndicator, RadioButton} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {
  BottomSheetComponent,
  CardBuyer,
  CustomButton,
  CustomHeader,
} from '../../components';
import {getDetailOrderSeller} from '../../store/actions/seller/getSellerOrder';
import {pathcOrderSeller} from '../../store/actions/seller/updateOrder';
import {COLORS} from '../../themes';
import {formatDateTime, formatRupiah} from '../../utils';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function InfoPenawaran({navigation, route}) {
  const {id_order} = route.params;
  const dispatch = useDispatch();
  const sheetRef = useRef(null);
  const {detailOrderSeller, isLoading} = useSelector(
    state => state.orderSellerReducers,
  );
  const [modalMode, setModalMode] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const [RadioValue, setRadioValue] = useState(null);

  useEffect(() => {
    dispatch(getDetailOrderSeller(id_order));
  }, [isSubmit]);

  const onChangeStatus = useCallback(status => {
    dispatch(pathcOrderSeller(id_order, status));
    setIsSubmit(true);
    if(RadioValue == 'available'){
      navigation.navigate('Daftar Jual');
    }
    if (status == 'accepted') {
      sheetRef.current?.snapToIndex(2);
    }
  }, []);

  const BottomSheetContent = () => (
    <View style={styles.bSheet}>
      {modalMode === 'status' ? (
        <>
          <View>
            <Text style={styles.bSheetTitle}>
              Perbarui status penjualan produkmu
            </Text>
            <View style={{marginTop: 10}}>
              <RadioButton.Group
                onValueChange={value => setRadioValue(value)}
                value={RadioValue}>
                <View style={styles.radioWrapper}>
                  <RadioButton value="seller" />
                  <RectButton
                    style={{paddingVertical: 8, paddingHorizontal: 10, flex: 1}}
                    onPress={() => setRadioValue('seller')}>
                    <Text style={styles.labelRadio}>Berhasil Terjual</Text>
                    <Text style={styles.sublabelRadio}>
                      Kamu telah sepakat menjual produk ini kepada pembeli
                    </Text>
                  </RectButton>
                </View>
                <View style={styles.radioWrapper}>
                  <RadioButton value="available" />
                  <RectButton
                    style={{paddingVertical: 8, paddingHorizontal: 10, flex: 1}}
                    onPress={() => setRadioValue('available')}>
                    <Text style={styles.labelRadio}>Batalkan transaksi</Text>
                    <Text style={styles.sublabelRadio}>
                      Kamu membatalkan transaksi produk ini dengan pembeli
                    </Text>
                  </RectButton>
                </View>
              </RadioButton.Group>
              <CustomButton
                style={{marginTop: 24}}
                primary
                disabled={RadioValue === null || isLoading}
                loading={isLoading}
                title="Kirim"
                onPress={() => {
                  onChangeStatus(RadioValue);
                  sheetRef.current?.snapToIndex(1);
                  setModalMode('');
                }}
              />
            </View>
          </View>
        </>
      ) : (
        <>
          <View>
            <Text style={styles.bSheetTitle}>
              Yeay kamu berhasil mendapat harga yang sesuai
            </Text>
            <Text style={styles.bSheetSubtitle}>
              Segera hubungi pembeli melalui whatsapp untuk transaksi
              selanjutnya
            </Text>
          </View>
          <View style={styles.bSheetBody}>
            <Text style={styles.matchTitle}>Product Match</Text>
            <View style={styles.infoBuyer}>
              <Image
                source={{uri: detailOrderSeller.User?.image_url || `https://ui-avatars.com/api/?name=${detailOrderSeller.User?.full_name}&background=01A0C7&color=fff`}}
                style={styles.productImage}
              />
              <View style={styles.productInfo}>
                <Text style={styles.labelText}>
                  {detailOrderSeller.User?.full_name}
                </Text>
                <Text style={styles.labelText}>
                  {detailOrderSeller.User?.city}
                </Text>
              </View>
            </View>
            <View style={styles.productMatch}>
              <Image
                source={{uri: detailOrderSeller.Product?.image_url}}
                style={styles.productImage}
              />
              <View style={styles.productInfo}>
                <Text style={styles.labelText}>
                  {detailOrderSeller?.product_name}
                </Text>
                <Text style={[styles.labelText, styles.strike_through]}>
                  {formatRupiah(detailOrderSeller?.base_price)}
                </Text>
                <Text style={styles.labelText}>
                  Ditawar {formatRupiah(detailOrderSeller?.price)}
                </Text>
              </View>
            </View>
          </View>
          <CustomButton
            style={{marginTop: 24}}
            primary
            title="Hubungi via Whatsapp"
            icon={<Icon name="whatsapp" size={24} color={COLORS.white} />}
            onPress={onHubungi}
          />
        </>
      )}
    </View>
  );

  const onHubungi = () => {
    Linking.openURL(`https://wa.me/62${detailOrderSeller?.User?.phone_number}`);
  };

  if (isLoading && !isSubmit) {
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
    <GestureHandlerRootView style={styles.container}>
      <ScrollView>
        <CustomHeader
          type="BackTitle"
          title="Info Penawaran"
          onPress={() => navigation.goBack()}
        />
        <CardBuyer
          city={detailOrderSeller.User?.city}
          name={detailOrderSeller.User?.full_name}
          source={{uri: detailOrderSeller.User?.image_url || `https://ui-avatars.com/api/?name=${detailOrderSeller.User?.full_name}&background=01A0C7&color=fff`}}
        />
        <View>
          <Text style={styles.LabelPenawaran}>
            Daftar Produkmu Yang Ditawar
          </Text>
          <View style={styles.productNotification}>
            <Image
              source={{uri: detailOrderSeller.Product?.image_url}}
              style={styles.productImage}
            />
            <View style={styles.productInfo}>
              <View style={styles.wrapperDate}>
                <Text style={styles.label}>Penawaran produk</Text>
                <Text style={styles.label}>
                  {formatDateTime(detailOrderSeller?.createdAt)}
                </Text>
              </View>
              <Text style={styles.labelText}>
                {detailOrderSeller?.product_name}
              </Text>
              <Text style={[styles.labelText, styles.strike_through]}>
                {formatRupiah(detailOrderSeller?.base_price)}
              </Text>
              <Text style={styles.labelText}>
                Ditawar {formatRupiah(detailOrderSeller?.price)}
              </Text>
            </View>
          </View>
          {detailOrderSeller?.status !== 'seller' && (
            <View
              style={{
                marginVertical: 25,
                marginHorizontal: 16,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              {detailOrderSeller?.status !== 'accepted' ? (
                <>
                  <CustomButton
                    danger
                    title="Tolak"
                    onPress={() => {
                      Alert.alert(
                        'Terima Penawaran',
                        'Apakah anda yakin ingin menolak penawaran ini?',
                        [
                          {text: 'Tidak', style: 'cancel'},
                          {
                            text: 'Ya',
                            onPress: () => {
                              onChangeStatus('declined');
                            },
                          },
                        ],
                      );
                    }}
                    style={styles.button1}
                  />
                  <CustomButton
                    primary
                    title="Terima"
                    onPress={() => {
                      Alert.alert(
                        'Terima Penawaran',
                        'Apakah anda yakin ingin menerima penawaran ini?',
                        [
                          {text: 'Tidak', style: 'cancel'},
                          {
                            text: 'Ya',
                            onPress: () => {
                              onChangeStatus('accepted');
                            },
                          },
                        ],
                      );
                    }}
                    style={styles.button2}
                  />
                </>
              ) : (
                <>
                  <CustomButton
                    success
                    title="Status"
                    onPress={() => {
                      sheetRef.current?.snapToIndex(2);
                      setModalMode('status');
                    }}
                    style={styles.button1}
                  />
                  <CustomButton
                    primary
                    title="Hubungi"
                    icon={
                      <Icon name="whatsapp" size={24} color={COLORS.white} />
                    }
                    onPress={onHubungi}
                    style={styles.button2}
                  />
                </>
              )}
            </View>
          )}
        </View>
      </ScrollView>
      <BottomSheetComponent
        height={modalMode === 'status' ? '45%' : '55%'}
        sheetRef={sheetRef}
        component={BottomSheetContent}
      />
    </GestureHandlerRootView>
  );
}
