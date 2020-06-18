import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList, Modal, AppState } from 'react-native';
import { Icon } from 'react-native-elements';
import TextTicker from 'react-native-text-ticker'
const style = require('../style.js');

class stories extends React.Component {
    state = {
        modalOpen: false,
    }
    HikayeAc = ()=>{
        this.setState({modalOpen:true});
    }
    HikayeKapat = ()=>{
        this.setState({modalOpen:false});
    }
    render() {
        return (
            <View style={style.Hikayeler}>

                <ScrollView horizontal={true}>

                    <TouchableOpacity style={style.Hikaye} onPress={()=>{this.HikayeAc()}}>
                        <Image style={style.hikeyeThumbResim} source={{ uri: 'https://www.kibrisotelleri.com/photos/salamis-bay-conti-hotel-7.jpg' }} />
                        <Text style={style.HikayeSubText}>Salamis Hotel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.Hikaye}>
                        <Image style={style.hikeyeThumbResim} source={{ uri: 'https://www.kibrisotelleri.com/photos/salamis-bay-conti-hotel-7.jpg' }} />
                        <Text style={style.HikayeSubText}>Popart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Hikaye}>
                        <Image style={style.hikeyeThumbResim} source={{ uri: 'https://www.kibrisotelleri.com/photos/salamis-bay-conti-hotel-7.jpg' }} />
                        <Text style={style.HikayeSubText}>Popart</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.Hikaye}>
                        <Image style={style.hikeyeThumbResim} source={{ uri: 'https://www.kibrisotelleri.com/photos/salamis-bay-conti-hotel-7.jpg' }} />
                        <Text style={style.HikayeSubText}>Popart</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.Hikaye}>
                        <Image style={style.hikeyeThumbResim} source={{ uri: 'https://www.kibrisotelleri.com/photos/salamis-bay-conti-hotel-7.jpg' }} />
                        <Text style={style.HikayeSubText}>Popart</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.Hikaye}>
                        <Image style={style.hikeyeThumbResim} source={{ uri: 'https://www.kibrisotelleri.com/photos/salamis-bay-conti-hotel-7.jpg' }} />
                        <Text style={style.HikayeSubText}>Popart</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.Hikaye}>
                        <Image style={style.hikeyeThumbResim} source={{ uri: 'https://www.kibrisotelleri.com/photos/salamis-bay-conti-hotel-7.jpg' }} />
                        <Text style={style.HikayeSubText}>Popart</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.Hikaye}>
                        <Image style={style.hikeyeThumbResim} source={{ uri: 'https://www.kibrisotelleri.com/photos/salamis-bay-conti-hotel-7.jpg' }} />
                        <Text style={style.HikayeSubText}>Popart</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.Hikaye}>
                        <Image style={style.hikeyeThumbResim} source={{ uri: 'https://www.kibrisotelleri.com/photos/salamis-bay-conti-hotel-7.jpg' }} />
                        <Text style={style.HikayeSubText}>Popart</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.Hikaye}>
                        <Image style={style.hikeyeThumbResim} source={{ uri: 'https://www.kibrisotelleri.com/photos/salamis-bay-conti-hotel-7.jpg' }} />
                        <Text style={style.HikayeSubText}>Popart</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.Hikaye}>
                        <Image style={style.hikeyeThumbResim} source={{ uri: 'https://www.kibrisotelleri.com/photos/salamis-bay-conti-hotel-7.jpg' }} />
                        <Text style={style.HikayeSubText}>Popart</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.Hikaye}>
                        <Image style={style.hikeyeThumbResim} source={{ uri: 'https://www.kibrisotelleri.com/photos/salamis-bay-conti-hotel-7.jpg' }} />
                        <Text style={style.HikayeSubText}>Popart</Text>
                    </TouchableOpacity>




                </ScrollView>
                <Modal onRequestClose={()=>{this.HikayeKapat()}} animated animationType='slide' hardwareAccelerated={true} statusBarTranslucent={true} visible={this.state.modalOpen} style={style.HikayeModal}>

                <Image  source={{ uri: 'https://www.kibrisotelleri.com/photos/salamis-bay-conti-hotel-7.jpg' }} />
                <View></View>

                </Modal>
            </View>

        )
    }
}
export default stories;