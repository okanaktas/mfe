import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
const style = require('./style.js');


function app() {
  return (
    <View>


      {/* //header */}
      <View style={style.header}>
        <Text style={style.leftHeader}>Sol Taraftaki Header!</Text>
        <Text style={style.middleHeader}>Orta Header</Text>
        <Text style={style.rightHeader}>Sağ Taraftaki Header</Text>
      </View>


      <View style={style.index}>

      </View>




    </View>


  )
}
export default app;
