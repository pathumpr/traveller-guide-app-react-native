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
        height: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container:{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize: 16,
        // color:'#6e6e6e',
        color: '#6b6b6b',
        // marginLeft: 10,
        // marginTop: 10,
        fontWeight: 'bold',
        // backgroundColor: '#000',
    },

})

export default H2;