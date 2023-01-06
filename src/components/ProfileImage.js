import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
}from "react-native";
import H2 from './H2';



const ProfileImage = (props) => {

    return(
        
        <View style={styles.body}>
            <View style={styles.container}>
                {/* <TouchableOpacity> */}

                    <Image source={profilePhoto == 'not set' ? require('../assets/images/profile_pic.jpg') : {uri:profilePhoto}} resizeMode='contain' style={styles.logo}/>

                {/* </TouchableOpacity> */}

                {/* <H2 value={props.value}/> */}

            </View>
        </View>

    )

}

const styles = StyleSheet.create({

    body:{
        width: '100%',
        height: 160,
        // backgroundColor: '#9c9c9c',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container:{
        width: '90%',
        height: '100%',
        // backgroundColor: '#000',
        borderColor: '#000000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo:{
        width: 140,
        borderRadius: 150,
        height: 140,
    },

})

export default ProfileImage ;