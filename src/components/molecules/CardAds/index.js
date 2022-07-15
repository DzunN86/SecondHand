import {Skeleton} from '@rneui/base';
import React, {memo} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import PagerView from 'react-native-pager-view';
import {useSelector} from 'react-redux';
import {hadiah} from '../../../assets';
import {COLORS, FONTS, RADIUS, SIZES} from '../../../themes';

const DefaultAds = () => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.textIklan} numberOfLines={2}>
          {'Bulan Ramadhan\nBanyak diskon!'}
        </Text>
        <View style={styles.diskonWrapper}>
          <Text style={styles.textDiskon}>Diskon Hingga</Text>
          <Text style={styles.persenDiskon}>60%</Text>
        </View>
      </View>
      <Image source={hadiah} style={styles.imageIklan} />
    </View>
  );
};

const CardAds = () => {
  const {banners} = useSelector(state => state.homeReducer);
  const {isLoading} = useSelector(state => state.commonReducers);
  const {userData} = useSelector(state => state.loginReducer);

  if (!userData.access_token) {
    return <DefaultAds />;
  }
  return (
    <PagerView
      style={{height: SIZES.height * 0.25}}
      initialPage={0}
      showPageIndicator
      overScrollMode="auto">
      {isLoading ? (
        <Skeleton
          animation="wave"
          width={SIZES.width - SIZES.base * 2}
          height={SIZES.height * 0.25 - SIZES.base * 2}
          style={{
            borderRadius: RADIUS.large,
            marginVertical: SIZES.base,
            marginHorizontal: SIZES.base,
          }}
        />
      ) : (
        <>
          {banners?.map(item => (
            <View
              key={item.id}
              style={{
                marginVertical: SIZES.base,
                marginHorizontal: SIZES.base,
              }}>
              <Image
                resizeMode="contain"
                source={{uri: item.image_url}}
                style={{
                  height: SIZES.height * 0.25 - SIZES.base * 2,
                  width: SIZES.width - SIZES.base * 2,
                  borderRadius: RADIUS.large,
                }}
              />
            </View>
          ))}
        </>
      )}
    </PagerView>
  );
};

export default memo(CardAds);

const styles = StyleSheet.create({
  card: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textIklan: {
    ...FONTS.h2,
    color: COLORS.black,
  },
  diskonWrapper: {
    marginTop: 16,
  },
  textDiskon: {
    ...FONTS.body4,
    color: COLORS.lightGray,
  },
  persenDiskon: {
    fontSize: 24,
    color: COLORS.danger,
    fontWeight: 'bold',
  },
  imageIklan: {
    height: 125,
    resizeMode: 'contain',
  },
});
