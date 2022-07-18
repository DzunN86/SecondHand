import {ScrollView, Text, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {CustomHeader} from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome';
import {RectButton} from 'react-native-gesture-handler';

const Wishlist = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <CustomHeader
          type="BackTitle"
          title="Wishlist Barang"
          onPress={() => navigation.goBack()}
        />
        <View style={styles.productWrapper}>
          <RectButton style={styles.cardProduct}>
            <View style={styles.imageProduct}>
              <Image></Image>
            </View>
            <Text style={styles.label}>Nama Barang</Text>
            <Text style={styles.description}>Barang ini adalah...</Text>
            <View style={styles.descProduct}>
              <Text style={styles.label}>Rp 9.999.999</Text>
              <RectButton style={styles.removeBtn}>
                <Icon
                  style={styles.icon}
                  name="trash"
                  size={22}
                  color="black"
                />
              </RectButton>
            </View>
          </RectButton>
        </View>
      </ScrollView>
    </View>
  );
};

export default Wishlist;
