import { View } from 'react-native'
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CommentsScreen from './src/screens/CommentsScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <View style={{flex: 1}}>
        {/* <HomeScreen /> */}
        <CommentsScreen />
      </View>
    </SafeAreaProvider>
  )
}

export default App