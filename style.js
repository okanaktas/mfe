
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

  index:{
    backgroundColor:'#121212',
    
  },
  orta:{

    width:100 +'%',
  
 
   height:Dimensions.get('window').height - Constants.statusBarHeight,

    
  },
  menuSatir:{
    width:100+'%',
    marginBottom:10,
    flexDirection:'row',
    
    alignItems:'center',
    justifyContent:'center',
    marginTop:15,
 
    alignContent:'center'
  },
  resimComponentSag:{
  
    height:100,
    marginLeft:10,
    alignItems:'flex-end',
    borderRadius:15,
  },
  resimComponentSol:{
   
   height:100,
    marginRight:10,
    justifyContent:'flex-end',
    borderRadius:15,
  },
 resimContainer:{
width:40 +'%',
marginRight:5,
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
  },
  Hikayeler:{
    height:90,
    justifyContent:'center',
    width:100 + '%',
    alignSelf:'center',
    marginLeft:10,
  },
  Hikaye:{
    height:100 + '%',
    width:70,
    marginTop:2,
    justifyContent:'center',
    alignItems:'center',
    
  },
  HikayeSubText:{
    color:'#FFF',
    fontSize:12,
    marginTop:6,
  },
  hikeyeThumbResim:{
    height:55,
    width:55,
    borderRadius:55/2,
    borderWidth:2,
    borderColor:'red',
  },
  HikayeModal:{

    backgroundColor:'#000',
  },

})

module.exports = style;