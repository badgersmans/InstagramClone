import { View, Text } from 'react-native'
import styles from './styles'
import { FlashList } from '@shopify/flash-list';
import users from '../../../assets/data/users.json'
import UserListItem from '../../components/UserListItem/UserListItem';

const UserSearchScreen = () => {
  return (
    <View style={styles.container}>
      <FlashList
          data={users}
          renderItem={({ item }) => (
            <UserListItem user={item}/>
          )}
          showsVerticalScrollIndicator={false}
          estimatedItemSize={20}
      />
    </View>
  )
}

export default UserSearchScreen