import { StyleSheet } from 'react-native';
import { COLORS } from '../../../themes';
export default StyleSheet.create({
    view: {
		marginHorizontal: 16,
		alignItems: 'center',
		flexDirection: 'row',
	},
    titleView: {
		flex: 1,
	},
    header: {
		height: 50,
		elevation: 8,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: COLORS.white,
	},
})