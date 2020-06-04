
import { StyleSheet, Text, View, NativeModules,StatusBar } from 'react-native';
import Constants from 'expo-constants';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
    header:{
        backgroundColor:'#282D2C',
        height:60 + Constants.statusBarHeight,
        width:100+'%',
        flexDirection:'row',
        paddingTop:Constants.statusBarHeight,
        alignContent:'center',
        alignItems:'center',
    },
    headerText:{
        color:'whitesmoke',
        marginLeft:25,
        marginRight:100,
        fontSize:30,
    },
    middleText:{
      color:'white',
    },
    
  });
module.exports = styles;