
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
    flexDirection: 'row',
    width: 60 + '%',
    textAlign: 'center',
  },
  middleHeaderText: {
    color: 'red',
    marginLeft: 5,
    marginRight: 5,
  },
  rightHeader: {
    fontSize: 20,
    color: 'green',
    width: 20 + '%',
    textAlign: 'center',
  },

  //index

  orta: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100 + '%',
    alignItems: 'center'

  },
  menuSatir: {
    width: 100 + '%',
    height: 180,
    flexDirection: 'row',
    alignItems: 'center',


    alignContent: 'center'
  },
  resimComponent: {
    height: 150,
    width: 150,
    marginRight: 20,
    backgroundColor: 'red',
  },
  resimComponentResim:
  {
    borderRadius: 15
  }

})

module.exports = style;