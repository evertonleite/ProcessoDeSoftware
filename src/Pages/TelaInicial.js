import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ButtonInitial } from '../Components/ButtonInitial';
import { ButtonAdm } from '../Components/Button';
import { ImageBackground } from 'react-native';

export function TelaInicial ({navigation}) {
    return( 
        <View style={style.containertudo}>
            <ImageBackground source={require('../images/tela-inicial.jpg')} style={style.imageBackground}>
                <View style = {style.containerLogoETexto}>
                    <AntDesign name="home" size={100} color="white"/>
                    <Text style={style.LogoText}>MyCity</Text>
                </View>
                <View style = {style.containerButtons}>
                    <ButtonInitial title='Começar' onPress={() =>navigation.navigate('Comecar')} />
                    <ButtonAdm title = 'Administração' onPress={() =>navigation.navigate('Admin')}/>
                </View>
            </ImageBackground> 
        </View>    
    );
}

const style = StyleSheet.create ({
    containertudo: {
        flex: 1,
    },
    containerLogoETexto: {
        marginTop: 100,
        alignItems: 'center',
    },
    LogoText: {
        fontSize: 17,
        color: 'white'
    },
    containerButtons : {
        height: 150,
        justifyContent: 'space-around'
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})