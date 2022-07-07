import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../themes';

export default StyleSheet.create({
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
  telusuriKategori: {
    ...FONTS.h4,
    paddingLeft: 16,
    color: COLORS.lightGray,
    marginVertical: 10,
  },
  cardProductWrapper: {
    marginTop: 10,
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  categoryList: {
    flexDirection: 'row',
  }
});
