import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { ButtonLogin } from '../../Components/ButtonLogin';
import { InputText } from '../../Components/InputText';


export function Login ({navigation}) {
    
    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);

    const logando = () => {
        if(user == 12345 && password == 12345){
            navigation.navigate('Entrar')

            setUser('');
            setPassword('');
        }else{
            alert('Houve um erro! Verifique o User e Senha.')
        }
    }

    return (
      <ImageBackground source={require('../../images/tela-inicial.jpg')} style={styles.imageBackground}>
          <View style = {styles.containerLogoETexto}>
              <AntDesign name="home" size={100} color="white"/>
              <Text style={styles.LogoText}>MyCity</Text>
          </View>
          <View style = {styles.containerLogin} >
              <InputText title = 'Username' keyboardType = 'numeric' value={user} onChangeText={x => setUser(x)} />
              <InputText title = 'Senha' secureTextEntry={true} value= {password} onChangeText={x => setPassword(x)} />
              <ButtonLogin title = 'Entrar' onPress = {() => logando()}/>     
          </View>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
    containerLogin : {
      height: '40%',
      width: '80%',
      backgroundColor: '#f0f0f0',
      borderRadius: 10,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 100
    },
    imageBackground: {
      flex: 1,
      resizeMode: 'cover',
      width: '100%',
      justifyContent: 'flex-start',
      alignItems: 'center'
  },
  containerLogoETexto: {
      marginTop: 100,
      alignItems: 'center',
  },
  LogoText: {
      fontSize: 17,
      color: 'white'
  }
});
