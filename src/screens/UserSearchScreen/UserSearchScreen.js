import { View, ActivityIndicator } from 'react-native'
import styles from './styles'
import { FlashList } from '@shopify/flash-list';
import UserListItem from '../../components/UserListItem/UserListItem';
import {useQuery} from '@apollo/client'
import { listUsers } from './queries';
import ApiErrorMessage from '../../components/ApiErrorMessage/ApiErrorMessage';

const UserSearchScreen = () => {
  const {data, loading, error, refetch} = useQuery(listUsers, {variables: {}});

  const users = (data?.listUsers?.items || []).filter(user => !user._deleted);
  console.log(users)
  if(loading) {
    return <ActivityIndicator />;
  }
  if(error) {
    return <ApiErrorMessage title='Error loading users' message={error.message} />
  }

  return (
    <View style={styles.container}>
      <FlashList
          data={users}
          renderItem={({ item }) => (
            item && <UserListItem user={item}/>
          )}
          showsVerticalScrollIndicator={false}
          estimatedItemSize={20}
          onRefresh={refetch}
          refreshing={loading}
      />
    </View>
  )
}

export default UserSearchScreen