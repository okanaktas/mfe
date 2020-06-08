import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
const style = require('./style.js');


function app() {
  return (
    <View>


      {/* //header */}
      <View style={style.header}>
        <Text style={style.leftHeader}>MFE</Text>

        <View style={style.middleHeader}>
          <Text style={style.middleHeaderText}>Ana Sayfa</Text>
          <Text style={style.middleHeaderText}>Hakkımızda</Text>
          <Text style={style.middleHeaderText}>İletişim</Text>
        </View>

        <Text style={style.rightHeader}>Profil Girişi</Text>
      </View>


      <View style={style.index}>

      </View>




    </View>


  )
}
export default app;
