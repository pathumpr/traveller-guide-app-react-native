import React, { useState } from 'react'
import { View,
         StyleSheet,
         Text,
         Image
} from 'react-native'
import Colors from '../styles/Colors';

const ImageCard = (props) =>{
    return(
        <View style={styles.body}>
            <View style={styles.card}>
                <View style={styles.left}>
                    <Text style={styles.text1}> {props.time} </Text>
                    <Text style={styles.text2}> {modName} </Text>
                    <Text style={styles.text3}> Let's Continue </Text>
                </View>
                <View style={styles.right}>
                    <View style={{marginRight: 10}}>
                        <View style={styles.boxBody}>
                            <Image source={profileImage == 'not set' ? require('../assets/images/profile_pic.jpg') : {uri:profileImage}} resizeMode='contain' style={styles.image}/>                   
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    body:{
        // backgroundColor: '#000',
        width: '100%',
        height: 130,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card:{
        width: '100%',
        height: '100%',
        // backgroundColor: '#000',
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: Colors.placeholderColor,
        display: 'flex',
        flexDirection: 'row',
    },  
    left:{
        width: '60%',
        height: '100%',
        // backgroundColor: '#32a852',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    right:{
        width: '40%',
        height: '100%',
        // backgroundColor: '#5e7364',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    textContainer:{
        width: '80%',
        height: '70%',
        backgroundColor: Colors.primaryBgColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },  
    text1:{
        fontSize: 20,
        fontWeight: '400',
        color: Colors.textColorOne,
        padding: 2,
    },
    text2:{
        fontSize: 26,
        fontWeight: 'bold',
        color: Colors.textColorTwo,
        padding: 2,
    },  
    text3:{
        fontSize: 20,
        fontWeight: '400',
        color: Colors.textColorOne,
        padding: 2,
    },
    boxBody:{
        // backgroundColor: '#000',
        width: 110,
        height: 110,
        // borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img:{
        width: 110,
        height: 110,
        borderRadius: 10,
    },
    image:{
        width: 110,
        borderRadius: 10,
        height: 110,
    },
   

})

export default ImageCard;