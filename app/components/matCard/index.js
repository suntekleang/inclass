import React, { Component } from 'react'
import { Text, StyleSheet, View,Image } from 'react-native'


export default class MatCard extends Component {
  render() {
      const {title,category,subTitle,description,img}=this.props.data;
    return (
      <View style={styles.cards}>
      <Image style={styles.logo} source={{uri:img}}/>
        <Text style={styles.title}> 
            {title}
        </Text>
        <Text style={styles.subTitle}>
            {subTitle}
        </Text>
        <Text>
            {description}
        </Text>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
    logo:{
        height:100,
        width: 100,
    },
    cards:{
        backgroundColor:'#333',
        padding: 30,
        borderRadius: 12,
        marginTop: 30,
    },
    title:{
        fontSize:32,
        color: '#fff',
    },
    subTitle:{
        fontSize:18,
        color:'#e0e0e0',
    }
})
