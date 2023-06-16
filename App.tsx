import { View } from 'react-native'
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CommentsScreen from './src/screens/CommentsScreen';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <HomeScreen />
      {/* <CommentsScreen /> */}
    </View>
  )
}

export default App