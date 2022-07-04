import { StyleSheet, Text, View, ImageBackground, Image, ScrollView } from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import BackHeader from '../../components/atoms/CustomHeader/BackHeader';
import CardSeller from '../../components/molecules/CardSeller';
import { COLORS, FONTS } from '../../themes';
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
                            ...FONTS.h4,
                            color: COLORS.black,
                            textTransform: 'capitalize',
                        }}>
                        {name}
                    </Text>
                    <Text
                        style={{
                            ...FONTS.body5,
                        }}>
                        {city}
                    </Text>
                </View>
            </View>
        </View>
    );
}
const CardProduk = ({ nameProduk, kategori, price }) => {
    return (
        <View style={styles.produk}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                <View style={{ marginLeft: 12 }}>
                    <Text
                        style={{
                            color: COLORS.black,
                            ...FONTS.h4,
                            textTransform: 'capitalize',
                        }}>
                        {nameProduk}
                    </Text>
                    <Text
                        style={{
                            ...FONTS.body5
                        }}>
                        {kategori}
                    </Text>
                    <Text
                        style={{
                            ...FONTS.h4,
                            color: COLORS.black,
                        }}>
                        {price}
                    </Text>
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
                            ...FONTS.h4,
                            color: COLORS.black,
                            textTransform: 'capitalize',
                        }}>
                        {title}
                    </Text>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View
                            style={{
                                marginTop:10,
                                width: '100%',
                            }}>
                            <Text
                                style={{
                                    ...FONTS.body4
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

    return (
        <View>
            <ImageBackground source={{uri: dataProduk.image_url}} style={styles.bgProduk}>
                <BackHeader onPress={() => navigation.navigate('MainApp')} />
                <View style={{ marginTop: 250, }}>
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
        </View>
    )
}

export default Preview
