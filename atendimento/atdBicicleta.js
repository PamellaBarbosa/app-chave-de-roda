import React ,{useState}from 'react';
import {View, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native';
import { white } from '@mui/material/colors';
import { Checkbox } from 'react-native-paper';

import db from '../database/firebase'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function AtdBicicleta({ navigation }) {

  let id = []
  let servico = []
  let price = []
  let prazo = []
  let sumPrazo = 0
  let sum = 0

  const [atdUm, setAtdUm] = useState(true);
  const [atdDois, setAtdDois] = useState(true);
  const [atdTres, setAtdTres] = useState(true);
  const [atdQuatro, setAtdQuatro] = useState(true);

  const [veiculo, setVeiculo] = useState('');
  const [valor, setValor] = useState('');
  const [diasPrazo, setDias] = useState('');
  const [observacao, setObservacao] = useState('');
  

  switch(atdUm){
    case true:
    id.push(1)
    servico.push("Trocar pneu")
    price.push(50.00)
    prazo.push(1)
    
    break;
  }

  switch(atdDois){
    case true:
    id.push(2)
    servico.push("\nEncher pneu")
    price.push(10.00)
    prazo.push(1)

    break;
  }

  switch(atdTres){
    case true:
    id.push(3)
    servico.push("\nTrocar aro")
    price.push(60.00)
    prazo.push(2)

    
    break;
  }

  switch(atdQuatro){
    case true:
    id.push(4)
    servico.push("\nRemendar pneu\n")
    price.push(20.00)
    prazo.push(2)

    
    break;
  }

  for(var i = 0; i < price.length; i++) {
    sum += price[i];
  }

  for(var totalPrazo = 0; totalPrazo < prazo.length; totalPrazo++) {
    sumPrazo += prazo[totalPrazo];
  }

  function addAtd(){

    db.collection('Atendimento Bicicleta').add({
      id: id,
      nomeServico: servico,
      tipoServico: "Bicicleta",
      valorServico: price,
      prazo: prazo,
      horaAgendada: Date()

    })
  }

  return (

    <View style={estilo.container}>

    <View>

      <Text style = {estilo.titulo}>Bicicleta</Text>

      <div style = {estilo.main}>
        <div style = {estilo.alinhamentoTexto}>
          <Text style = {estilo.paragrafo}>Abaixo encontra-se uma lista de serviços 
            oferecidos pela nossa empresa: 
          </Text>
        </div>
      </div>

      <div style = {estilo.checkItens}>
        <div >
          <div >
            <Text style = {estilo.textServico}>Trocar pneu </Text>
            <div style = {estilo.spanPrecos}> R$ 50.00</div>
            <div style = {estilo.check}> 
                <Checkbox {...label} color="white" status = {atdUm ? 'checked' : 'unchecked'} onPress={() => { setAtdUm(!atdUm)}}> 
                </Checkbox>
            </div>
          </div>

          <div>
            <Text style = {estilo.textServico}>Encher pneu </Text>
            <div style = {estilo.spanPrecos}> R$ 10.00</div>
            <div style = {estilo.check}> 
            <Checkbox {...label} color="white" status = {atdDois ? 'checked' : 'unchecked'} onPress={() => { setAtdDois(!atdDois)}}> 
            </Checkbox>
            </div>
          </div>
          <div>
            <Text style = {estilo.textServico}>Trocar aro</Text>
            <div style = {estilo.spanPrecos}> R$ 60.00</div>
            <div style = {estilo.check}> 
              <Checkbox {...label} color="white" status={atdTres ? 'checked' : 'unchecked'}
                onPress={() => {setAtdTres(!atdTres)}}/>
            </div>
          </div>
          <div>
            <Text style = {estilo.textServico}>Remendar pneu</Text>
            <div style = {estilo.spanPrecos}> R$ 20.00</div>
            <div style = {estilo.check}> 
              <Checkbox {...label} color="white" status={atdQuatro ? 'checked' : 'unchecked'}
                onPress={() => {setAtdQuatro(!atdQuatro)}}/>
            </div>
          </div>
        </div>
      </div>

      <div style = {estilo.camposEx}>

        <div>
          <Text style = {estilo.camposItens}>Veículo: </Text>
          <TextInput value={veiculo}
          onChangeText={(veiculo) => setVeiculo(veiculo)} style={estilo.campo}/>
        </div>

        <div>
          <Text style = {estilo.camposItens}>Valor: </Text> 
          <div value={valor}
          onChangeText={(valor) => setValor(valor)} style={estilo.campoValor}>R$ {sum}</div> 
        </div>

        <div>
          <Text style = {estilo.camposItens}>Prazo: </Text>
          <div value={diasPrazo}
          onChangeText={(diasPrazo) => setDias(diasPrazo)} style={estilo.campo}>{sumPrazo}</div>
        </div>

        <div>
          <Text style = {estilo.camposItens}>Observação: </Text>
          <TextInput value={observacao}
          onChangeText={(observacao) => setObservacao(observacao)}
          style = {estilo.campoObs} multiline = {true} />
        </div>

      </div>

      <div>
        <TouchableOpacity onPress = {()=>navigation.navigate('Home')} >
          <Text style = {estilo.btnVoltar}>Voltar</Text>
        </TouchableOpacity>
      </div>
      </View>

      <TouchableOpacity style={estilo.btnBDs} onPress={() => addAtd(this)}>
        <Text style = {estilo.textBtn}>Enviar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilo.btn} 
      onPress={() => 
            navigation.navigate('agendado', {
              paramKey1: servico,
              paramKey2: 'Bicicleta \n',
              paramKey3: veiculo + '\n',
              paramKey4: 'R$ ' + sum + '\n',
              paramKey5: sumPrazo + ' dia (s) \n',
              paramKey6: observacao + '\n',
              paramKey7: new Date().toLocaleString()
            })
          }>
        <Text style = {estilo.textBtn}>Visualizar</Text>
      </TouchableOpacity>
      
    </View>
  );
}
const estilo = StyleSheet.create({
  container: {
    backgroundColor: '#2b3019',
  },

  titulo: {
    color: '#a45b15',
    fontSize: '20px',
    textAlign: 'center',
    marginTop: '20px',
    fontWeight: 'bold',
    fontFamily: 'poppins',
    marginBottom: '10px'
  },

  main: {
    marginTop: '10px',
    width: '100%',
    height: '30%',
    
  },

  alinhamentoTexto: {
    textAlign: 'center',  
  },

  paragrafo: {
    color: '#a45b15',
    fontSize: '16px',
    marginBottom: '100px',
    fontWeight: 'bold',
    fontFamily: 'poppins',
  },

  checkItens: {
    alignSelf: 'center',
    marginTop: '20px',
    marginBottom: '30px',
  },

  check: {
    alignSelf: 'center',
    color: '#f2f2f2',
    marginTop: '-28px'
  },

  textServico: {
    fontSize: '18px',
    color: '#a45b15',
    fontFamily: 'poppins',
    marginLeft: '35px',
  },

  spanPrecos: {
    color: '#f2f2f2',
    marginTop: '-18px',
    marginLeft: '130px',
    paddingLeft: '50px',
    fontFamily: 'poppins',
  },

  camposEx: {
    marginTop: '-15px',
    flexWrap: 'wrap',
    display: 'grid',
    justifyContent: 'left',
    marginLeft: '18px',
    alignSelf: 'center', 
    
  },

  camposItens: {
    color: '#a45b15',
    marginLeft: '5px',
    marginTop: '-60px',
    fontSize: '15px',
    fontFamily: 'poppins',
  },

  campo: {
    width: '150px',
    height: '20px',
    paddingLeft: '5px',
    backgroundColor: '#f2f2f2',
    borderRadius: '5px',
    margin: '8px',
    display: 'grid',
  },

  campoValor: {
    width: '150px',
    height: '20px',
    paddingLeft: '5px',
    backgroundColor: '#f2f2f2',
    borderRadius: '5px',
    margin: '8px',
    display: 'grid',
  },

  campoObs: {
    width: '150px',
    height: '90px',
    paddingLeft: '5px',
    backgroundColor: '#f2f2f2',
    borderRadius: '5px',
    margin: '8px',
    display: 'grid',
    padding: '3px',
    
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

  btnBDs: {
    width: '98px',
    height: '20px',
    backgroundColor: '#a45b15',
    alignSelf: 'center',
    textAlign: 'center',
    padding: '1px',
    marginBottom: '10px',
    marginTop: '5px',
    marginLeft: '25px',
    borderRadius: '20px',
    
  },

  btn: {
    width: '98px',
    height: '20px',
    backgroundColor: '#a45b15',
    alignSelf: 'center',
    textAlign: 'center',
    padding: '1px',
    marginBottom: '70px',
    marginTop: '5px',
    marginLeft: '25px',
    borderRadius: '20px',
    
  },
 
  textBtn: {
    fontFamily: 'poppins',
    fontSize: '15px',
    color: '#f2f2f2',
  },
});
