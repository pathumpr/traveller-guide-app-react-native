import React from 'react'
import { View,
         StyleSheet,
         Text,
         TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImageBox from './ImageBox'


const ImageCard = (props) =>{

    return(

        <TouchableOpacity>
        <View style={styles.selectBody}>
            <View style={styles.selectCard}>
                <View style={styles.selectIcon}>

                    <Icon name="photo" color={'#808080'} size={44}/>
                    <Text style={styles.selectText}> {props.value} </Text>

                </View>
            </View>
        </View>
        </TouchableOpacity>

    )

}

const styles = StyleSheet.create({

    selectBody:{
        // backgroundColor: '#000',
        width: '100%',
        height: 120,
        // borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectCard:{
        width: '100%',
        height: '90%',
        backgroundColor: '#dbdbdb',
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: '#d9d9d9',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
    },   
    selectText:{
        fontSize: 12,
        fontWeight: '400',
        color: '#808080',
        padding: 2,
    },
    selectIcon:{
        // width: '100%',
        // height: '100%',
        // backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
    },
   

})

export default ImageCard;