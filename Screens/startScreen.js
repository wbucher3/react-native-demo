import React from 'react';
import styles from '../Stylesheet.js'; 
import { Text, View, TouchableOpacity } from 'react-native';

// 3 
const startScreen = ( {navigation }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome!</Text>
  
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('second', {startNum: 85, multi: 1})} 
        >
          <Text style={styles.buttonText}>Start Clicking!</Text>
        </TouchableOpacity>
  
      </View>
    );
}
export default startScreen;