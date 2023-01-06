import React from 'react';
import {
    View,
    StyleSheet,
    Text,
}from "react-native";




const H3 = (props) => {

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
        width: '100%',
        height: 30,
        // backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container:{
        width: '90%',
        height: 50,
        // backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize: 16,
        color:'#000',
        // backgroundColor: '#000',
    },

})

export default H3;