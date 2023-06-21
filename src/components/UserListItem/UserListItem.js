import { View, Text, Pressable } from 'react-native'
import Image from '../Image/Image'
import styles from './styles'
import { useNavigation } from '@react-navigation/native';


const UserListItem = ({user}) => {
    const navigation = useNavigation();

    const onUserPress = () => {
        navigation.navigate('UserProfile', { userId: user.id })
    }
  return (
    <Pressable style={styles.container} onPress={onUserPress}>
        <Image
            style={styles.image}
            source={user.image}
        />
        <View style={styles.innerContainer}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.username}>@{user.username}</Text>
        </View>
    </Pressable>
  )
}

export default UserListItem