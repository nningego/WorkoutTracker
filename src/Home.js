import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const version = `Version ${DeviceInfo.getVersion()} + ${DeviceInfo.getBuildNumber()}`;

const Home = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>Track workouts here</Text>
    <Text style={styles.instructions}>{version}</Text>
  </View>
);

export default Home;
