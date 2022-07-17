import {StyleSheet} from 'react-native';
import { SIZES, RADIUS, COLORS, FONTS } from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  productWrapper: {
    marginTop: 10,
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    flexDirection: 'row'
  },
  cardProduct: {
    backgroundColor: COLORS.white,
    marginTop: 5,
    borderRadius: RADIUS.small,
    borderColor: '#E5E5E5',
    borderWidth: 1,
    elevation: 2,
    shadowOpacity: 0.2,
    height: SIZES.height * 0.27,
    width: SIZES.width * 0.44,
    padding: 8,
    marginBottom: 10
  },
  imageProduct: {
    backgroundColor: 'grey',
    width: '100%',
    height: 100,
    alignSelf: 'center',
    borderRadius: RADIUS.small,
    resizeMode: 'cover',
  },
  descProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    color: COLORS.black,
    ...FONTS.h4,
    marginTop: 8,
  },
  description: {
    ...FONTS.body5,
    marginTop: 4,
  },
  icon: {
    marginTop: 7,
    marginRight: 2
  }
})