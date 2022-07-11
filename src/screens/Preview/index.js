import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import BackHeader from '../../components/atoms/CustomHeader/BackHeader';
import styles from './styles';
import CardSeller from '../../components/molecules/CardSeller';
import {COLORS} from '../../themes';

const CardPenjual = ({name, city, source}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.subCard}>
          <Image
            resizeMode="contain"
            style={{
              borderRadius: 15,
              height: 50,
              width: 50,
            }}
            source={source}
          />
        </View>
        <View style={{marginLeft: 12}}>
          <Text
            style={{
              color: COLORS.black,
              fontFamily: 'Poppins',
              fontSize: 20,
              textTransform: 'capitalize',
            }}>
            {name}
          </Text>
          <View
            style={{
              marginTop: 10,
              borderWidth: 0,
              width: '85%',
            }}>
            <Text
              style={{
                color: COLORS.gray,
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
              }}>
              {city}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const CardProduk = ({nameProduk, kategori, price}) => {
  return (
    <View style={styles.produk}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginLeft: 12}}>
          <Text
            style={{
              color: COLORS.black,
              fontFamily: 'Poppins',
              fontSize: 20,
              textTransform: 'capitalize',
            }}>
            {nameProduk}
          </Text>
          <View
            style={{
              borderWidth: 0,
              width: '85%',
            }}>
            <Text
              style={{
                color: COLORS.gray,
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
              }}>
              {kategori}
            </Text>
          </View>
          <View
            style={{
              borderWidth: 0,
              width: '85%',
            }}>
            <Text
              style={{
                color: COLORS.black,
                fontFamily: 'Poppins',
                fontSize: 20,
              }}>
              {price}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const CardDeskripsi = ({title, deskripsi}) => {
  return (
    <View style={styles.deskripsi}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginLeft: 12}}>
          <Text
            style={{
              marginTop: 10,
              color: COLORS.black,
              fontFamily: 'Poppins',
              fontSize: 20,
              textTransform: 'capitalize',
            }}>
            {title}
          </Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                marginTop: 10,
                borderWidth: 0,
                width: '100%',
              }}>
              <Text
                style={{
                  color: COLORS.gray,
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                }}>
                {deskripsi}
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
const Preview = ({navigation}) => {
  return (
    <View>
      <ImageBackground source={require('./bg.png')} style={styles.bgProduk}>
        <BackHeader onPress={() => navigation.goBack()} />
        <View style={{marginTop: 250}}>
          <CardProduk
            nameProduk="Jam Tangan Casio"
            kategori="Aksesoris"
            price="Rp 250.000"
          />
          <CardPenjual name="Nama Penjual" city="Kota" />
          <CardDeskripsi
            title="Deskripsi"
            deskripsi="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Preview;
