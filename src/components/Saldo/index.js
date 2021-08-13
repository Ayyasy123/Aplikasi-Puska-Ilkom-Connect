import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image} from 'react-native'
import { Bayarind } from '../../assets'
import ButtonIconText from '../ButtonIconText'
import Gap from '../Gap'

const Saldo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.informasiSaldo}>
                <View style={styles.text}>
                    <Text style={styles.labelSaldo}>Saldo</Text>
                </View>
                <View style={styles.text}>
                    <Image source={Bayarind} style={styles.bayarind}/>
                    <Text style={styles.valueSaldo}>50000</Text>
                </View>
            </View>
            <View style={styles.buttonAksi}>
                <ButtonIconText title="Tukarkan"/>
                <Gap width={12}/>
                <ButtonIconText title="Dapatkan"/>
            </View>
        </View>
    )
}

export default Saldo;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
        marginHorizontal: 48,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        marginTop: -windowHeight*0.08,
        flexDirection: 'row'
    },
    text: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    informasiSaldo: {
        width: '55%',
        paddingTop: 2,
    },
    labelSaldo: {
        color: '#2C2C2C',
        fontFamily: "Poppins-Medium",
        fontSize: 14,
        lineHeight: 21,
    },
    bayarind: {
        width: windowWidth*0.09,
        height: windowHeight*0.018,
    },
    valueSaldo: {
        color: '#0056A3',
        fontFamily: "Poppins-Medium",
        fontSize: 16,
        lineHeight: 24,
        paddingLeft: 8,
    },
    buttonAksi: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 10,
        padding: 2,
        justifyContent: 'space-evenly',
    }
    
})
