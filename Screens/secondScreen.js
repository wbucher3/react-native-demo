import React, {useState} from 'react';
import styles from '../Stylesheet.js'; 
import { Text, TouchableOpacity, View  } from 'react-native';


const secondScreen = ( {navigation }) => {
    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.title}>Did it work???</Text> 
    //   </View>
    // );
    
    ///////////////////////////////////////////

    const [count, setCount] = useState(0);

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Button pressed {count} times!
        </Text>

        <TouchableOpacity
        style={styles.button}
        onPress={() => setCount(currentCount => currentCount +1)}
        >
          <Text style={styles.buttonText}>Click me!</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('third')}
        >
          <Text style={styles.buttonText}>Next Page!</Text>
        </TouchableOpacity>
      </View>
    )
}
export default secondScreen;