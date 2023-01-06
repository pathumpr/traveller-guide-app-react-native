import React, { useState } from "react";
import { View,
    Text,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
import { Checkbox } from 'react-native-paper';

const CheckBoxContent2 = (props)=>{

    const [checked, setChecked] = useState(false);

    return (

            <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                    setChecked(!checked);
                }}
                uncheckedColor={'#fff'}
                color={'#fff'}
            />

    )

}

export default CheckBoxContent2;