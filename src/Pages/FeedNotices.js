import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { CardUsers } from '../Components/CardUsers';
import Teste from '../Contexts/Provider';

export function FeedNotices () {
//#81F7F3
    const {post} = Teste();
    return (
      <View style={styles.container}>
      <FlatList data={post}  
          keyExtractor={item => item.id.toString()} 
          renderItem={ ({item}) =>  (
              <CardUsers image={item.image} titleText={item.title} descriptionText={item.description}/>
          ) }/> 
      </View>
    )
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