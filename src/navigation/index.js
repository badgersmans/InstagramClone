import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const Navigation = () => {
  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
          <HomeScreen />
        {/* <CommentsScreen /> */}
        {/* <ProfileScreen /> */}
        {/* <EditProfileScreen /> */}
        {/* <PostUploadScreen /> */}
      </View>
    </NavigationContainer>
  )
}

export default Navigation