import {Skeleton} from '@rneui/base';
import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {COLORS, RADIUS, SIZES} from '../../../themes';
import TabPicture from './TabPicture';
import TabProduk from './TabProduk';

function TabAdd({title, icon, onPress, label, type}) {
  const Loading = useSelector(state => state.productSellerReducers.isLoading);

  if (type === 'TabProduk') {
    return (
      <>
        {Loading ? (
          <View
            style={{
              backgroundColor: COLORS.white,
              marginTop: 5,
              borderRadius: RADIUS.small,
              borderColor: '#E5E5E5',
              borderWidth: 1,
              height: SIZES.height * 0.27,
              width: SIZES.width * 0.44,
              padding: 8,
            }}>
            <Skeleton
              animation="wave"
              style={{borderRadius: RADIUS.small, height: 100, width: '100%'}}
            />
            <Skeleton
              animation="wave"
              width={60}
              style={{
                marginTop: 15,
                borderRadius: RADIUS.small,
              }}
            />
            <Skeleton
              animation="wave"
              width={100}
              style={{
                marginTop: 10,
                borderRadius: RADIUS.small,
              }}
            />
            <Skeleton
              animation="wave"
              width={100}
              style={{
                marginTop: 10,
                borderRadius: RADIUS.small,
              }}
            />
          </View>
        ) : (
          <TabProduk type={type} title={title} icon={icon} onPress={onPress} />
        )}
      </>
    );
  }
  if (type === 'TabPicture') {
    return (
      <TabPicture type={type} label={label} onPress={onPress} icon={icon} />
    );
  }
}

export default TabAdd;
