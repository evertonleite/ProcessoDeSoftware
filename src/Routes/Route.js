import React from 'react';

import { Login } from '../Pages/Admin/Login';

import { FeedNotices } from '../Pages/FeedNotices';
import { Report } from '../Pages/Report';

import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TelaInicial } from '../Pages/TelaInicial';
import { Sobre } from '../Pages/Home';
import { PostAdmin } from '../Pages/Admin/PostAdmin';
import { Message } from '../Pages/Admin/Message';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigation(){
    return (
        <Tab.Navigator screenOptions={ {tabBarStyle:{backgroundColor: 'white', height: 60}, tabBarActiveTintColor:'#FF0000', tabBarInactiveTintColor: '#F5A9A9', headerStyle: {backgroundColor: '#F78181'}, headerTitleAlign: 'center', headerTintColor: 'white'}}>
            <Tab.Screen name="Feed Notícias" options={{tabBarItemStyle: {marginBottom: 5}, tabBarIcon: ({ color }) => <FontAwesome name="newspaper-o" size={30} color = {color} />, headerTitle: 'Feed Notícias'} } component={FeedNotices}/>
            <Tab.Screen name="Reporte Aqui" options={{tabBarItemStyle: {marginBottom: 5}, tabBarIcon: ({ color }) => <Ionicons name="md-megaphone" size={30} color = {color} />, headerTitle: 'Reporte Aqui'} } component={Report}/>
            <Tab.Screen name="Sobre" options={{tabBarItemStyle: {marginBottom: 5,}, tabBarIcon: ({ color }) => <Entypo name="info-with-circle" size={30} color = {color} />, headerTitle: 'Sobre'} } component={Sobre}/>
        </Tab.Navigator>
    );
}

function AdminNavigation(){
    return(
        <Tab.Navigator screenOptions={ {tabBarStyle:{backgroundColor: 'white', height: 60}, tabBarActiveTintColor:'#FF0000', tabBarInactiveTintColor: '#F5A9A9', headerStyle: {backgroundColor: '#F78181'}, headerTitleAlign: 'center', headerTintColor: 'white'}}>
            <Tab.Screen name="Post" options={{tabBarItemStyle: {marginBottom: 5}, tabBarIcon: ({ color }) => <Ionicons name="md-megaphone" size={30} color = {color} />, headerTitle: 'Post'} } component={PostAdmin}/>
            <Tab.Screen name="Mensagens" options={{tabBarItemStyle: {marginBottom: 5,}, tabBarIcon: ({ color }) => <FontAwesome name="newspaper-o" size={30} color = {color} />, headerTitle: 'Mensagens'} } component={Message}/>
        </Tab.Navigator>
    )
}
function LoginNavigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen name = "Login" options={{headerShown: false}} component = {Login}/>
            <Stack.Screen name="Entrar" options={{headerShown: false, headerStyle: {backgroundColor: '#0047ab'}, headerTitleStyle: {color: 'white'}, headerTintColor: 'white', headerTitleAlign: 'center'}} component = {AdminNavigation}/>
        </Stack.Navigator>
    )
}

export function Route (){
    return (
        <Stack.Navigator >
            <Stack.Screen name = "TelaInicial" options={{headerShown: false}} component = {TelaInicial} />
            <Stack.Screen name="Comecar" options={{headerShown: false}} component = {TabNavigation} />
            <Stack.Screen name="Admin" options={{headerShown: false}} component = {LoginNavigation} />
        </Stack.Navigator>
    );
}