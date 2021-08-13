import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconMenu, IconKembali } from '../../assets'

const ButtonIconNoText = ({title, type}) => {
    
    const Icon = () => {
        if(title === "Menu") return <IconMenu/>

        if(title === "Kembali") return <IconKembali/>

        if(title === "MenuClose") return <IconMenuClose/>

        return <IconMenu/>
    }
    
    return (
        <TouchableOpacity style={styles.container(type)}>
            <View style={styles.button(type)}>
                <Icon/>
            </View>
        </TouchableOpacity>
    )
}

export default ButtonIconNoText

const styles = StyleSheet.create({
    container: (type) => ({
        marginBottom: 2,
        marginRight: 20,
    }),
    button: (type) => ({
        padding: 2,
        alignSelf: 'center',
    }),
})
