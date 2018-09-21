/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
import ButtonRoundBorder from '../components/ButtonRoundBorder';

export default class IntroScreen extends Component{
    render() {
        return (
            <Swiper  showsButtons={true}>
                <View style={styles.container}>
                    <Image resizeMode='contain' style={[{width:300,height:200},styles.imageStyle]} source={require('../images/sensitivity.jpg')}/>
                    <Text style={styles.introText}>Lorem Ipsum is simply dummy text of the printing 
                    and typesetting industry. Lorem Ipsum has been the 
                    industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley
                    of type and scrambled it to mak</Text>
                </View>
                <View style={styles.container}>
                    <Image resizeMode='contain' style={[{width:200,height:300},styles.imageStyle]} source={require('../images/did_you_know.png')}/>
                    <Text  style={styles.introText}>Lorem Ipsum is simply dummy text of the printing 
                    and typesetting industry. Lorem Ipsum has been the 
                    industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley
                    of type and scrambled it to mak</Text>
                </View>
                <View style={styles.container}>
                    <Image resizeMode='contain' style={[{width:200,height:200},styles.imageStyle]} source={require('../images/camera_post.png')}/>
                    <Text  style={styles.introText}>Lorem Ipsum is simply dummy text of the printing 
                    and typesetting industry. Lorem Ipsum has been the 
                    industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley
                    of type and scrambled it to mak</Text>

                <ButtonRoundBorder
                    onPress={()=>  this.props.navigation.navigate('Login')   }
                    title={"Next"} />
                </View>
                
            </Swiper>

    );
}
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'white',
    },

imageStyle:{
    alignSelf: 'center',
    
},
introText:{
    margin: 40,
    textAlign:'center'
}
})