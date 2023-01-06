import {React, useEffect, useState} from 'react';
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

import H1 from '../components/H1';
import ProfileImage from '../components/ProfileImage';
import BasicContainer from '../components/BasicContainer';
import H2 from '../components/H2';
import SelectImage from '../components/SelectImage';
import GalleryImage from '../components/GalleryImage';
import Colors from '../styles/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';

import {APP_URL, RESOURCE_URL} from '../constants/App';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { set } from 'react-native-reanimated';



const PhotoGallery = (props)=>{

    const navigation = useNavigation();

    // set images
    const [image1, setImage1] = useState('not set');
    const [image2, setImage2] = useState('not set');
    const [image3, setImage3] = useState('not set');

    // set description
    const [desc1, setDesc1] = useState('')
    const [desc2, setDesc2] = useState('')
    const [desc3, setDesc3] = useState('')

    // set field error
    const [fieldErr, setFieldErr] = useState();
    const [numOfErr, setNumOfErr] = useState(0);
    const [descError, setDeskError] = useState('');

    //Image array
    const [myArray, setMyArray] = useState([
        {"gallery_photo": '../assets/images/man.jpg'},
        {"gallery_photo": '../assets/images/man.jpg'},
        {"gallery_photo": '../assets/images/man.jpg'},
    ]);

    useEffect(() => {
        console.log('Photo gallery');
        getData();
    }, [])

    const getData =()=>{

        setImage1('not set');
        setImage2('not set');
        setImage3('not set');
        setFieldErr();
        setDesc1('');
        setDesc2('');
        setDesc3('');
        // setMyArray('');
        setDeskError('');

        // get gallery images from API
        axios.get(APP_URL + 'get-gallery-photos/' + id)
        .then((response) => {

            console.log(response.data['value'])
            // console.log(response.data['data'])

            if(response.data['value'] > 0){
                // console.log(response.data['data'])
                setMyArray(response.data['data']);
            }else{
                setMyArray([
                    {"gallery_photo": '../assets/images/man.jpg'},
                ]);
                // console.log(response.data['data'])
            }

            // console.log(response.data['data'])
            // setMyArray(response['data']);
            // console.log(myArray)

        }).catch((error) => {
            console.error(error);
        });
    }

    //Desc 1 validation
    const desc1Validating = ()=>{

        if(desc1 ==""){
            console.log("First description is required")
            setDeskError('All fields are required')
            setNumOfErr(1)
        }else{
            setDeskError('')
            setNumOfErr(0)
        }
    }

    //Desc 2 validation
    const desc2Validating = ()=>{

        if(desc2 ==""){
            console.log("Second description is required")
            setDeskError('All fields are required')
            setNumOfErr(1)
        }else{
            setDeskError('')
            setNumOfErr(0)
        }
    }

    //Desc 3 validation
    const desc3Validating = ()=>{

        if(desc3 ==""){
            console.log("Third description is required")
            setDeskError('All fields are required')
            setNumOfErr(1)
        }else{
            setDeskError('')
            setNumOfErr(0)
        }
    }

    const getImage1 = async ()=>{
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true
        }).then(image => {
            setImage1(image.path);
        });

    }
    const getImage2 = async ()=>{
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true
        }).then(image => {
            setImage2(image.path);
        });

    }
    const getImage3 = async ()=>{
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true
        }).then(image => {
            setImage3(image.path);
        });
    }

    //Upload button
    const upload = () => {

        console.log(numOfErr)

        if(image1 && image2 && image3 != 'not set'){
            setFieldErr('')

            console.log(desc1)
            console.log(desc2)
            console.log(desc3)

            if(desc1 && desc2 && desc3 != ''){

                setDeskError('')

                const data = new FormData();
                data.append('username', userName);
                data.append('id', id);
    
                //image 1
                data.append('photo1', {
                    name: 'photo1.jpg',
                    type: 'image/jpg',
                    uri:
                    Platform.OS === 'android' ? image1 : image1.replace('file://', ''),     
                });
                data.append('desc1', desc1);
                //image 2
                data.append('photo2', {
                    name: 'photo1.jpg',
                    type: 'image/jpg',
                    uri:
                    Platform.OS === 'android' ? image2 : image2.replace('file://', ''),     
                },);
                data.append('desc2', desc2);
                //image 3
                data.append('photo3', {
                    name: 'photo1.jpg',
                    type: 'image/jpg',
                    uri:
                    Platform.OS === 'android' ? image3 : image3.replace('file://', ''),     
                });
                data.append('desc3', desc3);

                // console.log(data)
    
                //send data to API
                fetch(APP_URL+'photo-gallery-upload', {
                    method: 'POST',
                    body: data,
                })
                .then(
                    response => response.json()
                )
                .then(response => {
                    console.log(response)

                    if(response == 'success'){

                        Toast.show({
                            type: 'success',
                            text1: 'Successfully!',
                            text2: 'Photos uploaded successfully'
                        });

                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Gallery' }],
                        }); 
                    }else{
                        console.log("Something wen't wrong")
                    }       
                })
                .catch(error => {
                    console.log(error);
                });
            }else{
                setDeskError('All fields are required')
            }
        }else{
            setFieldErr('Select at least three images')
        }
    }

    return(

        <SafeAreaView>

            <ScrollView>
            
                <H1 value='Photo Gallery' path={profilePhoto} />
                <View style={styles.body}>

                    <View style={styles.container}>

                        <ProfileImage/>

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
                            <View style={styles.labelInputContainer}>
                                <View style={styles.formLabel}>
                                    <View style={styles.label}>
                                        <Text style={styles.labelTextId}>
                                            ID {id}
                                        </Text>
                                    </View>
                                </View>
                            </View>

                        <BasicContainer>
                            <H2 value='Share your memories' />
                        </BasicContainer>

                            <View style={styles.imageContainer}>

                                <TouchableOpacity onPress={()=>{getImage1()}}>
                                    <View style={styles.selectBody}>
                                        <View style={styles.selectCard}>
                                            <View style={styles.selectIcon}>

                                            <Image source={image1 == "not set" ? require('../assets/images/select-5.jpg') : {uri:image1}} resizeMode='cover' style={styles.logo}/>

                                                {/* <Icon name="photo" color={'#808080'} size={44}/> */}
                                                {/* <Text style={styles.selectText}>
                                                    Select
                                                </Text> */}

                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>{getImage2()}}>
                                    <View style={styles.selectBody}>
                                        <View style={styles.selectCard}>
                                            <View style={styles.selectIcon}>

                                            <Image source={image2 == "not set" ? require('../assets/images/select-5.jpg') : {uri:image2}} resizeMode='cover' style={styles.logo}/>

                                                {/* <Icon name="photo" color={'#808080'} size={44}/>
                                                <Text style={styles.selectText}>
                                                    Select
                                                </Text> */}

                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>{getImage3()}}>
                                    <View style={styles.selectBody}>
                                        <View style={styles.selectCard}>
                                            <View style={styles.selectIcon}>

                                            <Image source={image3 == "not set" ? require('../assets/images/select-5.jpg') : {uri:image3}} resizeMode='cover' style={styles.logo}/>

                                                {/* <Icon name="photo" color={'#808080'} size={44}/>
                                                <Text style={styles.selectText}>
                                                    Select
                                                </Text> */}

                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                            </View>
                            <View style={styles.errorTextContainer}>
                                <Text style={styles.errorText}>
                                    
                                </Text>
                            </View>

                        {/* Description 1*/}
                        <View style={styles.inputContainer}>
                            <TextInput 
                                    placeholder= {'First image description'}
                                    placeholderTextColor = {Colors.placeholderColor}
                                    maxLength={200}
                                    color={Colors.inputTextColor} 
                                    autoCapitalize="none"
                                    style={styles.formInput}
                                    onChangeText={(text)=>setDesc1(text)}
                                    onBlur={desc1Validating}
                            />
                        </View>

                        {/* Description 2*/}
                        <View style={styles.inputContainer}>
                            <TextInput 
                                    placeholder= {'Second image description'}
                                    placeholderTextColor = {Colors.placeholderColor}
                                    maxLength={200}
                                    color={Colors.inputTextColor}
                                    autoCapitalize="none"
                                    style={styles.formInput}
                                    onChangeText={(text)=>setDesc2(text)}
                                    onBlur={desc2Validating}
                            />
                        </View>

                        {/* Description 3*/}
                        <View style={styles.inputContainer}>
                            <TextInput 
                                    placeholder= {'Third image description'}
                                    placeholderTextColor = {Colors.placeholderColor}
                                    maxLength={200}
                                    color={Colors.inputTextColor}
                                    autoCapitalize="none"
                                    style={styles.formInput}
                                    onChangeText={(text)=>setDesc3(text)}
                                    onBlur={desc3Validating}
                            />
                        </View>
                        <View style={styles.errorTextContainer}>
                            <Text style={styles.errorText}>
                                {fieldErr}
                            </Text>
                        </View>
                        <View style={styles.errorTextContainer}>
                            <Text style={styles.errorText}>
                                {descError}
                            </Text>
                        </View>

                        {/* Upload */}
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button} onPress={upload}>
                                <Text style={styles.buttonText}>
                                    Upload
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <BasicContainer>
                            <H2 value='My Gallery' />
                        </BasicContainer>

                        <View style={styles.imageContainer}>

                            {/* {myArray.map((item, index) => (
                                <View key={index} style={styles.slideImage}>
                                    <GalleryImage path={item.gallery_photo}/>
                                </View>
                            ))} */}

                            {
                                myArray.map((object)=>{
                                    return(
                                        <View key={object.index} style={styles.slideImage}>
                                            <GalleryImage path={object.gallery_photo}/>
                                        </View>
                                    )
                                })
                            }


                        </View>

                    </View>

                </View>


            </ScrollView>

        </SafeAreaView>

        

    )

}

const screenWidth =  Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const imgsize = screenWidth/3.67

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
    imageContainer:{
        width: '100%',
        // height: 130,
        // backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        // marginTop: 5,
    },  
    slideImage:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
    },
    placeText:{
        color:Colors.placeholderColor,
        marginBottom: 3,
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

    // Upload Button Styles

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
        marginTop: -30, 
    },

    //Image select styles
    selectBody:{
        // backgroundColor: '#000',
        width: imgsize,
        height: imgsize,
        // borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
    },
    selectCard:{
        width: '100%',
        height: '90%',
        // backgroundColor: '#dbdbdb',
        borderRadius: 10,
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
    logo:{
        height: imgsize-15,
        width: imgsize-7,
        borderRadius: 8,
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

})

export default PhotoGallery;