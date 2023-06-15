import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const Comment = ({ comment }) => {
  return (
    <View style={styles.commentContainer}>
        <Text style={{fontWeight: 'bold', lineHeight: 19}} numberOfLines={2}>{comment.user.username}
            <Text style={{fontWeight: 'normal'}}> {comment.comment}</Text>
        </Text>
        <AntDesign
            name={'hearto'}
            size={18}
            style={[styles.icon, {marginLeft: 'auto'}]}
            color={'black'}
        />
    </View>
  )
}

export default Comment