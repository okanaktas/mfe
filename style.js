
import { StyleSheet, Text, View, NativeModules, Image,StatusBar,Dimensions } from 'react-native';
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
    color: 'white',
    marginLeft: 5,
    marginRight: 5,
  },
  rightHeader: {
    width: 20 + '%',
    textAlign: 'center',

  },

  //index

  orta:{

    width:100 +'%',
  
    backgroundColor:'#121212',
    //height:Dimensions.get('window').height - Constants.statusBarHeight,

    
  },
  menuSatir:{
    width:100+'%',
    height:180,
    flexDirection:'row',
    
    alignItems:'center',
    justifyContent:'center',
    marginTop:15,
 
    alignContent:'center'
  },
  resimComponentSag:{
    height:150,
    width:150,
    marginLeft:10,
    alignItems:'flex-end',
    borderRadius:15,
  },
  resimComponentSol:{
    height:150,
    width:150,
    marginRight:10,
    justifyContent:'flex-end',
    borderRadius:15,
  },
 
  kategoriText:{
    color:'#FFF',
    textAlign:'center',
    fontSize:16,
    marginTop:5
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    borderRadius:10,borderWidth:2,borderColor:'#0e0e0e',
  }

})

module.exports = style;