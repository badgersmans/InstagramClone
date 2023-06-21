import { View } from 'react-native'
import CommentsScreen from './src/screens/CommentsScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import EditProfileScreen from './src/screens/EditProfileScreen/EditProfileScreen';
import PostUploadScreen from './src/screens/PostUploadScreen/PostUploadScreen';
import Navigation from './src/navigation';

const App = () => {
  return (
    <Navigation />
  )
}

export default App