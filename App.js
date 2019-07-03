import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import firebase from 'firebase';

export default class App extends Component {

  componentWillMount() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyD4nGGUJvHFNfYRqNMoPHeArCaMAzmgrUk",
      authDomain: "fir-teste-deb30.firebaseapp.com",
      databaseURL: "https://fir-teste-deb30.firebaseio.com",
      projectId: "fir-teste-deb30",
      storageBucket: "",
      messagingSenderId: "941516112234",
      appId: "1:941516112234:web:c8d9b496b9c8deac"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  salvarDados() {
    var database=firebase.database();
    database.ref('pontuacao').remove();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Button
          title='Salvar dados'
          color='#841584'
          accessibilityLabel='Salvar Dados'
          onPress={()=>{this.salvarDados();}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
