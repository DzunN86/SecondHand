import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Diminati from './Diminati';
import Product from './Product';
import Terjual from './Terjual';
import {doGetProfile} from '../../store/actions';
import {CardFoto, CustomHeader, IconButton} from '../../components';

export default function DaftarJual({navigation}) {
  const dispatch = useDispatch();
  const {userProfile} = useSelector(state => state.getUserReducer);
  const {userData} = useSelector(state => state.loginReducer);
  const isFocused = useIsFocused();

  const [btnProdukActive, setBtnPodukActive] = useState(true);
  const [btnDiminatiActive, setBtnDiminatiActive] = useState(false);
  const [btnTerjualActive, setBtnTerjualActive] = useState(false);

  const [title, setTitle] = useState('');

  const listIconBtn = () => {
    if (title == 'produk') {
      return <Product />;
    }
    if (title == 'diminati') {
      return <Diminati />;
    }
    if (title == 'terjual') {
      return <Terjual />;
    }

    return <Product />;
  };

  const produk = () => {
    setTitle('produk');
    setBtnPodukActive(true);
    setBtnTerjualActive(false);
    setBtnDiminatiActive(false);
  };

  const diminati = () => {
    setTitle('diminati');
    setBtnPodukActive(false);
    setBtnTerjualActive(false);
    setBtnDiminatiActive(true);
  };

  const terjual = () => {
    setTitle('terjual');
    setBtnPodukActive(false);
    setBtnTerjualActive(true);
    setBtnDiminatiActive(false);
  };

  useEffect(() => {
    if (isFocused) {
      dispatch(doGetProfile());
    }
  }, [dispatch, isFocused]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <CustomHeader type="HeaderTitle" title="Daftar Jual Saya" />
      <View style={{marginHorizontal: 16}}>
        <CardFoto
          text1={
            userData.access_token
              ? userProfile.full_name || userData.name
              : 'Akun'
          }
          text2={
            userData.access_token ? userProfile.city || userData.name : 'Akun'
          }
          title="Edit"
          onPress={() => navigation.navigate('InfoAkunScreen')}
          source={{uri: userProfile.image_url}}
          stylee={{borderWidth: 1}}
        />
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 16,
            marginHorizontal: 16,
            justifyContent: 'space-between',
          }}>
          <IconButton
            style={{marginRight: 16}}
            icon="box"
            active={btnProdukActive}
            title="Produk"
            onPress={() => produk()}
          />
          <IconButton
            style={{marginRight: 16}}
            icon="heart"
            title="Diminati"
            active={btnDiminatiActive}
            onPress={() => diminati()}
          />
          <IconButton
            icon="dollar-sign"
            title="Terjual"
            active={btnTerjualActive}
            onPress={() => terjual()}
          />
        </View>
      </ScrollView>
      <>{listIconBtn()}</>
    </ScrollView>
  );
}
