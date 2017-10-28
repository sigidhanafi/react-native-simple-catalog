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
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import {
  AppEventsLogger,
  LoginButton,
  AccessToken
} from 'react-native-fbsdk'

import carIcon from '../images/car.png'
import vespaIcon from '../images/vespa.png'
import bicycleIcon from '../images/bicycle.png'
import computerIcon from '../images/computer.png'
import phoneIcon from '../images/phone.png'
import cameraIcon from '../images/camera.png'
import homeIcon from '../images/home.png'
import sofaIcon from '../images/sofa.png'
import tshirtIcon from '../images/t-shirt.png'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  }

  constructor (props) {
    super(props)
    AppEventsLogger.logEvent('page', { name: 'home' })
    this.state = {
      login: false,
      token: '',
    }
  }

  componentDidMount () {
    AccessToken.getCurrentAccessToken().then(
      (data) => {
        this.setState({ login: true, token: data.accessToken.toString() })
        console.log(data.accessToken.toString())
      }
    )
    .catch(error => console.log('Error', error))
  }

  render() {
    const { navigate } = this.props.navigation;    
    return (
      <ScrollView style={styles.container}>
        <View style={styles.bodyContainer}>
          <Text style={styles.welcome}>
          <Text style={styles.blue}>Fake-</Text>
            <Text style={styles.blue}>O</Text>
            <Text style={styles.green}>L</Text>
            <Text style={styles.orange}>X</Text>
            .co.id
          </Text>
          <View style={styles.row}>
            <View style={styles.col}>
              <TouchableOpacity
                style={styles.categoryContainer}
                onPress={() => navigate('Category', { title: 'Mobil', data: 'car'})}
              >
                <Image
                  source={carIcon}
                  style={styles.icon}
                />
                <Text>Mobil</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.col}>
              <TouchableOpacity
                style={styles.categoryContainer}
                onPress={() => navigate('Category', { title: 'Motor', data: 'motorcycle'})}
              >
                <Image
                  source={vespaIcon}
                  style={styles.icon}
                />
                <Text>Motor</Text>
              </TouchableOpacity>
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
              <Text>Komputer/ Laptop</Text>
            </View>
            <View style={styles.col}>
              <Image
                source={phoneIcon}
                style={styles.icon}
              />
              <Text>Smartphone</Text>
            </View>
            <View style={styles.col}>
              <Image
                source={cameraIcon}
                style={styles.icon}
              />
              <Text>Kamera</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.col}>
              <Image
                source={homeIcon}
                style={styles.icon}
              />
              <Text>Rumah</Text>
            </View>
            <View style={styles.col}>
              <Image
                source={sofaIcon}
                style={styles.icon}
              />
              <Text>Furnitur</Text>
            </View>
            <View style={styles.col}>
              <Image
                source={tshirtIcon}
                style={styles.icon}
              />
              <Text>Pakaian</Text>
            </View>
          </View>
          
          <View style={styles.separator} />

          {!this.state.login ? (
            <Text style={styles.instructions}>
              Jadi member untuk mendapatkan penawaran diskon menarik!
            </Text>
          ) : (
            <Text style={styles.instructions}>
              Selamat! Dengan bergabung menjadi member, Anda berhak mendapatkan diskon hingga 70%.
            </Text>
          )}

          <LoginButton
            publishPermissions={["publish_actions"]}
            onLoginFinished={
              (error, result) => {
                if (error) {
                  alert("login has error: " + result.error);
                } else if (result.isCancelled) {
                  alert("login is cancelled.");
                } else {
                  AccessToken.getCurrentAccessToken().then(
                    (data) => {
                      this.setState({ login: true, token: data.accessToken.toString() })
                      // alert(data.accessToken.toString())
                    }
                  )
                  .catch(error => console.log('Error', error))
                }
              }
            }
            onLogoutFinished={() => alert("logout.")}
          />
        </View>
      </ScrollView>
    );
  }
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 30,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 20,
    marginBottom: 20,
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
  categoryContainer: {
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
  },
  separator: {
    marginTop: 50,
    width: Dimensions.get('window').width / 2,
    height: 1,
    borderWidth: 0.2,
    borderColor: '#FD8324',
  }
});
