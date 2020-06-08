import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// const styles = require('./style.js');

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  header:{
    marginTop:50,
    alignItems:'center',
  },
  leftHeader:{
    marginLeft:10,
  },
  middleHeader:{
    padding:10,
  },
  rightHeader:{
    marginRight:10,
  },
})


function app() {
  return (
    <View style={style.header}>
      <Text style={style.leftHEader}>Sol Taraftaki Header!</Text>
      <Text style={style.middleHeader}>Orta Header</Text>
      <Text style={style.rightHeader}>Sağ Taraftaki Header</Text>
    </View>
  )
}
export default app;
