import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";
import ImageDetail from '../component/ImageDetail';


const ImageScreen = () => {
    return(
        <View>
            <ImageDetail 
            title='Forest' 
            imageScore ={7}
            imageSource={require('../../assets/forest.jpg')}/>

            <ImageDetail 
            title='Beach'
            imageScore ={9}
            imageSource={require('../../assets/beach.jpg')}/>

            <ImageDetail 
            title='Mountain'
            imageScore ={8}
            imageSource={require('../../assets/mountain.jpg')}/>
            
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        alignSelf: "center",
        padding: 10
      },
})

export default ImageScreen;