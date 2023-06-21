import { View } from 'react-native'
import React from 'react'
import comments from '../../../assets/data/comments.json'
import styles from './styles'
import { FlashList } from '@shopify/flash-list';
import Comment from '../../components/Comment/Comment';
import Input from './Input';


const CommentsScreen = () => {
  return (
    <>
    <View style={styles.container}>
      <FlashList
          data={comments}
          renderItem={({ item }) => (
            <Comment comment={item} includeDetails margin="6%"/>
          )}
          showsVerticalScrollIndicator={false}
          estimatedItemSize={60}
      />
    </View>
    <Input />
    </>
  )
}

export default CommentsScreen