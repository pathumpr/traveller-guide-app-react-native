import {React, useState} from 'react';
import { View,
         Text,
         TouchableOpacity,
         Image,
         StyleSheet,
         SafeAreaView,
         Button,
         Alert,
         TextInput,
         ActivityIndicator, 
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-toast-message';
import Colors from '../../styles/Colors';

import {APP_URL, RESOURCE_URL} from '../../constants/App';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CommonActions } from '@react-navigation/native';

import Divider from '../../components/Divider';
import TextSmall from '../../components/TextSmall';


const Login = ()=>{

    const navigation = useNavigation();
    const BottomTabNavigator = createBottomTabNavigator();

    const [isLoading, setIsLoading] = useState(false);

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


    // Form validation
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let [numOfErr, setNumOfErr] = useState(0);

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

    //Login button function    
    const [fieldsError, setFieldsError] = useState('');
    const login = ()=>{
    // console.log(numOfErr)
    setIsLoading(true);

        if(numOfErr == 0){

            if(password && email != ""){
                setFieldsError('')

                const token = 'triptostersGuideAppEA@2022';

                axios.post(APP_URL+'login',{
                    token,
                    email,
                    password,
                },).then(response => {

                    console.log(response.data['username']);

                    if(response.data['status'] == 'success'){

                        Toast.show({
                            type: 'success',
                            text1: 'Welcome ' + response.data['username'] + '!',
                            text2: 'Login Successfully'
                        });

                        AsyncStorage.clear();
                        AsyncStorage.setItem('asyncUsername', response.data['username']);
                        AsyncStorage.setItem('asyncSubUsername', response.data['modUsername']);
                        AsyncStorage.setItem('asyncGalleryPhotoUri', response.data['photo']);

                        global.userName = response.data['username'];
                        global.subUsername = response.data['modUsername'];
                        global.profilePhoto = response.data['photo'];

                        navigation.navigate('Main', { screen: 'Home' });
                        setIsLoading(false);

                    }else{
                        setFieldsError(response.data)
                    }
                }).catch(error =>{
                    setIsLoading(false);
                    console.log(error);
                })

            }else{
                setIsLoading(false);
                setFieldsError('Input fields are required')
            }
        }else{
            setIsLoading(false);
            setFieldsError('')
        }
    }


    return(

        <SafeAreaView style={styles.body}>
        
        

            <View style={styles.container}>

                {/* Activity indicator */}
                {isLoading ? (
                    <ActivityIndicator size="large" color="#fcba03" />
                ) :(<Text></Text>)}

                <View style={styles.section1}>

                    <Image source={require('../../assets/images/logo.png')} resizeMode='contain' style={styles.logo} />

                </View>


                <View style={styles.section2}>
                
                    {/* Email */}
                    <View style={styles.inputContainer}>
                        <TextInput 
                            placeholder= {'Email address'}
                            placeholderTextColor = {Colors.placeholderColor}
                            maxLength={200}
                            color={Colors.inputTextColor}
                            keyboardType="default" 
                            autoCapitalize="none"
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
                                maxLength={100}
                                color={Colors.inputTextColor}
                                autoCapitalize="none"
                                style={styles.passwordInput}
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

                    {/* Login button */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={login}>
                            <Text style={styles.buttonText}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.errorTextContainer, {marginTop:7},]}>
                        <Text style={styles.errorText}>
                        {fieldsError}
                        </Text>
                    </View>

                </View>


                <View style={styles.section3}>

                    <Divider/>

                    <TextSmall text="or signup with" />

                    <View style={styles.socialIconsContainer}>

                        <TouchableOpacity>
                            <View style={styles.icon}>
                                <Icon name="google" size={36} color={Colors.socialIconColor} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.icon}>
                                <Icon name="apple" size={36} color={Colors.socialIconColor} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.icon}>
                                <Icon name="twitter" size={36} color={Colors.socialIconColor} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.icon}>
                                <Icon name="facebook" size={36} color={Colors.socialIconColor} />
                            </View>
                        </TouchableOpacity>

                    </View>

                    <View>
                        <TouchableOpacity onPress={()=>{
                            navigation.navigate('Register')
                        }}>
                            <TextSmall text="New to triptosters?" linkText="Register" />
                        </TouchableOpacity>
                    </View>
                    
                </View>

            </View>
            
        </SafeAreaView>
        

    )

}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    body:{
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: Colors.primaryBgColor,
    },
    container:{
        width: '85%',
        flex: 1,
        margin: 20,
    },  
    section1:{
        // backgroundColor: 'blue',
        width:'100%',
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    section2:{
        // backgroundColor: 'red',
        width:'100%',
        // height: 200,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    section3:{
        flex: 1,
        // backgroundColor: 'yellow',
        width:'100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    logo:{
        height: 150,
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
        // height: 80,
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
    socialIconsContainer:{
        width: '100%',
        height: 70,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    icon: {
        height: '100%',
        width: 70,
        margin: 1,
        // backgroundColor: 'red',
        borderRadius: 100,
        borderWidth: 1,
        borderColor: Colors.iconBorderColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorTextContainer:{
        display: 'flex',
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: 10,
    },
    errorText:{
        color: 'red',
        fontSize: 12,
    }, 


})

export default Login;