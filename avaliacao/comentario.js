import React, { useState, useRef } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, ScrollView} from 'react-native';
import { Divider} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

export default Comentario = () => {
  
  const navigation = useNavigation();
  
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [commentValue, setCommentValue] = useState('');
  const [showComment, setShowComment] = useState(false);
  const InputRef = useRef();

  
  const AddToComments = () => {
    let temp = {
      id: GenerateUniqueID(),
      name: name,
      commentValue: commentValue,
    };
    setComments([...comments, temp]); 
    InputRef.current.clear(); 
  };

  
  const GenerateUniqueID = () => {
    return Math.floor(Math.random() * Date.now()).toString();
  };

  return (
    
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Comentário</Text>

      <View style = {estilo.main}>

        <TextInput
          style={estilo.input_txt}
          onChangeText={(text) => setName(text)}
          placeholder="Name"
          ref={InputRef}
        />

        <TextInput
          style={estilo.input_com}
          onChangeText={(text) => setCommentValue(text)}
          placeholder="Comment"
          ref={InputRef}
        />
        <TouchableOpacity style = {estilo.btn} title="send" onPress={() => AddToComments()}>Enviar</TouchableOpacity>

        <TouchableOpacity style = {estilo.buttonStyleReturn} onPress = {() =>navigation.navigate('Login')}>Voltar</TouchableOpacity>

            <View style={estilo.input_comment}>
              <Text style={estilo.nameTxt}>João Toledo</Text>
              <Divider />
              <Text style={estilo.txtComment}>Ótimo app.</Text>
            </View>

            <View style={estilo.input_comment}>
              <Text style={estilo.nameTxt}>Serena</Text>
              <Divider />
              <Text style={estilo.txtComment}>Serviços com ótimo preço.</Text>
            </View>
        
        {comments.map((c) => (
          <View style={estilo.showComment_container} key={c.id}>
            <Text style = {estilo.nameTxt}>{c.name}</Text>
            <Divider />
            <Text style = {estilo.txtComment}>{c.commentValue}</Text>
          </View>
          
        ))}

      </View>
    </View>
  );
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

  input_txt: {
    width: '220px',
    height: '28px',
    marginBottom: '30px',
    display: 'grid',
    color: '#686868',
    padding: '8px',
    borderColor: '#a45b15',
    borderRadius: '20px',
    borderWidth: '2px',
    fontFamily: 'poppins',
  },

  input_com: {
    width: '220px',
    height: '28px',
    marginBottom: '10px',
    marginTop: '-10px', 
    display: 'grid',
    color: '#686868',
    padding: '8px',
    borderColor: '#a45b15',
    borderRadius: '20px',
    borderWidth: '2px',
    fontFamily: 'poppins',
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
    marginTop: '20px',
    
  },

  buttonStyleReturn: { 
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

  input_comment: {
    width: '200px',
    borderRadius: '10px',
    padding: '5px',
    minHeight: '50px',
    backgroundColor: '#f2f2f2',
    marginTop: '10px',
    borderColor: '#a45b15',
    borderWidth: '2px',
  },

  nameTxt: {
    color: '#a45b15',
    marginLeft: '5px',
    fontSize: '15px',
    fontFamily: 'poppins',
  },

  txtComment: {
    color: '#686868',
    padding: '2px',
    marginLeft: '5px',
    fontSize: '12px',
    fontFamily: 'poppins',
  },

  showComment_container: {
    width: '200px',
    borderRadius: '10px',
    padding: '5px',
    minHeight: '50px',
    backgroundColor: '#f2f2f2',
    marginTop: '10px',
    borderColor: '#a45b15',
    borderWidth: '2px',
  }

});