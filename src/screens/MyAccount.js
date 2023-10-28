import React, { useState, useEffect } from "react";
import { View,
         Text,
         StyleSheet,
         SafeAreaView,
         TextInput,
         TouchableOpacity,
         Image,
         Alert,
         ActivityIndicator,
    } from 'react-native';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Checkbox } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Colors from '../styles/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {getAuth, updateEmail} from "firebase/auth";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import {APP_URL, RESOURCE_URL} from '../constants/App';
import axios from 'axios';
import ImagePicker from 'react-native-image-crop-picker';

import H1 from '../components/H1';
import BasicContainer from '../components/BasicContainer';
import H2 from '../components/H2';
import H4 from '../components/H4';
import Divider from '../components/Divider';


const MyAccount = ()=>{

    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(true);

    //Input fields
    const [gname, setGName] = useState('');
    const [gemail, setGEmail] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [number, setNumber] = useState('');
    const [lisence, setLisence] = useState('');
    const [expire, setExpire] = useState('');
    const [travelDest1, setTravelDest1] = useState('');
    const [travelDest2, setTravelDest2] = useState('');
    const [numOfYears, setNumOfYears] = useState('');
    const [nameOfOperator, setNameOfOperator] = useState('');
    const [description, setDescription] = useState('');
    const [certificate, setCertificate] = useState('not set');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [isEdited, setIsEdited] = useState(false);

    // show hide password
    const [value, setValue] = useState(true);
    const [icon , setIcon] = useState('eye-off');
    const showHidePassword =()=>{
        if(value == true){
            setValue(false)
            setIcon('eye')
        }else{
            setValue(true)
            setIcon('eye-off')
        }
    }

    // languages array
    const [languageArray, setLanguageArray] = useState({});
    const [languages, setLanguages] = useState([]);
    // handle guide's checked languages
    const [checkedState, setCheckedState] = useState(() => {
        return Object.entries(languageArray).map(([key, value])=> false);
    });
    const handleLanguage = (key, value, index) => {
        console.log(languages);
        const indexx = languages.indexOf(key);
        if (indexx !== -1) {
            console.log(`Found value ${key} at index ${indexx}`);
            languages.splice(indexx, 1);
            console.log(languages);
        } else {
            console.log(`Value ${key} not found`);
            languages.push(key)
            console.log(languages);
        }
    };
    const handleCheckboxChange = (index, key, value) => {
        setCheckedState((prevState) => {
        const newState = [...prevState];
        newState[index] = !newState[index];
        return newState;
        });
        console.log(index + ' => ' + key + ' => ' + value);
        handleLanguage(key, value, index);
    };

    // languages array2
    const [languageArray2, setLanguageArray2] = useState({});
    const [languages2, setLanguages2] = useState([]);
    // handle guide's checked languages
    const [checkedState2, setCheckedState2] = useState(() => {
        return Object.entries(languageArray2).map(([key, value])=> false);
    });
    const handleLanguage2 = (key, value, index) => {
        console.log(languages2);
        const indexx = languages2.indexOf(key);
        if (indexx !== -1) {
            console.log(`Found value ${key} at index ${indexx}`);
            languages2.splice(indexx, 1);
            console.log(languages2);
        } else {
            console.log(`Value ${key} not found`);
            languages2.push(key)
            console.log(languages2);
        }
    };
    const handleCheckboxChange2 = (index, key, value) => {
        setCheckedState2((prevState) => {
        const newState = [...prevState];
        newState[index] = !newState[index];
        return newState;
        });
        console.log(index + ' => ' + key + ' => ' + value);
        handleLanguage2(key, value, index);
    };


    useEffect(() => {
        setIsLoading(true)
        console.log('My Account');
        axios.get(APP_URL + 'get-my-account-data/' + id)
        .then((response) => {
            if (response.status === 200) {  
                setGName(response.data['name']);
                setGEmail(response.data['email']);
                setNumber(response.data['contact_number']);
                setAddress1(response.data['address_1']);
                setAddress2(response.data['address_2']);
                setZipCode(response.data['zip_code']);
                setLisence('Not set');
                setExpire(response.data['lisence_expire_date']);
                setTravelDest1(response.data['destination_1']);
                setTravelDest2(response.data['destination_2']);
                setNumOfYears(response.data['num_of_years']);
                setNameOfOperator(response.data['operator']);
                setDescription(response.data['note']);
                setCertificate(response.data['certificate_image']);

                global.globalName = response.data['name'];
                global.globalEmail = response.data['email'];
                global.globalNumber = response.data['contact_number'];
                global.globalAddress1 = response.data['address_1'];
                global.globalAddress2 = response.data['address_2'];
                global.globalZipCode = response.data['zip_code'];
                global.globalLisence = 'not set';
                global.globalExpire = response.data['lisence_expire_date'];
                global.globalDestination1 = response.data['destination_1'];
                global.globalDestination2 = response.data['destination_2'];
                global.globalNumOfYears = response.data['num_of_years'];
                global.globalOperator = response.data['operator'];
                global.globalDescription = response.data['note'];
                global.globalCertificate = response.data['certificate_image'];

                console.log(response.data['lang'])
                console.log(response.data['g_lang'])

                var languageObject = (response.data['g_lang']).reduce((acc, curr) => ({ ...acc, ...curr }), {});
                setLanguageArray(languageObject)
                console.log(languageArray)

                var languageObject2 = (response.data['lang']).reduce((acc, curr) => ({ ...acc, ...curr }), {});
                setLanguageArray2(languageObject2)
                console.log(languageArray2)
                
                // Create a new object with the values in arr1 that are not in arr2
                const diffObject = {};
                Object.keys(languageArray2).forEach((key, value) => {
                  if (!Object.values(languageArray).includes(languageArray[key])) {
                    diffObject[key] = languageArray[key];
                  }
                });      
                console.log(diffObject);
  
                setIsLoading(false)
            } else {
                console.error('Error:', response.status);
            }
        }).catch((error) => {
            console.error(error.response.data);
            setIsLoading(false)
        });
        setIsLoading(false)
    }, [])


    const [galleryPhoto, setGalleryPhoto] = useState();
    const openGallery = async () =>{
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true
          }).then(image => {
            setGalleryPhoto(image.path);
            setIsEdited(true)
          });
    }

    // Certificate image picker
    const [certificateUri, setCertificateUri] = useState('not set');
    const getCertificate = async () =>{
        ImagePicker.openPicker({
            }).then(image => {
            setCertificate(image.path);
            setIsEdited(true)
            });
    }

    const [iseditable, setIsEditable] = useState(false)

    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [editCredentials, setEditCredentials] = useState(false);

    const editableInputs = ()=>{
        setIsEditable(!iseditable)
        setEditCredentials(!editCredentials);
        console.log(iseditable)
    }

    const showToast = () => {
        Toast.show({
          type: 'success',
          text1: 'Done',
          text2: 'Profile Updated Successfully'
        });
    }

    const [numOfErr, setNumOfErr] = useState(0);
    const [fieldsError, setFieldsError] = useState('');

    //name validation
    const nameRegex = new RegExp(/^(?=.{4,150}$)(?![_.])(?!.*[_.]{2})[a-zA-Z .]+(?<![_.])$/i);  
    const [nameError, setNameError] = useState('');
    const nameValidate =()=>{
        if(gname ==""){
            setGName(globalName);
            setNameError('')
            setNumOfErr(0)
        }else{
            if(nameRegex.test(gname)){
                setNameError('')
                setNumOfErr(0)
                setIsEdited(true)
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
        if(gemail ==""){
            setGEmail(globalEmail);
            setEmailError('')
            setNumOfErr(0)
        }else{
            if(emailRegex.test(gemail)){
                setEmailError('')
                setNumOfErr(0)
                setIsEdited(true)
                if(gemail == globalEmail){
                    setGEmail(globalEmail);
                    setEmailError('')
                    setNumOfErr(0)
                }else{
                    axios.get(APP_URL + 'email-exist/' + gemail)
                    .then((response) => {
                        // console.log(response.data)
                        if(response.data == 'good'){
                            setEmailError('')
                            setNumOfErr(0)
                            setIsEdited(true)
                        }else{
                            setEmailError('Email already exist')
                            setNumOfErr(1)
                            setIsEdited(false)
                        }
                    })
                    .catch((error)=>{
                        console.error(error.response.data)
                    })
                }

            }else{
                setEmailError("Not a valide email format")
                setNumOfErr(1)
            }
        }
    }

    //mobile number validation
    const numberdRegex = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i);
    const [numberError, setNumberdError] = useState('');
    const numberValidate =()=>{
        if(number == ""){
            setNumber(globalNumber);
            setNumberdError('')
            setNumOfErr(0)
        }else{
            if(numberdRegex.test(number)){
                if(number == globalNumber){
                    setNumber(globalNumber);
                    setNumberdError('')
                    setNumOfErr(0)
                    setIsEdited(false)
                }else{
                    axios.get(APP_URL + 'number-exist/' + number)
                    .then((response) => {
                        console.log(response.data)
                        if(response.data == 'good'){
                            setNumberdError('')
                            setNumOfErr(0)
                            setIsEdited(true)
                        }else{
                            setNumberdError('Phone number already exist')
                            setNumOfErr(1)
                            setIsEdited(false)
                        }
                    })
                    .catch((error)=>{
                        console.error(error.response.data)
                    })
                }
            }else{
                setNumberdError("Invalid phone number format")
                setNumOfErr(1)
            }
        }
    }

    //address 1 validation
    const [address1Error, setAddress1Error] = useState('');
    const address1Validate =()=>{
        if(address1 ==""){
            setAddress1(globalAddress1);
            setAddress1Error('')
            setNumOfErr(0)
        }else{
            setAddress1Error('')
            setNumOfErr(0)
            setIsEdited(true)
        }
    }

    //address 2 validation
    const [address2Error, setAddress2Error] = useState('');
    const address2Validate =()=>{
        if(address2 ==""){
            setAddress2(globalAddress2);
            setAddress2Error('')
            setNumOfErr(0)
        }else{
            setAddress2Error('')
            setNumOfErr(0)
            setIsEdited(true)
        }
    }

    //zip code validation
    const zipCodeRegex = new RegExp(/^\d+$/);
    const [zipCodeError, setZipCodeError] = useState('');
    const ZipCodeValidate =()=>{
        if(zipCode == ""){
            setZipCode(globalZipCode);
            setZipCodeError('')
            setNumOfErr(0)
        }else{
            if(zipCodeRegex.test(zipCode)){
                setZipCodeError('')
                setNumOfErr(0)
                setIsEdited(true)
            }else{
                setZipCodeError("Invalid code")
                setNumOfErr(1)
            }
        }
    }

    //lisence validation
    const [lisenceError, setLisenceError] = useState('');
    const lisenceValidate =()=>{
        if(lisence ==""){
            setLisence(globalLisence);
            setLisenceError('')
            setNumOfErr(0)
        }else{
            setLisenceError('')
            setNumOfErr(0)
            setIsEdited(true)
        }
    }

    //destination 1 validation
    const [destination1Error, setDestination1Error] = useState('');
    const destination1Validate =()=>{
        if(travelDest1 ==""){
            setTravelDest1(globalDestination1);
            setDestination1Error('')
            setNumOfErr(0)
        }else{
            setDestination1Error('')
            setNumOfErr(0)
            setIsEdited(true)
        }
    }

    //destination 2 validation
    const [destination2Error, setDestination2Error] = useState('');
    const destination2Validate =()=>{
        if(travelDest2 ==""){
            setTravelDest2(globalDestination2);
            setDestination2Error('')
            setNumOfErr(0)
        }else{
            setDestination2Error('')
            setNumOfErr(0)
            setIsEdited(true)
        }
    }

    //number fo years of experience validation
    const numOfYearsRegex = new RegExp(/^\d+$/);
    const [numOfYearsError, setNumOfYearsError] = useState('');
    const numOfYearsValidate =()=>{
        if(numOfYears == ""){
            setNumOfYears(globalNumOfYears);
            setNumOfYearsError('')
            setNumOfErr(0)
        }else{
            if(numOfYearsRegex.test(numOfYears)){
                setNumOfYearsError('')
                setNumOfErr(0)
                setIsEdited(true)
            }else{
                setNumOfYearsError("Invalid input")
                setNumOfErr(1)
            }
        }
    }

    //operator name validation
    const nameOfOperatorRegex = new RegExp(/^(?=.{4,150}$)(?![_.])(?!.*[_.]{2})[a-zA-Z .]+(?<![_.])$/i);  
    const [nameOfOperatorError, setNameOfOperatorError] = useState('');
    const nameOfOperatorValidate =()=>{
        if(nameOfOperator ==""){
            setNameOfOperator(globalOperator);
            setNameOfOperatorError('')
            setNumOfErr(0)
        }else{
            if(nameOfOperatorRegex.test(nameOfOperator)){
                setNameOfOperatorError('')
                setNumOfErr(0)
                setIsEdited(true)
            }else{
                setNameOfOperatorError("Cannot include numbers & special characters")
                setNumOfErr(1)
            }
        }
    }

    //description validation
    const [descriptionError, setDescriptionError] = useState('');
    const descriptionValidate =()=>{
        if(description ==""){
            setDescription(globalDescription);
            setDescriptionError('')
        }else{
            setDescriptionError('')
            setNumOfErr(0)
            setIsEdited(true)
        }
    }

    //password validation
    const passwordRegex = new RegExp(/^(?=.*)(?=.*[a-z])(?=.*[a-z])(?=.*[a-zA-Z]).{6,}$/i); 
    const [passwordError, setPasswordError] = useState('');
    const passwordValidate =()=>{
        if(confirmPassword == ""){
            if(newPassword ==""){
                setNumOfErr(0)
            }else{
                if(passwordRegex.test(newPassword)){
                    setPasswordError('')
                    setNumOfErr(0)
                }else{
                    setPasswordError("Must be at least 6 characters")
                    setNumOfErr(1)
                }
            }
        }else{
            if(newPassword == confirmPassword){
                setConfirmPasswordError("")
                setNumOfErr(0)
            }else{
                setConfirmPasswordError("Confirm Password doesn't match")
                setNumOfErr(1)
            }
        }
    }

    //confirm password validation
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const confirmPasswordValidate =()=>{
        if(newPassword == ""){
            if(confirmPassword ==""){
                setConfirmPasswordError('')
                setNumOfErr(0)
            }else{
                setConfirmPasswordError('New Password is required')
                setNumOfErr(1)
            }
        }else{
            if(newPassword == confirmPassword){
                setConfirmPasswordError("")
                setNumOfErr(0)
            }else{
                setConfirmPasswordError("Confirm Password doesn't match")
                setNumOfErr(1)
            }
        }
    }

    //certificate upload function
    const certificateUpload = ()=>{
        const data = new FormData();
        data.append('photo', {
            name: 'photo.jpg',
            type: 'image/jpg',
            uri:
            Platform.OS === 'android' ? certificate : certificate.replace('file://', ''),     
        });
        data.append('title', 'hello');
        data.append('email', email);
        fetch(APP_URL+'certificate-image-update', {
            method: 'POST',
            body: data,
        })
        .then(response => response.json())
        .then(response => {
            if(response['status'] == 'success'){
                    setIsLoading(false);
                    showToast();
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Account' }],
                    });
            }else{
                setIsLoading(false);
            }           
        })
        .catch(error => {
            console.error(error.response.data);
            setIsLoading(false);
        });
    }

    //profile image upload function
    const imageUpload = ()=>{
        const data = new FormData();
        data.append('photo', {
            name: 'photo.jpg',
            type: 'image/jpg',
            uri:
            Platform.OS === 'android' ? galleryPhoto : galleryPhoto.replace('file://', ''),     
        });
        data.append('title', 'hello');
        data.append('email', email);   
        fetch(APP_URL+'account-image-update', {
            method: 'POST',
            body: data,
        })
        .then(response => response.json())
        .then(response => {
            if(response == 'success'){

                global.profileImage = galleryPhoto;
                AsyncStorage.setItem('asyncProfileImage', galleryPhoto);

                if(certificate == globalCertificate){
                    console.log('Profile image uploaded Successfull')
                    setIsLoading(false);
                    showToast();
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Account' }],
                    });
                }else{
                    certificateUpload();
                    console.log('Certificate upload')
                    setIsLoading(false);
                }
            }else{
                console.log('Something went wrong');
                setIsLoading(false);
            } 
        })
        .catch(error => {
            console.error(error.response.data);
            setIsLoading(false);
        });
    }

    const profileUpdate = ()=>{
        if(numOfErr == 0){
            axios.post(APP_URL+'update-account',
            {
              gemail, address1, address2, zipCode, lisence,  travelDest1, travelDest2, numOfYears, nameOfOperator, description,             
            },
            )
            .then(response => {
                console.log(response.data)

                // global.name = gname;
                // global.modName = response.data;
                // global.email = gemail;

                // AsyncStorage.setItem('asyncName', gname);
                // AsyncStorage.setItem('asyncModName', response.data);
                // AsyncStorage.setItem('asyncEmail', gemail);

                if(response.status == 200){
                    if(galleryPhoto == null){
                        if(certificate == globalCertificate){
                            setIsLoading(false);
                            showToast();
                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'Account' }],
                            }); 
                        }else{
                            console.log('certificate upload')
                            certificateUpload();
                            setIsLoading(false);
                        }
                    }else{
                        imageUpload();
                        console.log('image upload') 
                        setIsLoading(false);
                    }
                }else{
                    setFieldsError(response.data)
                    setIsLoading(false);
                    console.log('not success')
                }
            })
            .catch(error => {
                console.error(error.response.data);
                console.log('catch error')
                setIsLoading(false);
            });
        }else{
            setFieldsError('Please check your details')
        }
    }

    const handleSubmit = ()=>{
        if(numOfErr == 0){
            setIsLoading(true);
            setFieldsError('')
            if(iseditable == true){
                axios.post(APP_URL + 'handle-submit',{
                    gname, number, globalEmail,
                    // gemail,
                }).then((response)=>{
                    console.log(response.data)
                    if(response.data['msg'] == "success"){
                        global.name = gname;
                        global.modName = response.data['mod_name'];
                        AsyncStorage.setItem('asyncName', gname);
                        AsyncStorage.setItem('asyncModName', response.data['mod_name']);
                        profileUpdate()
                        // if(gemail == globalEmail){
                        //     console.log('email does not need to update');
                        // }else{
                        //     const auth = getAuth();
                        //     updateEmail(auth.currentUser, gemail)
                        //     .then((userCredential) => {
                        //         console.log('success firebase email');
                        //         console.log(userCredential.user.email);
                        //     })
                        //     .catch((error) => {
                        //         console.error(error)
                        //         setEmailError(error)
                        //     });
                        // }
                    }else{
                        setFieldsError('Something went wrong')
                    }
                }).catch((error)=>{
                    console.error(error.response.data)
                })
            }else{
                profileUpdate()
            }
        }else{
            setFieldsError('Please check your details')
        }
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
            
                               {galleryPhoto == null ? <Image source={profileImage == 'https://triptosters.enricharcane.info/not set' ? require('../assets/images/profile_pic.jpg') : {uri:profileImage} } resizeMode='contain' style={styles.logo} /> :<Image source={{uri:galleryPhoto}} resizeMode='contain' style={styles.logo} /> }

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
                                    {guideId}
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
                                            // onPress: () => {
                                            //     userName = '';
                                            //     subUsername = '';
                                            //     profilePhoto = '';
                                            //     time = '';
                                            //     AsyncStorage.clear();

                                            //     navigation.reset({
                                            //         index: 0,
                                            //         routes: [{ name: 'Login' }],
                                            //     });
                                            // }
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
                            {/* Activity indicator */}
                            {isLoading ? (<ActivityIndicator size="large" color="#fcba03" />) : (<Text></Text>)}
                        </View>
                    </View>

                    <BasicContainer>
                        <H2 value='Contact details' />
                    </BasicContainer>

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
                            defaultValue={address1}
                            onChangeText={(text)=>setAddress1(text)}
                            onBlur={address1Validate}
                        />
                    </View>
                    <View style={styles.errorTextContainer}>
                        <Text style={styles.errorText}>
                            {address1Error}
                        </Text>
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
                            defaultValue={address2}
                            onChangeText={(text)=>setAddress2(text)}
                            onBlur={address2Validate}
                        />
                    </View>
                    <View style={styles.errorTextContainer}>
                        <Text style={styles.errorText}>
                            {address2Error}
                        </Text>
                    </View>
                    {/* Zip Code */}
                    <View style={styles.inputContainer}>
                        <TextInput 
                            placeholder= {'Zip Code'}
                            placeholderTextColor = {Colors.placeholderColor}
                            color={Colors.inputTextColor}
                            maxLength={200}
                            keyboardType="numeric" 
                            // autoCapitalize="none"
                            style={styles.formInput}
                            defaultValue={zipCode}
                            onChangeText={(text)=>setZipCode(text)}
                            onBlur={ZipCodeValidate}
                        />
                    </View>
                    <View style={styles.errorTextContainer}>
                        <Text style={styles.errorText}>
                            {zipCodeError}
                        </Text>
                    </View>

                    {/* Certificate */}
                    <View style={styles.imagContainer}>
                        <TouchableOpacity onPress={ getCertificate }>
                            <View style={styles.selectBody}>
                                <View style={styles.selectCard}>
                                    <View style={styles.selectIcon}>

                                    <Image source={certificate == 'not set' ? <Icon name="photo" color={'#808080'} size={44}/> : {uri:certificate} } resizeMode='contain' style={styles.certificate} />

                                        {/* <Icon name="photo" color={'#808080'} size={44}/>
                                        <Text style={styles.selectText}> Upload Certificate image </Text> */}

                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
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
                            defaultValue={lisence}
                            onChangeText={(text)=>setLisence(text)}
                            onBlur={lisenceValidate}
                        />
                    </View>
                    <View style={styles.errorTextContainer}>
                        <Text style={styles.errorText}>
                            {lisenceError}
                        </Text>
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
                            defaultValue={expire}
                            onChangeText={(text)=>setExpire(text)}
                        />
                    </View>
                    <View style={styles.errorTextContainer}>
                        <Text style={styles.errorText}>
                            {/* {expireError} */}
                        </Text>
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
                    <View style={styles.errorTextContainer}>
                        <Text style={styles.errorText}>
                            {/* {countryError} */}
                        </Text>
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
                            defaultValue={travelDest1}
                            onChangeText={(text)=>setTravelDest1(text)}
                            onBlur={destination1Validate}
                        />
                    </View>
                    <View style={styles.errorTextContainer}>
                        <Text style={styles.errorText}>
                            {destination1Error}
                        </Text>
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
                            defaultValue={travelDest2}
                            onChangeText={(text)=>setTravelDest2(text)}
                            onBlur={destination2Validate}
                        />
                    </View>
                    <View style={styles.errorTextContainer}>
                        <Text style={styles.errorText}>
                            {destination2Error}
                        </Text>
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
                            keyboardType="numeric" 
                            autoCapitalize="none"
                            style={styles.formInput}
                            defaultValue={numOfYears}
                            onChangeText={(text)=>setNumOfYears(text)}
                            onBlur={numOfYearsValidate}
                        />
                    </View>
                    <View style={styles.errorTextContainer}>
                        <Text style={styles.errorText}>
                            {numOfYearsError}
                        </Text>
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
                            defaultValue={nameOfOperator}
                            onChangeText={(text)=>setNameOfOperator(text)}
                            onBlur={nameOfOperatorValidate}
                        />
                    </View>
                    <View style={styles.errorTextContainer}>
                        <Text style={styles.errorText}>
                            {nameOfOperatorError}
                        </Text>
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
                            defaultValue={description}
                            onChangeText={(text)=>setDescription(text)}
                            onBlur={descriptionValidate}
                        />
                    </View>
                    <View style={styles.errorTextContainer}>
                        <Text style={styles.errorText}>
                            {descriptionError}
                        </Text>
                    </View>

                    <BasicContainer>
                        <H2 value='Languages (Speaking/Writing)' />
                    </BasicContainer>

                    <View style={styles.checkboxContainer}>
                        {
                            Object.entries(languageArray).map(([key, value], index) => (
                                <View key={key} style={styles.checkboxContent}>
                                    <Checkbox
                                        onPress={() => handleCheckboxChange(index, key, value)}
                                        status={checkedState[index] ? "unchecked" : "checked"}
                                        uncheckedColor={"#828282"}
                                        color={Colors.blackText}
                                    />
                                    <Text style={styles.label}>{value}</Text>
                                </View>
                            ))
                        }
                        {
                            Object.entries(languageArray2).map(([key, value], index) => (
                                <View key={key} style={styles.checkboxContent}>
                                    <Checkbox
                                        onPress={() => handleCheckboxChange2(index, key, value)}
                                        status={checkedState2[index] ? "checked" : "unchecked"}
                                        uncheckedColor={"#828282"}
                                        color={Colors.blackText}
                                    />
                                    <Text style={styles.label}>{value}</Text>
                                </View>
                            ))
                        }
                    </View>

                    <BasicContainer>
                        <H2 value='Credentials' />
                    </BasicContainer>

                    <View style={styles.credentialsCheckContainer}>
                        <View style={styles.checkboxContent2}>
                            <Text style={styles.label2}>Do you want to edit credentials?</Text>
                            <Checkbox
                                status={editCredentials ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    editableInputs();
                                }}
                                uncheckedColor={'#828282'}
                                color={Colors.blackText}
                            />
                        </View>
                    </View>

                    {/* Name */}
                    <View style={styles.inputContainer}>
                        <TextInput 
                            placeholder= {'Name'}
                            placeholderTextColor = {Colors.placeholderColor}
                            color={Colors.inputTextColor}
                            maxLength={200}
                            editable = {iseditable}
                            keyboardType="default" 
                            autoCapitalize="none"
                            style={styles.formInput}
                            defaultValue={gname}
                            onChangeText={(text)=>setGName(text)}
                            onBlur={nameValidate}
                        />
                    </View>
                    <View style={styles.errorTextContainer}>
                        <Text style={styles.errorText}>
                            {nameError}
                        </Text>
                    </View>
                    {/* Email */}
                    <View style={styles.inputContainer}>
                        <TextInput 
                            placeholder= {'Email'}
                            placeholderTextColor = {Colors.placeholderColor}
                            color={Colors.inputTextColor}
                            maxLength={200}
                            editable = {iseditable}
                            keyboardType="default" 
                            autoCapitalize="none"
                            style={styles.formInput}
                            defaultValue={gemail}
                            onChangeText={(text)=>setGEmail(text)}
                            onBlur={emailValidate}
                        />
                    </View>
                    <View style={styles.errorTextContainer}>
                        <Text style={styles.errorText}>
                            {emailError}
                        </Text>
                    </View>
                    {/* Telephone */}
                    <View style={styles.inputContainer}>
                        <TextInput 
                            placeholder= {'Telephone'}
                            placeholderTextColor = {Colors.placeholderColor}
                            color={Colors.inputTextColor}
                            maxLength={200}
                            editable = {iseditable}
                            keyboardType="numeric" 
                            autoCapitalize="none"
                            style={styles.formInput}
                            defaultValue={number}
                            onChangeText={(text)=>setNumber(text)}
                            onBlur={numberValidate}
                        />
                    </View>
                    <View style={styles.errorTextContainer}>
                        <Text style={styles.errorText}>
                            {numberError}
                        </Text>
                    </View>

                    <BasicContainer>
                        <H2 value='Change password' />
                    </BasicContainer>

                    {/* Password */}
                    <View style={styles.inputContainer}>
                        <View style={styles.passwordcontainer}>
                            <TextInput 
                                secureTextEntry={value}
                                placeholder= {'Password'}
                                placeholderTextColor = {Colors.placeholderColor}
                                maxLength={200}
                                editable = {iseditable}
                                color={Colors.inputTextColor}
                                autoCapitalize="none"
                                style={[styles.passwordInput, {zIndex:-2}]}
                                onChangeText={(text)=>setNewPassword(text)}
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
                            editable = {iseditable}
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


                    {/* Login button */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={handleSubmit} >
                            <Text style={styles.buttonText}>
                                Update
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.errorTextContainer}>
                        <Text style={styles.errorText}>
                            {fieldsError}
                        </Text>
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
    checkboxContainer:{
        marginTop: 10,
        width: '100%',
        // height: 120,
        // backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
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
    checkboxContent:{
        width: '35%',
        // backgroundColor: 'green',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft: 10,
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
        // width: '100%',
        height: '80%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',
        display: 'flex',
        marginTop: 6,
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
    selectBody:{
        // backgroundColor: '#000',
        width: '100%',
        height: 200,
        // borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectCard:{
        width: '100%',
        height: '90%',
        backgroundColor: '#dbdbdb',
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: '#d9d9d9',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
    },  
    selectIcon:{
        // width: '100%',
        // height: '100%',
        // backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
    },
    certificate:{
        width: 300,
        height: '100%'
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
    credentialsCheckContainer:{
        // backgroundColor: 'red',
        width: '100%',
        height: 50,
    },
    checkboxContent2:{
        // backgroundColor: 'green',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center'
    },
    label2:{
        // backgroundColor: 'yellow',
        fontSize: 16,
        color: Colors.placeholderColor
    }

})

export default MyAccount;