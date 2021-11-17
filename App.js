import React from 'react';
import styles from './Stylesheet.js'; 
import { Text, View, TouchableOpacity } from 'react-native';

// Here is a basic react native app! this is the set up when you init in expo!
///////////////////////////////////////////////////////

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome!</Text>
//     </View>
//   );
// }
// export default App;

//////////////////////////////////////////////////////

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome!</Text>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => console.log("I was clicked!")}
//       >
//         <Text style={styles.buttonText}>Begin</Text>
//       </TouchableOpacity>

//     </View>
//   );
// }
// export default App;

//////////////////////////////////////////////////

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import startScreen from './Screens/startScreen.js'
import secondScreen from './Screens/secondScreen.js';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (    
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="start" screenOptions={{headerShown: false}}>
        <Stack.Screen name="start" component={startScreen} style={styles.container}></Stack.Screen>  
        <Stack.Screen name="second" component={secondScreen} style={styles.container}></Stack.Screen>
      </Stack.Navigator>      
    </NavigationContainer>  

  );
}
