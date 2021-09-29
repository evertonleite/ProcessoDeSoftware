import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, ScrollView } from 'react-native';

export function Sobre() {
   
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
        <View style={styles.bemvindoview}>
          <Text style={styles.bemvindo}>Bem-vindo!</Text>
        </View>
        <View style={styles.viewtext}>
            <Text style={styles.textohome}> 
            Bem-vindo ao aplicativo (NOME DO APP), este aplicativo tem a função de manter os cidadãos 
            da cidade de (Nome Da Cidade) informados sobre todas as manutenções ocorrendo nela.
            </Text>
            <Text style={styles.textohome}> 
            Também será possível que os usuários do aplicativo interajam no app, podendo informando
            para a nossa equipe problemas que pode ter ocorrido na cidade como por exemplo, 
            buracos em estradas, uma arvore caída ou postes de luz com algum defeito, etc... 
            com isso poderemos ficar informados de tais problemas e resolvê-los o mais rápido possível.
            </Text>
        </View>
        </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8E0E0',
  },
  barra: {
    backgroundColor: '#0047ab',
    width: '100%',
    height: 60,
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOpacity: 1,
    elevation: 10,
  },
  bemvindoview: {
    marginTop: 40 ,
  },
  bemvindo: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#F78181',
  },
  viewtext: {
    margin: 20 ,
  },
  textohome: {
    fontSize: 16,
    textAlign: 'justify',
    color: '#F78181',
  },
});