import {useState, useEffect, useRef, React} from 'react';
import { View,
        StyleSheet,
        TouchableOpacity,
        ScrollView,   
        TextInput,  
        Text,
        Image,
        ActivityIndicator,
        Alert,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Root, Popup } from 'react-native-popup-confirm-toast';
import DropDownPicker from 'react-native-dropdown-picker';
import {Picker} from '@react-native-picker/picker';
import ModalSelector from 'react-native-modal-selector-searchable';
import Toast from 'react-native-toast-message';
import {APP_URL, RESOURCE_URL} from '../../constants/App';
import axios from 'axios';
import Colors from '../../styles/Colors';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { authentication } from "../../constants/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Divider from '../../components/Divider';
import TextSmall from '../../components/TextSmall';
import H1 from '../../components/H1';
import H2 from '../../components/H2';
import BasicContainer from '../../components/BasicContainer';
// import Checkbox from '../../components/CheckBox';
import { Checkbox } from 'react-native-paper';

const Register = ({ navigation }) =>{

    const [isLoading, setIsLoading] = useState(false);

    // languages array
    const [languageArray, setLanguageArray] = useState({});
    const [languages, setLanguages] = useState([]);
    const [checked, setChecked] = useState(false);

    // handle checked languages
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

    useEffect(()=>{
        setIsLoading(true);
        axios.get(APP_URL + 'get-languages')
        .then((response)=>{
            console.log(response.data);
            const languageObject = (response.data).reduce((acc, curr) => ({ ...acc, ...curr }), {});
            setLanguageArray(languageObject)
            setIsLoading(false);
        })
        .catch((error)=>{
            console.log(error.response.data);
        })
    },[])

    // gender picker
    const [gender, setGender] = useState('');
    const data = [
        { key: 0, section: true, label: 'Select your gender' },
        { key: 'male', label: 'Male' },
        { key: 'female', label: 'Female' },
    ];

    // country picker
    const [country, setCountry] = useState('');
    const countryData = [
        { key: 0, section: true, label: 'Select your country' },
        { key: 'sri lanka', label: 'Sri Lanka' },
        { key: 'usa', label: 'USA' },
    ];

    // Gallery profile image picker
    const [galleryPhotoUri, setGalleryPhotoUri] = useState('not set');
    const [photo, setPhoto] = useState();
    const openGallery = async () =>{
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true
          }).then(image => {
            setGalleryPhotoUri(image.path);
            setPhoto(image.path);
          });
    }

    // Certificate image picker
    const [certificateUri, setCertificateUri] = useState('not set');
    const [certificate, setCertificate] = useState();
    const getCertificate = async () =>{
        ImagePicker.openPicker({
            }).then(image => {
            setCertificateUri(image.path);
            setCertificate(image.path);
            });
    }

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

    // input fields props
    const [username, setUsername] = useState('');
    const [subUsername, setSubUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [number, setNumber] = useState('');
    const [lisence, setLisence] = useState('');
    const [expire, setExpire] = useState('');
    const [travelDest1, setTravelDest1] = useState('');
    const [travelDest2, setTravelDest2] = useState('');
    const [numOfYears, setNumOfYears] = useState('');
    const [nameOfOperator, setNameOfOperator] = useState('');
    const [description, setDescription] = useState('');
    const [language, setLanguage] = useState('');
    let [numOfErr, setNumOfErr] = useState(0);

    // input fields validation
    //name validation
    const nameRegex = new RegExp(/^(?=.{4,150}$)(?![_.])(?!.*[_.]{2})[a-zA-Z .]+(?<![_.])$/i);  
    const [nameError, setNameError] = useState('');
    const nameValidate =()=>{
        if(name ==""){
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

    //Gender validation
    const [genderError, setGenderError] = useState('');
    const genderValidate =(option)=>{
        if(selectedGender == ''){
            setSelectedGender(option.key)
        }else{
            setSelectedGender(option.key)
        }
        if(selectedGender ==""){
            setGenderError('Gender is required')
            setNumOfErr(1)
        }else{
            setGenderError('')
            setNumOfErr(0)
        }
    }

    // Handle gender
    const handleGender = (option)=>{
        console.log(selectedGender);
        setSelectedGender(option.key);
        console.log(selectedGender);
    }

    //email validation
    const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i);
    const [emailError, setEmailError] = useState('');
    const emailValidate =()=>{
        if(email ==""){
            setEmailError('Email is required')
            setNumOfErr(1)
        }else{
            if(emailRegex.test(email)){
                setEmailError('')
                setNumOfErr(0)
            }else{
                setEmailError("Not a valide email format")
                setNumOfErr(1)
            }
        }
    }

    //address 1 validation
    const [address1Error, setAddress1Error] = useState('');
    const address1Validate =()=>{
        if(address1 ==""){
            setAddress1Error('Your address is required')
            setNumOfErr(1)
        }else{
            setAddress1Error('')
            setNumOfErr(0)
        }
    }

    //address 2 validation
    const [address2Error, setAddress2Error] = useState('');
    const address2Validate =()=>{
        if(address2 ==""){
            setAddress2Error('')
        }else{
        }
    }

    //country validation
    const [countryError, setCountryError] = useState('');
    const countryValidate =()=>{
        if(country ==""){
            setCountryError('Country is required')
            setNumOfErr(1)
        }else{
            setCountryError('')
            setNumOfErr(0)
        }
    }

    //zip code validation
    const zipCodeRegex = new RegExp(/^\d+$/);
    const [zipCodeError, setZipCodeError] = useState('');
    const ZipCodeValidate =()=>{
        if(zipCode == ""){
            setZipCodeError('Zip code is required')
            setNumOfErr(1)
        }else{
            if(zipCodeRegex.test(zipCode)){
                setZipCodeError('')
                setNumOfErr(0)
            }else{
                setZipCodeError("Invalid code")
                setNumOfErr(1)
            }
        }
    }

    //password validation
    const passwordRegex = new RegExp(/^(?=.*)(?=.*[a-z])(?=.*[a-z])(?=.*[a-zA-Z]).{6,}$/i); 
    const [passwordError, setPasswordError] = useState('');
    const passwordValidate =()=>{
        if(password ==""){
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
            setConfirmPasswordError('Confirm Password is required')
            setNumOfErr(1)
        }else{
            if(password == confirmPassword){
                setConfirmPasswordError("")
                setNumOfErr(0)
            }else{
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

    //Operator name validation
    const nameOfOperatorRegex = new RegExp(/^(?=.{4,150}$)(?![_.])(?!.*[_.]{2})[a-zA-Z .]+(?<![_.])$/i);  
    const [nameOfOperatorError, setNameOfOperatorError] = useState('');
    const nameOfOperatorValidate =()=>{
        if(nameOfOperator ==""){
            setNameOfOperatorError('Operator name is required')
            setNumOfErr(1)
        }else{
            if(nameOfOperatorRegex.test(nameOfOperator)){
                setNameOfOperatorError('')
                setNumOfErr(0)
            }else{
                setNameOfOperatorError("Cannot include numbers & special characters")
                setNumOfErr(1)
            }
        }
    }

    //Description validation
    const descriptionRegex = new RegExp(/^(?=.{4,150}$)(?![_.])(?!.*[_.]{2})[a-zA-Z .]+(?<![_.])$/i);  
    const [descriptionError, setDescriptionError] = useState('');
    const descriptionValidate =()=>{
        if(description ==""){
            setDescriptionError('Description is required')
            setNumOfErr(1)
        }else{
            if(descriptionRegex.test(description)){
                setDescriptionError('')
                setNumOfErr(0)
            }else{
                setDescriptionError("Cannot include numbers & special characters")
                setNumOfErr(1)
            }
        }
    }

    //Number of years validation
    const numOfYearsRegex =  new RegExp(/^\d+$/);
    const [numOfYearsError, setNumOfYearsError] = useState('');
    const numOfYearsValidate =()=>{
        if(numOfYears ==""){
            setNumOfYearsError('Number of years is required')
            setNumOfErr(1)
        }else{
            if(numOfYearsRegex.test(numOfYears)){
                setNumOfYearsError('')
                setNumOfErr(0)
            }else{
                setNumOfYearsError("Cannot include numbers & special characters")
                setNumOfErr(1)
            }
        }
    }

    //set selected languages
    // const handleLanguage = (key, value)=>{
    //     console.log(key + " => " + value)
    // }

    //Sending data to firebase
    const firebase = ()=>{
        createUserWithEmailAndPassword(authentication, email, password)
        .then((userCredential) => {
            console.log('Firebase => " success "');

            axios.get(APP_URL + 'guide-status/' + userCredential.user.email)
            .then((response) => {

                //setup global vars
                global.email = userCredential.user.email;
                global.name = response.data['name'];
                global.id = response.data['id'];
                global.guideId = response.data['guide_id'];
                global.uid = userCredential.user.uid;
                global.modName = response.data['mod_name'];
                global.profileImage = response.data['image'];

                //setup async storage
                AsyncStorage.setItem('asyncEmail', userCredential.user.email);
                AsyncStorage.setItem('asyncId', response.data['id']);
                AsyncStorage.setItem('asyncGuideId', response.data['guide_id']);
                AsyncStorage.setItem('asyncUid', userCredential.user.uid);
                AsyncStorage.setItem('asyncName', response.data['name']);
                AsyncStorage.setItem('asyncModName', response.data['mod_name']);
                AsyncStorage.setItem('asyncProfileImage', response.data['image']);

                setIsLoading(false);
                navigation.navigate('Main', { screen: 'Home' });

            }).catch((error) => {
                console.error(error.response.data);
                setIsLoading(false)
            });

            //setup global variables
            global.uid = userCredential.user.uid;
            global.email = email;
            
            Toast.show({
                type: 'success',
                text1: 'Welcome ' + email + '!',
                text2: 'Registration Successfully'
            });  
            setIsLoading(false);                         
            // navigation.navigate('Main', { screen: 'Home' });
        })
        .catch((error) => {
            if(error.code == 'auth/invalid-email'){
                setFieldsError('Invalid Email Address')
                setIsLoading(false);
            }
            if (error.code == 'auth/email-already-in-use') {
                setFieldsError('Email already in use')
                setIsLoading(false);
            }if(error.code == 'auth/network-request-failed'){
                setFieldsError('Please check your network connection')
                setIsLoading(false);
            }else {
                console.log(error.code);
                setIsLoading(false);
            }
        });
    }

    //certificate upload function
    const certificateUpload = ()=>{
        console.log('7');
        const data = new FormData();
        data.append('photo', {
            name: 'photo.jpg',
            type: 'image/jpg',
            uri:
            Platform.OS === 'android' ? certificateUri : certificateUri.replace('file://', ''),     
        });
        data.append('title', 'hello');
        data.append('id', id);
        fetch(APP_URL+'certificate-image-upload', {
            method: 'POST',
            body: data,
        })
        .then(response => response.json())
        .then(response => {
            console.log('8');
            console.log(response['msg']);
            if(response['status'] == 'success'){
                    firebase();
                    console.log('Both uploaded Successful')
            }else{
                console.log('Something went wrong');
                setIsLoading(false);
            }           
        })
        .catch(error => {
            console.log(error);
            setIsLoading(false);
        });
    }

    //profile image upload function
    const imageUpload = ()=>{
        console.log('3')
        const data = new FormData();
        data.append('photo', {
            name: 'photo.jpg',
            type: 'image/jpg',
            uri:
            Platform.OS === 'android' ? galleryPhotoUri : galleryPhotoUri.replace('file://', ''),     
        });
        data.append('title', 'hello');
        data.append('id', id); 
        console.log('4')
        fetch(APP_URL+'profile-image-upload', {
            method: 'POST',
            body: data,
        })
        .then(response => response.json())
        .then(response => {
            console.log('5');
            console.log(response['msg']);
            if(response['status'] == 'success'){
                global.profilePhoto = galleryPhotoUri;
                if(certificateUri == 'not set'){
                    firebase();
                    console.log('Profile image uploaded Successfull')
                }else{
                    certificateUpload();
                }
            }else{
                console.log('Something went wrong');
            }           
        })
        .catch(error => {
            console.error(error.response.data);
            console.log('6');
        });
    }

    //Sending data to backend
    const handleSubmit = ()=>{
        const status = 0;
        const profilePhoto = 'not set'; 
        const certificatePhoto = 'not set';            
        axios.post(APP_URL+'register',
        {
            name, gender, email, password, confirmPassword, number, address1, address2, country, zipCode, lisence, expire, travelDest1, travelDest2, numOfYears, nameOfOperator, description, profilePhoto, certificatePhoto, status, languages                   
        },
        )
        .then(response => {
            console.log(response.data);
            if(response.data['msg'] == "success"){
                console.log('1');
                global.id = response.data['id'].toString();
                console.log('2');
                AsyncStorage.setItem('asyncId', response.data['id'].toString());
                if(galleryPhotoUri == 'not set'){
                    if(certificateUri == 'not set'){
                        firebase();
                        console.log(response.data)
                    }else{
                        certificateUpload();
                    }
                }else{
                    imageUpload(); 
                    setIsLoading(false);
                }
            }else{
                // setFieldsError(response.data)
                setIsLoading(false);
                console.log('Not success')
            }
        })
        .catch(error => {
            console.error(error.response.data);
            console.log('catch error')
            setIsLoading(false);
        });
    }

    //Register button function    
    const [fieldsError, setFieldsError] = useState('');
    const register = async ()=>{
        setIsLoading(true);
        if(numOfErr == 0){
            if(name && gender && email && password && confirmPassword && number && address1 && country && zipCode && numOfYears && nameOfOperator && description && languages != ""){ 
                console.log(languages)
                setFieldsError(''); 
                handleSubmit();
            }else{
                setFieldsError('Input fields are required')
                setIsLoading(false);
            }
        }else{
            setFieldsError('Please check your details')
            setIsLoading(false);
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

                                </TouchableOpacity>

                                <H2 value='Select Image'/>

                            </View>
                        </View>

                        <View style={styles.section2}>

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
                            
                            {/* Gender picker */}
                            <View style={styles.inputContainer2}>
                                <ModalSelector
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        // backgroundColor: Colors.inputBgColor,
                                        borderRadius: 5,
                                        color: 'red',
                                    }}
                                    selectStyle={{
                                        borderColor: Colors.inputBgColor,
                                        height: '100%',
                                        color: 'red',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'flex-start',
                                    }}   
                                    selectTextStyle={{
                                        color: Colors.inputTextColor,
                                        marginLeft: 5,
                                    }} 
                                    sectionTextStyle={{
                                        color: 'red',
                                    }}
                                    data={data}
                                    initValue="Select your gender"
                                    supportedOrientations={['landscape']}
                                    accessible={true}
                                    scrollViewAccessibilityLabel={'Scrollable options'}
                                    cancelButtonAccessibilityLabel={'Cancel Button'}
                                    onChange={(option)=>{ setGender(option.label) }}>
                                    <TextInput
                                        style={styles.formInput}
                                        editable={false}
                                        placeholder="Select your gender"
                                        color={Colors.inputTextColor}
                                        value={gender} 
                                        onBlur={genderValidate}
                                    />
                                </ModalSelector>
                            </View>
                            <View style={styles.errorTextContainer}>
                                <Text style={styles.errorText}>
                                    {genderError}
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

                            <BasicContainer>
                                <H2 value='Contact details' />
                            </BasicContainer>

                            {/* Mobile Number*/}
                            <View style={styles.inputContainer}>
                                <TextInput 
                                    style={styles.formInput} 
                                    placeholder={'Mobile number'}
                                    placeholderTextColor={Colors.placeholderColor}
                                    color={Colors.inputTextColor}
                                    maxLength={20}
                                    keyboardType="phone-pad" 
                                    autoCapitalize="none"
                                    onChangeText={(text)=>setNumber(text)}
                                    onBlur={numberValidate}
                                />                                            
                            </View>
                            <View style={styles.errorTextContainer}>
                                <Text style={styles.errorText}>
                                    {numberError}
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
                            {/* <View style={styles.inputContainer}>
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
                            </View> */}
                            {/* Gender picker */}
                            <View style={styles.inputContainer2}>
                                <ModalSelector
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        // backgroundColor: Colors.inputBgColor,
                                        borderRadius: 5,
                                        color: 'red',
                                    }}
                                    selectStyle={{
                                        borderColor: Colors.inputBgColor,
                                        height: '100%',
                                        color: 'red',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'flex-start',
                                    }}   
                                    selectTextStyle={{
                                        color: Colors.inputTextColor,
                                        marginLeft: 5,
                                    }} 
                                    sectionTextStyle={{
                                        color: 'red',
                                    }}
                                    data={countryData}
                                    initValue="Select your country"
                                    supportedOrientations={['landscape']}
                                    accessible={true}
                                    scrollViewAccessibilityLabel={'Scrollable options'}
                                    cancelButtonAccessibilityLabel={'Cancel Button'}
                                    onChange={(option)=>{ setCountry(option.label) }}>
                                    <TextInput
                                        style={styles.formInput}
                                        editable={false}
                                        placeholder="Select your country"
                                        color={Colors.inputTextColor}
                                        value={country} 
                                        onBlur={countryValidate}
                                    />
                                </ModalSelector>
                            </View>
                            <View style={styles.errorTextContainer}>
                                <Text style={styles.errorText}>
                                    {countryError}
                                </Text>
                            </View>

                            {/* Zip Code*/}
                            <View style={styles.inputContainer}>
                                <TextInput 
                                    placeholder= {'Zip Code'}
                                    placeholderTextColor = {Colors.placeholderColor}
                                    maxLength={10}
                                    color={Colors.inputTextColor}
                                    keyboardType="phone-pad" 
                                    autoCapitalize="none"
                                    style={styles.formInput}
                                    onChangeText={(text)=>setZipCode(text)}
                                    onBlur={ZipCodeValidate}
                                />
                            </View>
                            <View style={styles.errorTextContainer}>
                                <Text style={styles.errorText}>
                                    {zipCodeError}
                                </Text>
                            </View>

                            <BasicContainer>
                                <H2 value='Qualifications (Optional)' />
                            </BasicContainer>

                            {/* Certificate */}
                            <View style={styles.imagContainer}>
                                <TouchableOpacity onPress={ getCertificate }>
                                    <View style={styles.selectBody}>
                                        <View style={styles.selectCard}>
                                            <View style={styles.selectIcon}>

                                            {
                                                certificate == null ? 
                                                <Icon name="photo" color={'#808080'} size={44}/> :
                                                <Image source={{uri:certificate}} resizeMode='contain' style={styles.certificate} />

                                            }

                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            {/* Lisence */}
                            <View style={styles.inputContainer}>
                                <TextInput 
                                    placeholder= {'License'}
                                    placeholderTextColor = {Colors.placeholderColor}
                                    color={Colors.inputTextColor}
                                    maxLength={200}
                                    keyboardType="default" 
                                    autoCapitalize="none"
                                    style={styles.formInput}
                                    onChangeText={(text)=>setLisence(text)}
                                    // onBlur={lisenceValidate}
                                />
                            </View>
                            {/* <View style={styles.errorTextContainer}>
                                <Text style={styles.errorText}>
                                    {lisenceError}
                                </Text>
                            </View> */}

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
                                    onChangeText={(text)=>setExpire(text)}
                                />
                            </View>
                            {/* <View style={styles.errorTextContainer}>
                                <Text style={styles.errorText}>
                                    {zipCodeError}
                                </Text>
                            </View> */}

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
                                    onChangeText={(text)=>setTravelDest1(text)}
                                />
                            </View>
                            {/* <View style={styles.errorTextContainer}>
                                <Text style={styles.errorText}>
                                    {zipCodeError}
                                </Text>
                            </View> */}

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
                                    onChangeText={(text)=>setTravelDest2(text)}
                                />
                            </View>
                            {/* <View style={styles.errorTextContainer}>
                                <Text style={styles.errorText}>
                                    {zipCodeError}
                                </Text>
                            </View> */}

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
                                {/* {
                                    Object.entries(languageArray).map(([key, value], index)=>{
                                        return(
                                            <View key={key} style={styles.checkboxContent}>
                                                <Checkbox
                                                    // onValueChange={()=>{
                                                    //     console.log('1')
                                                    // }}
                                                    // onPress={() => {
                                                    //     setChecked(!checked)
                                                    //     // console.log('2')
                                                    //     handleLanguage(key, value);
                                                    // }}
                                                    // status={checked ? 'checked' : 'unchecked'}
                                                    onPress={() => handleCheckboxChange(index)}
                                                    status={checkedState[index] ? "checked" : "unchecked"}
                                                    uncheckedColor={'#828282'}
                                                    color={Colors.blackText}
                                                />
                                                <Text style={styles.label}>{value}</Text>
                                            </View>
                                        )
                                    })
                                } */}

                                {Object.entries(languageArray).map(([key, value], index) => (
                                    <View key={key} style={styles.checkboxContent}>
                                    <Checkbox
                                        onPress={() => handleCheckboxChange(index, key, value)}
                                        status={checkedState[index] ? "checked" : "unchecked"}
                                        uncheckedColor={"#828282"}
                                        color={Colors.blackText}
                                    />
                                    <Text style={styles.label}>{value}</Text>
                                    </View>
                                ))}

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

                        {/* Activity indicator */}
                        {isLoading ? (
                            <ActivityIndicator size="large" color="#000" />
                        ) :(<Text></Text>)}

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
    inputContainer2:{
        width: '100%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
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
    checkboxContent:{
        width: '25%',
        // backgroundColor: 'green',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft: 10,
    },
    label: {
        width: 100,
        // backgroundColor: 'red',
        margin: 8,
        color: Colors.placeholderColor,
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
    selectText:{
        fontSize: 12,
        fontWeight: '400',
        color: '#808080',
        padding: 2,
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
    }
})

export default Register;