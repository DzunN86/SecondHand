import {Skeleton} from '@rneui/base';
import React from 'react';
import {View} from 'react-native';
import {COLORS, RADIUS} from '../../../themes';
import styles from './style';

const LoadingNotif = () => {
  return (
    <View style={styles.productNotification}>
      <Skeleton
        animation="pulse"
        width={60}
        height={60}
        backgroundColor={COLORS.grey7}
        skeletonStyle={{backgroundColor: COLORS.grey3}}
        style={{
          borderRadius: RADIUS.small,
        }}
      />
      <View style={styles.productInfo}>
        <View style={styles.wrapperDate}>
          <Skeleton
            animation="pulse"
            width={150}
            backgroundColor={COLORS.grey7}
            skeletonStyle={{backgroundColor: COLORS.grey3}}
            style={{
              borderRadius: RADIUS.small,
            }}
          />
          <Skeleton
            animation="pulse"
            width={50}
            backgroundColor={COLORS.grey7}
            skeletonStyle={{backgroundColor: COLORS.grey3}}
            style={{
              borderRadius: RADIUS.small,
            }}
          />
        </View>
        <Skeleton
          animation="pulse"
          width={100}
          backgroundColor={COLORS.grey7}
          skeletonStyle={{backgroundColor: COLORS.grey3}}
          style={{
            marginTop: 15,
            borderRadius: RADIUS.small,
          }}
        />
        <Skeleton
          animation="pulse"
          width={70}
          backgroundColor={COLORS.grey7}
          skeletonStyle={{backgroundColor: COLORS.grey3}}
          style={{
            marginTop: 15,
            borderRadius: RADIUS.small,
          }}
        />
      </View>
    </View>
  );
};

export default LoadingNotif;
