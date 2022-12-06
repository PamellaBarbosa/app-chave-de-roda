import  React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import firebase from 'firebase';
import firebaseConfig from './database/firebase';

import Login from './login'
import LoginAdmin from './logAdmin/loginAdmin'
import Home from './homeServicos/home'
import Cadastro from './cadastrarUsuarios/Cadastro'
import EsquecerSenha from './recuperarSenha/EsquecerSenha'
import Comentario from './avaliacao/comentario'
import AtdCarro from './atendimento/atdCarro'
import AtdMoto from './atendimento/atdMoto'
import AtdBicicleta from './atendimento/atdBicicleta'
import AtdCaminhao from './atendimento/atdCaminhao'
import Agendado from './agendamento/agendado'


const Stack = createNativeStackNavigator();

function Appli() {
  return(
    
      <Stack.Navigator>

        <Stack.Screen name = "Login" component = { Login } options={{   headerShown : false }}/>

        <Stack.Screen name = "LoginAdmin" component = { LoginAdmin } options={{   headerShown : false }}/>

        <Stack.Screen name = "Home" component = { Home } options={{ headerShown : false }}/>

        <Stack.Screen name = "Cadastro" component = { Cadastro } options={{ headerShown : false }}/>

        <Stack.Screen name = "EsquecerSenha" component = { EsquecerSenha } options={{ headerShown : false }}/>

        <Stack.Screen name = "comentario" component = { Comentario } options={{   headerShown : false }}/>

        <Stack.Screen name = "atdCarro" component = { AtdCarro } options={{ headerShown : false }}/>

        <Stack.Screen name = "atdMoto" component = { AtdMoto } options={{ headerShown : false }}/>

        <Stack.Screen name = "atdBicicleta" component = { AtdBicicleta } options={{ headerShown : false }}/>

        <Stack.Screen name = "atdCaminhao" component = { AtdCaminhao } options={{ headerShown : false }}/>

        <Stack.Screen name = "agendado" component = { Agendado } options={{ headerShown : false }}/>

      </Stack.Navigator>
    
  )
}

export default function App() {

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  return(
    <NavigationContainer>
      <Appli/>  
    </NavigationContainer>

  )
}


