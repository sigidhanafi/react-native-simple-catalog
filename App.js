import {
  StackNavigator,
} from 'react-navigation'
import HomeScreen from './src/components/HomeScreen'
import CategoryScreen from './src/components/CategoryScreen'

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Category: {
    screen: CategoryScreen,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.title}`,
    }),
  },
})

export default App
