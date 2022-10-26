import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import firebase from 'firebase';


export default class Login extends Component {
  constructor() {
    super();
    this.state = { 
      email: '', 
      password: '',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  logOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }
 

  registerUser = ()=> {
    if(this.state.email==="" && this.state.password==="") {
      Alert.alert('Insira detalhes para se inscrever!');
    } else {
      this.setState({
        isLoading: true
      })
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res)=>{
        res.user.updateProfile({
          displayName: this.state.displayName
        })
        

        console.log("Usuario registrado com sucesso!")
        Alert.alert("Usuario registrado com sucesso!")
        this.setState({
          isLoading: false,
          email: '', 
          password: ''
          
        })
        this.props.navigation.navigate('Login')
      })
      .catch(error => this.setState({ errorMessage: error.message }))
    }
  }

  render() {
    if(this.state.isLoading) {
      return(
        <View style = {estilo.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }

    return(
      <View style = {estilo.container}>

        <Text style = {estilo.titulo}>Recuperação de Senha</Text>

        <View style = {estilo.main}>
          <Text style = {estilo.texto}>
            Digite aqui seu email e uma nova senha:
          </Text>

          <TextInput style = {estilo.campo} placeholder ='Email' value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}/> 

          <TextInput style = {estilo.campoSenha} placeholder ='Password' value={this.state.password} secureTextEntry = {true}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15} /> 
        </View>

        <View>
          <TouchableOpacity style = {estilo.btn} onPress = { () => this.registerUser('')}>Continuar</TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style = {estilo.btnVoltar} onPress = { () => this.logOut('')}>Voltar</TouchableOpacity> 
        </View>
        
      </View>
    );
  }
}

const estilo = StyleSheet.create({
  
  container: {
    flex: '1px',
    backgroundColor: '#2b3019',
  },

  titulo: {
    textAlign: 'left',
    color: '#a45b15',
    margin: '10px',
    fontFamily: 'poppins',
    fontWeight: 'bold',
    fontSize: '20px',
  },
  
  main: {
    alignItems: 'center',
    marginTop: '150px'
  },

  texto: {
    margin: '10px',
    textAlign: 'center',
    color: '#a45b15',
    marginLeft: '14px',
    fontWeight: 'bold',
    fontFamily: 'poppins'
  },

  campo: {
    width: '220px',
    height: '28px',
    margin: '15px',
    display: 'grid',
    color: '#686868',
    paddingLeft: '8px',
    borderColor: '#a45b15',
    borderRadius: '20px',
    borderWidth: '2px',
    marginBottom: '10px',
    fontFamily: 'poppins'
  },

  campoSenha: {
    width: '220px',
    height: '28px',
    margin: '15px',
    display: 'grid',
    color: '#686868',
    paddingLeft: '8px',
    borderColor: '#a45b15',
    borderRadius: '20px',
    borderWidth: '2px',
    marginBottom: '30px',
    fontFamily: 'poppins'
  },

  btn: {
    width: '98px',
    height: '20px',
    backgroundColor: '#a45b15',
    alignSelf: 'center',
    textAlign: 'center',
    margin: '12px',
    marginBottom: '5px',
    borderRadius: '20px',
    color: '#f2f2f2',
    fontFamily: 'poppins',
    padding: '1px',
  },

  btnVoltar: {
    width: '98px',
    height: '20px',
    backgroundColor: '#a45b15',
    alignSelf: 'center',
    textAlign: 'center',
    margin: '12px',
    marginBottom: '15px',
    borderRadius: '20px',
    color: '#f2f2f2',
    fontFamily: 'poppins',
    padding: '1px',
    
  },

  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }


})