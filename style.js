
import { StyleSheet, Text, View, NativeModules, Image, StatusBar, Dimensions } from 'react-native';
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
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
  },
  middleHeaderText: {
    textAlign: 'center',
    alignItems: 'center',
    color: 'white',
    marginLeft: 5,
    marginRight: 5,
  },
  rightHeader: {
    width: 20 + '%',
    textAlign: 'center',

  },

  //bottomHeader

  bottomHeader: {
    width: 100 + '%',
    height: 40,
    backgroundColor: '#0f0f0f',
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

  },

  bottomHeaderText: {
    color: 'white',
    marginLeft: 5,
  },

  //index

  index: {
    backgroundColor: '#121212',

  },
  orta: {

    width: 100 + '%',


    height: Dimensions.get('window').height - Constants.statusBarHeight,


  },
  menuSatir: {
    width: 100 + '%',
    marginBottom: 10,
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,

    alignContent: 'center'
  },
  resimComponentSag: {

    height: 100,
    marginLeft: 10,
    alignItems: 'flex-end',
    borderRadius: 15,
  },
  resimComponentSol: {

    height: 100,
    marginRight: 10,
    justifyContent: 'flex-end',
    borderRadius: 15,
  },
  resimContainer: {
    width: 40 + '%',
    marginRight: 5,
  },
  kategoriText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 5
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    borderRadius: 10, borderWidth: 2, borderColor: '#0e0e0e',
  },


  //footer

  footer: {
    width: 100 + '%',


  },

  footerDivider: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    opacity: 1,
  },

  footerText: {
    color: 'white',

  }

})


module.exports = style;