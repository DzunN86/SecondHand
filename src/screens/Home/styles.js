import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../themes';

export default StyleSheet.create({
  search: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 25,
    marginHorizontal: 16,
    borderRadius: 16,
    marginTop: 38,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchKategori: {
    backgroundColor: '#E2D4F0',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginTop: 6,
    width: 110,
    marginLeft: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  labelCategory: {
    ...FONTS.body4,
  },
  cardProduct: {
    backgroundColor: COLORS.white,
    marginTop: 15,
    borderRadius: 10,
    borderColor: '#E5E5E5',
    borderWidth: 1,
    height: SIZES.height * 0.26,
    width: SIZES.width * 0.43,
    padding: 8,
  },
  textCardProduct: {
    fontSize: 14,
    marginTop: 8,
    fontWeight: '400',
  },
  telusuriKategori: {
    ...FONTS.h4,
    paddingLeft: 16,
    fontSize: 18,
    marginVertical: 10,
  },
  typeProduct: {
    fontSize: 10,
    marginTop: 4,
  },
  cardProductWrapper: {
    marginVertical: 27,
    marginHorizontal: 16,
  },
  textSearch: {
    ...FONTS.body4,
    color: COLORS.gray1,
  },
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
  imageProduk: {
    resizeMode: 'stretch',
    borderRadius: 4,
    height: 100,
    width: '100%',
  },
});
