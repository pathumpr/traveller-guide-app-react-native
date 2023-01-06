import {React, useState, useEffect} from 'react';
import { View,
         Text,
         StyleSheet,
         SafeAreaView,
         Image,
         ActivityIndicator,
} from 'react-native';
import ImageCard from '../components/ImageCard';
import BalanceCard from '../components/BalanceCard';
import ImageBox from '../components/ImageBox';
import ImageBox2 from '../components/ImageBox2';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { RotateInUpLeft } from 'react-native-reanimated';
import Colors from '../styles/Colors';

import {APP_URL, RESOURCE_URL} from '../constants/App';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


function getTimeOfDay() {
    const date = new Date();
    const hour = date.getHours();
  
    if (hour >= 6 && hour < 12) {
      return 'Good morning,';
    } else if (hour >= 12 && hour < 17) {
      return 'Good afternoon,';
    } else if (hour >= 17 && hour < 21) {
      return 'Good evening,';
    } else {
      return 'Good night,';
    }
}

const Home = ({ route })=>{

    const [isLoading, setIsLoading] = useState(false);

    const [timeOfDay, setTimeOfDay] = useState(getTimeOfDay());
    const [timeNow, setTimeNow] = useState(getTimeOfDay());

    useEffect(() => {
        setIsLoading(true)
        console.log('Home');
        setTimeOfDay(getTimeOfDay());

        profilePhoto();
    }, []);

    // load profile photo to home screen
    const profilePhoto = ()=>{

        // console.log('Function');

        axios.get(APP_URL + 'get-data/' + userName)
        .then((response) => {
            if (response.status === 200) {
                setIsLoading(false)

                // console.log(response.data['status']);
                // console.log(response.data['photo']);
                // console.log(response.data['time']);
                console.log(timeOfDay)

                AsyncStorage.setItem('asyncGalleryPhotoUri', response.data['photo']);
                AsyncStorage.setItem('asyncId', response.data['id']);
                AsyncStorage.setItem('asyncName', response.data['name']);
                AsyncStorage.setItem('asyncTime', timeOfDay);

                global.profilePhoto = response.data['photo'];
                global.id = JSON.stringify(response.data['id'])
                global.name = response.data['name']
                global.time = timeOfDay;

                console.log(id)

                setTimeNow(time)

            } else {
                console.error('Error:', response.status);
                setIsLoading(false)
            }
        }).catch((error) => {
            console.error(error);
            setIsLoading(false)
        });

    }

    return(

        <SafeAreaView style={styles.body}>
                <View style={styles.container}>

                {/* Activity indicator */}
                {isLoading ? (
                    <ActivityIndicator size="large" color="#fcba03" />
                ) :(<Text></Text>)}

                    <View style={styles.section1}>

                        <Image source={require('../assets/images/logo.png')}     
                        resizeMode='contain' style={styles.logo} />

                    </View>

                    <View style={styles.section2}>

                        <ImageCard time={timeNow} />
                        <BalanceCard/>

                    </View>

                    <View style={styles.section3}>

                        <View style={styles.card}>
                            <View style={styles.top}>
                                <Text style={styles.text}>
                                    Recent Tours
                                </Text>
                            </View>
                            <View style={styles.bottom}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                                    <View style={styles.slideImage}>
                                        <ImageBox2/>
                                        <Text style={styles.placeText}>
                                            Place 1
                                        </Text>
                                    </View>
                                    <View style={styles.slideImage}>
                                        <ImageBox2/>
                                        <Text style={styles.placeText}>
                                            Place 2
                                        </Text>
                                    </View>
                                    <View style={styles.slideImage}>
                                        <ImageBox2/>
                                        <Text style={styles.placeText}>
                                            Place 3
                                        </Text>
                                    </View>
                                    <View style={styles.slideImage}>
                                        <ImageBox2/>
                                        <Text style={styles.placeText}>
                                            Place 4
                                        </Text>
                                    </View>

                                </ScrollView>
                            </View>
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
        flex: 1,
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
        flex: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    section3:{
        flex: 1,
        // backgroundColor: 'yellow',
        width:'100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        // borderRadius: 10,
    },
    logo:{
        height: 120,
    },
    card:{
        width: '100%',
        height: '100%',
        // backgroundColor: 'blue',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center'
    },
    top:{
        width: '100%',
        height: '15%',
        // backgroundColor: '#525252',
        display: 'flex',
        justifyContent:'center',
    },  
    bottom:{
        width: '100%',
        height: '85%',
        // backgroundColor: '#662a2a',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        color: Colors.blackText,
        marginLeft: 10,
        // marginTop: 10,
        fontWeight: 'bold',
    },
    slideImage:{
        // width: 125,
        marginLeft: 10,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeText:{
        color:Colors.placeholderColor,
    },


})

export default Home;