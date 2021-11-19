import React, {useEffect, useState} from 'react';
import styles from '../Stylesheet.js'; 
import { Text, TouchableOpacity, View, Image, ImageBackground  } from 'react-native';

const secondScreen = ( {route, navigation }) => {
    // 3
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Did it work???</Text> 
      </View>
    );
    
    ///////////////////////////////////////////
    // 4
    // const [count, setCount] = useState(0);

    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.title}>
    //       Button pressed {count} times!
    //     </Text>

    //     <TouchableOpacity
    //     style={styles.button}
    //     onPress={() => setCount(currentCount => currentCount +1)}
    //     >
    //       <Text style={styles.buttonText}>Click me!</Text>
    //     </TouchableOpacity>

    //     <TouchableOpacity
    //     style={styles.button}
    //     onPress={() => navigation.navigate('third')}
    //     >
    //       <Text style={styles.buttonText}>Next Page!</Text>
    //     </TouchableOpacity>
    //   </View>
    // )
    
    ///////////////////////////////////////////////////////////

    // 5
    // const {startNum} = route.params;
    // const [count, setCount] = useState(startNum);

    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.title}>
    //       Button pressed {count} times!
    //     </Text>

    //     <TouchableOpacity
    //     style={styles.button}
    //     onPress={() => setCount(currentCount => currentCount +1)}
    //     >
    //       <Text style={styles.buttonText}>Click me!</Text>
    //     </TouchableOpacity>

    //     <TouchableOpacity
    //     style={styles.button}
    //     onPress={() => navigation.navigate('third', {currentTotal: count})}
    //     >
    //       <Text style={styles.buttonText}>Next Page!</Text>
    //     </TouchableOpacity>
    //   </View>
    // )
    

    //////////////////////////////////////////////////////////
   
    // 6
  
    // const {startNum, multi} = route.params;
    
    // const [count, setCount] = useState(startNum);

    // useEffect(() => {
    //   setCount(() => startNum);
    // }, [startNum])

    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.title}>
    //       {count} Cookies!
    //     </Text>
    //     <TouchableOpacity
    //     onPress={() => setCount(currentCount => currentCount + multi)}
    //     >
    //       <Image style={styles.image} source={require('../images/cookie.png')} />
    //     </TouchableOpacity>

    //     <TouchableOpacity
    //     style={styles.button}
    //     onPress={() => navigation.navigate('third', {count: count, multi: multi})}
    //     >
    //       <Text style={styles.buttonText}>Upgrades!</Text>
    //     </TouchableOpacity>
    //   </View>
    // )
}
export default secondScreen;