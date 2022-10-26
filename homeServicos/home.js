import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import React, { Component } from 'react';
import firebase from 'firebase';

export default class Home extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }
  
  logOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  
    
  render() {
    this.setState = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    }

  
    return (
      <View style = {estilo.container}>
        <Text style = {estilo.titulo}>Serviços</Text>
        <View style = {estilo.container}>
          <div style = {estilo.org}> 
            <div style = {estilo.card}>
              <Image source = {require('../img/carro.png')} style = {estilo.img} />
              <Text style = {estilo.subTitulo}>Carro</Text>
              <div style = {estilo.descricao}>
                <Text style = {estilo.paragrafo}> Encontre o serviço desejado para o seu carro.</Text>
              </div>
              <div>
                <TouchableOpacity style = {estilo.btn} onPress={ () => this.props.navigation.navigate('atdCarro')}>Saiba mais</TouchableOpacity> 
              </div>
            </div>

            <div style = {estilo.card}>
              <Image source = {require('../img/moto.png')} style = {estilo.img} />
              <Text style = {estilo.subTitulo}>Moto</Text>
              <div style = {estilo.descricao}>
                <Text style = {estilo.paragrafo}> Encontre o serviço desejado para a sua moto.</Text>
              </div>
              <div>
                <TouchableOpacity style = {estilo.btn} onPress = { () => this.props.navigation.navigate('atdMoto')}>Saiba mais</TouchableOpacity> 
              </div>
            </div>

            <div style = {estilo.card}>
              <Image source = {require('../img/bike.png')} style = {estilo.img} />
              <Text style = {estilo.subTitulo}>Bicicleta</Text>
              <div style = {estilo.descricao}>
                <Text style = {estilo.paragrafo}> Encontre o serviço desejado para a sua bicicleta.</Text>
              </div>
              <div>
                <TouchableOpacity style = {estilo.btn} onPress = { () => this.props.navigation.navigate('atdBicicleta')}>Saiba mais</TouchableOpacity> 
              </div>
            </div>

            <div style = {estilo.card}>
              <Image source = {require('../img/caminhao.png')} style = {estilo.imgCaminhao} />
              <Text style = {estilo.subTitulo}>Caminhão</Text>
              <div style = {estilo.descricao}>
                <Text style = {estilo.paragrafo}> Encontre o serviço desejado para o seu caminhão.</Text>
              </div>
              
              <div>
                <TouchableOpacity style = {estilo.btn} onPress = { () => this.props.navigation.navigate('atdCaminhao')}>Saiba mais</TouchableOpacity> 
              </div>
            </div>
          </div>

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
    backgroundColor: '#2b3019',
    flexWrap: 'wrap',
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
  },

  titulo: {
    textAlign: 'left',
    color: '#a45b15',
    fontWeight: 'bold',
    fontSize: '20px',
    margin: '10px',
    fontFamily: 'poppins'
  },

  org: {
    display: 'contents',
  },

  card: {
    backgroundColor: '#f0e0d5',
    width: '110px',
    height: '210px',
    padding: '16px',
    borderRadius: '10px',
    margin: '10px',
    alignItems: 'center',
  },

  subTitulo: {
    fontSize: '18px',
    lineHeight: '40px',
    fontWeight: 'bold',
    fontFamily: 'poppins',
    color: '#a45b15',
  },

  descricao: {
    textAlign: 'center',
    marginTop: '-1px',
    marginBottom: '5px'
  },

  paragrafo: {
    color: '#000000',
    fontSize: '13px',
    fontWeight: 'medium',
    fontFamily: 'poppins',
  },

  img: {
    marginRight: '15px',
    width: '110px',
    height: '100px',
    borderRadius: '10px',
  },

  imgCaminhao: {
    width: '100px',
    height: '100px',
    borderRadius: '10px',
  },

  btn: {
    color: '#f2f2f2',
    backgroundColor: '#a45b15',
    textAlign: 'center',
    width: '80px',
    borderRadius: '20px',
    marginLeft: '40px',
    fontSize: '12px',
    alignSelf: 'center',
  },

  btnVoltar: {
    width: '120px',
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
    
  }

});

