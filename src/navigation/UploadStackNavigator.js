import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraScreen from '../screens/CameraScreen/CameraScreen';
import CreatePostScreen from '../screens/CreatePostScreen/CreatePostScreen';

const UploadStackNavigator = () => {
const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
        <Stack.Screen name='Camera' component={CameraScreen} options={{ headerShown: false }}/>

        <Stack.Screen 
            name="Create"
            component={CreatePostScreen}
            options={{
                // title: 'Profile'
            }}
        />
    </Stack.Navigator>
  )
};

export default UploadStackNavigator