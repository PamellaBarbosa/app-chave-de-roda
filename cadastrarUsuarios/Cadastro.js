import React, {Component} from 'react';
import {StyleSheet, TextInput, View, Text, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import firebase from 'firebase';

export default class Cadastro extends Component {

  constructor() {
    super();
    this.state = { 
      displayName: '',
      email: '', 
      password: '',
      isLoading: false
    }
  }
  
  logOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
 

  registerUser = ()=> {
    if(this.state.email==="" && this.state.password===""){
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
          displayName: '',
          email: '', 
          password: '',
        })
        this.props.navigation.navigate('Login')
      })
      .catch(error => this.setState({ errorMessage: error.message }))
    }

  }

  render() {
    if(this.state.isLoading){
      return(
        <View style = {estilo.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }

    return (

      <View style = {estilo.container}>

        <Text style={estilo.titulo}>Cadastro</Text>
        
        <View style={estilo.main}>

          <Text style={estilo.texto}>Preencha os campos a seguir para concluir o cadastro:</Text>

          <TextInput style = {estilo.boxText} placeholder = {'Name'} 
          keyboardType ={'text'} value={this.state.displayName} onChangeText={(val) => this.updateInputVal(val, 'displayName')}/>
            
          <TextInput style = {estilo.boxText} placeholder = {'Email'} 
          keyboardType ={'text'} value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}/>
          
          <TextInput secureTextEntry = {true} style = {estilo.boxText} placeholder = {'Password'} 
          keyboardType = {'text'} value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}/>


        </View>

        <View>
          <TouchableOpacity style = {estilo.btn} onPress = {()=>this.registerUser('')}>Cadastrar</TouchableOpacity>
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
    margin: '18px',
    textAlign: 'left',
    marginLeft: '10px',
    color: '#a45b15',
    fontFamily: 'poppins',
    fontWeight: 'bold',
    fontSize: '20px',
  },

  main: {
    marginTop: '50px',
    alignItems: 'center',
    justifyContent: 'center' 
  },

  texto: {
    textAlign: 'center',
    color: '#a45b15',
    margin: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
    fontFamily: 'poppins'
  },

  boxText: {
    width: '300px',
    height: '30px',
    margin: '10px',
    backgroundColor: '#f2f2f2',
    borderRadius: '10px',
    paddingLeft: '10px',
    color: '#696969',
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
    marginTop: '30px',
    
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
});