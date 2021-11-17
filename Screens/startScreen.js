import React from 'react';
import styles from '../Stylesheet.js'; 
import { Text, View, TouchableOpacity } from 'react-native';


const startScreen = ( {navigation }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome!</Text>
  
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('second')} 
        >
          <Text style={styles.buttonText}>Begin</Text>
        </TouchableOpacity>
  
      </View>
    );
}
export default startScreen;