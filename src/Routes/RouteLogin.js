import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PostAdmin } from '../Pages/Admin/PostAdmin';

const Stack = createStackNavigator();

export function RouteLogin (){
    return (
        <Stack.Navigator >
             <Stack.Screen name="Entrar" options={{headerStyle: {backgroundColor: '#0047ab'}, headerTitleStyle: {color: 'white'}, headerTintColor: 'white', headerTitleAlign: 'center'}} component = {PostAdmin}/>
        </Stack.Navigator>
    );
}