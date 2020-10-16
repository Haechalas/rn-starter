import React from "react";
import { Text, StyleSheet, View, Image} from "react-native";

const ImageDetail = ({ imageScore, imageSource, title}) => {
    return(
        <View style={styles.container}>
            <Image source={imageSource}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.title}>Image Score - {imageScore}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginLeft: 16,
    },

    title: {
        fontSize: 16,
      }
})

export default ImageDetail;