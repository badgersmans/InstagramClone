import { View } from 'react-native';
import user from '../../../assets/data/user.json'
import ProfileHeader from './ProfileHeader'
import ListGridView from '../../components/ListGridView/ListGridView'
import { useRoute } from '@react-navigation/native';

const ProfileScreen = () => {
  const route = useRoute();
  const userId = route.params?.userId;

  console.log(userId)
  return (
    <View>
      <ListGridView data={user.posts} Header={<ProfileHeader user={user} /> } />
    </View>
  )
}

export default ProfileScreen