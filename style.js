
import { StyleSheet, Text, View, NativeModules, StatusBar } from 'react-native';
import Constants from 'expo-constants';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    backgroundColor: '#282D2C',
    height: 60 + Constants.statusBarHeight,
    width: 100 + '%',
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    alignContent: 'center',
    alignItems: 'center',
  },

  leftText: {
    color: 'whitesmoke',
    fontSize: 30,
    width: 20 + '%',
    alignItems: 'center',

  },
  middleText: {
    width: 60 + '%',
    alignItems: 'center',
    color:'white',
  },

 

  rightText: {
    width:20 +'%',
    alignItems: 'center',
  },



});
module.exports = styles;