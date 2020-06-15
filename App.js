import React from 'react';
import { Text, Button, View, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Icon, Divider } from 'react-native-elements';
import TextTicker from 'react-native-text-ticker';
const style = require('./style.js');

function app() {

  return (
    <View>


      {/* //header */}


      <View style={style.header}>

        <Text style={style.leftHeader}>MFE</Text>

        <View style={style.middleHeader}>
          <Text style={style.middleHeaderText}>Ana Sayfa</Text>
          <Text style={style.middleHeaderText}>Etkinlikler</Text>
          <Text style={style.middleHeaderText}>Hakkımızda</Text>
        </View>

        <View style={style.rightHeader}>


          <Icon
            name='person'
            color='white'
            onPress={() => { alert('Alo Canım'); }}
          />

        </View>
      </View>

      {/* Bottom Header */}

      <View style={style.bottomHeader}>

<Text style={style.bottomHeaderText}>Kültür ve Sanat</Text>
<Text style={style.bottomHeaderText}>Film ve Müzik</Text>
<Text style={style.bottomHeaderText}>Tiyatro</Text>
<Text style={style.bottomHeaderText}>Seyahat</Text>
<Text style={style.bottomHeaderText}>Güncel</Text>

      </View>

      {/* //index */}

      <ScrollView style={style.index}>

        <View style={{ paddingTop: 10, paddingBottom: 5 }}>
          <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, opacity: 0.3 }}></View>
          <View style={{ marginLeft: 20, flexDirection: 'row' }}>
            <Text onPress={() => this.props.props2.navigation.navigate('Etkinlik')} style={{ color: '#EBEBEB', marginRight: 5, textAlign: 'center', alignItems: 'center', fontSize: 12 }}>YAKLAŞAN{"\n"}ETKINLIKLER</Text>
            <TextTicker
              style={{ color: '#EBEBEB', marginTop: 10, marginBottom: 10 }}
              scrollSpeed={100}
              bounce={false}
              animationType='scroll'
              loop
              repeatSpacer={50}
              marqueeDelay={1000}
            >HADISE KONSERI / GIRNE Hotel - LIMAK HOTEL BUGÜN CEM YILMAZ İLE ŞENLENİYOR - CAGE CLUB SON PARTİSİ OLAN DJ HERO İLE DEVAM ETMEKTE
      </TextTicker>

          </View>
          <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, opacity: 0.3, }}></View>
        </View>



        <View style={style.orta}>
          <View style={style.menuSatir}>

            <View style={style.resimContainer}>
              <TouchableOpacity>
                <Image style={style.resimComponentSol} source={{ uri: 'https://www.resourcesforlife.com/wp/wp-content/uploads/2016/10/20161007fr2003-colorfest-photos-people-running-event-008-1080x675.jpg' }} />
                <Text style={style.kategoriText}>Etkinlikler</Text>
              </TouchableOpacity>

            </View>
            <View style={style.resimContainer}>
              <TouchableOpacity>
                <Image style={style.resimComponentSol} source={{ uri: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/03/07/11/e1-london-0703.jpeg' }} />
                <Text style={style.kategoriText}>Clublar</Text>
              </TouchableOpacity>
            </View>
          </View>


          <View style={style.menuSatir}>


            <View style={style.resimContainer}>
              <TouchableOpacity>
                <Image style={style.resimComponentSol} source={{ uri: 'https://www.casino.org/blog/wp-content/uploads/roulette-wheel.jpg' }} />
                <Text style={style.kategoriText}>Casinolar</Text>
              </TouchableOpacity>

            </View>
            <View style={style.resimContainer}>
              <TouchableOpacity>
                <Image style={style.resimComponentSol} source={{ uri: 'https://thumbnails.trvl-media.com/-9pqVtuC38z_uaSiL1Zql6z3nX4=/340x150/smart/filters:no_upscale():quality(60)/images.trvl-media.com/hotels/1000000/150000/140600/140596/b4cfa95d_y.jpg' }} />
                <Text style={style.kategoriText}>Hoteller</Text>
              </TouchableOpacity>
            </View>

          </View>


          <View style={style.menuSatir}>


            <View style={style.resimContainer}>
              <TouchableOpacity>
                <Image style={style.resimComponentSol} source={{ uri: 'https://www.annabelle.com.cy/Templates/00005/data/Gallery/restaurants/annabelle-amorosa-restaurant-1900x1200.jpg' }} />
                <Text style={style.kategoriText}>Restaurantlar</Text>
              </TouchableOpacity>

            </View>
            <View style={style.resimContainer}>
              <TouchableOpacity>
                <Image style={style.resimComponentSol} source={{ uri: 'https://dormitories.emu.edu.tr/PhotoGalleries/dormitories/popart/DOUBLE%20SUIT%20ROOM%201.jpg?RenditionID=7' }} />
                <Text style={style.kategoriText}>Yurtlar</Text>
              </TouchableOpacity>
            </View>

          </View>


        </View>



      </ScrollView>




      <View>

        {/* //footer */}

        <View style={style.divider}></View>

        {/* <Divider style={style.divider} /> */}

      </View>


    </View >


  )
}
export default app;
