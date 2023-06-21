import { View, Text, TextInput, Pressable } from 'react-native'
import { Image } from 'expo-image';
import styles from './styles';
import { useState } from 'react'

const Input = () => {
  const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
  const [newComment, setNewComment] = useState('')

  const onPost = () => {
    console.log('post...')
    setNewComment('')
  }
  return (
    <View style={[styles.inputContainer]}>

      <Image
        style={styles.image}
        source={"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/4.jpg"}
        placeholder={blurhash}
        contentFit="cover"
        transition={300}
      />

      <TextInput 
        placeholder='Share your thoughts'
        style={styles.input}
        multiline
        value={newComment}
        onChangeText={setNewComment}
      />

      <Pressable 
        style={styles.postButtonContainer} 
        onPress={onPost}
      >
        <Text style={styles.postButton}>post</Text>
      </Pressable>
    </View>
  )
}

export default Input