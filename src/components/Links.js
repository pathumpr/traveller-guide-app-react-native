import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
}from "react-native";




const Links = (props) => {

    return(
        
        <View style={styles.body}>
            <View style={styles.container}>

                <Text style={styles.text}>
                    {props.value} 
                </Text>
                {/* <TouchableOpacity onPress={()=>{props.route}}> */}
                    <Text style={styles.linkText}>
                        {props.linkText} 
                    </Text>
                {/* </TouchableOpacity> */}
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
        justifyContent: 'center'
    },
    container:{
        width: '90%',
        height: 50,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize: 16,
        color:'#6e6e6e',
        marginRight: 5,
        // backgroundColor: '#000',
    },
    linkText:{
        fontSize: 16,
        fontWeight: 'bold',
        color:'#000000',
        marginRight: 5,
        // backgroundColor: '#000',
    },

})

export default Links;