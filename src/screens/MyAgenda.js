import React, { useState, useEffect} from "react";
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
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Checkbox } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import Colors from '../styles/Colors';

import H1 from '../components/H1';
import BasicContainer from '../components/BasicContainer';
import H2 from '../components/H2';
import CheckBox2 from '../components/CheckBox2';
import Toast from 'react-native-toast-message';


const MyAccount = ()=>{

    const navigation = useNavigation();

    useEffect(() => {
        console.log('My Agenda');
    }, [])

    const [checked, setChecked] = useState(false);
    const [AcceptModalVisible, setAcceptModalVisible] = useState(false);
    const [NewModalVisible, setNewModalVisible] = useState(false);

    const acceptToast = () => {
        Toast.show({
          type: 'success',
          text1: 'Done',
          text2: 'Request Accepted Successfully'
        });
    }

    const rejectToast = () => {
        Toast.show({
          type: 'success',
          text1: 'Done',
          text2: 'Request Rejected Successfully'
        });
    }

    return(

        <SafeAreaView style={styles.all}>
            <ScrollView>

                <H1 value='My Agenda'/>
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

                        <BasicContainer>
                            <H2 value='Accepted Requests' />
                        </BasicContainer>


                            <TouchableOpacity
                                style={styles.cardBody}
                                onPress={() => setAcceptModalVisible(true)
                            }>
                                <View style={styles.card}>
                                    <View style={styles.left}>
                                        <Text style={styles.listItemText}>
                                                Order No  :
                                        </Text>
                                    </View>
                                    <View style={styles.middle}>
                                        <Text style={styles.listItemText}>
                                                10.00 AM
                                        </Text>
                                    </View>
                                    <View style={styles.right}>
                                        <Text style={styles.listItemText}>
                                                Details
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.cardBody}
                                onPress={() => setAcceptModalVisible(true)
                            }>
                                <View style={styles.card}>
                                    <View style={styles.left}>
                                        <Text style={styles.listItemText}>
                                                Order No  :
                                        </Text>
                                    </View>
                                    <View style={styles.middle}>
                                        <Text style={styles.listItemText}>
                                                10.00 AM
                                        </Text>
                                    </View>
                                    <View style={styles.right}>
                                        <Text style={styles.listItemText}>
                                                Details
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.cardBody}
                                onPress={() => setAcceptModalVisible(true)
                            }>
                                <View style={styles.card}>
                                    <View style={styles.left}>
                                        <Text style={styles.listItemText}>
                                                Order No  :
                                        </Text>
                                    </View>
                                    <View style={styles.middle}>
                                        <Text style={styles.listItemText}>
                                                10.00 AM
                                        </Text>
                                    </View>
                                    <View style={styles.right}>
                                        <Text style={styles.listItemText}>
                                                Details
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.cardBody}
                                onPress={() => setAcceptModalVisible(true)
                            }>
                                <View style={styles.card}>
                                    <View style={styles.left}>
                                        <Text style={styles.listItemText}>
                                                Order No  :
                                        </Text>
                                    </View>
                                    <View style={styles.middle}>
                                        <Text style={styles.listItemText}>
                                                10.00 AM
                                        </Text>
                                    </View>
                                    <View style={styles.right}>
                                        <Text style={styles.listItemText}>
                                                Details
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.cardBody}
                                onPress={() => setAcceptModalVisible(true)
                            }>
                                <View style={styles.card}>
                                    <View style={styles.left}>
                                        <Text style={styles.listItemText}>
                                                Order No  :
                                        </Text>
                                    </View>
                                    <View style={styles.middle}>
                                        <Text style={styles.listItemText}>
                                                10.00 AM
                                        </Text>
                                    </View>
                                    <View style={styles.right}>
                                        <Text style={styles.listItemText}>
                                                Details
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>




                        <BasicContainer>
                            <H2 value='New Requests' />
                        </BasicContainer>



                        
                        <TouchableOpacity
                                style={styles.cardBody}
                                onPress={() => setNewModalVisible(true)
                            }>
                                <View style={styles.card}>
                                    <View style={styles.left}>
                                        <Text style={styles.listItemText}>
                                                Order No  :
                                        </Text>
                                    </View>
                                    <View style={styles.middle}>
                                        <Text style={styles.listItemText}>
                                                10.00 AM
                                        </Text>
                                    </View>
                                    <View style={styles.right}>
                                        <Text style={styles.listItemText}>
                                                Details
                                        </Text>
                                    </View>
                                </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.cardBody}
                            onPress={() => setNewModalVisible(true)
                        }>
                            <View style={styles.card}>
                                <View style={styles.left}>
                                    <Text style={styles.listItemText}>
                                            Order No  :
                                    </Text>
                                </View>
                                <View style={styles.middle}>
                                    <Text style={styles.listItemText}>
                                            10.00 AM
                                    </Text>
                                </View>
                                <View style={styles.right}>
                                    <Text style={styles.listItemText}>
                                            Details
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.cardBody}
                            onPress={() => setNewModalVisible(true)
                        }>
                            <View style={styles.card}>
                                <View style={styles.left}>
                                    <Text style={styles.listItemText}>
                                            Order No  :
                                    </Text>
                                </View>
                                <View style={styles.middle}>
                                    <Text style={styles.listItemText}>
                                            10.00 AM
                                    </Text>
                                </View>
                                <View style={styles.right}>
                                    <Text style={styles.listItemText}>
                                            Details
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.cardBody}
                            onPress={() => setNewModalVisible(true)
                        }>
                            <View style={styles.card}>
                                <View style={styles.left}>
                                    <Text style={styles.listItemText}>
                                            Order No  :
                                    </Text>
                                </View>
                                <View style={styles.middle}>
                                    <Text style={styles.listItemText}>
                                            10.00 AM
                                    </Text>
                                </View>
                                <View style={styles.right}>
                                    <Text style={styles.listItemText}>
                                            Details
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.cardBody}
                            onPress={() => setNewModalVisible(true)
                        }>
                            <View style={styles.card}>
                                <View style={styles.left}>
                                    <Text style={styles.listItemText}>
                                            Order No  :
                                    </Text>
                                </View>
                                <View style={styles.middle}>
                                    <Text style={styles.listItemText}>
                                            10.00 AM
                                    </Text>
                                </View>
                                <View style={styles.right}>
                                    <Text style={styles.listItemText}>
                                            Details
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>



                    </View>
                </View>



                {/* Pop up model for  Accepted Request  */}
                <View style={styles.centeredView}>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={AcceptModalVisible}
                        onRequestClose={() => {
                        // Alert.alert("Modal has been closed.");
                        setAcceptModalVisible(!AcceptModalVisible);
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
                                            onPress={() => setAcceptModalVisible(!AcceptModalVisible)}
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
                                            {/* <TouchableOpacity style={styles.modelSignupButton} onPress={showToast} >
                                                <Text style={styles.modelButtonText}>
                                                        Sign Up
                                                </Text>
                                            </TouchableOpacity> */}
                                        </View> 
                                    </View>
                                    

                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
                {/* End Pop up model */}



                {/* Pop up model for  New Request  */}
                <View style={styles.centeredView}>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={NewModalVisible}
                        onRequestClose={() => {
                        // Alert.alert("Modal has been closed.");
                        setNewModalVisible(!NewModalVisible);
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
                                            onPress={() => setNewModalVisible(!NewModalVisible)}
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

                                        </View> 
                                    </View>

                                    <View style={styles.topAndBottomRows}>
                                        <View style={styles.BottomRowLeft}>

                                        </View>
                                        <View style={styles.BottomRowRight}>
                                            <TouchableOpacity style={[styles.modelSignupButton, {marginRight: 10} ]} onPress={acceptToast} >
                                                <Text style={styles.modelButtonText}>
                                                        Accept
                                                </Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.modelSignupButton} onPress={rejectToast} >
                                                <Text style={styles.modelButtonText}>
                                                        Reject
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
        marginBottom: 20,
    },
    container:{
        width: '85%',
        flex: 1,
        margin: 20,
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

    // Card Styles

    cardBody:{
        // backgroundColor: '#000',
        width: '100%',
        height: 60,
        // borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card:{
        width: '100%',
        height: 50,
        backgroundColor: Colors.inputBgColor,
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: Colors.borderColor,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    left:{
        flex: 2,
        height: '100%',
        // backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    middle:{
        flex: 1,
        height: '100%',
        // backgroundColor: 'green',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    right:{
        flex: 1,
        height: '100%',
        // backgroundColor: 'blue',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
        color: Colors.blackText,
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
    listItemText:{
        fontSize: 14,
        // fontWeight: 'bold',
        color: Colors.blackText,
        padding: 5,
    },

    // end popup model styles

})

export default MyAccount;