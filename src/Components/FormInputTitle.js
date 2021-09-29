import React from 'react'

import {Controller } from "react-hook-form";
import {View,Text,StyleSheet,TextInput} from 'react-native'

export function FormInputTitle({control, name, error, placeholder,  ...rest }){
    return(
        <View style={styles.boxTextTitle}>
            <Controller
                control={control}
                rules={{required: true}}
                render={({ field: { onChange, onBlur, value} }) => ( 
                <TextInput style={[styles.textInput, error ? styles.inputError : ""]} 
                        onBlur={onBlur}
                        placeholder={placeholder} value={value} onChangeText={onChange} multiline={true} {...rest} />

                )}
                name={name}/>

            { error && <Text style={styles.error}>{error}</Text> } 
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        width: '100%'
    },
    textInput : {
        height: 40,
        fontSize: 17
    },
    inputError:{
        borderColor: 'red',
    },
    error:{
        fontSize: 15,
        color: 'red',
    },
    boxTextTitle: {
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        backgroundColor: 'white',
        width: 320
    }
});