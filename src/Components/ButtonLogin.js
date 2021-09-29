import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

export function ButtonLogin ({title, onPress}) {
  return (
      <TouchableOpacity style = {styles.button} onPress = {onPress} >
          <Text style = {styles.buttonText}>{title}</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerButton: {
      alignItems: 'center'
  },
  button: {
      marginTop: 20,
      height: '15%',
      width: '50%',
      backgroundColor: '#F78181',
      borderRadius: 10,
      justifyContent: 'center',
  },
  buttonText: {
      fontSize: 17,
      textAlign: 'center',
      color: 'white'
  }
});
