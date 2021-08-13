import React from 'react'
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native'

const TextBox = ({title}) => {
    const [text, onChangeText] = React.useState(null);

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} onChangeText={onChangeText} value={text} placeholder={title}>

            </TextInput>
        </View>
        
    )
}

export default TextBox

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    input: {
        height: 47,
        width: windowWidth*0.84,
        borderWidth: 1,
        borderRadius: 12,
        padding: 12,
        marginBottom: 16,
    }
})
