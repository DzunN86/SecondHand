import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IconButton} from '../../components';
import HeaderTitle from '../../components/atoms/CustomHeader/Title';
import CardSeller from '../../components/molecules/CardSeller';
import {doGetProfile} from '../../store/actions';
import Diminati from './Diminati';
import Product from './Product';
import Terjual from './Terjual';

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
    <ScrollView>
      <HeaderTitle title="Daftar Jual Saya" />
      <CardSeller
        name={
          userData.access_token
            ? userProfile.full_name || userData.name
            : 'Akun'
        }
        city={
          userData.access_token ? userProfile.city || userData.name : 'Akun'
        }
        title="Edit"
        onPress={() => navigation.navigate('InfoAkunScreen')}
        source={{uri: userProfile.image_url}}
      />
      <View
        style={{
          flexDirection: 'row',
          marginTop: 16,
          marginHorizontal: 15,
          justifyContent: 'space-between',
        }}>
        <IconButton
          icon="box"
          active={btnProdukActive}
          title="Produk"
          onPress={() => produk()}
        />
        <IconButton
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
      <>{listIconBtn()}</>
    </ScrollView>
  );
}
