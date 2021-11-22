import React from 'react';
import styles from './Stylesheet.js'; 
import { Text, View, TouchableOpacity, Image} from 'react-native';

// Here is a basic react native app! this is the set up when you init in expo!
///////////////////////////////////////////////////////
// 1
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
    </View>
  );
}

//////////////////////////////////////////////////////
// 2
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome!</Text>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() =>  console.log("I was clicked")} 
//       >
//         <Text style={styles.buttonText}>Begin</Text>

//       </TouchableOpacity>

//     </View>
//   );
// }

//////////////////////////////////////////////////
// 3
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';
// import startScreen from './Screens/startScreen.js'
// import secondScreen from './Screens/secondScreen.js';
// import thirdScreen from './Screens/thirdScreen.js';

// export default function App() {
//   const Stack = createNativeStackNavigator();

//   return (    
//     <NavigationContainer> 
//       <Stack.Navigator initialRouteName="start" screenOptions={{headerShown: false}}>
//         <Stack.Screen name="start" component={startScreen}></Stack.Screen>  
//         <Stack.Screen name="second" component={secondScreen}></Stack.Screen>
//         <Stack.Screen name="third" component={thirdScreen}></Stack.Screen>
//       </Stack.Navigator>      
//     </NavigationContainer>  

//   );
// }
