import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
const styles = require('./style.js');


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
