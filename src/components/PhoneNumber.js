import React from 'react';
import { useNavigation } from "@react-navigation/core";
import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text,
}from "react-native";

const PhoneNumber = (props) => {

    const navigation = useNavigation();

    return(
        
        <View style={styles.body}>
            <View style={styles.container}>
                <View style={styles.phoneContent}>

                    <TextInput 
                        style={styles.input} 
                        placeholder={props.placeholder}
                        placeholderTextColor="#6e6e6e"
                        color='#2b2b2b'
                    />

                    <View style={styles.btnArea} >
                        <TouchableOpacity style={styles.btnTouch}>
                            <Text style={styles.txt}>

                                {props.btnValue}

                            </Text>
                        </TouchableOpacity>
                    </View>

                                 
                </View>                     
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
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: '#42f57b',
    },
    phoneContent:{
        width: '100%',
        height: '100%',
        backgroundColor:'#fff',
        borderWidth: 1.5,
        borderColor: '#6e6e6e',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    input:{
        width: '55%',
        height: '100%',
        backgroundColor: '#fff',
        // borderWidth: 1.5,
        borderColor: '#828282',
        borderRadius: 10,
        paddingLeft: 15,
    },
    btnArea:{
        width: '45%',
        height: '100%',
        // backgroundColor: '#ad1a3a',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTouch:{
        width: '80%',
        height: '90%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    txt:{
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
    },

})

export default PhoneNumber ;