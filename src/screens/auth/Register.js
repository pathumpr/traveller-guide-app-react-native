import {useState, React, useRef} from 'react';
import { View,
        StyleSheet,
        TouchableOpacity,
        ScrollView,   
        TextInput,  
        Text,
        Image,
        PixelRatio, 
        Switch,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Root, Popup } from 'react-native-popup-confirm-toast';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import Toast from 'react-native-toast-message';
import {APP_URL, RESOURCE_URL} from '../../constants/App';
import axios from 'axios';
import { CropView } from 'react-native-image-crop-tools';
import Colors from '../../styles/Colors';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Divider from '../../components/Divider';
import TextSmall from '../../components/TextSmall';
import H1 from '../../components/H1';
import H2 from '../../components/H2';
import { Button } from 'react-native-paper';

const Register = ({ navigation }) =>{

    // Country picker
    const [open, setOpen] = useState(false);
    const [country, setCountry] = useState("");
    const [items, setItems] = useState([
      {label: 'Sri Lanka', value: 'Sri Lanka'},
      {label: 'Australia', value: 'Australia'},
      {label: 'United State', value: 'United State'},
      {label: 'Italy', value: 'Italy'},
      {label: 'Russia', value: 'Russia'},
      {label: 'India', value: 'India'}
    ]);


    // Gallery profile image picker
    const [galleryPhotoUri, setGalleryPhotoUri] = useState('not set');
    const [galleryPhotoMime, setGalleryPhotoMime] = useState('not set');
    const [photo, setPhoto] = useState();

    const openGallery = async () =>{
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true
          }).then(image => {
            // console.log(image);
            setGalleryPhotoUri(image.path);
            setGalleryPhotoMime(image.mime);
            setPhoto(image.path);
          });
    }

    // show hide password
    const [value, setValue] = useState(true);
    const [icon , setIcon] = useState('eye-off');

    const showHidePassword =()=>{
        // setValue(!value)
        if(value == true){
            setValue(false)
            setIcon('eye')
        }else{
            setValue(true)
            setIcon('eye-off')
        }
    }

    // input fields props
    const [username, setUsername] = useState('');
    const [subUsername, setSubUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    // const [country, setCountry] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [number, setNumber] = useState('');
    const [code, setCode] = useState('');

    const [kkk, setKkk] = useState('not set');

    let [numOfErr, setNumOfErr] = useState(0);

    // input fields validation

    //username validation
    const usernameRegex = new RegExp(/^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z ._]+(?<![_.])$/i);

    const [usernameError, setUsernameError] = useState('');
    const userNameValidate =()=>{
        if(username ==""){
            console.log("Username is required")
            setUsernameError('Username is required')
            setNumOfErr(1)
        }else{
            if(usernameRegex.test(username)){
                setUsernameError('')
                setNumOfErr(0)

                const count = username.length;
                // console.log(count);
            
                if(count > 7){
                    const x = count-7; 
                    // console.log(x);
                    const newName = username.slice(0, -x);
                    const dots = '...';
                    setSubUsername(newName + dots);
                    // console.log(username);
                    // console.log(newName);
                    // console.log(subUsername);
                    
            
                }else{
                    setSubUsername(username);
                }

            }else{
                setUsernameError("Cannot include numbers & use 4-20 characters")
                setNumOfErr(1)
            }
        }
    }
    
    //name validation
    const nameRegex = new RegExp(/^(?=.{4,150}$)(?![_.])(?!.*[_.]{2})[a-zA-Z .]+(?<![_.])$/i);
    
    const [nameError, setNameError] = useState('');
    const nameValidate =()=>{
        if(name ==""){
            console.log("Your name is required")
            setNameError('Your name is required')
            setNumOfErr(1)
        }else{
            if(nameRegex.test(name)){
                setNameError('')
                setNumOfErr(0)
            }else{
                setNameError("Cannot include numbers & special characters")
                setNumOfErr(1)
            }
        }
    }

    //email validation
    const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i);

    const [emailError, setEmailError] = useState('');
    const emailValidate =()=>{
        if(email ==""){
            console.log("Email is required")
            setEmailError('Email is required')
            setNumOfErr(1)
        }else{
            if(emailRegex.test(email)){
                setEmailError('')
                setNumOfErr(0)
            }else{
                setEmailError("Not a validate email format")
                setNumOfErr(1)
            }
        }
    }

    //address 1 validation
    const [address1Error, setAddress1Error] = useState('');
    const address1Validate =()=>{
        if(address1 ==""){
            console.log("Your address is required")
            setAddress1Error('Your address is required')
            setNumOfErr(1)
        }else{
            // console.log(address1)
            setAddress1Error('')
            setNumOfErr(0)
        }
    }

    //address 2 validation
    const [address2Error, setAddress2Error] = useState('');
    const address2Validate =()=>{
        if(address2 ==""){
            console.log("Your address is required - optional")
            setAddress2Error('')
        }else{
            // console.log(address2)
        }
    }

    //country validation
    const [countryError, setCountryError] = useState('');
    const countryValidate =()=>{
        if(country ==""){
            console.log("Country is required")
            setCountryError('Country is required')
            setNumOfErr(1)
        }else{
            // console.log(country)
            setCountryError('')
            setNumOfErr(0)
        }
    }

    //password validation
    const passwordRegex = new RegExp(/^(?=.*)(?=.*[a-z])(?=.*[a-z])(?=.*[a-zA-Z]).{6,}$/i);
  
    const [passwordError, setPasswordError] = useState('');
    const passwordValidate =()=>{
        if(password ==""){
            console.log("Password is required")
            setPasswordError('Password is required')
            setNumOfErr(1)
        }else{
            if(passwordRegex.test(password)){
                setPasswordError('')
                setNumOfErr(0)
            }else{
                setPasswordError("Must be at least 6 characters")
                setNumOfErr(1)
            }
        }
    }

    //confirm password validation
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const confirmPasswordValidate =()=>{
        if(confirmPassword ==""){
            console.log("Confirm password is required")
            setConfirmPasswordError('Confirm Password is required')
            setNumOfErr(1)
        }else{
            if(password == confirmPassword){
                // console.log(confirmPassword)
                // console.log('Password and Confirm password is match')
                setConfirmPasswordError("")
                setNumOfErr(0)
            }else{
                // console.log(confirmPassword)
                console.log("Confirm Password doesn't match")
                setConfirmPasswordError("Confirm Password doesn't match")
                setNumOfErr(1)
            }
        }
    }

    //mobile number validation
    const numberdRegex = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i);

    const [numberError, setNumberdError] = useState('');
    const numberValidate =()=>{
        if(number == ""){
            console.log("Phone Number is required")
            setNumberdError('Phone Number is required')
            setNumOfErr(1)
        }else{
            if(numberdRegex.test(number)){
                setNumberdError('')
                setNumOfErr(0)
            }else{
                setNumberdError("Invalid phone number format")
                setNumOfErr(1)
            }
        }
    }

    //verification code validation
    const codeRegex = new RegExp(/\d{4}/i);

    const [codeError, setCodedError] = useState('');
    const codeValidate =()=>{
        if(code == ""){
            console.log("Verification code is required")
            setCodedError('Verification code is required')
            setNumOfErr(1)
        }else{
            if(codeRegex.test(code)){
                setCodedError('')
                setNumOfErr(0)
                // console.log(code)
                // console.log(country)
            }else{
                setCodedError("Invalid code")
                setNumOfErr(1)
            }
        }
    }

    const imageUpload = ()=>{
        // console.log('Image upload function')

        const data = new FormData();
        data.append('photo', {
            name: 'photo.jpg',
            type: 'image/jpg',
            uri:
            Platform.OS === 'android' ? galleryPhotoUri : galleryPhotoUri.replace('file://', ''),     
        });

        data.append('title', 'hello');
        data.append('username', username);
    
        fetch(APP_URL+'profile-image-upload', {
            method: 'POST',
            body: data,
        })
        .then(response => response.json())
        .then(response => {
            // console.log(response['name']);
            console.log(response['path']);
            console.log(response['status']);
            console.log(response['hello']);

            if(response['status'] == 'success'){
                Toast.show({
                    type: 'success',
                    text1: 'Welcome ' + username + '!',
                    text2: 'Registration Successfully'
                });

                AsyncStorage.clear();
                AsyncStorage.setItem('asyncUsername', username);
                AsyncStorage.setItem('asyncGalleryPhotoUri', galleryPhotoUri);
                AsyncStorage.setItem('asyncSubUsername', subUsername);

                global.userName = username;
                global.subUsername = subUsername;
                global.profilePhoto = galleryPhotoUri;

                navigation.navigate('Main', { screen: 'Home' });

            }else{
                console.log('Something went wrong');
            }

            
        })
        .catch(error => {
            console.log(error);
        });

    }

    //Register button function    
    const [fieldsError, setFieldsError] = useState('');
    const register = async ()=>{
        // console.log(numOfErr)

        if(numOfErr == 0){

            if(username && name && email && address1 && country && password && confirmPassword && number && code != ""){                
                
                setFieldsError('');
                
                //Sending values to laravel API as json
                const status = 0;
                const isVerified = 0;
                const profilePhoto = 'not set';
                const id = Math.random().toString(10).substr(2, 6);
                console.log(id)
                const token = 'triptostersGuideAppEA@2022';
               
                axios.post(APP_URL+'register',
                {
                    token,
                    id,
                    username,
                    name,
                    email,
                    number,
                    address1,
                    address2,
                    country,
                    password,
                    confirmPassword,
                    profilePhoto,
                    isVerified,
                    status,                    
                },                 
                  
                )
                  .then(response => {
                    console.log(response.data);

                    if(response.data == "success"){

                        if(galleryPhotoUri == 'not set'){

                            Toast.show({
                                type: 'success',
                                text1: 'Welcome ' + username + '!',
                                text2: 'Registration Successfully'
                            });

                            AsyncStorage.clear();
                            AsyncStorage.setItem('asyncUsername', username);
                            AsyncStorage.setItem('asyncGalleryPhotoUri', galleryPhotoUri);
                            AsyncStorage.setItem('asyncSubUsername', subUsername);

                            global.userName = username;
                            global.profilePhoto = galleryPhotoUri;
                            global.subUsername = subUsername;
                            
                            navigation.navigate('Main', { screen: 'Home' });

                        }else{
                            
                            // console.log('Image upload in progress')
                            imageUpload();
                
                        }

                    }else{
                        setFieldsError(response.data)
                    }

                  })
                  .catch(error => {
                    console.log(error);
                  });

            }else{
                setFieldsError('Input fields are required')
            }
        }else{
            setFieldsError('')
        }
    }

    return(

        <SafeAreaView>
        <Root>
            <ScrollView>
                <View style={styles.body}>
                    <H1 value='Register' />
                    <View style={styles.container}>

                        <View style={styles.profileImagePicker}>
                            <View style={styles.profileImagePickerContainer}>
                                <TouchableOpacity onPress={ openGallery}>
                
                                    <Image source={photo == null ? require('../../assets/images/profile_pic.jpg') : {uri:photo} } resizeMode='contain' style={styles.logo} />

                                    {/* <Image source={{uri: galleryPhoto}} resizeMode='contain' style={styles.logo} /> */}

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
                                    // value={username}
                                    onChangeText={(text)=>setUsername(text)}
                                    onBlur={userNameValidate}
                                />
                            </View>
                            <View style={styles.errorTextContainer}>
                                <Text style={styles.errorText}>
                                    {usernameError}
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
                                    onChangeText={(text)=>setName(text)}
                                    onBlur={nameValidate}
                                />
                            </View>
                            <View style={styles.errorTextContainer}>
                                <Text style={styles.errorText}>
                                    {nameError}
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
                                    onChangeText={(text)=>setEmail(text)}
                                    onBlur={emailValidate}
                                />
                            </View>
                            <View style={styles.errorTextContainer}>
                                <Text style={styles.errorText}>
                                    {emailError}
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
                                    onChangeText={(text)=>setAddress1(text)}
                                    onBlur={address1Validate}
                                />
                            </View>
                            <View style={styles.errorTextContainer}>
                                <Text style={styles.errorText}>
                                    {address1Error}
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
                                    onChangeText={(text)=>setAddress2(text)}
                                    onBlur={address2Validate}
                                />
                            </View>
                            <View style={styles.errorTextContainer}>
                                <Text style={styles.errorText}>
                                    {address2Error}
                                </Text>
                            </View>

                            {/* Country*/}
                            <View style={styles.inputContainer}>
                                <View style={[styles.formInputDropdown, {zIndex:1}]}>
                                    <DropDownPicker
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
                                    />

                                </View>
                            </View>
                            <View style={styles.errorTextContainer}>
                                <Text style={styles.errorText}>
                                    {countryError}
                                </Text>
                            </View>

                            {/* Password */}
                            <View style={styles.inputContainer}>
                                <View style={styles.passwordcontainer}>
                                    <TextInput 
                                        secureTextEntry={value}
                                        placeholder= {'Password'}
                                        placeholderTextColor = {Colors.placeholderColor}
                                        maxLength={200}
                                        color={Colors.inputTextColor}
                                        autoCapitalize="none"
                                        style={[styles.passwordInput, {zIndex:-2}]}
                                        onChangeText={(text)=>setPassword(text)}
                                        onBlur={passwordValidate}
                                    />
                                    <View style={styles.eye}>
                                        <TouchableOpacity onPress={showHidePassword}>
                                            <Ionicon name={icon} size={24} color={Colors.placeholderColor} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.errorTextContainer}>
                                <Text style={styles.errorText}>
                                {passwordError}
                                </Text>
                            </View>

                            {/* Confirm Password*/}
                            <View style={styles.inputContainer}>
                                <TextInput 
                                    secureTextEntry={value}
                                    placeholder= {'Confirm Password'}
                                    placeholderTextColor = {Colors.placeholderColor}
                                    maxLength={200}
                                    color={Colors.inputTextColor}
                                    keyboardType="default" 
                                    autoCapitalize="none"
                                    style={[styles.formInput, {zIndex:-2}]}
                                    onChangeText={(text)=>setConfirmPassword(text)}
                                    onBlur={confirmPasswordValidate}
                                />
                            </View>
                            <View style={styles.errorTextContainer}>
                                <Text style={styles.errorText}>
                                {confirmPasswordError}
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
                                        onChangeText={(text)=>setNumber(text)}
                                        onBlur={numberValidate}
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
                                    {numberError}
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
                                    onChangeText={(text)=>setCode(text)}
                                    onBlur={codeValidate}
                                />
                            </View>
                            <View style={styles.errorTextContainer}>
                                <Text style={styles.errorText}>
                                    {codeError}
                                </Text>
                            </View>

                            {/* Registration button */}
                            <View style={styles.buttonContainer}>
                            
                                <TouchableOpacity style={styles.button} onPress={register}>
                                    <Text style={styles.buttonText}>
                                        Register
                                    </Text>
                                </TouchableOpacity>
                               
                            </View>
                            <View style={styles.errorTextContainer}>
                                <Text style={styles.errorText}>
                                    {fieldsError}
                                </Text>
                            </View>

                        </View>

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

// const windowWidth = Dimensions.get('window').width;


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
    //   welcome: {
    //     fontSize: 20,
    //     textAlign: 'center',
    //     margin: 10,
    //   },
    //   instructions: {
    //     fontSize: 12,
    //     textAlign: 'center',
    //     color: '#888',
    //     marginBottom: 5,
    //   },
    //   data: {
    //     padding: 15,
    //     marginTop: 10,
    //     backgroundColor: '#ddd',
    //     borderColor: '#888',
    //     borderWidth: 1 / PixelRatio.get(),
    //     color: '#777'
    //   },

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