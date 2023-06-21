import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import CommentsScreen from '../screens/CommentsScreen/CommentsScreen';
import * as Linking from 'expo-linking';


const Stack = createNativeStackNavigator();
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

const Navigation = () => {
  const linking = {
    prefixes: [Linking.createURL('/'), 'https://shawninstagramclone.com'],
    config: {
      initialRouteName: 'Home',
      screens: {
        Comments: 'comments',
        Home: {
          screens: {
            HomeStack: {
              initialRouteName: 'Home',
              screens: {
                UserProfile: 'user/:userId'
              }
            }
          }
        }
      }
    }
  }

  return (
    <NavigationContainer theme={navTheme} linking={linking}>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={BottomTabNavigator} options={{headerShown: false}}/>
            <Stack.Screen name='Comments' component={CommentsScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Navigation