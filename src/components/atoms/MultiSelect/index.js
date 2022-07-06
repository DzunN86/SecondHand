import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { COLORS, RADIUS, SIZES, FONTS} from '../../../themes';

function MultipleSelect({
  data, setFieldValue, initialData, placeholder, multiple, schema, mode, name, error,label,
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(initialData);
  const [items, setItems] = useState(data);
  const checkError = () => {
    if (error) {
      return COLORS.danger;
    }
    if (value == null || value.length === 0) {
      return COLORS.grey3;
    } if (value) {
      return COLORS.grey3;
    }
    return COLORS.grey3;
  };

  return (
    <View style={{ flexDirection: 'column' }}>
      {label && <Text style={styles.label}>{label}</Text>}
      <DropDownPicker
        schema={schema}
        multiple={multiple}
        min={0}
        max={5}
        open={open}
        value={value}
        items={items}
        onChangeValue={() => setFieldValue(name, value, true)}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        searchable
        mode={mode}
        listMode="MODAL"
        badgeDotColors={['#e76f51', '#00b4d8', '#e9c46a', '#e76f51', '#8ac926', '#00b4d8', '#e9c46a']}
        placeholder={placeholder}
        style={[{
          borderRadius: RADIUS.large,
          borderWidth: 1,
          borderColor: checkError(),
          justifyContent: 'center',
          paddingHorizontal: SIZES.base,
        }]}
        placeholderStyle={[styles.placeholderStyle]}
        searchTextInputStyle={[styles.textStyle]}
        labelStyle={[styles.textStyle]}
        listItemLabelStyle={[ styles.textStyle]}
      />
    </View>
  );
}

export default MultipleSelect;

const styles = StyleSheet.create({
  placeholderStyle: {
    color: COLORS.black,
  },
  textStyle: {
    color: COLORS.black,
  },
  label: {
    color: COLORS.black,
    ...FONTS.tabBarLabel,
    marginBottom: 5,
  },
});