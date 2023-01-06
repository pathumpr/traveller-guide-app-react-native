import React, { useState, useEffect } from 'react';
import { ScrollView, SafeAreaView, View, StyleSheet, BackHandler, Alert } from 'react-native';
import { Dimensions } from 'react-native';
import Colors from '../../styles/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {APP_URL, RESOURCE_URL} from '../../constants/App';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

import LogoImage from '../../components/LogoImage';

const Splash = () =>{

    const navigation = useNavigation();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    useEffect(() => {
        const checkForUsername = async () => {

          const username = await AsyncStorage.getItem('asyncUsername');
          const galleryPhotoUri = await AsyncStorage.getItem('asyncGalleryPhotoUri');
          const subUsername = await AsyncStorage.getItem('asyncSubUsername');
          const name = await AsyncStorage.getItem('asyncId');
          const id = await AsyncStorage.getItem('asyncName');

          if (username) {

            global.userName = username;
            global.profilePhoto = galleryPhotoUri;
            global.subUsername = subUsername;
            global.id = id;
            global.name = name;

            navigation.navigate('Main');
            
          } 
          else{
            navigation.navigate('Login');
          }
        };
        checkForUsername();
    }, []);

    return(

        <SafeAreaView style={{ backgroundColor:Colors.primaryBgColor }}>

            <View style={{
                // backgroundColor: '#6b6554', 
                height: windowHeight, 
                width: windowWidth,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                <LogoImage/>

            </View>

        </SafeAreaView>

    )

}

export default Splash;