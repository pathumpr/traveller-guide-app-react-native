import {React, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import PhotoGallery from '../screens/PhotoGallery';
import MyAccount from '../screens/MyAccount';
import TourGuide from '../screens/TourGuide';
import MyAdgenda from '../screens/MyAgenda';
import SelfiePoint from '../screens/SelfiePoint';


const Tab = createBottomTabNavigator();

const MainNavigation = ({ route })=>{
    

    return(

        
            <Tab.Navigator 
            initialRouteName='Home'
            screenOptions={({route})=>({
                headerShown: false,
                tabBarActiveTintColor: '#fcba03',
                tabBarInactiveTintColor: 'white',
                tabBarStyle: { 
                    backgroundColor: '#000',
                    height: 65,
                },

                })}
                
                tabBarOptions={{
                    labelStyle:{ 
                        marginBottom: 10,                
                    },
                }}>

            <Tab.Screen 
                name='Home' 
                component={Home} 
                options={{
                    tabBarIcon:({color, size})=>(
                        <Icon name='home' color={color} size={size}/>
                    )
                }} 
            />

            <Tab.Screen 
                name='Gallery' 
                component={PhotoGallery} 
                options={{
                    tabBarIcon:({color, size})=>(
                        <Icon name='camera' color={color} size={size}/>
                    )
                }} 
            />

            <Tab.Screen 
                name='Account' 
                component={MyAccount} 
                options={{
                    tabBarIcon:({color, size})=>(
                        <Icon name='user-circle-o' color={color} size={size}/>
                    )
                }} 
            />

            <Tab.Screen 
                name='Tour Guide' 
                component={TourGuide} 
                options={{
                    tabBarIcon:({color, size})=>(
                        <Icon name='send' color={color} size={size}/>
                    )
                }} 
            />

            <Tab.Screen 
                name='Agenda' 
                component={MyAdgenda} 
                options={{
                    tabBarIcon:({color, size})=>(
                        <Icon name='bookmark' color={color} size={size}/>
                    )
                }} 
            />

            </Tab.Navigator>
       

    )

}

export default MainNavigation;



// screenOptions={ ({route})=>({
//     tabBarIcon: ({focused, size, color})=>{                    
//         let iconName;
//         let routeName = route.name;

//         if(routeName == Home){
//             iconName = focused ? 'home' : 'home-outline';
//         } else if(routeName == PhotoGallery){
//             iconName = focused ? 'list' : 'list-outline';
//         } else if(routeName == MyAccount){
//             iconName = focused ? 'settings' : 'settings-outline';
//         } else if(routeName == TourGuid){
//             iconName = focused ? 'settings' : 'settings-outline';
//         } else if(routeName == MyAdgenda){
//             iconName = focused ? 'settings' : 'settings-outline';
//         }

//         return (<MatIcon name={iconName} size={size} color={color} />)

//     },
//     // tabBarActiveTintColor: 'tomato',
//     // tabBarInactiveTintColor: 'gray',
//     tabBarStyle: { 
//         backgroundColor: '#000',
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderTopWidth: 1,
//         borderTopColor: 'red',
//         height: 50,
//     }
// })}
//     tabBarOptions={{
//         activeTintColor: 'tomato',
//         inactiveTintColor: 'gray',
//         labelStyle:{
//             fontSize: 16,
//             paddingBottom: 10, 
//             backgroundColor: '#fff',
//             height: '100%',                    
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//         },
//     }}