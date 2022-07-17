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
              height: SIZES.height * 0.27,
              width: SIZES.width * 0.44,
              padding: 8,
            }}>
            <Skeleton
              animation="pulse"
              style={{borderRadius: RADIUS.small, height: 100, width: '100%'}}
              backgroundColor={COLORS.grey7}
              skeletonStyle={{backgroundColor: COLORS.grey3}}
            />
            <Skeleton
              animation="pulse"
              width={60}
              backgroundColor={COLORS.grey7}
              skeletonStyle={{backgroundColor: COLORS.grey3}}
              style={{
                marginTop: 15,
                borderRadius: RADIUS.small,
              }}
            />
            <Skeleton
              animation="pulse"
              width={100}
              backgroundColor={COLORS.grey7}
              skeletonStyle={{backgroundColor: COLORS.grey3}}
              style={{
                marginTop: 10,
                borderRadius: RADIUS.small,
              }}
            />
            <Skeleton
              animation="pulse"
              width={100}
              backgroundColor={COLORS.grey7}
              skeletonStyle={{backgroundColor: COLORS.grey3}}
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
