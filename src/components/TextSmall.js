import React from 'react';
import {
        View, 
        StyleSheet,
        Text,
        alert
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const TextSmall = (props)=>{

    return(

        <View style={styles.body}>
            <Text style={styles.text}>
                {props.text}
            </Text>

            <Text style={styles.linkText}>
                {props.linkText}
            </Text>

        </View>

    )

}

const styles = StyleSheet.create({

    body:{
        display: 'flex',
        flexDirection: 'row',
    },
    text:{
        color: '#808080',
        fontSize: 14,
        marginRight: 5, 
    },
    linkText:{
        color: '#000',
        fontSize: 14,
    }

})

export default TextSmall;