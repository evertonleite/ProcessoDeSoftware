import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

export function ButtonAdm ({title, onPress }) {
  return (
      <TouchableOpacity style = {styles.button} onPress = {onPress}>
          <Text style = {styles.buttonText}>{title}</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerButton: {
      alignItems: 'center'
  },
  button: {
      height: 30,
      width: 270,
      backgroundColor: 'transparent',
      borderRadius: 15,
      justifyContent: 'flex-end'
      
  },
  buttonText: {
      fontSize: 15,
      textAlign: 'center',
      color: 'white'
  }
});
