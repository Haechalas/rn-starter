import React from 'react';
import { FlatList } from 'react-native';
import {Text, StyleSheet , View} from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: '20'},
        { name: 'Friend #2', age: '45'},
        { name: 'Friend #3', age: '32'},
        { name: 'Friend #4', age: '27'},
        { name: 'Friend #5', age: '53'},
        { name: 'Friend #6', age: '30'},
        { name: 'Friend #7', age: '18'},
        { name: 'Friend #8', age: '21'},
        { name: 'Friend #9', age: '25'},
        
    ]
    
    return(
        <View>
        <Text style={styles.title}>ListScreen</Text>
        <FlatList 
        showsVerticalScrollIndicator={false}
        keyExtractor={friends => friends.name}
        data={friends} 
        renderItem={({item}) => {
        return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
        }} />
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        alignSelf: "center",
        padding: 10
      },
    textStyle:{
        borderWidth: 2,
        padding: 10,
        borderColor: '#000',
        marginVertical: 50,
        marginTop: 0,

    }

});

export default ListScreen;