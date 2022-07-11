import { Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './style';
import { CustomHeader, CardBuyer, CustomButton } from '../../components';
import { product } from '../../assets'

export default function InfoPenawaran({navigation}) {
  return (
    <View style={styles.container}>
      <CustomHeader type="BackTitle" title="Info Penawar" onPress={() => navigation.goBack()} />
      <CardBuyer city="palembang" name="qodri" />
      <View>
        <Text style={styles.LabelPenawaran}>Daftar Produkmu Yang Ditawar</Text>
        <TouchableOpacity>
          <View style={styles.productNotification}>
            <Image source={product} style={styles.productImage}></Image>
            <View style={styles.productInfo}>
              <Text style={styles.label}>Penawaran produk</Text>
              <Text style={styles.labelText}>Jam Tangan Casio</Text>
              <Text style={styles.labelText}>Rp 250.000</Text>
              <Text style={styles.labelText}>Ditawar Rp 200.000</Text>
            </View>
            <View style={styles.date}>
              <Text style={styles.label}>20 Apr, 14:04</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View
          style={{
            marginVertical: 25,
            marginHorizontal: 25,
            flexDirection: 'row',
            justifyContent: 'space-around'
          }}>
          <CustomButton
            primary
            title="Tolak"
            style={styles.button1}
            // onPress={() => navigation.navigate('PreviewScreen', { values })}
            // disable={!(dirty && isValid)}
          />
          <CustomButton
            primary
            title="Terima"
            style={styles.button2}
            // onPress={() => navigation.navigate('Daftar Jual')}
            // disable={!(dirty && isValid)}
            // onPress={handleSubmit}
          />
        </View>
      </View>
    </View>
  );
}
