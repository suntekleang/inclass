import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Swiper from 'react-native-swiper';



export default MatSwiper =()=>{

    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Image source={require('../images/amazon3.jpg')} style={{width: '100%',height: '100%'}}/>
        </View>
        <View style={styles.slide2}>
          <Image source={require('../images/amazon2.png')} style={{width: '100%',height: '100%'}}/>
        </View>
        <View style={styles.slide3}>
          <Image source={require('../images/amazon1.jpeg')} style={{width: '100%',height: '100%'}}/>
        </View>
      </Swiper>
    );
  }


AppRegistry.registerComponent('myproject', () => Swiper);

const styles = StyleSheet.create({
    wrapper: {
        height: 180,
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    }
  })