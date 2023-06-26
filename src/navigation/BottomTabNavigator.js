import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import colors from '../theme/colors';
import HomeStackNavigator from './HomeStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';
import SearchTabNavigator from './SearchTabNavigator';
import CameraScreen from '../screens/CameraScreen';
import UploadStackNavigator from './UploadStackNavigator';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.black,
    }}>
        <Tab.Screen 
            name="HomeStack" 
            component={HomeStackNavigator} 
            options={{
                tabBarIcon: ({color, size}) => (<MaterialIcons name="home-filled" size={size} color={color} />),
                headerShown: false
            }}
        />
        <Tab.Screen 
            name="Search"
            component={SearchTabNavigator}
            options={{
                tabBarIcon: ({color, size}) => (<MaterialIcons name="search" size={size} color={color} />),
                headerShown: false
            }}
        />
        <Tab.Screen 
            name="Upload"
            component={UploadStackNavigator}
            options={{
                tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="plus-circle-outline" size={size} color={color}/>),
                headerShown: false
            }}
        />
        <Tab.Screen 
            name="Notifications"
            component={CameraScreen}
            options={{
                tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="heart-outline" size={size} color={color}/>)
            }}
        />
        <Tab.Screen 
            name="MyProfile"
            component={ProfileStackNavigator}
            options={{
                tabBarIcon: ({color, size}) => (<FontAwesome name="user-circle-o" size={size} color={color} />),
                title: 'My Profile',
                headerShown: false
            }}
        />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator