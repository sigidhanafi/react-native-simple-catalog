import React from 'react'
import { Text, View, FlatList, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

class DetailScreen extends React.Component {

  constructor (props) {
    super(props)
    const { data } = props.navigation.state.params
    this.state = {
      data,
    }
  }

  render () {
    const { data } = this.state
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: data.imageUrl }}
          style={styles.image}
        />
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.subtitle}>Dijual oleh: {data.owner}</Text>
        <Text style={styles.subtitle}>Dengan harga: {data.price}</Text>
        <Text style={styles.description}>{data.description}</Text>
        <TouchableOpacity
          onPress={() => {}}
          style={styles.button}
        >
          <Text style={styles.buttontext}>Beli</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default DetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
  },
  subtitle: {
    fontSize: 11,
    marginLeft: 10,
    marginRight: 10,
  },
  description: {
    fontSize: 11,
    padding: 10,
  },
  price: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  image: {
    marginLeft: 10,
    marginRight: 10,
    width: Dimensions.get('window').width - 20,
    height: 300,
    resizeMode: 'cover'
  },
  button: {
    backgroundColor: '#3C5A96',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  buttontext: {
    color: '#FFFFFF',
    padding: 10,
  },
})