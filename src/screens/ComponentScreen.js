import React from 'react';
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
    const MyName = <Text>Haechal</Text>
    return (
    <View>
        <Text style={styles.textStyle}>Getting started with react native!</Text>
        <Text style={styles.text2Style}>My name is {MyName}</Text>
    </View>
    )
    
}

const styles = StyleSheet.create({
textStyle: {
    fontSize: 45
},
text2Style: {
    fontSize: 20
}
});

export default ComponentScreen;