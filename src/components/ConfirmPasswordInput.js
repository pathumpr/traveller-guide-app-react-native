import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
}from "react-native";






const ConfirmPasswordInput = (props) => {

    return(
        
        <View style={styles.body}>
            <View style={styles.container}>
                <TextInput 
                    style={styles.input} 
                    placeholder={props.placeholder}
                    placeholderTextColor="#6e6e6e"
                    secureTextEntry={true}
                    color='#2b2b2b'
                />
            </View>
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
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 1.5,
        borderColor: '#828282',
        borderRadius: 10,
        // paddingLeft: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-end'
    },
    input:{
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        // borderWidth: 1.5,
        // borderColor: '#828282',
        borderRadius: 10,
        paddingLeft: 15,
    },

})

export default ConfirmPasswordInput;