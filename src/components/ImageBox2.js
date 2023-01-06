import React from 'react'
import { Image,
         View,
         StyleSheet,
} from 'react-native'


const ImageBox = (props) =>{

    return(

        <View style={styles.body}>

            <Image source={require('../assets/images/empty.jpg')} resizeMode='contain' style={styles.img} />

        </View>

    )

}

const styles = StyleSheet.create({

    body:{
        // backgroundColor: '#000',
        width: 110,
        height: 110,
        // borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img:{
        width: 110,
        height: 110,
        borderRadius: 10,
    }  

})

export default ImageBox;