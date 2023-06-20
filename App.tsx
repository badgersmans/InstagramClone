import { View } from 'react-native'
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CommentsScreen from './src/screens/CommentsScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import EditProfileScreen from './src/screens/EditProfileScreen/EditProfileScreen';
import PostUploadScreen from './src/screens/PostUploadScreen/PostUploadScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <View style={{flex: 1}}>
        {/* <HomeScreen /> */}
        {/* <CommentsScreen /> */}
        {/* <ProfileScreen /> */}
        {/* <EditProfileScreen /> */}
        <PostUploadScreen />
      </View>
    </SafeAreaProvider>
  )
}

export default App