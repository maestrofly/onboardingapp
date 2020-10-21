import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OnlineShoppingScreen from './OnlineShoppingScreen'
import AddToCartScreen from './AddToCartScreen'
import PaymentSuccessfulScreen from './PaymentSuccessfulScreen'

export default function App() {
  return (
    <View>
      <OnlineShoppingScreen />
      {/* <AddToCartScreen />
      <PaymentSuccessfulScreen /> */}
    </View>
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
