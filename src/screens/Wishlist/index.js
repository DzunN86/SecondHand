import { ScrollView, Text, View, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { CustomHeader } from '../../components'
import Icon from 'react-native-vector-icons/FontAwesome'

const Wishlist = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <CustomHeader
          type="BackTitle"
          title="Wishlist Barang"
          onPress={() => navigation.goBack()}
        />
        <View style={styles.productWrapper}>
          <View style={styles.cardProduct}>
            <View style={styles.imageProduct}>
              <Image></Image>
            </View>
            <Text style={styles.label}>Nama Barang</Text>
            <Text style={styles.description}>Barang ini adalah...</Text>
            <View style={styles.descProduct}>
              <Text style={styles.label}>Rp 9.999.999</Text>
              <Icon style={styles.icon} name="trash" size={20} color="black" />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Wishlist