import React, {useState} from 'react';
import styles from '../Stylesheet.js'; 
import { Text, TouchableOpacity, View  } from 'react-native';


const thirdScreen = ({route, navigation}) => {
    // 4
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

    /////////////////////////////////////////////////////////

    // 6

    // const {count, multi} = route.params;
    // const [money, setMoney] = useState(count);
    // const [plier, setPlier] = useState(multi);
    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.title}>
    //         Current Cookies: {money}!
    //     </Text>

    //     <Text style={styles.title}>
    //       Current Multipler: x{plier}!
    //     </Text>

    //     <TouchableOpacity 
    //       style={styles.button}
    //       onPress={()=> {
    //         if (money > 100) {
    //           setMoney(currentMoney => currentMoney - 100);
    //           setPlier(currentMulti => currentMulti * 2);
    //         }
    //       }}
    //     >
    //       <Text style={styles.buttonText}>Double the Multipler!</Text>
    //       </TouchableOpacity>

    //     <TouchableOpacity
    //     style={styles.button}
    //     onPress={() => navigation.navigate('second', {startNum: money, multi: plier})}
    //     >
    //       <Text style={styles.buttonText}>Go back!</Text>
    //     </TouchableOpacity>
    //   </View>
    // )
}
export default thirdScreen;