import React, { useState } from "react";
import { View,
    Text,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
import { Checkbox } from 'react-native-paper';

const CheckBoxContent3 = (props)=>{

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
        </View>

    )

}

const styles = StyleSheet.create({  
    ckeckboxContent:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

})

export default CheckBoxContent3;