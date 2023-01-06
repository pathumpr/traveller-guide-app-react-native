import React from 'react';
import {
    View,
    StyleSheet,
}from "react-native";
import H2 from './H2';
import H5 from '../components/H5';



const CountrySelect = (props) => {

    return(
        
        <View style={styles.body}>
            <View style={styles.container}>
                <View style={styles.lable}>

                    <H5 value={props.value}/>

                </View>
                <View style={styles.content}>

                    <H5 value='Select'/>
                                 
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
    },
    content:{
        width: '55%',
        height: '100%',
        // backgroundColor:'#000',
        borderWidth: 1.5,
        borderColor: '#6e6e6e',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lable:{
        width: '40%',
        height: '100%',
        // backgroundColor:'#000',
        borderWidth: 1.5,
        borderColor: '#6e6e6e',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

})

export default CountrySelect ;