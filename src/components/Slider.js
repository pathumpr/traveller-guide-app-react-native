import React from 'react';
import { View,
         StyleSheet,
         Text,
} from 'react-native';
import ImageBox from './ImageBox';
import { ScrollView } from 'react-native-gesture-handler';


const Slider = () =>{

    return(



        <View style={styles.body}>
            <View style={styles.card}>

                <View style={styles.top}>

                    <Text style={styles.text}>
                        Recent Tours
                    </Text>

                </View>
                <View style={styles.bottom}>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                    <View style={styles.slideImage}>
                        <ImageBox/>
                        <Text style={styles.placeText}>
                            Place
                        </Text>
                    </View>

                    <View style={styles.slideImage}>
                        <ImageBox/>
                        <Text style={styles.placeText}>
                            Place
                        </Text>
                    </View>

                    <View style={styles.slideImage}>
                        <ImageBox/>
                        <Text style={styles.placeText}>
                            Place
                        </Text>
                    </View>

                    <View style={styles.slideImage}>
                        <ImageBox/>
                        <Text style={styles.placeText}>
                            Place
                        </Text>
                    </View>

                    <View style={styles.slideImage}>
                        <ImageBox/>
                        <Text style={styles.placeText}>
                            Place
                        </Text>
                    </View>



                    </ScrollView>

                </View>

            </View>

        </View>



    )

}

const styles = StyleSheet.create({

    body:{
        // backgroundColor: '#000',
        width: '99%',
        height: 180,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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
        justifyContent:'flex-end',
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
        color: '#000',
        marginLeft: 10,
        marginTop: 10,
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
        color:'#8f8f8f',
    },
   

})

export default Slider;