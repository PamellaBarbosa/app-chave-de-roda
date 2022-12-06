import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AtdCarro from '../atendimento/atdCarro'
import AtdMoto from '../atendimento/atdMoto'
import AtdBicicleta from '../atendimento/atdBicicleta'
import AtdCaminhao from '../atendimento/atdCaminhao'

export default Agendado = ({route}) => {

  const navigation = useNavigation();

  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Agendados</Text>

      <div style = {estilo.campo}>
        <div style = {estilo.boxCampos}>
          
          <Text>
            <Text style = {estilo.txtServico}>Serviço:</Text>
            <div style = {estilo.txtCommentServicoA}>
              {route.params.paramKey1}
            </div>
          </Text>

          <Text>
            <Text style = {estilo.txtServico}>Tipo de serviço:</Text> 
            <Text style = {estilo.txtCommentServicoB}>{route.params.paramKey2}</Text>
          </Text>

          <Text>
            <Text style = {estilo.txtServico}>Veículo:</Text> 
            <Text style = {estilo.txtCommentServicoB}>{route.params.paramKey3}</Text>
          </Text>

          <Text>
            <Text style = {estilo.txtServico}>Valor:</Text> 
            <Text style = {estilo.txtCommentServicoB}>{route.params.paramKey4}</Text>
          </Text>

          <Text>
            <Text style = {estilo.txtServico}>Prazo:</Text>
            <Text style = {estilo.txtCommentServicoB}>{route.params.paramKey5}</Text>
          </Text>

          <Text>
            <Text style = {estilo.txtServico}>Observação:</Text>
            <Text style = {estilo.txtCommentServicoB}>{route.params.paramKey6}</Text>
          </Text>

          <Text>
            <Text style = {estilo.txtServico}>Agendado em:</Text> 
            <Text style = {estilo.txtCommentServicoB}>{route.params.paramKey7}</Text>
          </Text>
          
        </div>  
      </div>

      <div>
        <TouchableOpacity onPress = {()=>navigation.navigate('Home')} >
          <Text style = {estilo.btnVoltar}>Voltar</Text>
        </TouchableOpacity>
      </div>

     </View>

  );
};

const estilo = StyleSheet.create({
  container: {
    flex: 1,
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

  campo: {
    flexWrap: 'wrap',
    display: 'grid',
    alignSelf: 'center', 
  },

  boxCampos: {
    width: '280px',
    height: '210px',
    borderRadius: '10px',
    padding: '5px',
    minHeight: '50px',
    backgroundColor: '#f2f2f2',
    marginTop: '10px',
    borderColor: '#a45b15',
    borderWidth: '5px',
  },

  txtServico: {
    color: '#a45b15',
    marginLeft: '5px',
    paddingLeft: '3px',
    fontSize: '15px',
    fontFamily: 'poppins',
    fontWeight: 'bold'
  },

  txtCommentServicoA: {
    marginLeft: '10px',
    color: '#000',
    fontSize: '15px',
    fontFamily: 'poppins',
  },

  txtCommentServicoB: {
    marginLeft: '3px',
    color: '#000',
    fontSize: '15px',
    fontFamily: 'poppins',
  },

  btnVoltar: {
    width: '98px',
    height: '20px',
    backgroundColor: '#a45b15',
    alignSelf: 'center',
    textAlign: 'center',
    padding: '1px',
    marginBottom: '10px',
    marginTop: '15px',
    marginLeft: '25px',
    borderRadius: '20px',
    color: '#f2f2f2',
    fontFamily: 'poppins',
    fontSize: '15px',
  },

});