import React, { Component } from 'react'
import { Text, View } from 'react-native'

class debugger extends Component {
    render() {
        console.log("HEllo")
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

export default debugger 
