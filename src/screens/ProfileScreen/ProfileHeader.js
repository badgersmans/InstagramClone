import { View, Text, Alert, Pressable } from 'react-native'
import { useState } from 'react'
import Button from '../../components/Button/Button'
import styles from './styles'
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import { DEFAULT_USER_IMAGE } from '../../config';
import { useMyAuthContext } from '../../contexts/AuthContext';


const ProfileHeader = ({user}) => {
const blurhash =
'|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
const [isBioExpanded, setIsBioExpanded] = useState(false);
const navigation = useNavigation();
const BIO_BREAKPOINT = 160;
const {userId: authUserId} = useMyAuthContext();

  const toggleBio = () => {
    setIsBioExpanded(v => !v)
  }
  const navigateToEditProfile = () => {
    navigation.navigate('Edit Profile', {
        // userId: post.user.id,
    })
  }

  const onLogout = async () => {
    try {
        await Auth.signOut();
    } catch (error) {
        Alert.alert('Error', error.message)
    }
  }

  return (
    <>
        <View style={styles.headerContainer}>
            <Image
            style={styles.avatar}
            source={user.image || DEFAULT_USER_IMAGE}
            placeholder={blurhash}
            contentFit="cover"
            transition={300}
            />

            <View style={styles.statsContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.textTop}>{user.Posts?.items?.length}</Text>
                <Text style={styles.textBottom}>{user.Posts?.items?.length <= 1 ? `post` : `posts`}</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.textTop}>{user.nofFollowers}</Text>
                <Text style={styles.textBottom}>{user.nofFollowers <= 1 ? `follower` : `followers`}</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.textTop}>{user.nofFollowings}</Text>
                <Text style={styles.textBottom}>{user.nofFollowings <= 1 ? `following` : `followings`}</Text>
            </View>
            </View>
        </View>

        <View style={styles.bioContainer}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.bio} numberOfLines={isBioExpanded ? null : 2}>{user.bio}</Text>
            {user.bio?.length >= BIO_BREAKPOINT && (
                <Pressable onPress={toggleBio}>
                    <Text style={styles.lessMoreText} onPress={toggleBio}>Read {isBioExpanded ? 'Less' : 'More'}</Text>
                </Pressable>
            )}
        </View>

        {authUserId === user.id && (
            <View style={styles.buttonContainer}>
                <Button text={'Edit Profile'} onPress={navigateToEditProfile} inline/>
                <Button text={'Log Out'} onPress={onLogout} inline/>
            </View>
        )}
    </>
  )
}

export default ProfileHeader