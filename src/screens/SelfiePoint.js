import React, { useState, useEffect } from "react";
import { View,
         Text,
         StyleSheet,
         SafeAreaView,
         TextInput,
         TouchableOpacity,
         Image,
    } from 'react-native';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import Colors from '../styles/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';
import { useNavigation } from '@react-navigation/native';

import H1 from '../components/H1';
import GalleryImage2 from '../components/GalleryImage2';

import NoneImage from '../assets/images/select-5.jpg';
import EmptyImage from '../assets/images/empty.jpg';
import axios from "axios";
import { APP_URL } from "../constants/App";


const MyAccount = ()=>{ 

    const navigation = useNavigation();

    //Array for scroll
    const [myArray, setMyArray] = useState([]);
    const [numOfErr, setNumOfErr] = useState(0);
    const [description, setDescription] = useState('');
    const [imageArray, setImageArray] = useState([]);
    const [descriptionError, setDescriptionError] = useState('');

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

    // Gallery profile image picker
    const [galleryPhoto, setGalleryPhoto] = useState('not set');
    const [photo, setPhoto] = useState();
    const openGallery = async () =>{
        if(myArray.length == 4){
            setDescriptionError("You can't select more than 4 images")
        }else{
            setDescriptionError("")
            ImagePicker.openPicker({
                width: 400,
                height: 400,
                cropping: true
            }).then(image => {
                setGalleryPhoto(image.path);
                setPhoto(image.path);
                const newArray = [...myArray, image.path]
                setMyArray( newArray)
            });
        }
    }

    const setPreview = (item, index)=>{
        setGalleryPhoto(item)
    }

    const deleteItem = ()=>{
        const updatedArray = myArray.filter(item => item !== galleryPhoto);
        setMyArray(updatedArray);
        setGalleryPhoto(updatedArray[0])
    }

    //Description validation
    const descriptionRegex = new RegExp(/^(?=.{1,150}$)(?![_.])(?!.*[_.]{2})[a-zA-Z .]+(?<![_.])$/i);  
    const descriptionValidate =()=>{
        if(description ==""){
            setDescriptionError('Description is required')
            setNumOfErr(1)
        }else{
            if(descriptionRegex.test(description)){
                setDescriptionError('')
                setNumOfErr(0)
            }else{
                setDescriptionError("Cannot include numbers, special characters")
                setNumOfErr(1)
            }
        }
    }

    // const uploadFunction = (i, data)=>{
    //     console.log(imageArray);
    //     console.log(i);
    //     fetch(APP_URL+'selfie-point', {      
    //         method: 'POST',
    //         body: imageArray,
    //     })
    //     .then((response)=>{
    //         if(response.status == 200){
    //             setMyArray([]);
    //             setDescription('');
    //             navigation.reset({
    //                 index: 0,
    //                 routes: [{ name: 'Tour Guide' }],
    //             }); 

    //             showToast()
    //         }else{
    //             setDescriptionError("Something went wrong")
    //         }
    //     })
    //     .catch((error)=>{
    //         console.error(error.response.data); 
    //     })
    // }

    const imageUpload_4 = () => {
        console.log('Fourth item --> ' + myArray[3])
        const data = new FormData();
        data.append('id', sefie_point_id);
        data.append('guide_id', id);
        data.append('image', {
            name: 'image.jpg',
            type: 'image/jpg',
            uri:
            Platform.OS === 'android' ? myArray[3] : myArray[3].replace('file://', ''),     
        });
        fetch(APP_URL+'selfie-point', {      
            method: 'POST',
            body: data,
        })
        .then((response)=>{
            // console.log(response)
            if(response.status == 200){
                console.log('4 images found')
                setMyArray([]);
                setDescription('');
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Tour Guide' }],
                }); 
                showToast()
            }else{
                setDescriptionError("Something went wrong")
            }
        })
        .catch((error)=>{
            console.error(error.response.data); 
        })
    }

    const imageUpload_3 = () => {
        const data = new FormData();
        console.log('Third item --> ' + myArray[2])
        data.append('id', sefie_point_id);
        data.append('guide_id', id);
        data.append('image', {
            name: 'image.jpg',
            type: 'image/jpg',
            uri:
            Platform.OS === 'android' ? myArray[2] : myArray[2].replace('file://', ''),     
        });
        fetch(APP_URL+'selfie-point', {      
            method: 'POST',
            body: data,
        })
        .then((response)=>{
            // console.log(response)
            if(response.status == 200){
                if(myArray.length > 3){
                    imageUpload_4()
                }else{
                    console.log('only 3 images found')
                    setMyArray([]);
                    setDescription('');
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Tour Guide' }],
                    }); 
                    showToast()
                }
            }else{
                setDescriptionError("Something went wrong")
            }
        })
        .catch((error)=>{
            console.error(error.response.data); 
        })
    }

    const imageUpload_2 = () => {
        const data = new FormData();
        console.log('Second item --> ' + myArray[1])
        data.append('id', sefie_point_id);
        data.append('guide_id', id);
        data.append('image', {
            name: 'image.jpg',
            type: 'image/jpg',
            uri:
            Platform.OS === 'android' ? myArray[1] : myArray[1].replace('file://', ''),     
        });
        fetch(APP_URL+'selfie-point', {      
            method: 'POST',
            body: data,
        })
        .then((response)=>{
            // console.log(response)
            if(response.status == 200){
                if(myArray.length > 2){
                    imageUpload_3()
                }else{
                    console.log('only 2 images found')
                    setMyArray([]);
                    setDescription('');
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Tour Guide' }],
                    }); 
                    showToast()
                }
            }else{
                setDescriptionError("Something went wrong")
            }
        })
        .catch((error)=>{
            console.error(error.response.data); 
        })
    }

    const imageUpload_1 = () => {
        const data = new FormData();
        console.log('First item --> ' + myArray[0])
        data.append('id', sefie_point_id);
        data.append('guide_id', id);
        data.append('image', {
            name: 'image.jpg',
            type: 'image/jpg',
            uri:
            Platform.OS === 'android' ? myArray[0] : myArray[0].replace('file://', ''),     
        });
        fetch(APP_URL+'selfie-point', {      
            method: 'POST',
            body: data,
        })
        .then((response)=>{
            // console.log(response)
            if(response.status == 200){
                if(myArray.length > 1){
                    imageUpload_2()
                }else{
                    console.log('only 1 image found')
                    setMyArray([]);
                    setDescription('');
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Tour Guide' }],
                    }); 
                    showToast()
                }
            }else{
                setDescriptionError("Something went wrong")
            }
        })
        .catch((error)=>{
            console.error(error.response.data); 
        })
    }

    const handleSubmit=()=>{
        console.log(myArray.length)
        if(myArray.length != 0){
            if(numOfErr == 0){
                if(description != '' ){
                    setDescriptionError("")
                    axios.post(APP_URL+'selfie-description',{
                        description, id
                    })
                    .then((response)=>{
                        if(response.data['msg'] = 'success'){
                            global.sefie_point_id = response.data['id'];
                            imageUpload_1()
                        }else{

                        }
                    })
                    .catch((err)=>{
                        console.log(err.response.data);
                    })

                }else{
                    setDescriptionError("Description is required")
                }
            }else{
                setDescriptionError("Please check your details")
            }
        }else{
            setDescriptionError("Select at least one image")
        }
    }

    return(        
        <SafeAreaView>
            <ScrollView>
                <H1 value='Selfie Point'/>
                <View style={styles.body}>
                    <View style={styles.container}>
                    {/* Description */}
                    <View style={styles.getImageContainer}>
                        <View style={styles.leftGetImageContainer}>
                            <View style={styles.inputContainer}>
                                <TextInput 
                                    placeholder= {'Add a description...'}
                                    placeholderTextColor = {Colors.placeholderColor}
                                    color={Colors.inputTextColor}
                                    maxLength={200}
                                    multiline={true}
                                    inputMode='text'
                                    autoCapitalize="sentences"
                                    style={styles.formInput}
                                    // onChangeText={(text)=>setAddress1(text)}
                                    // onBlur={address1Validate}
                                />
                            </View>
                        </View>
                        <View style={styles.rightGetImageContainer}>

                        </View>
                    </View>
                    <View style={styles.imagContainer}>
                        <View style={styles.selectBody}>
                            <View style={styles.selectCard}>
                                <View style={styles.selectIcon}>

                                <Image source={ myArray.length == 0 ? EmptyImage : {uri:galleryPhoto}} resizeMode='contain' style={styles.photoPreveiw} />

                                </View>
                            </View>
                        </View>
                        <View style={styles.optionsContainer}>
                            {
                                myArray.length == 0?
                                <View>
                                    {/* <Icon name='trash' size={22} color= {Colors.blackText} /> */}
                                </View> :
                                <TouchableOpacity onPress={()=>{
                                    deleteItem()
                                }}>
                                    <View style={styles.deleteButton}>
                                        <Icon name='trash' size={22} color= {Colors.blackText} />
                                    </View>
                                </TouchableOpacity>
                            }    
                        </View>
                    </View>
                    <View style={styles.middleContainer}>
                        <View style={styles.topContainer}>
                        <View style={styles.inputContainer}>
                                <TextInput 
                                    placeholder= {'Add a description...'}
                                    placeholderTextColor = {Colors.placeholderColor}
                                    color={Colors.inputTextColor}
                                    maxLength={200}
                                    multiline={true}
                                    inputMode='text'
                                    value={description}
                                    autoCapitalize="sentences"
                                    style={styles.formInput}
                                    onChangeText={setDescription}
                                    onBlur={descriptionValidate}
                                />
                            </View>
                        </View>
                        <View style={styles.bottomContainer}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                { myArray.length == 0 ?
                                    <Image source={EmptyImage} resizeMode='contain' style={styles.scrollerImageContainer} /> :
                                    myArray.map((item, index)=>{
                                        return(
                                            <TouchableOpacity key={index} onPress={()=>{
                                                setPreview(item, index)
                                            }}>
                                                <View  style={styles.scrollerImageContainer}>
                                                    <GalleryImage2 path={item}/>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </ScrollView>
                        </View>
                    </View>
                    {/*Upload button */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={()=>{
                            handleSubmit()
                        }} >
                            <Text style={styles.buttonText}>
                                Upload
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.errorTextContainer}>
                        <Text style={styles.errorText}>
                            {descriptionError}
                        </Text>
                    </View>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity
                    style={{
                    borderWidth: 1,
                    borderColor: 'rgba(0,0,0,0.2)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 60,
                    position: 'absolute',
                    top: 85,
                    right: 20,
                    height: 60,
                    backgroundColor: Colors.blackBgColor,
                    borderRadius: 100,
                    }}
                    onPress={
                        ()=>{
                            openGallery()
                        }
                    }
                >
                <Icon name='camera' size={26} color= {Colors.primaryBgColor} />
            </TouchableOpacity>
        </SafeAreaView>     
    )
}

const styles = StyleSheet.create({
    body:{
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // height: Dimensions.get('window').height-70,
        // backgroundColor: Colors.secondryBgColor,
    },
    container:{
        width: '85%',
        flex: 1,
        margin: 20,
    }, 
    // Update Button Styles
    buttonContainer:{
        width: '100%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 5,
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
    imagContainer:{
        width: '100%',
        // height: 130,
        height: Dimensions.get('window').height/3,
        // backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20,
    },
    selectBody:{
        // backgroundColor: '#000',
        // width: '100%',
        // height: 500,
        width: Dimensions.get('window').height/3,
        height: Dimensions.get('window').height/3,
        // borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    selectCard:{
        width: '100%',
        height: '100%',
        // borderColor: '#d9d9d9',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor: '#000',
    },  
    selectIcon:{
        // backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
    },
    photoPreveiw:{
        width: Dimensions.get('window').height/3,
        height: '100%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
    },
    optionsContainer:{
        height: '100%',
        width: Dimensions.get('window').height/9,
        // backgroundColor: '#000',
        marginLeft: 12,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    deleteButton:{
        width: Dimensions.get('window').height/9-40,
        height: Dimensions.get('window').height/9-40,
        // backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.blackBgColor,
    },
    middleContainer:{
        height: 200,
        // height: Dimensions.get('window').height/4
        width: '100%',
        // backgroundColor: 'red',
        marginTop: 20,

    },
    topContainer:{
        width: '100%',
        height: 50,
        // backgroundColor: 'yellow',
    },
    bottomContainer:{
        width: '100%',
        height: 130,
        // backgroundColor: 'green',
        marginTop: 15,
    },
    getImageContainer:{
        width: '100%',
        height: 50,
        // backgroundColor: 'green',
        display: 'flex',
        flexDirection: 'row',
    },
    leftGetImageContainer:{
        width: '80%',
        height: '100%',
        // backgroundColor: 'yellow',
        borderRadius: 50
    },
    rightGetImageContainer:{
        width: '20%',
        height: '100%',
        // backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    scrollerImageContainer:{
        height: '100%',
        width: Dimensions.get('window').width/3-5,
        // backgroundColor: 'blue',
        marginRight: 10,
        borderRadius: 10,
        // borderWidth: 1,
        // borderColor: '#000',
    },
    descriptionInput:{
        width:'100%',
        height: '100%',
        // backgroundColor: 'red',
    },
    inputContainer:{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green',
    },
    formInput:{
        width: '100%',
        height: '100%',
        backgroundColor: Colors.inputBgColor,
        paddingLeft: 15,
        borderRadius: 5,
    },
    errorTextContainer:{
        display: 'flex',
        width: '95%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: 10,
        //  backgroundColor: 'green',
    },
    errorText:{
        color: Colors.errorMsgColor,
        fontSize: 12,
    },
})

export default MyAccount;