import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

const Navigation = () => {
  return (
    <NavigationContainer theme={navTheme}>
        <Stack.Navigator 
            initialRouteName='Home'
        >
            <Stack.Screen name='Home' component={BottomTabNavigator} options={{headerShown: false}}/>

            <Stack.Screen 
                name="UserProfile"
                component={ProfileScreen}
                options={{
                    title: 'Profile'
                }}
            />

            {/* <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Settings" component={Settings} /> */}
        </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Navigation