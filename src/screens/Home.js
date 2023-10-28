import {React, useState, useEffect} from 'react';
import { View,
         Text,
         StyleSheet,
         SafeAreaView,
         Image,
         ActivityIndicator,
         TouchableOpacity,
} from 'react-native';
import ImageCard from '../components/ImageCard';
import BalanceCard from '../components/BalanceCard';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../styles/Colors';
import EmptyImage from '../assets/images/empty.jpg';
import {APP_URL, RESOURCE_URL} from '../constants/App';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import ImageBox2 from '../components/ImageBox2';
import ImageBox3 from '../components/ImageBox3';
import GalleryImage2 from '../components/GalleryImage2';


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

    const [recentArray, setRecentArray] = useState([]);

    useEffect(() => {
        setIsLoading(true)
        console.log('Home');
        setTimeOfDay(getTimeOfDay());
        setIsLoading(false)

        axios.get(APP_URL + 'get-recent-tours/' + id)
        .then((response)=>{
            if(response.data['value'] != 0){
                setRecentArray(response.data['data'])
            }else{
                setRecentArray([])
                // console.log(recentArray)
            }
        })
        .catch((error)=>{
            console.error(error.response.data)
        })

    }, []);

    return(
        <SafeAreaView style={styles.body}>
                <View style={styles.container}>
                    {/* Activity indicator */}
                    {isLoading ? (<ActivityIndicator size="large" color="#fcba03" />) :(<Text></Text>)}

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
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>

                                    {
                                    
                                        recentArray.length == 0 ?
                                        <View style={styles.singleItem}>
                                        <Image source={require('../assets/images/empty.jpg')} style={styles.image}/>
                                        </View> : 
                                        recentArray.map((item, index)=>{
                                            console.log(item)
                                            return(
                                                <TouchableOpacity key={index} onPress={()=>{
                                                    console.log(index)
                                                }}>
                                                    <View style={styles.singleItem}>
                                                        <Image source={{uri:RESOURCE_URL + item}} style={styles.image}/>
                                                    </View>
                                                </TouchableOpacity>
                                            )
                                        })
                                    }

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
        // marginLeft: 10,
        // marginTop: 10,
        fontWeight: 'bold',
    },
    scrollView:{
        width: '100%',
        height: 120,
        // backgroundColor: 'red',
    },  
    singleItem:{
        width: 120,
        height: '100%',
        // backgroundColor: 'green',
        marginRight: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        width: '100%',
        height: '100%',
        borderRadius: 10,
        // width: 10,
        // height: 10,
    },
})

export default Home;