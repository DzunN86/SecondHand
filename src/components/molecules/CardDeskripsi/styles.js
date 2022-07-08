import { StyleSheet } from 'react-native';
import { COLORS } from '../../../themes';

export default StyleSheet.create({
  deskripsi: {
    alignItems: 'center',
    height: 295,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
})