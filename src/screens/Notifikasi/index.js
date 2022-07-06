import { Text, View, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import styles from './style';
import { product } from '../../assets'
import { useDispatch, useSelector } from 'react-redux';
import { getNotification } from '../../store/actions/notification';
import { CustomHeader } from '../../components/atoms';
import { COLORS } from '../../themes';

function CardNotif() {
  return (
    <>
    <TouchableOpacity>
      <View style={styles.productNotification}>
        <Image source={product} style={styles.productImage}></Image>
        <View style={styles.productInfo}>
          <Text style={styles.label}>Penawaran produk</Text>
          <Text style={styles.labelText}>Jam Tangan Casio</Text>
          <Text style={styles.labelText}>Rp 250.000</Text>
          <Text style={styles.labelText}>Berhasil Ditawar Rp 200.000</Text>
          <Text style={styles.label}>Kamu akan segera dihubungi penjual via whatsapp</Text>
        </View>
        <View style={styles.date}>
          <Text style={styles.label}>20 Apr, 14:04</Text>
        </View>
      </View>
    </TouchableOpacity>
    <View style={styles.border} />
    </>
  )
}

export default function Notifikasi() {

  const { notif, isLoading } = useSelector(state => state.notificationReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotification());
  }, []);

  return (
    <View style={styles.container}>
        
        {/* product 1 */}
        {isLoading ? (
          <ActivityIndicator
            style={{ flex: 1 }}
            size="large"
            color={COLORS.primary}
          />
        ) : (
        <FlatList
          data={notif}
          renderItem={() => <CardNotif />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<CustomHeader
            type="HeaderTitle"
            title="Notifikasi"
          />}
        />
        )}
    </View>
  );
}
