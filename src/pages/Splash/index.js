import React, {useEffect} from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import {Logo} from '../../assets'

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home');
        }, 3000)
    }, [navigation]);

    return (
        <ImageBackground style={styles.background}>
            <Image source={Logo} style={styles.logo} />
            <Text style={styles.text}>Puska Ilkom Connect</Text>
        </ImageBackground>
    )
}

export default Splash

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 124,
        height: 124,
    },

    text:{
        color: "#33466A",
        fontFamily: "Poppins-SemiBold",
        fontSize: 14,
        lineHeight: 30,
        width: 600,
        textAlign: "center",
    }
})
