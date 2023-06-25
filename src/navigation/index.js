import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import CommentsScreen from '../screens/CommentsScreen/CommentsScreen';
import * as Linking from 'expo-linking';
import AuthStackNavigator from './AuthStackNavigator';
import { useMyAuthContext } from '../contexts/AuthContext';
import { ActivityIndicator, View } from 'react-native';
import {useQuery} from '@apollo/client'
import { getUser } from './queries';
import EditProfileScreen from '../screens/EditProfileScreen/EditProfileScreen';


const Stack = createNativeStackNavigator();
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

const Navigation = () => {
  const {user, userId} = useMyAuthContext();
  const {data, loading, error} = useQuery(getUser, {variables: { id: userId }});
  const userData = data?.getUser;
  console.log(userData)
  if(user === undefined || loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator />
      </View>
    )
  }
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

  let stackScreens = null;
  if(!user) {
    stackScreens = (
      <Stack.Screen name='Auth' component={AuthStackNavigator} options={{headerShown: false}}/>
    )
  } else if(!userData?.username) {
    stackScreens = (
    <Stack.Screen name='Edit Profile' component={EditProfileScreen} options={{ title: 'Finish Your Profile' }}/>
    )
  } else {
    stackScreens = (
      <>
        <Stack.Screen name='Home' component={BottomTabNavigator} options={{headerShown: false}} />
        <Stack.Screen name='Comments' component={CommentsScreen} />
      </>
    )
  }

  return (
    <NavigationContainer theme={navTheme} linking={linking}>
        <Stack.Navigator>
          {stackScreens}
        </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Navigation