
import { StyleSheet, Text, View, NativeModules, StatusBar } from 'react-native';
import Constants from 'expo-constants';


const style = StyleSheet.create({
    header:{
      width:100+'%',
      height:80,
      alignItems:'center',
      flexDirection:'row',
      backgroundColor:'black',
      justifyContent:'center',
    },
    leftHeader:{
      color:'yellow',
        },
    middleHeader:{
      color:'red',
    },
    rightHeader:{
      color:'green',
        },
  })
  
module.exports = style;