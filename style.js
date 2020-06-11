
import { StyleSheet, Text, View, NativeModules, StatusBar } from 'react-native';
import Constants from 'expo-constants';


const style = StyleSheet.create({

  //header

  header: {
    width: 100 + '%',
    height: 80,
    paddingTop: Constants.statusBarHeight,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'black',
    alignContent: 'center',
  },
  leftHeader: {
    color: 'whitesmoke',
    fontSize: 30,
    width: 20 + '%',
    textAlign: 'center',
  },
  middleHeader: {
    width: 60 + '%',
    flexDirection:'row',
    textAlign: 'center',
    justifyContent:'center',
  },
  middleHeaderText: {
    textAlign:'center',
    alignItems:'center',
    color: 'red',
    marginLeft: 5,
    marginRight: 5,
  },
  rightHeader: {
    width: 20 + '%',
    textAlign: 'center',

  },

  //index

  orta:{
    alignItems:'center',
    justifyContent:'center',
    width:100 +'%',
    alignItems:'center',

    
  },
  menuSatir:{
    width:100+'%',
    height:180,
    flexDirection:'row',
    backgroundColor:'red',
    
    alignItems:'center',
    justifyContent:'center',
    
 
    alignContent:'center'
  },
  resimComponent:{
    height:150,
    width:150,
    marginRight:20,
  },
  resimComponentResim:
  {
    borderRadius: 15
  }

})

module.exports = style;