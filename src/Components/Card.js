import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export function Card ({titleText, descriptionText, onPress, image, dateLocal}) {
    return (
        <View style={styles.card}>
                <View style = {styles.titleAndHour}>
                    <Text style = {styles.title}>{titleText}</Text>
                    <Text style = {styles.hour}>{dateLocal}</Text>
                    <View>
                        <TouchableOpacity onPress={onPress} >
                            <MaterialIcons name="delete" size={30} color="black" />
                        </TouchableOpacity>
                    </View>
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
        alignItems: 'stretch',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 5,
        shadowColor: "#000",
        shadowOpacity: 1,
        elevation: 5
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