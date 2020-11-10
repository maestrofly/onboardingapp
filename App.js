import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import OnlineShoppingScreen from './src/screens/OnlineShoppingScreen';
import AddToCartScreen from './src/screens/AddToCartScreen';
import PaymentSuccessfulScreen from './src/screens/PaymentSuccessfulScreen';

const Stack = createStackNavigator()

export default function App() {
  return (
   <NavigationContainer>

      <Stack.Navigator
       screenOptions={
        {
          title:"FLY SHOP",
          headerStyle:{
            backgroundColor:"red"
          },
          headerTintColor:"blue",
          headerTitleAlign:"center",
          headerRight:()=>(<Text style={{color:"green", marginRight:10}}>Icon</Text>),
          headerLeft: ()=>(<Text style={{color:"green", marginRight:10}}>Icon</Text>)
        }
       }
      >
      <Stack.Screen
      // options={} 
      name="OnlineShopping"
     component={OnlineShoppingScreen} />

        <Stack.Screen name="AddToCart" component={AddToCartScreen} />
        
        <Stack.Screen name="PaymentSuccessful" component={PaymentSuccessfulScreen} />
      </Stack.Navigator>

   </NavigationContainer>
  );
}


