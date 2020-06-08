
import { StyleSheet, Text, View, NativeModules, StatusBar } from 'react-native';
import Constants from 'expo-constants';


const style = StyleSheet.create({

  //header

  header: {
    width: 100 + '%',
    height: 80,
    paddingTop:Constants.statusBarHeight,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'black',
    alignContent:'center',
  },
  leftHeader: {
    color: 'whitesmoke',
    fontSize: 30,
    width: 20 + '%',
    textAlign:'center',
  },
  middleHeader: {
    width: 60 + '%',
    textAlign:'center',
  },
  middleHeaderText: {
    color: 'red',
    marginLeft:10,
    marginRight:10,
    },
  rightHeader: {
    color: 'green',
    width: 20+'%',
    textAlign:'center',
  },

  //index


})

module.exports = style;