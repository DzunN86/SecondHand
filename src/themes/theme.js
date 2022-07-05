import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // base colors
  primary: '#7126B5',
  secondary: '#E2D4F0',

  accent: '#4895ef',
  danger: '#f72585',
  success: '#31Ad66',
  rating: '#FFCE31',

  // colors
  black: '#151515',
  white: '#FFFFFF',
  lightGray: '#3C3C3C',
  lightGray2: '#EFEFF0',
  lightGray3: '#8A8A8A',
  lightGray4: '#7D7E84',
  grey1: '#7D8797',
  grey2: '#B1B7C2',
  grey3: '#E5E5E5',
  grey4: '#EDEEF0',
  grey5: '#B1B7C2',
  grey6: '#B0B0B0',
  grey7: '#F0F0F0',

  transparent: 'rgba(30, 27, 38, 0.8)',
};

export const SIZES = {
  // global sizes
  base: 16,
  radius: 12,
  padding: 24,
  padding2: 36,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 24,
  h3: 16,
  h4: 14,
  h5: 12,
  h6: 10,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,
  body6: 10,
  tablabel: 12,

  // app dimensions
  width,
  height,
};

export const RADIUS = {
  small: 12,
  medium: 14,
  large: 16,
  xLarge: 24,
}

export const FONTS = {
  largeTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h4, lineHeight: 22},
  h5: {fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h5, lineHeight: 22},
  h6: {fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h6, lineHeight: 22},
  body1: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body3, lineHeight: 20},
  body4: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body4, lineHeight: 20},
  body5: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body5, lineHeight: 20},
  body6: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body6, lineHeight: 20},
  tabBarLabel: {fontFamily: 'Poppins-Regular', fontSize: SIZES.tablabel},
};

const appTheme = {COLORS, SIZES, FONTS, RADIUS};

export default appTheme;
