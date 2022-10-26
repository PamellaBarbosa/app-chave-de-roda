import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const getFormattedPrice = (price) => `$${price.toFixed(2)}`;
const getFormattedPrazo = (prazo) => `${prazo}`;

export const toppings = [
  {
    name: "Trocar pneu",
    price: 50.00,
    prazo: 1
  },
  {
    name: "Encher pneu",
    price: 20.00,
    prazo: 1
  },
  {
    name: "Trocar aro",
    price: 80.00,
    prazo: 2
  },
  {
    name: "Remendar pneu",
    price: 50.00,
    prazo: 2
  }
];


export default function Moto() {
  const navigation = useNavigation();

  const[checkedState, setCheckedState] = useState(
    new Array(toppings.length).fill(false)
  );

  const [total, setTotal] = useState(0);
  const [totalPrazo, setTotalPrazo] = useState(0);

  const handleOnChange = (position) => {
    const updtatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updtatedCheckedState);

    const totalPrice = updtatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + toppings[index].price;
        }
        return sum;
      },
      0
    );

    setTotal(totalPrice);

    const totalPrazo = updtatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + toppings[index].prazo;
        }
        return sum;
      },
      0
    );

    setTotalPrazo(totalPrazo);

    const clickCheck = () => {
      setIsChecked(!isChecked);
    };
  };

  return (
    <View style = {estilo.container}>

      <Text style = {estilo.titulo}>Moto</Text>

      <div style = {estilo.main}>
        <div style = {estilo.alinhamentoTexto}>
          <Text style = {estilo.paragrafo}>Abaixo encontra-se uma lista de serviços 
            oferecidos pela nossa empresa: 
          </Text>
        </div>
      </div>

      <div style = {estilo.textVS}>
        <div style = {estilo.content}> 
          <div className = "Moto">
            {toppings.map(({name, price}, index) => {
              return (
                <li key = {index}>
                  <div className = "toppings-list-item">
                    <div className = "left-section" style={estilo.tiposServicoU} >
                      <input
                        type = "checkbox"
                        id = {`custom-checkbox-${index}`}
                        name = {name}
                        value = {name}
                        checked = {checkedState[index]}
                        onChange = {() => handleOnChange(index)}
                      />
                      <label htmlFor = {`custom-checkbox-${index}`}>{name}</label>
                    </div>
                    <div className = "right-section" style={estilo.spanUprecos}>{getFormattedPrice(price)}</div>
                  </div>
                </li>
              );
            })}      
          </div>
        </div>
      </div>


      <div style = {estilo.camposEx}>

        <div>
          <Text style = {estilo.camposItens}>Veículo: </Text>
          <TextInput style={estilo.campo}/>
        </div>

        <div>
          <Text style = {estilo.camposItens}>Valor: </Text>
          <div style = {estilo.campo} className = "right-section"> {getFormattedPrice(total)} </div>
        </div>

        <div>
          <Text style = {estilo.camposItens}>Prazo: </Text>
          <div style = {estilo.campo}> {getFormattedPrazo(totalPrazo)} </div>
        </div>

        <div>
          <Text style = {estilo.camposItens}>Observação: </Text>
          <TextInput style = {estilo.campoComentario} multiline = {true} />
        </div>

      </div>

      <div>
        <TouchableOpacity onPress = {()=>navigation.navigate('Home')} >
          <Text style = {estilo.btnVoltar}>Voltar</Text>
        </TouchableOpacity>
      </div>

      <div>
        <TouchableOpacity onPress = {()=> alert('Agendado com sucesso.')} >
          <Text style = {estilo.btn}>Enviar</Text>
        </TouchableOpacity>
      </div>

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

  textVS: {
    alignSelf: 'center',
    marginBottom: '50px'
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

  content: {
    marginTop: '32px',
    display: 'grid',
    paddingLeft: '50px',
    
  },

  tiposServicoU: {
    fontSize: '18px',
    marginLeft: '-40px',
    color: '#a45b15',
    fontFamily: 'poppins',
    
 },

  spanUprecos: {
     color: '#f2f2f2',
     marginTop: '-18px',
     marginLeft: '78px',
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

  campoComentario: {
    width: '150px',
    height: '90px',
    paddingLeft: '5px',
    backgroundColor: '#f2f2f2',
    borderRadius: '5px',
    margin: '8px',
    display: 'grid',
    padding: '3px',
    marginBottom: '20px'
  },

  btnVoltar: {
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
    color: '#f2f2f2',
    fontFamily: 'poppins',
    fontSize: '15px',
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
    color: '#f2f2f2',
    fontFamily: 'poppins',
    fontSize: '15px',
  }

})
