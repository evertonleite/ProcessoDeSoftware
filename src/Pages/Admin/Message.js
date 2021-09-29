import React from 'react';
import {StyleSheet, View} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { CardMessage } from '../../Components/CardMessage';
import TesteMsg from '../../Contexts/ProviderMsg';

export function Message() {

  const {messages, ApagarMensagem} = TesteMsg();

    return (
      <View style={styles.container}>
       <FlatList data={messages}  
          keyExtractor={item => item.id.toString()} 
          renderItem={ ({item}) =>  (
              <CardMessage sugestion={item.sugestion} title={item.title} endereco={item.endereco} description={item.description} onPress={() => ApagarMensagem(item.id)} />
          ) }/>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F8E0E0',
  },
  scroll: {
    flex: 1
  }
});