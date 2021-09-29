import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export function CardMessage({title, endereco, description, sugestion, onPress}) {
    return (
        <View style={styles.card}>
                <View style = {styles.cardTitle}>
                    <View style = {styles.titleAndName}>
                        <Text style = {styles.title}>{sugestion}: </Text>
                        <Text style = {styles.name}>{title}</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={onPress}>
                            <MaterialIcons name="delete" size={30} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
               <View style = {styles.cardEndereco}>
                    <Text style = {styles.title}>Endereço: </Text>
                    <Text style = {styles.endereco}>{endereco}</Text>
               </View>
               <View style = {styles.cardDescription}>
                    <Text style = {styles.title}>Descrição: </Text>
                    <Text style = {styles.descprition}>{description}</Text>
               </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    card:{
        flex: 1,
        height: 150,
        width: 330,
        //width: '95%',
        justifyContent: 'flex-start',
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
    cardTitle:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        justifyContent: 'space-between'
    },
    cardEmail:{
        flexDirection: 'row',
        marginLeft: 10
    },
    cardEndereco:{
        flexDirection: 'row',
        marginLeft: 10
    },
    cardDescription: {
        flexDirection: 'row',
        marginLeft: 10
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    titleAndName: {
        flexDirection: 'row',
        color: '#F78181',
    },
    name:{
        color: 'black'
    }
})