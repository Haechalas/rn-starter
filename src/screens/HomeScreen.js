import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

const HomeScreen = ({ navigation }) => {
  
  return (
  <View>
    <Text style={styles.title}>HomeScreen</Text>

    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Component')}>
      <Text style={styles.textButton}>Go to Component Demo!</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('List')}>
      <Text style={styles.textButton}>Go to List Demo!</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Image')}>
      <Text style={styles.textButton}>Go to Image Demo!</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Counter')}>
      <Text style={styles.textButton}>Go to Counter Demo!</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Color')}>
      <Text style={styles.textButton}>Go to Colors Demo!</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Square')}>
      <Text style={styles.textButton}>Go to Square Demo!</Text>
    </TouchableOpacity>
  </View>

  
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    alignSelf: "center",
    padding: 10
  },

  textButton:{
    alignSelf: "center",
  },

  btn:{
    alignSelf: "center",
    width: 200,
    borderWidth: 2,
    borderRadius: 8,
    padding: 10,
    marginVertical:10,
    

    
    
    
  }
});

export default HomeScreen;
