import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image, TextInput, Alert} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Card } from '../../Components/Card';
import Teste from '../../Contexts/Provider';
import { FormInput } from '../../Components/FormInput';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormInputTitle } from '../../Components/FormInputTitle';

const schema = yup.object().shape({
  title: yup.string().min(5).max(20).required("Por favor, insira um título"),
  description: yup.string().min(5).max(220).required("Por favor, insira uma descrição"), 
});

export function PostAdmin () {
  
  const [image,setImage] = useState('https://scontent.fmvf5-1.fna.fbcdn.net/v/t1.6435-9/136059707_1612871498916762_3400831029979237112_n.png?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEAD3LQaMySbDGxtTm0cger2pY2xSJVbZ7aljbFIlVtnrZlbpqo3Bg1SxMIngmcekE4x07-xKlMNBlqCcTdRUc0&_nc_ohc=Ntclmr5Yr14AX80U1Zl&_nc_oc=AQnolA05g4FPcPbUogasXMs6qkKJshYPz8UyDl01bKJpe3pipwnKJVUu2-ythYW5SOM&_nc_ht=scontent.fmvf5-1.fna&oh=6cd31937931b2292fd14c78ee0996564&oe=617A72E9');
  const {post, Publicar, DeletePublicacao} = Teste();

  const {control, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)});

  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing:true,
      aspect:[4,4],
      quality:1
    })
    if (!result.cancelled) {
      setImage(result.uri)
    }
    
  }

  async function login(data){

    setImage('https://scontent.fmvf5-1.fna.fbcdn.net/v/t1.6435-9/136059707_1612871498916762_3400831029979237112_n.png?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEAD3LQaMySbDGxtTm0cger2pY2xSJVbZ7aljbFIlVtnrZlbpqo3Bg1SxMIngmcekE4x07-xKlMNBlqCcTdRUc0&_nc_ohc=Ntclmr5Yr14AX80U1Zl&_nc_oc=AQnolA05g4FPcPbUogasXMs6qkKJshYPz8UyDl01bKJpe3pipwnKJVUu2-ythYW5SOM&_nc_ht=scontent.fmvf5-1.fna&oh=6cd31937931b2292fd14c78ee0996564&oe=617A72E9');

    try{
        return await Publicar(data.title, data.description, image);
    }catch(error){
        console.log(error);
    } 
   
  }

  return (
    
      <View style = {styles.containerAll} >
        
        <View style = {styles.containers}>
            <Text style = {styles.text}>Título</Text>
            <FormInputTitle name= "title" control={control} placeholder="Insira o título"
            error={ errors.title && errors.title.message }/>
        </View>
        <View style = {styles.containers}>
            <Text style = {styles.text}>Descreva sobre:</Text>
                <FormInput name="description" control={control} placeholder="Descreva sobre"
                error={ errors.description && errors.description.message }/>
            <View style = {styles.ViewButton}>
                <Image source={{ 
                            uri: image 
                            ? image 
                            : 'https://scontent.fmvf5-1.fna.fbcdn.net/v/t1.6435-9/136059707_1612871498916762_3400831029979237112_n.png?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEAD3LQaMySbDGxtTm0cger2pY2xSJVbZ7aljbFIlVtnrZlbpqo3Bg1SxMIngmcekE4x07-xKlMNBlqCcTdRUc0&_nc_ohc=Ntclmr5Yr14AX80U1Zl&_nc_oc=AQnolA05g4FPcPbUogasXMs6qkKJshYPz8UyDl01bKJpe3pipwnKJVUu2-ythYW5SOM&_nc_ht=scontent.fmvf5-1.fna&oh=6cd31937931b2292fd14c78ee0996564&oe=617A72E9'
                  }}
                    style={{
                    borderWidth: 1,
                    borderRadius: 13,
                    borderColor: '#F78181',
                    width: '30%',
                    height: '100%',
                  }} />
                <TouchableOpacity onPress={PickImage} >
                  <FontAwesome name="photo" size={35} color='#F78181' />
                </TouchableOpacity>
                <TouchableOpacity style = {styles.button} onPress= {handleSubmit(login)}>
                    <Text style = {styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
                
            </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <FlatList data={post} style={styles.flatlist} 
            keyExtractor={item => item.id.toString()} 
            renderItem={ ({item}) =>  (
                <View style={{alignItems: 'center',
                              justifyContent: 'center',}}>
                  <Card image={item.image} titleText={item.title} dateLocal={item.dataLocal} descriptionText={item.description} onPress={() => DeletePublicacao(item.id)}/>
                </View>
                   
            ) }/> 
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
      fontSize: 17
    },
    containers: {
      marginTop: 10,
      flexDirection: 'column'
    },
    ViewButton: {
      marginTop: 10,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-around',
      height: 100
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
    
    image: {
      marginTop:10,
      borderWidth:1,
      borderRadius:13,
      borderColor:'#0047ab',
      width:320,
      height:200
    },

    flatlist:{
      marginTop: 10
    }
});