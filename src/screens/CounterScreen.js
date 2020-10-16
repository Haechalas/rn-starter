import React, { useState} from 'react';
import {StyleSheet , View , Text, TouchableOpacity} from 'react-native';



const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return(
        <View>
            <Text style={styles.textStyle}>Current Count</Text>
            <Text style={styles.countBox}>{counter}</Text>
        <TouchableOpacity 
        style={styles.btnIncrease} 
        title ='Increase' 
        onPress={() => {setCounter(counter + 1)}}>
            <Text>Increase</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnDecrease} title ='Decrease' onPress={() => {setCounter(counter -1)}}>
            <Text>Decrease</Text>
        </TouchableOpacity>
        
        </View>
    );
}

const styles = StyleSheet.create ({
    textStyle:{
        alignSelf: "center",
        fontSize: 20,
      },
    countBox:{
        fontSize: 20,
        alignSelf: "center",
        textAlign: "center",
        width: 50,
        height: 50,
        borderWidth: 2,
        borderRadius: 8,
        padding: 10,
        marginVertical:10 
    },
      btnIncrease:{
        alignSelf: "center",
        alignItems: "center",
        width: 200,
        borderWidth: 2,
        borderRadius: 8,
        padding: 10,
        marginVertical:10 ,
      },
      btnDecrease:{
        alignSelf: "center",
        alignItems: "center",
        width: 200,
        borderWidth: 2,
        borderRadius: 8,
        padding: 10,
        marginVertical:10 ,
      }
});

export default CounterScreen;