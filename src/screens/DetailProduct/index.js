import { StyleSheet, Text, View, ImageBackground, Image, ScrollView } from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import BackHeader from '../../components/atoms/CustomHeader/BackHeader';
import CardSeller from '../../components/molecules/CardSeller';
import { COLORS } from '../../themes';
import { getDetail } from '../../store/actions'

const CardPenjual = ({ name, city, source }) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
                <View style={{ marginLeft: 12 }}>
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
                                fontSize: 14
                            }}>
                            {city}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
const CardProduk = ({ nameProduk, kategori, price }) => {
    return (
        <View style={styles.produk}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ marginLeft: 12 }}>
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
                                fontSize: 14
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
                                fontSize: 20
                            }}>
                            {price}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
const CardDeskripsi = ({ title, deskripsi }) => {
    return (
        <View style={styles.deskripsi}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ marginLeft: 12 }}>
                    <Text
                        style={{
                            marginTop:10,
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
                                marginTop:10,
                                borderWidth: 0,
                                width: '100%',
                            }}>
                            <Text
                                style={{
                                    color: COLORS.gray,
                                    fontFamily: 'Poppins-Regular',
                                    fontSize: 14
                                }}>
                                {deskripsi}
                            </Text>
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

    console.log(dataProduk.Categories[0]?.name)

    return (
        <View>
            <ImageBackground source={{uri: dataProduk.image_url}} style={styles.bgProduk}>
                <BackHeader onPress={() => navigation.navigate('MainApp')} />
                <View style={{ marginTop: 250, }}>
                    <CardProduk 
                        nameProduk={dataProduk.name} 
                        kategori={dataProduk.Categories[0]?.name} 
                        price={dataProduk.base_price} />
                    <CardPenjual 
                        name={dataProduk['User']?.full_name} 
                        city={dataProduk.location} 
                        source={{uri: dataProduk['User']?.image_url}} />
                    <CardDeskripsi title='Deskripsi' deskripsi={dataProduk.description} />
                </View>
            </ImageBackground>
        </View>
    )
}

export default Preview
