import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { 
    Home, 
    Pelatihan, 
    Sertifikasi, 
    Splash, 
    GetStarted, 
    SignIn, 
    SignUp,
    Menu,  
} from '../pages';
import CustomDrawer from '../navigations/CustomDrawer';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Splash" component={Splash}/>
            <Stack.Screen name="Home" component={CustomDrawer}/>
            <Stack.Screen name="GetStarted" component={GetStarted}/>
            <Stack.Screen name="SignIn" component={SignIn}/>
            <Stack.Screen name="SignUp" component={SignUp}/>
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
