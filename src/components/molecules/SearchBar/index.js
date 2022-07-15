import {Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {COLORS} from '../../../themes';
import PropTypes from 'prop-types';
import styles from './styles';

const SearchBar = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.search}>
        <Text style={styles.textSearch}>Cari di Second Chance</Text>
        <Icon name="search" color={COLORS.grey2} size={25} />
      </View>
    </TouchableOpacity>
  );
};

SearchBar.PropTypes = {
  onPress: PropTypes.func,
};

export default memo(SearchBar);
