import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {
    View,
    StyleSheet,
    TouchableOpacity,
}from "react-native";



const SocialLogin = (props) => {

    return(
        
        <View style={styles.body}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.btnTouch} >

                    <Icon name="google" size={40} color="#000000" />

                </TouchableOpacity>                   
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.btnTouch} >

                    <Icon name="apple1" size={40} color="#000000" />

                </TouchableOpacity>                   
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.btnTouch} >

                    <Icon name="twitter" size={40} color="#000000" />

                </TouchableOpacity>                   
            </View>
            {/* <View style={styles.container}>
                <TouchableOpacity style={styles.btnTouch} >

                    <Icon name="google" size={40} color="#000000" />

                </TouchableOpacity>                   
            </View> */}
        </View>

    )

}

const styles = StyleSheet.create({

    body:{
        width: '100%',
        height: 140,
        // backgroundColor: '#9c9c9c',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container:{
        width: 80,
        height: 80,
        // backgroundColor: '#fff',
        // borderWidth: 1.5,
        // borderColor: '#6e6e6e',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTouch:{
        width: 60,
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderWidth: 1.5,
        borderColor: '#000000',
        borderRadius: 50,
    },

})

export default SocialLogin ;