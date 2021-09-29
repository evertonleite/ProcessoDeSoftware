import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export function CardUsers ({titleText, descriptionText, image}) {
    return (
        <View style={styles.card}>
                <View style = {styles.titleAndHour}>
                    <Text style = {styles.title}>{titleText}</Text>
                    <Text style = {styles.hour}>15/09/2021 • 20:30</Text>
                </View>
                <View style = {styles.PhotoEText}>
                    <Image style={styles.image} source={{uri: image}}/>
                    <Text style = {styles.texto}>{descriptionText}</Text> 
                </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    card:{
        flex: 1,
        height: 150,
        width: '95%',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 5,
        shadowColor: "#000",
        shadowOpacity: 1,
        elevation: 5,
        marginLeft: '2.5%',
    },
    image: {
        height: '90%',
        width: '40%',
        borderRadius: 10
    },
    texto: {
        marginLeft: 10,
        width: '65%'  
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#3b3b3b'
    },
    PhotoEText: {
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '80%',
        width: '90%'
    },
    titleAndHour: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    hour: {

    }

})