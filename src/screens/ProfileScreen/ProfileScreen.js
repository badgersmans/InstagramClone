import { View, ActivityIndicator } from 'react-native';
import ProfileHeader from './ProfileHeader'
import ListGridView from '../../components/ListGridView/ListGridView'
import { useRoute } from '@react-navigation/native';
import {useQuery} from '@apollo/client'
import { getUser } from './queries';
import ApiErrorMessage from '../../components/ApiErrorMessage/ApiErrorMessage';
import { useMyAuthContext } from '../../contexts/AuthContext';

const ProfileScreen = () => {
  const route = useRoute();
  const {userId: authUserId} = useMyAuthContext();
  const userId = route.params?.userId || authUserId;
  // console.log(`authUserId`, authUserId)
  const {data, loading, error, refetch} = useQuery(getUser, {variables: { id: userId }});
  // const posts = data.listPosts.items;

  const user = data?.getUser;
  if(loading) {
    return <ActivityIndicator />;
  }
  if(error || !user) {
    return <ApiErrorMessage title='Error loading profile' message={error.message || `User not found`} onRetry={() => refetch()}/>
  }

  // console.log(data)
  return (
    <View>
      <ListGridView 
        data={user.Posts?.items}
        Header={<ProfileHeader user={user} /> }
        refetch={refetch}
        loading={loading}
      />
    </View>
  )
}

export default ProfileScreen