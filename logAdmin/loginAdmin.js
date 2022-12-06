import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import firebase from 'firebase';

export default class LoginAdmin extends Component {

  constructor() {
    super();
    this.state = { 
      user: '', 
      password: '',
      isLoading: false
    }
  }

  //cadastrarUsuario
  setIt=()=>{
    data = {nome:'Jao',idade:20};
    db =  firebase.firestore();
    db.collection('perfil').doc('us').set(data);

    Alert.alert(res)
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

  userLogin = () => {
    if(this.state.user === '' && this.state.password === '') {
      Alert.alert('Digite detalhes necessários!')
      this.setState({
        isLoading: false,
      })
    } else {
      this.setState({
        isLoading: false,
      })
      firebase
      .auth()
      .signInWithEmailAndPassword(this.state.user, this.state.password)
      .then((res) => {
        console.log(res)
        console.log('Usuário logado com sucesso!')
        this.setState({
          isLoading: false,
          user: '', 
          password: ''
        })
        this.props.navigation.navigate('Home')
      })
      .catch(error => this.setState({ errorMessage: error.message }))
    }
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={estilo.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }
    return(
      <View style = {estilo.container}>
        <Text style = {estilo.titulo}> Log Admin </Text>

        <Image source = {require('../img/chaveRoda.png')} style = {estilo.img} />

        <View style = {estilo.box} > 

          <div style = {estilo.div}>
          <TextInput placeholder='User' style={estilo.campo} value={this.state.user}
          onChangeText={(val) => this.updateInputVal(val, 'user')}/>
          </div>

          <div style = {estilo.div}>
          <TextInput placeholder='Password' style={estilo.campoSenha} secureTextEntry = {true} value={this.state.password}      onChangeText={(val) => this.updateInputVal(val, 'password')} maxLength={15}/>
          </div>

          <View>
            <TouchableOpacity style = {estilo.btn} onPress = { () => this.userLogin('')}>Entrar</TouchableOpacity> 
          </View>

          <View>
            <TouchableOpacity style = {estilo.btnVoltar} onPress = { () => this.props.navigation.navigate('Login')}>Voltar</TouchableOpacity> 
          </View>
        </View>

      </View>
    );
  }
  
}
 

const estilo = StyleSheet.create({
  container: {
    flex: '5px',
    backgroundColor: '#2b3019',
  },

  box: {
    marginTop: '95px'
  },

  div: {
    alignSelf: 'center',
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
    marginBottom: '30px',
  },

  campoSenha: {
    width: '220px',
    height: '28px',
    marginLeft: '3px',
    display: 'grid',
    marginTop: '-10px',
    color: '#686868',
    paddingLeft: '8px',
    borderColor: '#a45b15',
    borderRadius: '20px',
    borderWidth: '2px',
    marginBottom: '20px',
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
    padding: '1px'
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

  titulo: {
    textAlign: 'left',
    color: '#a45b15',
    fontWeight: 'bold',
    fontSize: '20px',
    margin: '10px',
    fontFamily: 'poppins'
  },

  img: {
    alignSelf: 'center', 
    marginTop: '50px',
    marginRight: '24px',
    width: '240px',
    height: '100px'
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