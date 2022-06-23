import {StyleSheet} from 'react-native';
import {COLORS} from '../../themes';

export default StyleSheet.create({
  search: {
    backgroundColor:COLORS.white,
    paddingVertical:0,
    paddingHorizontal:20,
    marginHorizontal:16,
    borderRadius: 16,
    marginTop:38,
    height: 48,
    flexDirection:"row",
    alignItems:"center"
  },
  searchKategori: {
    backgroundColor:"#E2D4F0",
    paddingVertical:8,
    paddingHorizontal:8,
    borderRadius: 12,
    marginTop:6,
    marginLeft: 16,
    flexDirection:"row",
    alignItems:"center"    
  },
  cardProduct: {
    backgroundColor:COLORS.white,
    marginBottom: 30,
    borderRadius: 10,
    borderColor: '#E5E5E5',
    borderWidth: 1,
    width: 156,
    height: 206,
    marginLeft: 16,
    marginTop: 5,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  textCardProduct: {
    fontSize: 14, 
    marginTop: 8, 
    fontWeight: '400'
  },
  telusuriKategori: {
    paddingLeft: 16, 
    fontSize: 18, 
    marginVertical:10
  },
  typeProduct: {
    fontSize: 10, 
    marginTop: 4
  },
  cardProductWrapper: {
    marginVertical: 27
  },
  textSearch: {
    fontSize:18, 
    width:260
  },
  card: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  textIklan: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  diskonWrapper: {
    marginTop: 16,
  },
  textDiskon: {
    fontSize: 14,
    marginBottom: 4,
  },
  persenDiskon: {
    fontSize: 24,
    color: '#FA2C5A',
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
  }
});
