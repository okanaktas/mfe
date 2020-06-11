import React from 'react';
import { Text, View, StyleSheet, ImageBackground, ScrollView,Image } from 'react-native';
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


      <ScrollView style={style.index}>

        <View style={style.orta}>

          <View style={style.menuSatir}>

            <View>
               <Image style={style.resimComponentSol} source={{ uri: 'https://www.resourcesforlife.com/wp/wp-content/uploads/2016/10/20161007fr2003-colorfest-photos-people-running-event-008-1080x675.jpg' }} />
              <Text style={style.kategoriText}>Etkinlikler</Text>

            </View>
            <View>
               <Image style={style.resimComponentSol} source={{ uri: 'https://www.resourcesforlife.com/wp/wp-content/uploads/2016/10/20161007fr2003-colorfest-photos-people-running-event-008-1080x675.jpg' }} />
              <Text style={style.kategoriText}>Etkinlikler</Text>

            </View>
          </View>


          <View style={style.menuSatir}>

           
          <View>
               <Image style={style.resimComponentSol} source={{ uri: 'https://www.resourcesforlife.com/wp/wp-content/uploads/2016/10/20161007fr2003-colorfest-photos-people-running-event-008-1080x675.jpg' }} />
              <Text style={style.kategoriText}>Etkinlikler</Text>

            </View>
            <View>
               <Image style={style.resimComponentSol} source={{ uri: 'https://www.resourcesforlife.com/wp/wp-content/uploads/2016/10/20161007fr2003-colorfest-photos-people-running-event-008-1080x675.jpg' }} />
              <Text style={style.kategoriText}>Etkinlikler</Text>

            </View>
          </View>


        </View>
      </ScrollView>




    </View>


  )
}
export default app;
