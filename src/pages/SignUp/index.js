import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import { ButtonIconNoText, Gap, ButtonBiru, TextBox} from '../../components'

const SignUp = () => {

    return (
        <View style={styles.page}>
            <View style={styles.header}>
                <ButtonIconNoText title="Kembali" type="header"/>
                <Gap width={60}/>
                <Text style={styles.judulSignUp}>Sign Up</Text>
            </View>
            <View style={styles.pendataan}>
                <TextBox title="Nama Lengkap"/>
                <TextBox title="Email"/>
                <TextBox title="No. Telp"/>
                <TextBox title="Password"/>
                <TextBox title="Confirm Password"/>
            </View>
            <View style={styles.buttom}>
                <ButtonBiru title="Sign Up"/>
                <View style={styles.alreadyhave}>
                    <Text style={styles.labelAlreadyHave}>Don't have an account?</Text>
                    <TouchableOpacity>
                        <Text style={styles.labelSignIn}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SignUp

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        marginTop: 28,
        marginHorizontal: 20,
    },
    judulSignUp: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 18,
        lineHeight: 24,
        width: 156,
        textAlign: "center",
        textAlignVertical: "center",
    },
    pendataan: {
        alignItems: "center",
        marginTop: windowHeight*0.12
    },
    buttom: {
        alignItems: "center",
        marginTop: windowHeight*0.1125
    },
    alreadyhave: {
        width: 193, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontFamily: "Poppins-Medium",
        fontSize: 12,
        marginHorizontal: 79
    },
    labelAlreadyHave:{
        color: '#130F26'
    },
    labelSignIn:{
        color: '#7293D5',
    }
})
