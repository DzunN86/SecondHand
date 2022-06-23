import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {Picker} from '@react-native-picker/picker';
import {COLORS} from '../../../themes';

const CustomSelect = ({
  onSelectChange,
  iconPosition,
  icon,
  style,
  value,
  label,
  error,
  selectData,
  ...props
}) => {
  const [focused, setFocused] = React.useState(false);
  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };

  const getBorderColor = () => {
    if (error) {
      return COLORS.danger;
    }

    if (focused) {
      return COLORS.primary;
    } else {
      return COLORS.gray;
    }
  };
  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          {alignItems: icon ? 'center' : 'baseline'},
          {borderColor: getBorderColor(), flexDirection: getFlexDirection()},
        ]}>
        <View>{icon && icon}</View>
        <View style={[styles.textInput, style]}>
          <Picker
            {...props}
            selectedValue={value}
            onValueChange={itemValue => onSelectChange(itemValue)}
            onFocus={() => {
              setFocused(true);
            }}
            onBlur={() => {
              setFocused(false);
            }}>
            <Picker.Item label="Pilih" value="" />
            {selectData.map((item, idx) => (
              <Picker.Item label={item.label} value={item.label} key={idx}/>
            ))}
          </Picker>
        </View>
      </View>

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default CustomSelect;
