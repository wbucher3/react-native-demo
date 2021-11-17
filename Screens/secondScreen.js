import React from 'react';
import styles from '../Stylesheet.js'; 
import { Text, View  } from 'react-native';


const secondScreen = ( {navigation }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Did it work???</Text> 
      </View>
    );
}
export default secondScreen;