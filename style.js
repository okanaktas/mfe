
import { StyleSheet, Text, View, NativeModules, StatusBar } from 'react-native';
import Constants from 'expo-constants';


const style = StyleSheet.create({
    header:{
      marginTop:50,
      alignItems:'center',
    },
    leftHeader:{
      marginLeft:10,
    },
    middleHeader:{
      padding:10,
    },
    rightHeader:{
      marginRight:10,
    },
  })
  
module.exports = style;