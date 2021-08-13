import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { createDrawerNavigator,  DrawerContentScrollView } from '@react-navigation/drawer' 
import { Home, MainLayout } from '../pages'
import { WARNA_BIRU } from '../utils/constant'
import { IconMenuClose } from '../assets'

const Drawer = createDrawerNavigator()

const CustomDrawerContent = ({navigation}) => {
    return(
        <DrawerContentScrollView
        scrollEnabled={true}
        contentContainerStyle={{flex: 1}}
        >
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: 16,
                }}
                >
                {/* Close */}
                <View style={{
                    alignItems: 'flex-start',
                    justifyContent: 'center'
                }}
                >
                    <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.closeDrawer()}
                    >
                        <Image 
                        source={IconMenuClose}
                        style={{
                            width: 35,
                            height: 35,
                            backgroundColor: 'red'
                        }}
                        />
                    </TouchableOpacity>
                </View>
                {/* Menu Item */}
            </View>

        </DrawerContentScrollView>
    )
}

const CustomDrawer = () => {
    return (
        <View style={styles.screen}> 
            <Drawer.Navigator 
                drawerPosition="right"  
                drawerType="slide"
                overlayColor= "transparent" 
                drawerStyle= {{
                    flex: 1,
                    width: '65%',
                    paddingRight: 20,
                    backgroundColor: 'transparent',
                }}
                sceneContainerStyle= {{
                     backgroundColor: 'transparent',
                }}
                initialRouteName="MainLayout"
                drawerContent={props => {
                    return(
                        <CustomDrawerContent
                            navigation={props.navigation}
                        />
                    )
                }}
             >
                <Drawer.Screen name="MainLayout">
                    {props => <MainLayout {...props}/>}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
    },
})
