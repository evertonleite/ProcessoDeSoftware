import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export function ButtonInitial ({title, onPress}) {
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
      marginTop: 20,
      height: 60,
      width: 270,
      backgroundColor: '#F78181',
      borderRadius: 15,
      justifyContent: 'center',
  },
  buttonText: {
      fontSize: 21,
      textAlign: 'center',
      color: 'white'
  }
});
