import React from 'react'
import { Image,
         View,
         StyleSheet,
} from 'react-native';
import { Dimensions } from 'react-native';


const GalleryImage = (props) =>{

    return(

        <View style={styles.body}>

            <Image source={props.path == '../assets/images/man.jpg' ? require('../assets/images/empty.jpg') : {uri:props.path}} resizeMode='cover' style={styles.img} />

        </View>

    )

}

    const screenWidth =  Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    const imgsize = screenWidth/3 - 5 

const styles = StyleSheet.create({

    body:{
        // backgroundColor: '#000',
        width: imgsize,
        height: imgsize,
        // borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img:{
        width: imgsize,
        height: imgsize,
        borderRadius: 10,
        // borderRadius: 10,
    }  

})

export default GalleryImage;