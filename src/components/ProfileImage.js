import React from 'react';
import {
    View,
    StyleSheet,
    Image,
}from "react-native";

const ProfileImage = (props) => {
    return(        
        <View style={styles.body}>
            <View style={styles.container}>
                    <Image source={profileImage == 'https://triptosters.enricharcane.info/not set' ? require('../assets/images/profile_pic.jpg') : {uri:profileImage}} resizeMode='contain' style={styles.logo}/>
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