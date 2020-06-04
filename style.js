
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
    textAlign: 'center',

  },
  middleText: {
    width: 60 + '%',
    justifyContent: 'center',
    flexDirection: 'row',
  },


  rightText: {
    width: 20 + '%',
    alignItems: 'center',
    color: 'white',
    textAlign:'center',
  },



});
module.exports = styles;