import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native'
import { SignInImg } from '../../assets'
import { ButtonBiru, TextBox } from '../../components'
import { WARNA_BIRU } from '../../utils/constant'

const SignIn = () => {
    const [textemail, email] = React.useState(null);
    const [textpassword, password] = React.useState(null);

    return (
        <ImageBackground style={styles.background}>
            <Image source={SignInImg} style={styles.image} />
            <Text style={styles.judulSignIn}>Sign In</Text>
            <SafeAreaView>
                <TextBox title="Email"/>
                <TextBox title="Password"/>
                {/* <TextInput style={styles.emailInput} onChangeText={email} value={textemail} placeholder="Email" />
                <TextInput style={styles.passwordInput} onChangeText={password} value={textpassword} placeholder="Password" /> */}
            </SafeAreaView>
            <TouchableOpacity style={styles.forgotPass}>
                <Text style={styles.labelForgotPass}>Forgot My Password</Text>
            </TouchableOpacity>
            <View style={styles.button}>
                <ButtonBiru title="Sign In"/>
            </View>
            <View style={styles.donthave}>
                <Text style={styles.labelDontHave}>Don't have an account?</Text>
                <TouchableOpacity>
                    <Text style={styles.labelSignUp}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default SignIn

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    image: {
        width: 292,
        height: 206,
        marginBottom: 18,
        marginTop: windowHeight*0.12,
    },
    judulSignIn: {
        color: 'black',
        fontFamily: "Poppins-SemiBold",
        fontSize: 18,
        lineHeight: 24,
        textAlign: "center",
        marginBottom: 18,
    },
    emailInput: {
        height: 47,
        width: windowWidth*0.84,
        marginHorizontal: 28,
        borderWidth: 1,
        borderRadius: 12,
        padding: 16,
        marginBottom: 25,
    },
    passwordInput: {
        height: 47,
        width: windowWidth*0.84,
        marginHorizontal: 28,
        borderWidth: 1,
        borderRadius: 12,
        padding: 16,
        marginBottom: 10,
    },
    forgotPass: {
        marginHorizontal: 30,
        width: windowWidth*0.83,
    },
    labelForgotPass: {
        color: '#6B7075',
        fontFamily: "Poppins-Regular",
        fontSize: 12,
        lineHeight: 15,
        textDecorationLine: 'underline'
    },
    button: {
        marginTop: windowHeight*0.07,
        marginBottom: 16,
    },
    donthave: {
        width: 193, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontFamily: "Poppins-Medium",
        fontSize: 12
    },
    labelDontHave: {
        color: '#130F26'
    },
    labelSignUp: {
        color: '#7293D5',
    }
})
