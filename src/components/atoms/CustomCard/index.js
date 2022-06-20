import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { COLORS } from '../../../themes';

const IconSize=24
function CardCategory({ icon, title, onPress, selectedValue, setSelectedValue }) {
  return (
    <View style={{ padding: 13, flex: 1 }}>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={onPress}
          style={[
            styles.button,
          ]}
        >
          <View style={{ flexDirection: "row" , alignItems: 'center'}}>
            <Icon name={icon} size={IconSize} style={styles.icon} />
            <Text
              style={[
                styles.buttonLabel,
              ]}
            >{title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CardCategory

const styles = StyleSheet.create({
  row: {
    flexDirection: "column",
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 12,
    backgroundColor: "#E2D4F0",
    marginHorizontal: 5,
    marginBottom: 10,
    minWidth: "108%",
    alignSelf: "flex-start",
    textAlign: "center",
  },
  buttonLabel: {
    fontSize: 20,
    fontWeight: "500",
    color: COLORS.black,
    marginLeft: 10,
  },
  icon: {
    color: COLORS.black,
    alignItems: 'center'
  }
})
