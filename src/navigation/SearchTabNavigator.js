import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CommentsScreen from '../screens/CommentsScreen/CommentsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import colors from '../theme/colors';
import UserSearchScreen from '../screens/UserSearchScreen/UserSearchScreen';


const Tab = createMaterialTopTabNavigator();

const SearchTabNavigator = () => {
  const insets = useSafeAreaInsets();
  return (
      <Tab.Navigator screenOptions={{ tabBarStyle: {marginTop: insets.top}, tabBarIndicatorStyle: { backgroundColor: colors.primary } }}>
        <Tab.Screen name="UserSearch" component={UserSearchScreen} options={{title: 'Users'}}/>
        <Tab.Screen name="PostSearch" component={CommentsScreen} options={{title: 'Posts'}}/>
      </Tab.Navigator>
  )
}

export default SearchTabNavigator