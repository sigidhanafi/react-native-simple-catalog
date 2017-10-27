import React from 'react'
import { Text, View, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'

import { car, motorcycle } from '../example-data'

class CategoryScreen extends React.Component {

  constructor (props) {
    super(props)
    const { data } = props.navigation.state.params
    let dataSource
    switch (data) {
      case 'car':
        dataSource = car
        break
      case 'motorcycle':
        dataSource = motorcycle
        break
      default:
        dataSource = []
    }
    this.state = {
      dataSource,
    }
  }

  renderItem = (car) => {
    const { navigate } = this.props.navigation
    return (
      <TouchableOpacity
        onPress={() => navigate('Detail', { title: 'Detail', data: car})}
        style={styles.listContainer}
      >
        <View style={styles.leftContainer}>
          <Image
            source={{ uri: car.imageUrl }}
            style={styles.image}
          />
        </View>
        <View style={styles.centerContainer}>
          <Text style={styles.title}>{car.title}</Text>
          <Text style={styles.subtitle}>{car.subtitle}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.price}>{car.price}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render () {
    const { dataSource } = this.state
    return (
      <View style={styles.container}>
        <FlatList
          data={dataSource}
          renderItem={({item}) => this.renderItem(item)}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }
}

export default CategoryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  listContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#E3E3E2',
    padding: 10,
  },
  leftContainer: {
    flex: 3,
  },
  centerContainer: {
    flex: 4,
  },
  rightContainer: {
    flex: 3,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 11,
  },
  price: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  image: {
    width: 80,
    height: 80,
  }
})