/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import carIcon from './src/images/car.png'
import vespaIcon from './src/images/vespa.png'
import bicycleIcon from './src/images/bicycle.png'
import computerIcon from './src/images/computer.png'
import phoneIcon from './src/images/phone.png'
import cameraIcon from './src/images/camera.png'
import homeIcon from './src/images/home.png'
import sofaIcon from './src/images/sofa.png'
import tshirtIcon from './src/images/t-shirt.png'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
        <Text style={styles.blue}>Fake-</Text>
          <Text style={styles.blue}>O</Text>
          <Text style={styles.green}>L</Text>
          <Text style={styles.orange}>X</Text>
          .co.id
        </Text>
        <View style={styles.row}>
          <View style={styles.col}>
            <Image
              source={carIcon}
              style={styles.icon}
            />
            <Text>Mobil</Text>
          </View>
          <View style={styles.col}>
            <Image
              source={vespaIcon}
              style={styles.icon}
            />
            <Text>Motor</Text>
          </View>
          <View style={styles.col}>
            <Image
              source={bicycleIcon}
              style={styles.icon}
            />
            <Text>Sepeda</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.col}>
            <Image
              source={computerIcon}
              style={styles.icon}
            />
            <Text>Mobil</Text>
          </View>
          <View style={styles.col}>
            <Image
              source={phoneIcon}
              style={styles.icon}
            />
            <Text>Motor</Text>
          </View>
          <View style={styles.col}>
            <Image
              source={cameraIcon}
              style={styles.icon}
            />
            <Text>Sepeda</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.col}>
            <Image
              source={homeIcon}
              style={styles.icon}
            />
            <Text>Mobil</Text>
          </View>
          <View style={styles.col}>
            <Image
              source={sofaIcon}
              style={styles.icon}
            />
            <Text>Motor</Text>
          </View>
          <View style={styles.col}>
            <Image
              source={tshirtIcon}
              style={styles.icon}
            />
            <Text>Sepeda</Text>
          </View>
        </View>
      </View>
    );
  }
}

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
    margin: 30,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    height: 90,
  },
  col: {
    flex: 1,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
  },
  title: {
    textAlign: 'center',
    color: '#333333',
  },
  fake: {
    color: '#5A2F80',
    fontSize: 50,
    fontWeight: 'bold',
  },
  blue: {
    color: '#5A2F80',
    fontSize: 50,
    fontWeight: 'bold',
  },
  green: {
    color: '#BFBD27',
    fontSize: 50,
    fontWeight: 'bold',
  },
  orange: {
    color: '#FD8324',
    fontSize: 50,
    fontWeight: 'bold',
  }
});
