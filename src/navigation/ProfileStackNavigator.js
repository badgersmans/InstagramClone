import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen/EditProfileScreen';

const ProfileStackNavigator = () => {
const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
        <Stack.Screen name='Profile' component={ProfileScreen} />

        <Stack.Screen 
            name="Edit Profile"
            component={EditProfileScreen}
            options={{
                title: 'Edit Profile'
            }}
        />
    </Stack.Navigator>
  )
};

export default ProfileStackNavigator