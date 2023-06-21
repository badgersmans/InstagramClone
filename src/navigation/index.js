import { Image } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import logo from '../../assets/images/signature.png'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

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

            <Stack.Screen 
                name="Home"
                component={HomeScreen}
                options={{
                    headerTitle: HeaderTitle,
                    headerTitleAlign: 'center'
                }}
            />
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

const HeaderTitle = () => {
    return (
        <Image 
            source={logo}
            resizeMode='contain'
            style={{width: 150, height: 45}}
        />
    )
}

export default Navigation