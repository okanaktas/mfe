
import { StyleSheet, Text, View, NativeModules, StatusBar } from 'react-native';
import Constants from 'expo-constants';


const style = StyleSheet.create({
    header:{
      marginTop:50,
      alignItems:'center',
      flexDirection:'row',
      backgroundColor:'black',
    },
    leftHeader:{
      marginLeft:10,
    },
    middleHeader:{
      padding:10,
      color:'red',
    },
    rightHeader:{
      marginRight:10,
    },
  })
  
module.exports = style;