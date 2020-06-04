import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const styles = require('./style.js');

export default function App() {
  return (
    <View style={styles.container}>


      <View style={styles.header}>

        <Text style={styles.leftText}>MFE</Text>

        <View style={styles.middleText}>
          <Text>ANA SAYFA</Text>
          <Text>HİZMETLER</Text>
          <Text>İLETİŞİM</Text>
        </View>

        <Text style={styles.rightText}>LOGO</Text>

      </View>








    </View>
  );
}


