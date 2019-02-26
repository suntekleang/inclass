import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import MatCard from "../../components/matCard";
import { cardData, data } from "../../dummy/card";
import { ScrollView } from "react-native-gesture-handler";
import { inject, observer } from "mobx-react";

@inject("auth")
@observer
export default class HomeScreen extends Component {
  logout=()=>{
    this.props.auth.logOut((success, res) => {
      if(success){
        this.props.navigation.navigate("Login")
      }
      else{
        alert('Error')
      }
    });
  }
  render() {
    return (
      <SafeAreaView>
        <TouchableOpacity onPress={this.logout}>
          <Text>Logout</Text>
        </TouchableOpacity>
        <ScrollView>
          <Text> textInComponent </Text>
          <MatCard data={cardData} />
          {data.map(m => {
            return <MatCard data={m} />;
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
