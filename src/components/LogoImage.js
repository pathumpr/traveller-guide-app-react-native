import React from 'react';
import {
    View,
    StyleSheet,
    Image,
}from "react-native";



const LogoImage = (props) => {

    return(
        
        <View style={styles.body}>
            <View style={styles.container}>
                 
                <Image source={require('../assets/images/logo.png')} resizeMode='contain' style={styles.logo} />

            </View>
        </View>

    )

}

const styles = StyleSheet.create({

    body:{
        width: '100%',
        height: 180,
        // backgroundColor: '#9c9c9c',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    container:{
        width: '90%',
        height: 150,
        // backgroundColor: '#fff',
        borderColor: '#000000',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo:{
        flex: 1,
        // width: null,
        height: 150,
        resizeMode: 'contain'
    },

})

export default LogoImage ;