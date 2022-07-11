import { View, ImageBackground, ScrollView } from 'react-native';
import React, { useEffect, createRef, useCallback, } from 'react';
import BackHeader from '../../components/atoms/CustomHeader/BackHeader';
import styles from './styles';
import Animated from 'react-native-reanimated';
import Seller from '../../components/molecules/Seller';
import CardDeskripsi from '../../components/molecules/CardDeskripsi';
import ProductSeller from '../../components/molecules/ProdutSeller';
import { CustomButton } from '../../components';
import { SIZES } from '../../themes';
import { getDetailSeller, deleteProductSeller } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

const thisRef = createRef();
const anim = new Animated.Value(1);
const DetailProductSeller = ({ navigation, route }) => {

    const dispatch = useDispatch();
    const { id } = route.params
    const { userProfile } = useSelector(state => state.getUserReducer);
    const { detailProduk } = useSelector(state => state.detailSellerReducer);

    useEffect(() => {
        dispatch(getDetailSeller(id));
    }, [id]);

    const Delete = useCallback(() => {
        dispatch(deleteProductSeller(id, navigation));
    }, [dispatch, id]);

    return (
        <View>
            <ScrollView>
                <Animated.View
                    style={{ opacity: Animated.add(0.1, Animated.multiply(anim, 1.0)) }}>
                    <ImageBackground source={{ uri: detailProduk.image_url }} style={styles.bgProduk}>
                        <BackHeader onPress={() => navigation.goBack()} />
                        <View style={styles.containerKeterangan}>
                            <ProductSeller
                                nameProduk={detailProduk.name}
                                kategori={detailProduk?.categories}
                                price={`Rp ${detailProduk.base_price}`}
                            />
                            <Seller
                                source={{ uri: userProfile.image_url }}
                                name={userProfile.full_name}
                                city={userProfile.city} />
                            <CardDeskripsi
                                title_des='Deskripsi'
                                deskripsi={detailProduk.description}
                            />
                        </View>
                    </ImageBackground>
                </Animated.View>
                <View style={{ height: SIZES.height * 0.7 }}></View>
                <View style={styles.button}>
                    <CustomButton
                        style={styles.button1}
                        primary
                        type='daftarjual'
                        title="Edit"
                        onPress={() => onPressTerbit(values)}
                    />
                    <CustomButton
                        style={styles.button2}
                        danger
                        type='daftarjual'
                        title="Hapus"
                        onPress={() => Delete()}
                    />
                </View>
            </ScrollView>
        </View>
    )
};

export default DetailProductSeller;
