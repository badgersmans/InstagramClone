import { View, Text, TextInput, Pressable } from 'react-native'
import { Image } from 'expo-image';
import styles from './styles';
import { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useCommentService from '../../services/CommentService/CommentService';

const Input = ({ postId }) => {
  const insets = useSafeAreaInsets();
  // console.warn(postId)
  const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
  const [newComment, setNewComment] = useState('');
  const { onCreateComment } = useCommentService(postId)

  const onPost = () => {
    onCreateComment(newComment)
    setNewComment('')
  }

  return (
    <View style={[styles.inputContainer, { marginBottom: insets.bottom }]}>

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