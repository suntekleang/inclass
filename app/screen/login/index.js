import React, { Component } from 'react'
import { Text, StyleSheet, View,SafeAreaView,ScrollView,TextInput,TouchableOpacity  } from 'react-native'
import { inject, observer } from 'mobx-react';

@inject("auth")
@observer

export default class LonginScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: "",
      passWord: "",
      hasErrorName:false,
      hasErrorPassword:false,
       
    }
  }
  onLogin=()=>{
    const {userName,passWord} = this.state
    this.props.auth.LogIn(userName,passWord,(success)=>{
      if(success){
        this.props.navigation.navigate('Home')
      }
      else{
        alert('Login Invalid')
      }
    })
  }

  render() {
    const{userName,passWord,hasErrorName,hasErrorPassword}=this.state
    return (
      <SafeAreaView>
        <ScrollView style={styles.body}>
          <View style={styles.formGroup}>
            <Text>UserName</Text>
            <TextInput 
              autoCapitalize="none"
              value={userName}
              onChangeText={(userName)=>this.setState({userName:userName})}
              style={[styles.input,hasErrorName?styles.hasError:'']}
            />

            <Text>password</Text>
            <TextInput 
              value={passWord}
              secureTextEntry={true}
              onChangeText={(passWord)=>this.setState({passWord:passWord})}
              style={[styles.input,hasErrorPassword?styles.hasError:'']}
            />
            <TouchableOpacity onPress={this.onLogin}>
               <Text>Log in</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  formGroup:{
    marginBottom:24,
  },
  input:{
    borderWidth:1,
    borderColor: '#333',
    paddingHorizontal:15,
    paddingVertical:15,
  },
  hasError:{
    borderColor: 'red',
  }
})
