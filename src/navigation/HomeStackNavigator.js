import { Image } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import logo from '../../assets/images/signature.png'
import EditPostScreen from '../screens/EditPostScreen/EditPostScreen';
import PostLikesScreen from '../screens/PostLikesScreen/PostLikesScreen';

const HeaderTitle = () => {
    return (
        <Image 
            source={logo}
            resizeMode='contain'
            style={{width: 150, height: 45}}
        />
    )
}

const HomeStackNavigator = () => {
const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{headerTitle: HeaderTitle, headerTitleAlign: 'center'}}/>

        <Stack.Screen 
            name="UserProfile"
            component={ProfileScreen}
            options={{
                title: 'Profile'
            }}
        />

        <Stack.Screen 
            name="EditPost"
            component={EditPostScreen}
            options={{
                title: 'Update Post'
            }}
        />
        <Stack.Screen
            name='PostLikes'
            component={PostLikesScreen}
            options={{title: 'Post Likes'}}
        />

    </Stack.Navigator>
  )
};

export default HomeStackNavigator