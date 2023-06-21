import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import CommentsScreen from '../screens/CommentsScreen/CommentsScreen';

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
            <Stack.Screen name='Comments' component={CommentsScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Navigation