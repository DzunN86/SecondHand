import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './style';
import { product } from '../../assets'

export default function Notifikasi() {
  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <Text style={styles.notifikasi}>Notifikasi</Text>
        </View>
        {/* product 1 */}
        <View>
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
        </View>
        <View style={styles.border}>
        </View>
        {/* product 2 */}
        <View>
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
        </View>
        <View style={styles.border}>
        </View>
        {/* product 3 */}
        <View>
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
        </View>
        <View style={styles.border}>
        </View>
        {/* product 4 */}
        <View>
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
        </View>
        <View style={styles.border}>
        </View>
        {/* product 5 */}
        <View>
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
        </View>
        <View style={styles.border}>
        </View>
      </ScrollView>
    </View>
  );
}
