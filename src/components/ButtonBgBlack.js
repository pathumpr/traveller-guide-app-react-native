import React from 'react';
import { useNavigation } from "@react-navigation/core";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
}from "react-native";



const ButtonBgBlack = (props) => {

    const navigation = useNavigation();

    return(
        
        <View style={styles.body}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.btnTouch} 
                    onPress={()=>{navigation.navigate(props.path)}}
                >
                    <Text style={styles.txt}>
                        {props.value}
                    </Text>
                </TouchableOpacity>                   
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
        // borderWidth: 1.5,
        // borderColor: '#828282',
        borderColor: '#000000',
        borderRadius: 10,
        // paddingLeft: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-end'
    },
    btnTouch:{
        width: '40%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        borderRadius: 10,
    },
    txt:{
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },

})

export default ButtonBgBlack ;