import React from 'react'
import { ImageBackground, Image, StyleSheet, Text, View , Dimensions} from 'react-native'
import { Strip, UPN} from '../../assets'
import { WARNA_BIRU } from '../../utils/constant'
import { ButtonIconNoText, ButtonIconText, Saldo } from '../../components'

const Home = () => {
    return (
        <View style={styles.page}>
            <ImageBackground style={styles.latar}>
                <View style={styles.header}>
                    <View style={styles.logo}>
                        <Image source={UPN} style={styles.upn}/>
                        <Image source={Strip} style={styles.strip}/>
                        <Text style={styles.text}>Puska Ilkom Connect</Text>    
                    </View>
                    <ButtonIconNoText title="Menu" type="header"/>
                </View>
            </ImageBackground>
            <Saldo/>
            <View style={styles.container}>
                <View style={styles.fitur}>
                    <Text style={styles.labelFitur}>Fitur</Text>
                    <View style={styles.iconFitur}>
                        <ButtonIconText title="Pelatihan" type="fitur"/>
                        <ButtonIconText title="Sertifikasi" type="fitur"/>
                        <ButtonIconText title={"Digital" + "\n" + "Startup"} type="fitur"/>
                        <ButtonIconText title="Kompetisi" type="fitur"/>
                        <ButtonIconText title="Webinar" type="fitur"/>
                        <ButtonIconText title={"Computation" + "\n" + "Center"} type="fitur"/>
                        <ButtonIconText title={"Lab" + "\n" + "Penelitian"} type="fitur"/>
                        <ButtonIconText title={"Hibah" + "\n" + "Kegiatan"} type="fitur"/>
                        <ButtonIconText title={"Pembayaran" + "\n" + "Layanan"} type="fitur"/>
                        <ButtonIconText title={"Pembelian" + "\n" +  "Merchandise"} type="fitur"/>
                        <ButtonIconText title={"Informasi" + "\n" + "Lainnya"} type="fitur"/>
                    </View>
                </View>
            </View>   
        </View>
    )
}

export default Home

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: WARNA_BIRU
    },
    latar: {
        width: windowWidth,
        height: windowHeight*0.25,
        paddingLeft: 16,
        paddingTop: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '72%',
    },
    upn: {
        width: windowWidth*0.1,
        height: windowHeight*0.06,
        marginRight: 8,
    },
    strip:{
        width: windowWidth*0.01,
        height: windowHeight*0.06,
        marginRight: 8,
    },
    text: {
        color: 'white',
        fontFamily: "Poppins-SemiBold",
        fontSize: 20,
        lineHeight: 36,
        alignSelf: 'center',
    },
    container: {

    },
    fitur: {
        marginTop: -windowHeight*0.07,
        borderRadius: 24,
        paddingLeft: 16,
        paddingTop: 71,
        paddingBottom: 200,
        backgroundColor: 'white',
    },
    labelFitur: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 20,
        lineHeight: 30,
    },
    iconFitur: {
        paddingHorizontal: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
        flexWrap: 'wrap',
    }
})
