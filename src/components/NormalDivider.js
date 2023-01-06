import React from 'react';
import {
    View,
    StyleSheet,
}from "react-native";



const NormalDivider = () => {

    return(
        
        <View style={styles.body}>
            <View style={styles.container}/>
        </View>

    )

}

const styles = StyleSheet.create({

    body:{
        width: '100%',
        height: 70,
        // backgroundColor: '#9c9c9c',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    container:{
        width: '90%',
        height: 1,
        backgroundColor: '#6e6e6e',
    },

})

export default NormalDivider ;