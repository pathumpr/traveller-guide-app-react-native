import React, { useState } from "react";
import { View,
    Text,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
import { Checkbox } from 'react-native-paper';

const CheckBoxContent = (props)=>{

    const [checked, setChecked] = useState(false);

    return (

        <View style={styles.ckeckboxContent}>
            <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                    setChecked(!checked);
                }}
                uncheckedColor={'#828282'}
                color={'#000'}
            />
            <Text style={styles.label}>{props.value}</Text>
        </View>

    )

}

const styles = StyleSheet.create({  
    ckeckboxContent:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 10,
    },
    label: {
        margin: 8,
        color: '#828282',
    },

})

export default CheckBoxContent;