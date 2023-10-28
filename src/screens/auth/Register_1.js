import {useState, React} from 'react';
import { View,
        StyleSheet,
        TouchableOpacity,
        ScrollView,   
        TextInput,  
        Text,
        Image,
        ActivityIndicator,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Root, Popup } from 'react-native-popup-confirm-toast';
import DropDownPicker from 'react-native-dropdown-picker';
import Toast from 'react-native-toast-message';
import {APP_URL, RESOURCE_URL} from '../../constants/App';
import axios from 'axios';
import Colors from '../../styles/Colors';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Divider from '../../components/Divider';
import TextSmall from '../../components/TextSmall';
import H1 from '../../components/H1';
import H2 from '../../components/H2';

const Register = ({ navigation }) =>{
    return(

        <SafeAreaView>
        <Root>
            <ScrollView>
                <View style={styles.body}>
                    <H1 value='Register' />
                    <View style={styles.container}>
                        <View style={styles.profileImagePicker}>
                            <View style={styles.profileImagePickerContainer}>
                                <TouchableOpacity >       
                                {/* onPress={ openGallery}          */}
                                    {/* <Image source={photo == null ? require('../../assets/images/profile_pic.jpg') : {uri:photo} } resizeMode='contain' style={styles.logo} /> */}
                                </TouchableOpacity>
                                <H2 value='Select Image'/>
                            </View>
                        </View>
                        <View style={styles.section2}>
                
                            {/* Userame */}
                            <View style={styles.inputContainer}>
                                <TextInput 
                                    placeholder= {'Username'}
                                    placeholderTextColor = {Colors.placeholderColor}
                                    maxLength={50}
                                    color={Colors.inputTextColor}
                                    keyboardType="default" 
                                    autoCapitalize="none"
                                    style={styles.formInput}
                                    // onChangeText={(text)=>setUsername(text)}
                                    // onBlur={userNameValidate}
                                />
                            </View>
                            <View style={styles.errorTextContainer}>
                                <Text style={styles.errorText}>
                                    {/* {usernameError} */}
                                </Text>
                            </View>

                            {/* Name */}
                            <View style={styles.inputContainer}>
                                <TextInput 
                                    placeholder= {'Your name'}
                                    placeholderTextColor = {Colors.placeholderColor}
                                    maxLength={200}
                                    color={Colors.inputTextColor}
                                    keyboardType="default" 
                                    autoCapitalize="none"
                                    style={styles.formInput}
                                    // onChangeText={(text)=>setName(text)}
                                    // onBlur={nameValidate}
                                />
                            </View>
                            <View style={styles.errorTextContainer}>
                                <Text style={styles.errorText}>
                                    {/* {nameError} */}
                                </Text>
                            </View>

                            {/* Email address */}
                            <View style={styles.inputContainer}>
                                <TextInput 
                                    placeholder= {'Email'}
                                    placeholderTextColor = {Colors.placeholderColor}
                                    maxLength={200}
                                    color={Colors.inputTextColor}
                                    keyboardType="email-address" 
                                    // autoCapitalize="none"
                                    style={styles.formInput}
                                    // onChangeText={(text)=>setEmail(text)}
                                    // onBlur={emailValidate}
                                />
                            </View>
                            <View style={styles.errorTextContainer}>
                                <Text style={styles.errorText}>
                                    {/* {emailError} */}
                                </Text>
                            </View>

                            {/* Address 1 */}
                            <View style={styles.inputContainer}>
                                <TextInput 
                                    placeholder= {'Address Line 1'}
                                    placeholderTextColor = {Colors.placeholderColor}
                                    maxLength={400}
                                    color={Colors.inputTextColor}
                                    keyboardType="default" 
                                    // autoCapitalize="none"
                                    style={styles.formInput}
                                    // onChangeText={(text)=>setAddress1(text)}
                                    // onBlur={address1Validate}
                                />
                            </View>
                            <View style={styles.errorTextContainer}>
                                <Text style={styles.errorText}>
                                    {/* {address1Error} */}
                                </Text>
                            </View>

                            {/* Address 2*/}
                            <View style={styles.inputContainer}>
                                <TextInput 
                                    placeholder= {'Address Line 2 (optional)'}
                                    placeholderTextColor = {Colors.placeholderColor}
                                    maxLength={400}
                                    color={Colors.inputTextColor}
                                    keyboardType="default" 
                                    // autoCapitalize="none"
                                    style={styles.formInput}
                                    // onChangeText={(text)=>setAddress2(text)}
                                    // onBlur={address2Validate}
                                />
                            </View>
                            <View style={styles.errorTextContainer}>
                                <Text style={styles.errorText}>
                                    {/* {address2Error} */}
                                </Text>
                            </View>

                            {/* Country*/}
                            <View style={styles.inputContainer}>
                                <View style={[styles.formInputDropdown, {zIndex:1}]}>
                                    {/* <DropDownPicker
                                        open={open}
                                        value={country}
                                        items={items}
                                        setOpen={setOpen}
                                        setValue={setCountry}
                                        setItems={setItems}
                                        onChangeValue={countryValidate}
                                        zIndex={2}
                                        placeholder={'Select Country'}
                                        style={{
                                            backgroundColor: Colors.inputBgColor,
                                            width: '100%',
                                            borderColor: Colors.inputBgColor,
                                            borderRadius: 10,
                                        }}
                                        textStyle={{
                                            fontSize: 14,
                                            color: Colors.placeholderColor,
                                        }}
                                        labelStyle={{
                                            borderColor: Colors.inputBgColor,
                                            backgroundColor: Colors.inputBgColor,
                                        }}
                                        containerStyle={{
                                            borderColor: Colors.inputBgColor,
                                            backgroundColor: Colors.inputBgColor,
                                            borderRadius: 10,
                                        }}
                                    /> */}

                                </View>
                            </View>
                            <View style={styles.errorTextContainer}>
                                <Text style={styles.errorText}>
                                    {/* {countryError} */}
                                </Text>
                            </View>

                            {/* Password */}
                            <View style={styles.inputContainer}>
                                <View style={styles.passwordcontainer}>
                                    <TextInput 
                                        // secureTextEntry={value}
                                        placeholder= {'Password'}
                                        placeholderTextColor = {Colors.placeholderColor}
                                        maxLength={200}
                                        color={Colors.inputTextColor}
                                        autoCapitalize="none"
                                        style={[styles.passwordInput, {zIndex:-2}]}
                                        // onChangeText={(text)=>setPassword(text)}
                                        // onBlur={passwordValidate}
                                    />
                                    <View style={styles.eye}>
                                        <TouchableOpacity >
                                        {/* onPress={showHidePassword} */}
                                            {/* <Ionicon name={icon} size={24} color={Colors.placeholderColor} /> */}
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.errorTextContainer}>
                                <Text style={styles.errorText}>
                                {/* {passwordError} */}
                                </Text>
                            </View>

                            {/* Confirm Password*/}
                            <View style={styles.inputContainer}>
                                <TextInput 
                                    // secureTextEntry={value}
                                    placeholder= {'Confirm Password'}
                                    placeholderTextColor = {Colors.placeholderColor}
                                    maxLength={200}
                                    color={Colors.inputTextColor}
                                    keyboardType="default" 
                                    autoCapitalize="none"
                                    style={[styles.formInput, {zIndex:-2}]}
                                    // onChangeText={(text)=>setConfirmPassword(text)}
                                    // onBlur={confirmPasswordValidate}
                                />
                            </View>
                            <View style={styles.errorTextContainer}>
                                <Text style={styles.errorText}>
                                {/* {confirmPasswordError} */}
                                </Text>
                            </View>

                            {/* Mobile Number*/}
                            <View style={styles.inputContainer}>

                                <View style={styles.phoneContent}>

                                    <TextInput 
                                        style={styles.phoneInput} 
                                        placeholder={'Mobile number'}
                                        placeholderTextColor={Colors.placeholderColor}
                                        color={Colors.inputTextColor}
                                        maxLength={20}
                                        keyboardType="phone-pad" 
                                        autoCapitalize="none"
                                        // onChangeText={(text)=>setNumber(text)}
                                        // onBlur={numberValidate}
                                    />

                                    <View style={styles.btnArea} >
                                        <TouchableOpacity style={styles.btnTouch}>
                                            <Text style={styles.txt}>
                                                Send code
                                            </Text>
                                        </TouchableOpacity>
                                    </View>                                            
                                </View> 

                            </View>
                            <View style={styles.errorTextContainer}>
                                <Text style={styles.errorText}>
                                    {/* {numberError} */}
                                </Text>
                            </View>

                            {/* Verification Code*/}
                            <View style={styles.inputContainer}>
                                <TextInput 
                                    placeholder= {'Verification Code'}
                                    placeholderTextColor = {Colors.placeholderColor}
                                    maxLength={4}
                                    color={Colors.inputTextColor}
                                    keyboardType="phone-pad" 
                                    autoCapitalize="none"
                                    style={styles.formInput}
                                    // onChangeText={(text)=>setCode(text)}
                                    // onBlur={codeValidate}
                                />
                            </View>
                            <View style={styles.errorTextContainer}>
                                <Text style={styles.errorText}>
                                    {/* {codeError} */}
                                </Text>
                            </View>

                            {/* Registration button */}
                            <View style={styles.buttonContainer}>
                            
                                <TouchableOpacity style={styles.button} >
                                {/* onPress={register} */}
                                    <Text style={styles.buttonText}>
                                        Register
                                    </Text>
                                </TouchableOpacity>
                               
                            </View>
                            <View style={styles.errorTextContainer}>
                                <Text style={styles.errorText}>
                                    {/* {fieldsError} */}
                                </Text>
                            </View>

                        </View>

                        {/* Activity indicator */}
                        {/* {isLoading ? (
                            <ActivityIndicator size="large" color="#fcba03" />
                        ) :(<Text></Text>)} */}

                        <View style={styles.navigateArea} >
                            <Divider/>

                            <TouchableOpacity onPress={()=>{
                                navigation.navigate('Login')
                            }}>
                                <TextSmall text="Already have an account?" linkText="Login" />
                            </TouchableOpacity>
                        </View>

                    </View>

               </View>
                
            </ScrollView>
            </Root> 
        </SafeAreaView>

    )

}

const styles = StyleSheet.create({

    body:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: Colors.primaryBgColor,
    },
    container:{
        width: '85%',
        // flex: 1,
        margin: 20,
        // backgroundColor: '#fff',
    },   
    //profile image picker
    profileImagePicker:{
        width: '100%',
        height: 200,
        // backgroundColor: '#9c9c9c',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImagePickerContainer:{
        width: '90%',
        height: 180,
        // backgroundColor: '#000',
        // borderColor: '#fff',
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
    errorTextContainer:{
        display: 'flex',
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: 10,
    },
    errorText:{
        color: Colors.errorMsgColor,
        fontSize: 12,
    },  
    section2:{
        // backgroundColor: 'red',
        width:'100%',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
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
    formInputDropdown:{
        width: '100%',
        height: 50,
        backgroundColor: Colors.inputBgColor,
        // paddingLeft: 15,
        borderRadius: 5,
    },
    passwordcontainer:{
        width: '100%',
        height: 50,
        backgroundColor: Colors.inputBgColor,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    passwordInput:{
        width: '80%',
        height: 50,
        // backgroundColor: '#000',
        paddingLeft: 15,
        borderRadius: 5,
        zIndex: -1,
    },
    eye:{
        width: "20%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#000',
    },  
    // Login Button Styles
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
        backgroundColor: Colors.buttonBgColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText:{
        color: Colors.buttonTextColor,
        fontSize: 16,
        fontWeight: 'bold'
    },
    navigateArea:{
        // backgroundColor: 'red',
        width: '100%',
        height: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    //Country picker
    containerCountry: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
    //phone input
    phoneContent:{
        width: '100%',
        height: 50,
        backgroundColor: Colors.inputBgColor,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    phoneInput:{
        width: '55%',
        // backgroundColor: '#fff',
        paddingLeft: 10,
        marginLeft: 10,
    },
    btnArea:{
        width: '45%',
        height: '100%',
        // backgroundColor: '#ad1a3a',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTouch:{
        width: '80%',
        height: '90%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#fff',
        borderRadius: 10,
    },
    txt:{
        color: Colors.blackText,
        fontSize: 16,
        fontWeight: '600',
    },


})

export default Register;