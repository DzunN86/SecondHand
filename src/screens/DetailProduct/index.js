import { Text, View, ImageBackground, Image, ScrollView } from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import { CustomHeader, CustomButton } from '../../components';
import { getDetail } from '../../store/actions'

const CardPenjual = ({ name, city, source }) => {
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
          <Text style={styles.namaKota}>{city}</Text>
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
const Preview = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const {dataProduk} = useSelector(state => state.detailReducer);
  const {id_product} = route.params

  useEffect(() => {
    dispatch(getDetail(id_product));
  }, []);

  return (
    <View>
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
      <View style={styles.button} >
        <CustomButton primary title="Saya Tertarik dan ingin Nego" />
      </View>
    </View>
    )
}

export default Preview
