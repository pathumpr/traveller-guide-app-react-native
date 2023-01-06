import React from 'react'
import { View,
         StyleSheet,
         Text,
} from 'react-native'
import ImageBox from './ImageBox';
import CheckBox3 from '../components/CheckBox3';


const ScheduleCard = () =>{

    return(

        <View style={styles.cardBody}>
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

                </View>
                <View style={styles.right}>

                    <CheckBox3/>

                    <Text style={styles.date}>
                        10.00 A.M
                    </Text>

                </View>

            </View>
        </View>

    )

}

const styles = StyleSheet.create({

    cardBody:{
        // backgroundColor: '#000',
        width: '100%',
        height: 150,
        // borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card:{
        width: '100%',
        height: '80%',
        // backgroundColor: '#000',
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: '#d9d9d9',
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
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
    }, 
    right:{
        height: '90%',
        width: 50,
        // backgroundColor: '#5e7364',
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text1:{
        fontSize: 12,
        fontWeight: '400',
        color: '#4d4d4d',
        padding: 2,
        marginLeft: 2,
        flex: 1,
        flexWrap: 'wrap',
    },
    date:{
        fontSize: 10,
        fontWeight: '400',
        color: '#4d4d4d',
        marginTop: 20,
    },  

})

export default ScheduleCard;