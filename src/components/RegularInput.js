import React from 'react';
import {
    TextInput,
    View,
    StyleSheet,
}from "react-native";



const RegularInput = (props) => {

    return(
        
        <View style={styles.body}>
            <TextInput 
                style={styles.input} 
                placeholder={props.placeholder}
                placeholderTextColor="#6e6e6e"
                color='#2b2b2b'
            />
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
    input:{
        width: '90%',
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 1.5,
        borderColor: '#828282',
        borderRadius: 10,
        paddingLeft: 15,
    },

})

export default RegularInput;