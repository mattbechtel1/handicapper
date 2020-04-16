import React from 'react';
import theme from './themes/ui'

import { StyleSheet, View } from 'react-native';
import HelloWorld from './components/HelloWorld'
import AmericanOdds from './components/AmericanOdds'

export default function App() {
  return (
      <View style={styles.container}>
        <AmericanOdds />
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
