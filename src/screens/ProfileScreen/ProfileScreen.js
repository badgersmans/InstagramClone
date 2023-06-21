import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import user from '../../../assets/data/user.json'
import ProfileHeader from './ProfileHeader'
import ListGridView from '../../components/ListGridView/ListGridView'
import { useRoute } from '@react-navigation/native';

const ProfileScreen = () => {
  // const { params: { userId } } = useRoute();
  // console.log(userId)
  return (
    <SafeAreaView>
      <ListGridView data={user.posts} Header={<ProfileHeader user={user} /> } />
    </SafeAreaView>
  )
}

export default ProfileScreen