import { View, Text, Pressable } from 'react-native'
import { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import { Image } from 'expo-image';

const Comment = ({ comment, includeDetails = false, margin = '2%' }) => {
  const [isCommentExpanded, setIsCommentExpanded] = useState(false);
  const [like, setLike] = useState(false);
  // console.log(margin)
  // console.log(comment.comment.length)
  const COMMENT_BREAKPOINT = 115;
  const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  const toggleLike = () => {
    setLike((v) => !v)
  }

  const toggleComment = () => {
    setIsCommentExpanded(v => !v)
  }

  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: margin,
      // backgroundColor: 'green'
    }}>

      {includeDetails && (
        <Image
          style={styles.avatar}
          source={comment.user.image}
          placeholder={blurhash}
          contentFit="cover"
          transition={300}
        />
      )}

        <View style={{flex: 1}}>
          <Text style={styles.commentContainer} numberOfLines={isCommentExpanded ? null : 2}>{comment.user.username}
              <Text style={{fontWeight: 'normal'}}> {comment.comment}</Text>
          </Text>

        {includeDetails && (
        <View style={styles.footer}>
          <Text style={styles.footerText}>2d</Text>
          <Text style={styles.footerText}>5 likes</Text>
          <Text style={styles.footerText}>Reply</Text>
        </View>
        )}

            {comment.comment.length >= COMMENT_BREAKPOINT && (
              <Pressable onPress={toggleComment}>
                <Text style={styles.lessMoreText}>Read {isCommentExpanded ? 'Less' : 'More'}</Text>
              </Pressable>
            )}

        </View>

        <Pressable 
          onPress={toggleLike}
          hitSlop={10}
        >
          <AntDesign
              name={like ? `heart` : 'hearto'}
              size={18}
              style={styles.icon}
              color={like ? '#ED4956' : 'black'}
          />
        </Pressable> 

    </View>
  )
}

export default Comment