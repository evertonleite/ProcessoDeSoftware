import React from 'react';
import { StyleSheet, View, Text, TextInput} from 'react-native';

export function InputText ({title, keyboardType, onChangeText, value, secureTextEntry}) {
    return (
        <View style = {styles.containerAll}>
                <Text style = {styles.Text}>{title}</Text>
                <View style = {styles.boxTextTitle}>
                    <TextInput keyboardType = {keyboardType} secureTextEntry={secureTextEntry} value={value} onChangeText = {onChangeText} />
                </View>
        </View>      
    );
}

const styles = StyleSheet.create({
    containerAll : {
        marginTop: 20,
        flexDirection: 'column'
    },
    boxTextTitle: { 
        height: 40,
        width: 250,
        justifyContent: 'center',
        borderBottomColor: '#F78181',
        borderBottomWidth: 1,
    },
    textInput : {
        fontSize: 20,
    },
    Text : {
        color: '#F78181',
        fontWeight: 'bold'
    }
});
