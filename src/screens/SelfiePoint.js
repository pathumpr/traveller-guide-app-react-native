import React, { useState, useEffect } from "react";
import { View,
         Text,
         StyleSheet,
         SafeAreaView,
         TextInput,
         TouchableOpacity,
    } from 'react-native';
    import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import Colors from '../styles/Colors';

import H1 from '../components/H1';
import SelectImage from '../components/SelectImage';

const MyAccount = ()=>{

    useEffect(() => {
        console.log('Selfie point');
    }, [])

    const showToast = () => {
        Toast.show({
          type: 'success',
          text1: 'Done',
          text2: 'Photos Uploaded Successfully'
        });
    }

    return(

        
        <SafeAreaView>
            <ScrollView>

                <H1 value='Selfie Point'/>
                <View style={styles.body}>
                    <View style={styles.container}>

                    <View style={styles.imagContainer}>
                        <SelectImage value='Upload the scanned certificate' />
                    </View>

                    <View style={styles.imagContainer}>
                        <SelectImage value='Upload the scanned certificate' />
                    </View>

                    <View style={styles.imagContainer}>
                        <SelectImage value='Upload the scanned certificate' />
                    </View>

                    {/* Login button */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={showToast} >
                            <Text style={styles.buttonText}>
                                Upload
                            </Text>
                        </TouchableOpacity>
                    </View>


                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>

        

    )

}

const styles = StyleSheet.create({
    body:{
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        backgroundColor: Colors.primaryryBgColor,
    },
    container:{
        width: '85%',
        flex: 1,
        margin: 20,
    }, 
    imagContainer:{
        width: '100%',
        // height: 130,
        // backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    // Update Button Styles

    buttonContainer:{
        width: '100%',
        height: 80,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // backgroundColor: 'green',
    },
    button:{
        width: '50%',
        height: 50,
        backgroundColor: Colors.blackBgColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText:{
        color: Colors.whiteText,
        fontSize: 16,
        fontWeight: 'bold'
    },


})

export default MyAccount;