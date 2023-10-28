import React, { useState, useEffect } from "react";
import { View,
         Text,
         StyleSheet,
         SafeAreaView,
         TextInput,
         FlatList,
         TouchableOpacity,
         Alert,
         Modal,
         Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Checkbox } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import Colors from '../styles/Colors';

import H1 from '../components/H1';
import BasicContainer from '../components/BasicContainer';
import H2 from '../components/H2';
import ImageBox from '../components/ImageBox';
import CheckBox3 from '../components/CheckBox3';
import CheckBox2 from '../components/CheckBox2';
import Toast from 'react-native-toast-message';


const MyAccount = ()=>{

    useEffect(() => {
        console.log('Tour guide');
    }, [])

    const navigation = useNavigation();

    const [checked, setChecked] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const showToast = () => {
        Toast.show({
          type: 'success',
          text1: 'Done',
          text2: 'Profile Updated Successfully'
        });
    }

    return(

        <SafeAreaView style={styles.all}>
            <ScrollView>

                <H1 value='Guide Booking'/>
                <View style={styles.body}>
                    <View style={styles.container}>

                        {/* Date */}
                        <View style={styles.inputContainer}>
                            <TextInput 
                                placeholder= {'Date'}
                                placeholderTextColor = {Colors.placeholderColor}
                                color={Colors.inputTextColor}
                                maxLength={200}
                                keyboardType="default" 
                                autoCapitalize="none"
                                style={styles.formInput}
                            />
                        </View>

                        <View style={styles.ckeckboxContent}>
                            <Checkbox
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                                uncheckedColor={'#828282'}
                                color={'#000'}
                            />
                            <Text style={styles.label}>Filter with your near location</Text>
                        </View>

                        {/* Location */}
                        <View style={styles.inputContainer}>
                            <TextInput 
                                placeholder= {'Location'}
                                placeholderTextColor = {Colors.placeholderColor}
                                color={Colors.inputTextColor}
                                maxLength={200}
                                keyboardType="default" 
                                autoCapitalize="none"
                                style={styles.formInput}
                            />
                        </View>

                        {/* Attraction */}
                        <View style={styles.inputContainer}>
                            <TextInput 
                                placeholder= {'Attraction'}
                                placeholderTextColor = {Colors.placeholderColor}
                                color={Colors.inputTextColor}
                                maxLength={200}
                                keyboardType="default" 
                                autoCapitalize="none"
                                style={styles.formInput}
                            />
                        </View>

                        <BasicContainer>
                            <H2 value='Schedule' />
                        </BasicContainer>

                            <TouchableOpacity
                                style={styles.cardBody}
                                onPress={() => setModalVisible(true)}
                            >
                                <View style={styles.card}>
                                    <View style={styles.left}>
                                        <View style={{marginRight: 0}}>
                                            <ImageBox/>
                                        </View>
                                    </View>
                                    <View style={styles.middle}>
                                        <Text style={styles.text1}>
                                        There are many variations of passages of Lorem Ipsum available,  or randomised words which don't look even slightly believable. 
                                        </Text>
                                        <View style={styles.bottom}>
                                            <Text style={styles.date}>
                                                09.00 A.M
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.right}>
                                        <CheckBox3/>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.cardBody}
                                onPress={() => setModalVisible(true)}
                            >
                                <View style={styles.card}>
                                    <View style={styles.left}>
                                        <View style={{marginRight: 0}}>
                                            <ImageBox/>
                                        </View>
                                    </View>
                                    <View style={styles.middle}>
                                        <Text style={styles.text1}>
                                        There are many variations of passages of Lorem Ipsum available,  or randomised words which don't look even slightly believable. 
                                        </Text>
                                        <View style={styles.bottom}>
                                            <Text style={styles.date}>
                                                09.00 A.M
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.right}>
                                        <CheckBox3/>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.cardBody}
                                onPress={() => setModalVisible(true)}
                            >
                                <View style={styles.card}>
                                    <View style={styles.left}>
                                        <View style={{marginRight: 0}}>
                                            <ImageBox/>
                                        </View>
                                    </View>
                                    <View style={styles.middle}>
                                        <Text style={styles.text1}>
                                        There are many variations of passages of Lorem Ipsum available,  or randomised words which don't look even slightly believable. 
                                        </Text>
                                        <View style={styles.bottom}>
                                            <Text style={styles.date}>
                                                09.00 A.M
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.right}>
                                        <CheckBox3/>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.cardBody}
                                onPress={() => setModalVisible(true)}
                            >
                                <View style={styles.card}>
                                    <View style={styles.left}>
                                        <View style={{marginRight: 0}}>
                                            <ImageBox/>
                                        </View>
                                    </View>
                                    <View style={styles.middle}>
                                        <Text style={styles.text1}>
                                        There are many variations of passages of Lorem Ipsum available,  or randomised words which don't look even slightly believable. 
                                        </Text>
                                        <View style={styles.bottom}>
                                            <Text style={styles.date}>
                                                09.00 A.M
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.right}>
                                        <CheckBox3/>
                                    </View>
                                </View>
                            </TouchableOpacity>

                    </View>
                </View>



                {/* Pop up model */}
                <View style={styles.centeredView}>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                        // Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                        }}
                        statusBarTranslucent={true}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View style={styles.modelContent}>

                                    <View style={styles.topAndBottomRows}>
                                        <View style={styles.titleRowLeft}>
                                            <Text style={styles.modelTitleText}>
                                                Booking Details
                                            </Text>
                                        </View>
                                        <View style={styles.titleRowRight}>
                                            <Pressable
                                            style={[styles.button, styles.buttonClose]}
                                            onPress={() => setModalVisible(!modalVisible)}
                                            >
                                                <Text style={styles.textStyle}>X</Text>
                                            </Pressable>
                                        </View>
                                    </View>

                                    <View style={styles.rows}>
                                        <Text style={styles.modelItemText}>
                                            Product ID  :
                                        </Text>
                                    </View>

                                    <View style={styles.rows}>
                                        <Text style={styles.modelItemText}>
                                            Product Name  :
                                        </Text>
                                    </View>

                                    <View style={styles.rows}>
                                        <Text style={styles.modelItemText}>
                                            Order No  :
                                        </Text>
                                    </View>

                                    <View style={styles.rows}>
                                        <View style={styles.rowDate}>
                                            <Text style={styles.modelItemText}>
                                                Date  :
                                            </Text>
                                        </View>
                                        <View style={styles.rowTime}>
                                            <Text style={styles.modelItemText}>
                                                Time  :
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={styles.rows}>
                                        <Text style={styles.modelItemText}>
                                            Option  :
                                        </Text>
                                    </View>

                                    <View style={styles.rows}>
                                        <Text style={styles.modelItemText}>
                                            Country  :
                                        </Text>
                                    </View>
                                    
                                    <View style={styles.rows}>
                                        <Text style={styles.modelItemText}>
                                            Number of People  :
                                        </Text>
                                    </View>

                                    <View style={styles.topAndBottomRows}>
                                        <View style={styles.BottomRowLeft}>
                                            <Text style={styles.modelTitleText}>
                                                    Met Before
                                            </Text>
                                            <CheckBox2/>
                                        </View>
                                        <View style={styles.BottomRowRight}>
                                            <TouchableOpacity style={styles.modelSignupButton} onPress={showToast} >
                                                <Text style={styles.modelButtonText}>
                                                        Sign Up
                                                </Text>
                                            </TouchableOpacity>
                                        </View> 
                                    </View>
                                    

                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
                {/* End Pop up model */}




            </ScrollView>

            <TouchableOpacity
                    style={{
                    borderWidth: 1,
                    borderColor: 'rgba(0,0,0,0.2)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 60,
                    position: 'absolute',
                    bottom: 90,
                    right: 30,
                    height: 60,
                    backgroundColor: Colors.blackBgColor,
                    borderRadius: 100,
                    }}
                    onPress={
                        ()=>{
                            navigation.navigate('SelfiePoint')
                        }
                    }
                >
                <Icon name='camera' size={26} color= {Colors.primaryBgColor} />
            </TouchableOpacity>

        </SafeAreaView>
        

    )

}

const styles = StyleSheet.create({
    all:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: Colors.primaryBgColor,
    },
    body:{
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        backgroundColor: Colors.primaryBgColor,
        marginBottom: 50,
    },
    container:{
        width: '85%',
        flex: 1,
        margin: 20,
    }, 
    imagContainer:{
        width: '90%',
        // height: 130,
        // backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: 10,
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
    // checkbox styles

    ckeckboxContent:{
        width: '100%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // backgroundColor: '#dbdbdb',
    },
    label: {
        margin: 8,
        color: Colors.placeholderColor,
    },

    // Card Styles

    cardBody:{
        // backgroundColor: '#000',
        width: '100%',
        height: 140,
        // borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card:{
        width: '100%',
        height: '85%',
        // backgroundColor: '#000',
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: Colors.blackText,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },  
    left:{
        width: 115,
        height: '100%',
        // backgroundColor: '#32a852',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    middle:{
        width: '48%',
        height: '90%',
        // backgroundColor: '#5e7364',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    }, 
    bottom:{
        width: '100%',
        // backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    right:{
        height: '90%',
        width: 50,
        // backgroundColor: 'green',
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text1:{
        fontSize: 12,
        fontWeight: '400',
        color: Colors.textColorOne,
        padding: 2,
        marginLeft: 2,
        flex: 1,
        flexWrap: 'wrap',
    },
    date:{
        fontSize: 10,
        fontWeight: '400',
        color: Colors.textColorOne,
        marginLeft: 5,
    },

    // popup model styles

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    }, 
    modalView: {
        margin: 20,
        backgroundColor: Colors.blackBgColor,
        borderRadius: 10,
        width: '90%',
        padding: 10,
        alignItems: "center",
        justifyContent: 'center',
        shadowColor: Colors.blackBgColor,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modelContent:{
        // height: 400,
        width: "95%",
        // backgroundColor: "#fff",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    rows:{
        width: '100%',
        height: 44,
        // backgroundColor: "gray",
        borderColor: Colors.primaryBgColor,
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    topAndBottomRows:{
        width: '100%',
        height: 44,
        // backgroundColor: "gray",
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleRowLeft:{
        width: '60%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // backgroundColor: "blue",
    },
    titleRowRight:{
        width: '40%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // backgroundColor: "red",
    },
    rowDate:{
        width: '55%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // backgroundColor: "blue",
    },
    rowTime:{
        width: '45%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // backgroundColor: "red",
    },
    BottomRowLeft:{
        width: '60%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // backgroundColor: "blue",
    },
    BottomRowRight:{
        width: '40%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // backgroundColor: "red",
    },
    button: {
        borderRadius: 100,
        padding: 10,
        elevation: 2,
        marginRight: -5,
        width: 40,
        height: 40,
    },
        buttonOpen: {
        backgroundColor: Colors.primaryBgColor,
    },
        buttonClose: {
        backgroundColor: Colors.primaryBgColor,
    },
        textStyle: {
        color: Colors.blackBgColor,
        fontWeight: "bold",
        textAlign: "center"
    },
        modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    modelTitleText:{
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.whiteText,
    },  
    modelItemText:{
        marginLeft: 10,
        fontSize: 16,
        // fontWeight: 'bold',
        color: Colors.whiteText,
    },  
    modelSignupButton:{
        width: '80%',
        height: '100%',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primaryBgColor,
    },
    modelButtonText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.blackText,
    },

    // end popup model styles

})

export default MyAccount;