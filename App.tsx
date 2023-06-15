import { View, Text } from 'react-native'
import colors from './src/theme/colors'
import fonts from './src/theme/fonts'
import Post from './src/components/Post/Post'

const App = () => {


  return (
    <View style={{flex: 1}}>
      <Post />
    </View>
  )
}

export default App