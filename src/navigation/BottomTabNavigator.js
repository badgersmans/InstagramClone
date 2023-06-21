import HomeScreen from '../screens/HomeScreen/HomeScreen';
import PostUploadScreen from '../screens/PostUploadScreen/PostUploadScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import colors from '../theme/colors';
import HomeStackNavigator from './HomeStackNavigator';
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
            component={HomeScreen}
            options={{
                tabBarIcon: ({color, size}) => (<MaterialIcons name="search" size={size} color={color} />)
            }}
        />
        <Tab.Screen 
            name="Upload"
            component={PostUploadScreen}
            options={{
                tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="plus-circle-outline" size={size} color={color}/>),
                headerShown: false
            }}
        />
        <Tab.Screen 
            name="Notifications"
            component={PostUploadScreen}
            options={{
                tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="heart-outline" size={size} color={color}/>)
            }}
        />
        <Tab.Screen 
            name="MyProfile"
            component={ProfileScreen}
            options={{
                tabBarIcon: ({color, size}) => (<FontAwesome name="user-circle-o" size={size} color={color} />),
                title: 'My Profile'
            }}
        />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator