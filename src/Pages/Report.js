import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import TesteMsg from '../Contexts/ProviderMsg';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormInput } from '../Components/FormInput';
import { FormInputTitle } from '../Components/FormInputTitle';

const schema = yup.object().shape({
  title: yup.string().min(5).max(20).required("Por favor, insira um título"),
  endereco: yup.string().min(5).max(50).required("Por favor, insira endereço"),
  description: yup.string().min(5).max(220).required("Por favor, insira uma descrição"), 
});

export function Report () {

  const [sugestion, setSugestion] = useState('Problema');
  const {EnviarMensagem} = TesteMsg();

  const {control, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)});

  async function enviar(data){
    try{
      console.log(data);
      console.log(sugestion);
        return await EnviarMensagem(data.title, data.endereco, data.description, sugestion);
        
    }catch(error){
        console.log(error);
    } 
  }

  return (
      <View style = {styles.containerAll} >
        <View style = {styles.containers}>
          <Text style={styles.text}>Selecione o que deseja nos enviar:</Text>
            <View style = {styles.picker}>
                <Picker style = {styles.picker2}
                  selectedValue={sugestion}
                  onValueChange={(item, itemIndex) =>
                    setSugestion(item)
                  }>
                  <Picker.Item value="Problema" label= 'Problema'/>
                  <Picker.Item value="Sugestão" label='Sugestão'/>
                </Picker>
            </View>       
            <Text style = {styles.text}>Título:</Text>
            <FormInputTitle name= "title" control={control} placeholder="Insira o título"
                error={ errors.title && errors.title.message }/>
            
          </View>
          <View style = {styles.containers}>
            <Text style = {styles.text}>Endereço:</Text>
            <FormInputTitle name= "endereco" control={control} placeholder="Insira o endereço completo do local"
                error={ errors.endereco && errors.endereco.message }/>
          </View>
          <View style = {styles.containers}>
            <Text style = {styles.text}>Descreva sobre:</Text>
            <FormInput name="description" control={control} placeholder="Descreva sobre o problema ou ideia"
                error={ errors.description && errors.description.message }/>
            <View style = {styles.ViewButton}>
              <TouchableOpacity style = {styles.button} onPress={handleSubmit(enviar)}>
                <Text style = {styles.buttonText}>Enviar</Text>
              </TouchableOpacity>
            </View>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
    containerAll: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#F8E0E0',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    text : {
      fontSize: 18,
      textAlign: 'left',
      color:'#F78181',
      fontWeight: 'bold'
    },
    boxTextTitle: {
      borderColor: '#0047ab',
      borderWidth: 1,
      borderRadius: 10,
      paddingLeft: 10,
      backgroundColor: 'white',
      width: 320
    },
    boxTextAdress: {
      borderColor: '#0047ab',
      borderWidth: 1,
      borderRadius: 10,
      paddingLeft: 10,
      backgroundColor: 'white',
      width: 320
    },
    boxTextDescription: {
      borderColor: '#0047ab',
      borderWidth: 1,
      borderRadius: 10,
      paddingLeft: 10,
      backgroundColor: 'white',
      height: 120,
      width: 320
    },
    textInput : {
      height: 40,
      fontSize: 17,
      textAlign: 'left'
    },
    containers: {
      marginTop: 10,
      flexDirection: 'column'
    },
    ViewButton: {
      marginTop: 10,
      alignItems: 'flex-end'
    },
    button: {
      height: 45,
      width: 120,
      backgroundColor: '#F78181',
      borderRadius: 10,
      justifyContent: 'center'
    },
    buttonText: {
        fontSize: 19,
        textAlign: 'center',
        color: 'white'
    },
    picker:{
      backgroundColor: 'white',
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 10,
    },
    picker2: {
      height: 40,
      borderColor: 'white',
      
    }
});
