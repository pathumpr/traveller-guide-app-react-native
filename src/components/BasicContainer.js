import React from 'react';
import {
    TextInput,
    View,
    StyleSheet,
}from "react-native";



const BasicContainer = (props) => {

    return(
        
        <View style={styles.body}>
            <View style={styles.container}>
                {props.children}
            </View>
        </View>

    )

}

const styles = StyleSheet.create({

    body:{
        width: '100%',
        height: 50,
        // backgroundColor: '#9c9c9c',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    container:{
        width: '100%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
    },

})

export default BasicContainer;