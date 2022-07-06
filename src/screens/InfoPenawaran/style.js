import { StyleSheet } from 'react-native'
// import { COLORS } from '../../themes/theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  productImage: {
    width: 58,
    height: 58,
    marginLeft: 22,
    flex: 1.6
  },
  productNotification: {
    flexDirection: 'row',
    marginTop: 20,
  },
  date: {
    marginLeft: -90,
    flex: 3
  },
  productInfo: {
    marginLeft: 15,
    flex: 8
  },
  labelText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black'
  },
  label: {
    fontSize: 14
  },
  LabelPenawaran: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 22,
    marginTop: 20
  },
  button1: {
    width: 156,
    height: 40,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.8,
  },
  button2: {
    backgroundColor: '#7126B5',
    width: 156,
    height: 40,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center'
  },
})