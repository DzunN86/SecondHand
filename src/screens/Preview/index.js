import { View, ImageBackground, ScrollView } from 'react-native';
import React from 'react';
import BackHeader from '../../components/atoms/CustomHeader/BackHeader';
import styles from './styles';
import Animated from 'react-native-reanimated';
import Seller from '../../components/molecules/Seller';
import CardDeskripsi from '../../components/molecules/CardDeskripsi';
import ProductSeller from '../../components/molecules/ProdutSeller';
import { CustomButton } from '../../components';
import { SIZES } from '../../themes';
import { useSelector } from 'react-redux';


const anim = new Animated.Value(1);
const Preview = ({ navigation, route }) => {

    const { values, image } = route.params
    const { userProfile } = useSelector(state => state.getUserReducer);
    const { category } = useSelector(state => state.categoryReducer);
    const { userData } = useSelector(state => state.loginReducer);

    const onPressTerbit = value => {
        const formData = new FormData();

        formData.append('name', value.name_product);
        formData.append('description', value.description);
        formData.append('base_price', value.base_price);
        formData.append('category_ids', value.category_ids.toString());
        formData.append('location', userProfile.city);
        formData.append('image', {
            uri: `https://ui-avatars.com/api/?name=${data.nama}`,
            type: 'image/jpeg',
            name: 'image.jpg',
        });
        dispatch(doProduct(formData));
    }
    return (
        <View>
            <ScrollView>
                <Animated.View
                    style={{ opacity: Animated.add(0.1, Animated.multiply(anim, 1.0)) }}>
                    <ImageBackground source={{ uri: values.image }} style={styles.bgProduk}>
                        <BackHeader onPress={() => navigation.goBack()} />
                        <View style={styles.containerKeterangan}>
                            <ProductSeller
                                nameProduk={values.name_product}
                                kategori={values.category_ids}
                                price={`Rp ${values.base_price}`}
                            />
                            <Seller
                                source={{ uri: userProfile.image_url }}
                                name={userProfile.full_name}
                                city={userProfile.city} />
                            <CardDeskripsi
                                title_des='Deskripsi'
                                deskripsi={values.description}
                            />
                        </View>
                    </ImageBackground>
                </Animated.View>
                <View style={{ height: SIZES.height * 0.7 }}></View>
                <View style={styles.button}>
                    <CustomButton
                        primary
                        type='daftarjual'
                        title="Terbitkan"
                        onPress={() => onPressTerbit(values)}
                    />
                </View>
            </ScrollView>
        </View>
    )
};

export default Preview;
