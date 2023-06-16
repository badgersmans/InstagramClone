import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import comments from '../../../assets/data/comments.json'
import styles from './styles'
import { FlashList } from '@shopify/flash-list';
import Comment from '../../components/Comment/Comment';


const CommentsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlashList
          data={comments}
          renderItem={({ item }) => (
            <Comment comment={item} includeDetails margin="6%"/>
          )}
          showsVerticalScrollIndicator={false}
          estimatedItemSize={20}
      />
    </SafeAreaView>
  )
}

export default CommentsScreen