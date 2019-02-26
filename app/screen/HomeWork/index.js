import React, { Component } from 'react'
import { Text, StyleSheet, View,SafeAreaView,TouchableOpacity,TextInput,ScrollView,Image } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import MatSwiper from '../../components/swiper';
export default class HomeWorkScreen extends Component {
  render() {
    return (
      <View style={{flex: 1,}}>
          <View style={{backgroundColor: '#609FB0',height: 135,}}>
      {/* header */}
        <View style={{flexDirection: "row",alignItems: "center",paddingHorizontal: 12,marginTop: 45,}}>
            <View style={{alignItems: "center",flexDirection: "row",flex: 1,}}>
                <Icon style={{fontSize: 28,color: '#fff'}} name="menu"/>
                <Text style={{paddingHorizontal:12,fontSize: 28,fontWeight: '500',color: '#fff'}}>amazon</Text>
            </View>
            <View style={{alignItems: "center",flexDirection: "row"}}>
                <Icon style={{fontSize: 28,paddingHorizontal:12,color: '#fff'}} name="mic"/>
                <Icon style={{fontSize: 28,color: '#fff'}} name="shopping-cart"/>
            </View>
        </View>

        {/* search */}
        <View style={{height: 40,backgroundColor: '#fff',marginTop: 15,marginHorizontal:8,alignItems: "center",flexDirection: "row",}}>
            <Icon style={{fontSize: 26,color: '#609FB0',paddingHorizontal:8,}} name="search"/>
            <TextInput 
              placeholder="what are you looking for?"
              style={{fontSize: 20,paddingHorizontal: 12,flex:1,}}
            />
            <Icon style={{paddingHorizontal:8,fontSize: 26,color: '#609FB0'}} name="camera"/>
        </View>

      </View>





      <ScrollView style={{backgroundColor: '#e0e0e0'}}>
          {/* delivery */}
          <View style={{height: 50,backgroundColor: '#22578C',paddingHorizontal: 12,flexDirection: "row",alignItems: "center"}}>
            <Icon style={{fontSize: 26,color: '#fff',}} name="map-pin"/>
            <Text style={{paddingHorizontal: 12,color: "#fff",fontSize: 20,}}>Deliver to Cambodia</Text>
          </View>

          {/* swiper */}
          <View>
              <MatSwiper/>
          </View>


          {/* sign in */}
          <View style={{height: 160,backgroundColor: '#fff',marginTop: 8,alignItems: "center"}}>
            <Text style={{paddingVertical: 15,fontSize: 26,}}>Sign in for the best experience</Text>
            <View style={{paddingVertical: 14,backgroundColor: '#E9AD53',width: '94%',alignItems: "center"}}>
              <Text style={{fontSize: 20,}}>Sign in</Text>
            </View>
            <View style={{flexDirection: "row",alignItems: "center",paddingHorizontal:12,paddingVertical:15,}}>
              <Text style={{flex: 1,color: '#2F7CF6'}}>Create an account</Text>
              <Icon style={{fontSize: 26,color: '#2F7CF6',}} name="chevron-right"/>
            </View>
          </View>
          {/* product */}
          <View style={{backgroundColor: '#fff',marginTop: 8,alignItems: "center",paddingVertical:15,}}>
            <View style={{flexDirection: "row",alignItems: "center",paddingHorizontal:12,paddingVertical:15,}}>
              <Text style={{fontSize: 24,flex:1}}>Popular deals</Text>
            </View>
            <View style={{borderBottomWidth: 1 ,borderTopWidth: 1, borderColor: '#e0e0e0',width: '94%'}}>
              <View style={{flexDirection: "row",alignItems: "center",paddingVertical:12}}>
                <Image style={{height: 100,width: 100,}} source={require('../../images/iam.jpg')}/>
                <View style={{flexDirection: "column",justifyContent: "center",paddingHorizontal:12,}}>
                  <Text style={{}}>Ipad</Text>
                  <Text>Price: $200</Text>
                </View>
              </View>

              <View style={{flexDirection: "row",alignItems: "center",paddingVertical:12}}>
                <Image style={{height: 100,width: 100,}} source={require('../../images/iam.jpg')}/>
                <View style={{flexDirection: "column",justifyContent: "center",paddingHorizontal:12,}}>
                  <Text style={{}}>Ipad</Text>
                  <Text>Price: $200</Text>
                </View>
              </View>

              <View style={{flexDirection: "row",alignItems: "center",paddingVertical:12}}>
                <Image style={{height: 100,width: 100,}} source={require('../../images/charger.jpg')}/>
                <View style={{flexDirection: "column",justifyContent: "center",paddingHorizontal:12,}}>
                  <Text style={{}}>Charger</Text>
                  <Text>Price: $200</Text>
                </View>
              </View>

            </View>
            <View style={{flexDirection: "row",alignItems: "center",paddingHorizontal:12,paddingVertical:15,}}>
              <Text style={{flex: 1,color: '#2F7CF6'}}>See all deals</Text>
              <Icon style={{fontSize: 26,color: '#2F7CF6',}} name="chevron-right"/>
            </View>


          </View>
      </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
