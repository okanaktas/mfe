import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Animated, TouchableOpacity, FlatList, AppState, ImageBackground, Modal, Dimensions } from 'react-native';
import Ionicon from 'react-native-ionicons'
import { Icon } from 'react-native-elements';
import TextTicker from 'react-native-text-ticker';
const style = require('../style.js');

class stories extends React.Component {
    state = {
        modalOpen: false,
        x: new Animated.Value(0),
    }
    HikayeAc = () => {
        this.setState({ modalOpen: true });

    }
    HikayeKapat = () => {
        this.setState({ modalOpen: false });
    }


    render() {

        const deviceWidth = Dimensions.get("window").width;
        const deviceHeight = Dimensions.get('window').height;

        return (
            <View style={style.Hikayeler}>

                <ScrollView horizontal={true}>

                    <TouchableOpacity style={style.Hikaye} onPress={() => { this.HikayeAc() }}>
                        <Image style={style.hikeyeThumbResim} source={{ uri: 'https://www.kibrisotelleri.com/photos/salamis-bay-conti-hotel-7.jpg' }} />
                        <Text style={style.HikayeSubText}>Salamis</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.Hikaye} onPress={() => { this.HikayeAc() }}>
                        <Image style={style.hikeyeThumbResim} source={{ uri: 'https://www.kibrisotelleri.com/photos/salamis-bay-conti-hotel-7.jpg' }} />
                        <Text style={style.HikayeSubText}>Salamis</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Hikaye} onPress={() => { this.HikayeAc() }}>
                        <Image style={style.hikeyeThumbResim} source={{ uri: 'https://www.kibrisotelleri.com/photos/salamis-bay-conti-hotel-7.jpg' }} />
                        <Text style={style.HikayeSubText}>Salamis</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Hikaye} onPress={() => { this.HikayeAc() }}>
                        <Image style={style.hikeyeThumbResim} source={{ uri: 'https://www.kibrisotelleri.com/photos/salamis-bay-conti-hotel-7.jpg' }} />
                        <Text style={style.HikayeSubText}>Salamis</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Hikaye} onPress={() => { this.HikayeAc() }}>
                        <Image style={style.hikeyeThumbResim} source={{ uri: 'https://www.kibrisotelleri.com/photos/salamis-bay-conti-hotel-7.jpg' }} />
                        <Text style={style.HikayeSubText}>Salamis</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Hikaye} onPress={() => { this.HikayeAc() }}>
                        <Image style={style.hikeyeThumbResim} source={{ uri: 'https://www.kibrisotelleri.com/photos/salamis-bay-conti-hotel-7.jpg' }} />
                        <Text style={style.HikayeSubText}>Salamis</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Hikaye} onPress={() => { this.HikayeAc() }}>
                        <Image style={style.hikeyeThumbResim} source={{ uri: 'https://www.kibrisotelleri.com/photos/salamis-bay-conti-hotel-7.jpg' }} />
                        <Text style={style.HikayeSubText}>Salamis</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Hikaye} onPress={() => { this.HikayeAc() }}>
                        <Image style={style.hikeyeThumbResim} source={{ uri: 'https://www.kibrisotelleri.com/photos/salamis-bay-conti-hotel-7.jpg' }} />
                        <Text style={style.HikayeSubText}>Salamis</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Hikaye} onPress={() => { this.HikayeAc() }}>
                        <Image style={style.hikeyeThumbResim} source={{ uri: 'https://www.kibrisotelleri.com/photos/salamis-bay-conti-hotel-7.jpg' }} />
                        <Text style={style.HikayeSubText}>Salamis</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Hikaye} onPress={() => { this.HikayeAc() }}>
                        <Image style={style.hikeyeThumbResim} source={{ uri: 'https://www.kibrisotelleri.com/photos/salamis-bay-conti-hotel-7.jpg' }} />
                        <Text style={style.HikayeSubText}>Salamis</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Hikaye} onPress={() => { this.HikayeAc() }}>
                        <Image style={style.hikeyeThumbResim} source={{ uri: 'https://www.kibrisotelleri.com/photos/salamis-bay-conti-hotel-7.jpg' }} />
                        <Text style={style.HikayeSubText}>Salamis</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Hikaye} onPress={() => { this.HikayeAc() }}>
                        <Image style={style.hikeyeThumbResim} source={{ uri: 'https://www.kibrisotelleri.com/photos/salamis-bay-conti-hotel-7.jpg' }} />
                        <Text style={style.HikayeSubText}>Salamis</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Hikaye} onPress={() => { this.HikayeAc() }}>
                        <Image style={style.hikeyeThumbResim} source={{ uri: 'https://www.kibrisotelleri.com/photos/salamis-bay-conti-hotel-7.jpg' }} />
                        <Text style={style.HikayeSubText}>Salamis</Text>
                    </TouchableOpacity>




                </ScrollView>





                {/* <Modal2 animationIn='bounceOutUp' deviceHeight={deviceWidth} deviceHeight={deviceHeight} propagateSwipe={true} swipeDirection='down' onSwipeComplete={() => this.HikayeKapat()} visible={this.state.modalOpen}>
                    <View style={style.HikayeModal}>
                        <ImageBackground imageStyle={{ resizeMode: 'cover' }} source={{ uri: 'https://www.kibrisotelleri.com/photos/salamis-bay-conti-hotel-7.jpg' }} style={style.HikayeModalImage}>

                        </ImageBackground>
                    </View>
                </Modal2> */}



                <Modal transparent animated  animationType='slide' hardwareAccelerated statusBarTranslucent onRequestClose={() => this.HikayeKapat()} visible={this.state.modalOpen}>

                    <View style={style.HikayeModal}>

                        <ImageBackground imageStyle={{ resizeMode: 'cover' }} source={{ uri: 'https://www.kibrisotelleri.com/photos/salamis-bay-conti-hotel-7.jpg' }} style={style.HikayeModalImage}>

                        <View style={style.ModalTop}>

                            <Image source={{ uri: 'https://www.kibrisotelleri.com/photos/salamis-bay-conti-hotel-7.jpg' }} style={style.hikayePPImage} />
                            <Text style={style.HikayePPText}>Salamis Hotel</Text>
                            <TouchableOpacity style={style.ModalCloseButtonContainer} onPress={()=>{this.HikayeKapat()}}><Icon name='close' color='#FFF' style={style.ModalCloseButton} size={25}/></TouchableOpacity>

                        </View>

                        </ImageBackground>
                    </View>

                </Modal>
            </View>

        )
    }
}
export default stories;