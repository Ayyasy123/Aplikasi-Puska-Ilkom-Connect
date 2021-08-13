import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, TouchableOpacity } from 'react-native'
import { GetStartedImg, Pagination } from '../../assets'
import { WARNA_BIRU } from '../../utils/constant'

const GetStarted = () => {
    return (
        <ImageBackground style={styles.background}>
            <Image source={GetStartedImg} style={styles.image}/>
            <Text style={styles.text1}>Learn anytime and anywhere!</Text>
            <Text style={styles.text2}>Ikuti pelatihan dan kegiatan lainnya secara gratis dalam satu aplikasi</Text>
            <Image source={Pagination} style={styles.pagination}/>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.labelStart}>Get Started</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

export default GetStarted

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    image: {
        width: 301,
        height: 268,
        marginBottom: 12,
        marginTop: windowHeight*0.15,
    },
    text1: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 18,
        lineHeight: 24,
        textAlign: "center",
        paddingBottom: 10,
        marginHorizontal: 90,
    },
    text2: {
        color: '#6B7075',
        fontFamily: "Poppins-Medium",
        fontSize: 12,
        lineHeight: 15,
        textAlign: "center",
        marginHorizontal: 71,
    },
    pagination: {
        width: 52,
        height: 6,
        marginTop: windowHeight*0.07,
    },
    button: {
        width: windowWidth*0.84,
        height: 50,
        backgroundColor: WARNA_BIRU,
        padding: 16,
        marginHorizontal: 48,
        borderRadius: 20,
        marginTop: 16,
    },
    labelStart: {
        color: 'white',
        fontFamily: "Poppins-SemiBold",
        fontSize: 18,
        lineHeight: 20,
        textAlign: "center",
    }

})
