import React from "react";

import RegularInput from "./src/components/RegularInput";
import PasswordInput from "./src/components/PasswordInput";
import ButtonBgWhite from "./src/components/ButtonBgWhite";
import ButtonBgBlack from "./src/components/ButtonBgBlack";
import DividerLine from "./src/components/NormalDivider";
import Lable from "./src/components/Lable";
import SocialLogin from "./src/components/SocialLogin";
import Links from "./src/components/Links";
import H1 from "./src/components/H1";
import H2 from "./src/components/H2";
import H3 from "./src/components/H3";
import BoldDivider from "./src/components/BoldDivider";
import LogoImage from "./src/components/LogoImage";
import ProfileImage from "./src/components/ProfileImage";

import Login from "./src/screens/auth/Login";
import Register from "./src/screens/auth/Register";
import Splash from "./src/screens/auth/Splash";
import MainNavigation from "./src/navigation/MainNavigation";
import SelfiePoint from './src/screens/SelfiePoint'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
import { useRoute } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const App = (props)=>{

  return(


    <NavigationContainer>

    <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>

      <Stack.Screen
        name='Login'
        component={Login}
        options={{title:'Login'}}
      />

      <Stack.Screen
        name='Register'
        component={Register}
        options={{title:'Register'}}
      />

      <Stack.Screen
        name='Splash'
        component={Splash}
        options={{title:'Splash'}}
      />

      <Stack.Screen
        name='Main'
        component={MainNavigation}
        options={{title:'MainNavigation'}}
      />

    <Stack.Screen
        name='SelfiePoint'
        component={SelfiePoint}
        options={{title:'SelfiePoint'}}
      />


    </Stack.Navigator>

    <Toast />

    </NavigationContainer>


  )

}

export default App;
