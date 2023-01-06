import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View,
         StyleSheet,
         Text,
} from 'react-native'
import Colors from '../styles/Colors';


const BalanceCard = () =>{

    return(

        <View style={styles.body}>
            <View style={styles.card}>

                <View style={styles.top}>

                    <Text style={styles.balance}>
                        $ 0.00
                    </Text>

                    <Text style={styles.smallText}>
                        Current Balance
                    </Text>

                </View>
                <View style={styles.bottom}>

                    <View style={styles.left}>

                        {/* <View style={styles.iconContainer1}>

                            <Icon name="car" size={20} color="#fff" />

                        </View> */}
                        <View style={styles.textContainer1}>
                            <Text style={styles.value}>
                                0
                            </Text>
                            <Text style={styles.smallText}>
                                Tours Shared
                            </Text>
                        </View>

                    </View>
                    <View style={styles.right}>

                        {/* <View style={styles.iconContainer2}>

                            <Icon name="address-book" size={20} color="#fff" />

                        </View> */}
                        <View style={styles.textContainer2}>
                            <Text style={styles.value}>
                                0
                            </Text>
                            <Text style={styles.smallText}>
                                Booking Shared
                            </Text>
                        </View>
                        
                    </View>

                </View>

            </View>
        </View>

    )

}

const styles = StyleSheet.create({

    body:{
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
        height: '100%',
        backgroundColor: Colors.blackBgColor,
        borderRadius: 10,
        // borderWidth: 1.5,
        // borderColor: '#d9d9d9',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center'
    },
    top:{
        width: '100%',
        height: '50%',
        // backgroundColor: '#525252',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },  
    bottom:{
        width: '90%',
        height: '50%',
        // backgroundColor: '#662a2a',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    left:{
        width: '50%',
        height: '100%',
        // backgroundColor: '#7b9636',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    right:{
        width: '50%',
        height: '100%',
        // backgroundColor: '#444a35',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer1:{
        height: '100%',
        width: 30,
        // backgroundColor: '#33b5b3',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer2:{
        height: '100%',
        width: 30,
        // backgroundColor: '#33b5b3',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer1:{
        height: '100%',
        width: '80%',
        // backgroundColor: '#3d4d4c',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer2:{
        height: '100%',
        width: '80%',
        // backgroundColor: '#3d4d4c',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    balance:{
        fontSize: 26,
        fontWeight: 'bold',
        color: Colors.whiteText,
    },
    value:{
        color: Colors.whiteText,
    },
    smallText:{
        color: Colors.whiteText,
    },
   

})

export default BalanceCard;