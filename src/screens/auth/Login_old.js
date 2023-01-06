import React, { useState, useEffect } from 'react';
import { ScrollView,
         View,
         StyleSheet,
         TouchableOpacity,
         BackHandler, 
         Alert
         
} from 'react-native';

import ButtonBgBlack from '../../components/ButtonBgBlack';
import Links from '../../components/Links';
import NormalDivider from '../../components/NormalDivider';
import RegularInput from '../../components/RegularInput';
import PasswordInput from '../../components/PasswordInput';
import SocialLogin from '../../components/SocialLogin';
import LogoImage from '../../components/LogoImage';
import H4 from '../../components/H4';
import BasicContainer from '../../components/BasicContainer';
import { Dimensions } from 'react-native';

const Login = ({navigation}) =>{

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return(

        <View style={{ backgroundColor:'#fff', height: windowHeight, width: windowWidth, justifyContent: 'center', alignItems: 'center' }}>

        <View style={{ backgroundColor:'#fff', height: '90%', width: '100%',  }}>

        <LogoImage/>
        <RegularInput placeholder='Username or Mobile number' />
        <PasswordInput placeholder='Password' show='false'/>
        <ButtonBgBlack value='Login' path='Main' />
        <NormalDivider/>
        <H4 value='or signup with'/>
        <SocialLogin/>

        <TouchableOpacity onPress={()=>{navigation.navigate('Register')}}>
            <Links value='New to triptosters?' linkText='Register'/>
        </TouchableOpacity>

        </View>

        </View>

    )

}

export default Login;