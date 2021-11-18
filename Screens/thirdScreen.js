import React, {useState} from 'react';
import styles from '../Stylesheet.js'; 
import { Text, TouchableOpacity, View  } from 'react-native';


const thirdScreen = ({navigation}) => {

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
            Nothing here!
        </Text>

        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Go back!</Text>
        </TouchableOpacity>
      </View>
    )
}
export default thirdScreen;