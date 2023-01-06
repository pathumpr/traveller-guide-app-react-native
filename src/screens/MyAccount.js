import React, { useState, useEffect } from "react";
import { View,
         Text,
         StyleSheet,
         SafeAreaView,
         TextInput,
         TouchableOpacity,
         Image,
         Alert,
    } from 'react-native';
    import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Checkbox } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Colors from '../styles/Colors';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import {APP_URL, RESOURCE_URL} from '../constants/App';
import axios from 'axios';

import H1 from '../components/H1';
import BasicContainer from '../components/BasicContainer';
import H2 from '../components/H2';
import H4 from '../components/H4';
import SelectImage from '../components/SelectImage';

const MyAccount = ()=>{

    const navigation = useNavigation();
    const [data, setData] = useState(null);

    const [country, setCountry] = useState();

    useEffect(() => {

        console.log('My Account');

        axios.get(APP_URL + 'get-my-account-data/' + userName)
        .then((response) => {
            if (response.status === 200) {                
                console.log(response.data['country']);
                setCountry(response.data['country']);
            } else {
                console.error('Error:', response.status);
            }
        }).catch((error) => {
            console.error(error);
        });

    }, [])

    let options = {
        saveToPhotos: true,
        mediaType: 'photo',
        maxWidth: 400,
        maxHeight: 400,
    };

    const [galleryPhoto, setGalleryPhoto] = useState();

    const openGallery = async () =>{
        const result = await launchImageLibrary(options);
        setGalleryPhoto(result.assets[0].uri);
    }

    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);

    const showToast = () => {
        Toast.show({
          type: 'success',
          text1: 'Done',
          text2: 'Profile Updated Successfully'
        });
    }

    return(

        
        <SafeAreaView>
            <ScrollView>

                <H1 value='My Account'/>
                <View style={styles.body}>
                    <View style={styles.container}>

                    <View style={styles.profileImagePicker}>
                        <View style={styles.profileImagePickerContainer}>
                            <TouchableOpacity onPress={ openGallery }>
            
                                <Image source={profilePhoto == 'not set' ? require('../assets/images/profile_pic.jpg') : {uri:profilePhoto} } resizeMode='contain' style={styles.logo} />

                                <H4 value='Change'/>

                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Guide Name */}
                    <View style={styles.labelInputContainer}>
                        <View style={styles.formLabel}>
                            <View style={styles.label}>
                                <Text style={styles.labelTextName}>
                                    {name}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Guide ID */}
                    <View style={styles.smallLabelInputContainer}>
                        <View style={styles.smallFormLabel}>
                            <View style={styles.label}>
                                <Text style={styles.labelTextCountry}>
                                    {country}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Guide Country */}
                    <View style={styles.smallLabelInputContainer}>
                        <View style={styles.smallFormLabel}>
                            <View style={styles.label}>
                                <Text style={styles.labelTextId}>
                                    ID {id}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Logout button */}
                    <View style={styles.labelInputContainer}>
                        <View style={styles.formLabel}>
                            <View style={styles.label}>
                                <TouchableOpacity onPress={()=>{

                                    Alert.alert(
                                        'Logout',
                                        'Are you sure you want to log out?',
                                        [
                                        {
                                            text: 'Cancel',
                                            style: 'cancel'
                                        },
                                        {
                                            text: 'Logout',
                                            onPress: () => {
                                                userName = '';
                                                subUsername = '';
                                                profilePhoto = '';
                                                time = '';
                                                AsyncStorage.clear();

                                                navigation.reset({
                                                    index: 0,
                                                    routes: [{ name: 'Login' }],
                                                });
                                            }
                                        }
                                        ],
                                        { cancelable: false }
                                    );
                                }}>
                                    <Text style={styles.logoutText}>
                                        Log out
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                        <BasicContainer>
                            <H2 value='Contact details' />
                        </BasicContainer>

                    {/* Telephone */}
                    <View style={styles.inputContainer}>
                        <TextInput 
                            placeholder= {'Telephone'}
                            placeholderTextColor = {Colors.placeholderColor}
                            color={Colors.inputTextColor}
                            maxLength={200}
                            keyboardType="default" 
                            autoCapitalize="none"
                            style={styles.formInput}
                        />
                    </View>
                    {/* Address Line 1 */}
                    <View style={styles.inputContainer}>
                        <TextInput 
                            placeholder= {'Address Line 1'}
                            placeholderTextColor = {Colors.placeholderColor}
                            color={Colors.inputTextColor}
                            maxLength={200}
                            keyboardType="default" 
                            autoCapitalize="none"
                            style={styles.formInput}
                        />
                    </View>
                    {/* Address Line 2 */}
                    <View style={styles.inputContainer}>
                        <TextInput 
                            placeholder= {'Address Line 2'}
                            placeholderTextColor = {Colors.placeholderColor}
                            color={Colors.inputTextColor}
                            maxLength={200}
                            keyboardType="default" 
                            autoCapitalize="none"
                            style={styles.formInput}
                        />
                    </View>
                    {/* Zip Code */}
                    <View style={styles.inputContainer}>
                        <TextInput 
                            placeholder= {'Zip Code'}
                            placeholderTextColor = {Colors.placeholderColor}
                            color={Colors.inputTextColor}
                            maxLength={200}
                            keyboardType="default" 
                            autoCapitalize="none"
                            style={styles.formInput}
                        />
                    </View>

                    <View style={styles.imagContainer}>
                        <SelectImage value='Upload the scanned certificate' />
                    </View>

                    <BasicContainer>
                        <H2 value='Qualifications' />
                    </BasicContainer>

                    {/* Lisence */}
                    <View style={styles.inputContainer}>
                        <TextInput 
                            placeholder= {'Lisence'}
                            placeholderTextColor = {Colors.placeholderColor}
                            color={Colors.inputTextColor}
                            maxLength={200}
                            keyboardType="default" 
                            autoCapitalize="none"
                            style={styles.formInput}
                        />
                    </View>
                    {/* Expire on */}
                    <View style={styles.inputContainer}>
                        <TextInput 
                            placeholder= {'Expire on'}
                            placeholderTextColor = {Colors.placeholderColor}
                            color={Colors.inputTextColor}
                            maxLength={200}
                            keyboardType="default" 
                            autoCapitalize="none"
                            style={styles.formInput}
                        />
                    </View>
                    {/* Country */}
                    <View style={styles.inputContainer}>
                        <TextInput 
                            placeholder= {'Country'}
                            placeholderTextColor = {Colors.placeholderColor}
                            color={Colors.inputTextColor}
                            maxLength={200}
                            keyboardType="default" 
                            autoCapitalize="none"
                            style={styles.formInput}
                        />
                    </View>
                    {/* Travel Destination 1 */}
                    <View style={styles.inputContainer}>
                        <TextInput 
                            placeholder= {'Travel Destination 1'}
                            placeholderTextColor = {Colors.placeholderColor}
                            color={Colors.inputTextColor}
                            maxLength={200}
                            keyboardType="default" 
                            autoCapitalize="none"
                            style={styles.formInput}
                        />
                    </View>
                    {/* Travel Destination 2 */}
                    <View style={styles.inputContainer}>
                        <TextInput 
                            placeholder= {'Travel Destination 2'}
                            placeholderTextColor = {Colors.placeholderColor}
                            color={Colors.inputTextColor}
                            maxLength={200}
                            keyboardType="default" 
                            autoCapitalize="none"
                            style={styles.formInput}
                        />
                    </View>
                    {/* Travel Destination 3 */}
                    <View style={styles.inputContainer}>
                        <TextInput 
                            placeholder= {'Travel Destination 3'}
                            placeholderTextColor = {Colors.placeholderColor}
                            color={Colors.inputTextColor}
                            maxLength={200}
                            keyboardType="default" 
                            autoCapitalize="none"
                            style={styles.formInput}
                        />
                    </View>

                    <BasicContainer>
                        <H2 value='Experience' />
                    </BasicContainer>

                    {/* Number of Years */}
                    <View style={styles.inputContainer}>
                        <TextInput 
                            placeholder= {'Number of Years'}
                            placeholderTextColor = {Colors.placeholderColor}
                            color={Colors.inputTextColor}
                            maxLength={200}
                            keyboardType="default" 
                            autoCapitalize="none"
                            style={styles.formInput}
                        />
                    </View>
                    {/* Name of the operator */}
                    <View style={styles.inputContainer}>
                        <TextInput 
                            placeholder= {'Name of the operator'}
                            placeholderTextColor = {Colors.placeholderColor}
                            color={Colors.inputTextColor}
                            maxLength={200}
                            keyboardType="default" 
                            autoCapitalize="none"
                            style={styles.formInput}
                        />
                    </View>
                    {/* Description */}
                    <View style={styles.inputContainer}>
                        <TextInput 
                            placeholder= {'Description'}
                            placeholderTextColor = {Colors.placeholderColor}
                            color={Colors.inputTextColor}
                            maxLength={200}
                            keyboardType="default" 
                            autoCapitalize="none"
                            style={styles.formInput}
                        />
                    </View>

                    <BasicContainer>
                        <H2 value='Languages (Speaking/Writing)' />
                    </BasicContainer>

                    <View style={styles.ckeckboxContainer}>

                        <View style={styles.ckeckboxContent}>
                            <Checkbox
                                status={checked1 ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked1(!checked1);
                                }}
                                uncheckedColor={'#828282'}
                                color={Colors.blackText}
                            />
                            <Text style={styles.label}>English</Text>
                        </View>

                        <View style={styles.ckeckboxContent}>
                            <Checkbox
                                status={checked2 ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked2(!checked2);
                                }}
                                uncheckedColor={'#828282'}
                                color={Colors.blackText}
                            />
                            <Text style={styles.label}>French</Text>
                        </View>

                        <View style={styles.ckeckboxContent}>
                            <Checkbox
                                status={checked3 ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked3(!checked3);
                                }}
                                uncheckedColor={'#828282'}
                                color={Colors.blackText}
                            />
                            <Text style={styles.label}>Italian</Text>
                        </View>

                    </View>

                    {/* Login button */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={showToast} >
                            <Text style={styles.buttonText}>
                                Update
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
        width: Dimensions.get('window').width,
        backgroundColor: Colors.primaryBgColor,
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
    ckeckboxContainer:{
        marginTop: 10,
        width: '100%',
        height: 100,
        // backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    //profile image picker
    profileImagePicker:{
        width: '100%',
        height: 180,
        // backgroundColor: '#9c9c9c',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImagePickerContainer:{
        width: '90%',
        height: 180,
        // backgroundColor: '#000',
        // borderColor: '#000000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo:{
        width: 140,
        borderRadius: 150,
        height: 140,
    },

    // Form Input Styles

    inputContainer:{
        width: '100%',
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green',
    },
    formInput:{
        width: '100%',
        height: 50,
        backgroundColor: Colors.inputBgColor,
        paddingLeft: 15,
        borderRadius: 5,
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
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText:{
        color: Colors.whiteText,
        fontSize: 16,
        fontWeight: 'bold'
    },

    // checkbox styles

    ckeckboxContent:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 50,
    },
    label: {
        margin: 8,
        color: Colors.placeholderColor,
    },

    // Label styles
    labelInputContainer:{
        width: '100%',
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green',
    },
    smallLabelInputContainer:{
        width: '100%',
        height: 23,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        // backgroundColor: 'green',
    },
    formLabel:{
        width: '90%',
        height: 40,
        // backgroundColor: Colors.inputBgColor,
        // paddingLeft: 15,
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    smallFormLabel:{
        width: '90%',
        height: 20,
        // backgroundColor: Colors.inputBgColor,
        // paddingLeft: 15,
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    label:{
        width: '100%',
        height: '100%',
        // backgroundColor: 'green',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    labelTextName:{
        fontSize: 24,
        color: Colors.textColorTwo,
        marginLeft: 10,
        fontWeight: 'bold',
    },
    labelTextId:{
        fontSize: 14,
        color: Colors.placeholderColor,
        marginLeft: 10,
        fontWeight: 'bold',
        // marginTop: -60, 
    },
    labelTextCountry:{
        fontSize: 16,
        color: Colors.placeholderColor,
        marginLeft: 10,
        fontWeight: 'bold',
        // marginTop: -20, 
    },
    logoutText:{
        fontSize: 14,
        color: '#24598f',
        marginLeft: 10,
        fontWeight: 'bold',
    },

})

export default MyAccount;