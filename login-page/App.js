import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import { UtilsContext } from './context'

import Login from './Login'
import Register from './Register';
import Home from './Home';

export default function App() {
  const [data, setData] = useState({newUser: []})
  const Stack = createStackNavigator();

  const [user, setUser] = useState([])

  const addUser = (newUser) => {
    setUser([...user, newUser])
  } 
 
  return (
    <NavigationContainer>
      <UtilsContext.Provider value={{data, setData}}>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Login" component={Login}  />
        <Stack.Screen options={{headerShown:false}} name="Register">
          { props => <Register {...props} addUser={addUser}/> }
        </Stack.Screen>

        <Stack.Screen options={{headerShown:false}} name="Home" component={Home}  />
      </Stack.Navigator>
      </UtilsContext.Provider>
    </NavigationContainer>

  //   <View style={styles.container}>

  //     {
  //       arr.map((item, index) => {
  //         return (
  //           <Text key={index}>{item}</Text>
  //         )
  //       })
  //     }

  //     <StatusBar style="auto" />

  //     <TextInput
  //       multiline
  //       maxLength={40}
  //       placeholder='Enter your name'
  //       onChangeText={(text) => console.log(text)}
  //     />
  //     <TextInput
  //       multiline
  //       placeholder='Enter your password'
  //       maxLength={40}
  //       secureTextEntry={true}
  //       onChangeText={(text) => setPassword(text)}
  //     />
  //     <Button
  //       color={'orange'}
  //       title={'Submit'}
  //     ></Button>

      // <Switch
      //   trackColor={{ false: "#767577", true: "#81b0ff" }}
      //   value={color}
      //   onValueChange={(value) => setColor(!value)}
      // />
  //     <TouchableOpacity style={{height:'40px'}}>

  //     </TouchableOpacity>

  //     <Image
  //       style={{width: 50, height: 50}}
  //       source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
  //     />
  //   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
