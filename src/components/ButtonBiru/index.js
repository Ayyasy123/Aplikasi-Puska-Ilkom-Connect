import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import { WARNA_BIRU } from '../../utils/constant'

const ButtonBiru = ({title}) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.label}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonBiru

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    button: {
        width: windowWidth*0.84,
        height: 50,
        backgroundColor: WARNA_BIRU,
        padding: 16,
        borderRadius: 20,
    },
    label: {
        color: 'white',
        fontFamily: "Poppins-SemiBold",
        fontSize: 18,
        lineHeight: 20,
        textAlign: "center",
    }
})
