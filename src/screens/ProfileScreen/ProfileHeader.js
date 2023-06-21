import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import styles from './styles'
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';


const ProfileHeader = ({user}) => {
    const blurhash =
'|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
const [isBioExpanded, setIsBioExpanded] = useState(false);
const navigation = useNavigation();


  const toggleBio = () => {
    setIsBioExpanded(v => !v)
  }
  const navigateToEditProfile = () => {
    navigation.navigate('Edit Profile', {
        // userId: post.user.id,
    })
  }

  return (
    <>
        <View style={styles.headerContainer}>
            <Image
            style={styles.avatar}
            source={user.image}
            placeholder={blurhash}
            contentFit="contain"
            transition={300}
            />

            <View style={styles.statsContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.textTop}>{user.posts.length}</Text>
                <Text style={styles.textBottom}>posts</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.textTop}>98</Text>
                <Text style={styles.textBottom}>followers</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.textTop}>98</Text>
                <Text style={styles.textBottom}>following</Text>
            </View>
            </View>
        </View>

        <View style={styles.bioContainer}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.bio} numberOfLines={isBioExpanded ? null : 2}>{user.bio}</Text>
            <Text style={styles.lessMoreText} onPress={toggleBio}>Read {isBioExpanded ? 'Less' : 'More'}</Text>
        </View>

        <View style={styles.buttonContainer}>
            <Button text={'Edit Profile'} onPress={navigateToEditProfile} />
            <Button text={'Another Button'} onPress={() => console.log('pressed2...')} />
        </View>
    </>
  )
}

export default ProfileHeader