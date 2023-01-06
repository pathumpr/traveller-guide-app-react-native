import React from 'react';
import {
    View,
    StyleSheet,
    Text,
}from "react-native";




const H2 = (props) => {

    return(
        
        <View style={styles.body}>
            <View style={styles.container}>
                <Text style={styles.text}>

                    {props.value} 

                </Text>
            </View>
        </View>

    )

}

const styles = StyleSheet.create({

    body:{
        // width: '100%',
        height: 40,
        // backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container:{
        // width: '90%',
        height: '100%',
        // backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize: 14,
        color:'#24598f',
        fontWeight: 'bold',
        // backgroundColor: '#000',
    },

})

export default H2;