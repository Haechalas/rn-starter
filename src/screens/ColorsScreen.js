import React , {useState} from 'react';
import { View, StyleSheet , Button, FlatList} from 'react-native';

const ColorsScreen = () => {
    const [colors, setColors] = useState([]);
    console.log(colors);
    return(
        <View>
            <Button title= 'Add Color' onPress={() => {
                setColors([...colors, randomRGB()]);
            }}/>
            
            <FlatList style={{marginTop: 5}}
            keyExtractor={item => item}
            data={colors}
            renderItem={({item})=> {
               return <View style={{  alignSelf: "center" ,width: 100 , height: 100, backgroundColor: item }}/>

            }}
            />
        </View>
    )
};

const randomRGB = ()=>{
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green} , ${blue})`;    
};

const styles = StyleSheet.create({

})

export default ColorsScreen;