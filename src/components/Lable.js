import React from 'react';
import {
    View,
    StyleSheet,
    Text,
}from "react-native";



const Lable = (props) => {

    return(
        
        <View style={styles.body}>
            <View style={styles.container}>
                    <Text style={styles.txt}>
                        {props.value}
                    </Text>                 
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
        borderColor: '#6e6e6e',
        borderRadius: 10,
        // paddingLeft: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt:{
        color: '#6e6e6e',
        fontSize: 18,
        fontWeight: '600',
    },

})

export default Lable ;