import React from 'react';
import {
    View,
    StyleSheet,
}from "react-native";



const BoldDivider = () => {

    return(
        
        <View style={styles.body}>
            <View style={styles.container}/>
        </View>

    )

}

const styles = StyleSheet.create({

    body:{
        width: '100%',
        height: 20,
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container:{
        width: '90%',
        height: 4,
        backgroundColor: '#ffffff',
    },

})

export default BoldDivider ;