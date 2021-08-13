import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Dimensions} from 'react-native'
import { 
    IconDapatkan, 
    IconTukarkan, 
    IconMenu,
    IconPelatihan,  
    IconSertifikasi, 
    IconDigitalStartup, 
    IconKompetisi, 
    IconWebinar, 
    IconComputationCenter, 
    IconLabPenelitian, 
    IconHibahKegiatan, 
    IconPembayaranLayanan, 
    IconPembelianMerch, 
    IconInformasi} from '../../assets'
import { WARNA_BIRU } from '../../utils/constant'

const ButtonIconText = ({title, type}) => {

    const Icon = () => {
        if(title === "Tukarkan") return <IconTukarkan/>

        if(title === "Dapatkan") return <IconDapatkan/>

        if(title === "Menu") return <IconMenu/>

        if(title === "Pelatihan") return <IconPelatihan/>

        if(title === "Sertifikasi") return <IconSertifikasi/>

        if(title === "Digital" + "\n" + "Startup") return <IconDigitalStartup/>

        if(title === "Kompetisi") return <IconKompetisi/>

        if(title === "Webinar") return <IconWebinar/>

        if(title === "Computation" + "\n" + "Center") return <IconComputationCenter/>

        if(title === "Lab" + "\n" + "Penelitian") return <IconLabPenelitian/>

        if(title === "Hibah" + "\n" + "Kegiatan") return <IconHibahKegiatan/>

        if(title === "Pembayaran" + "\n" + "Layanan") return <IconPembayaranLayanan/>

        if(title === "Pembelian" + "\n" + "Merchandise") return <IconPembelianMerch/>

        if(title === "Informasi" + "\n" + "Lainnya") return <IconInformasi/>

        return <IconTukarkan/>
    }

    return (
        <TouchableOpacity style={styles.container(type)}>
            <View style={styles.button(type)}>
                <Icon/>
            </View>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonIconText

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: (type) => ({
        marginBottom: type ==="fitur" ? 30 : 2,
        marginRight: 20,
    }),
    button: (type) => ({
        // Ukuran icon masih belum sesuai dari figma
        padding: type ==="fitur" ? 4 : 2,
        alignSelf: 'center',
    }),
    text: (type) => ({
        color: type ==="fitur" ? WARNA_BIRU : '#2C2C2C',
        fontFamily: "Poppins-Regular",
        fontSize: 10,
        lineHeight: 15,
        textAlign: 'center',
    })
})
