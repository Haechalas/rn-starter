import React from 'react';
import {View, Text , StyleSheet} from 'react-native';
import ColorCounter from '../component/ColorCounter';

const SquareScreen = () =>{
    return(
        <View>
            <ColorCounter color="RED"/>
            <ColorCounter color="GREEN"/>
            <ColorCounter color="BLUE"/>

        </View>
    );
}

const styles= StyleSheet.create({

})

export default SquareScreen;