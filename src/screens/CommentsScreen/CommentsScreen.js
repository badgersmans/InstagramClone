import { View, ActivityIndicator } from 'react-native'
import React from 'react'
import styles from './styles'
import { FlashList } from '@shopify/flash-list';
import Comment from '../../components/Comment/Comment';
import Input from './Input';
import {useRoute} from '@react-navigation/native';
import { useQuery } from '@apollo/client';
import { commentsByPost } from './queries';
import ApiErrorMessage from '../../components/ApiErrorMessage/ApiErrorMessage';

const CommentsScreen = () => {
  const route = useRoute();
  const { postId } = route.params;
  const {data, loading, error} = useQuery(commentsByPost, { variables: {postID: postId} });
  const comments = data?.commentsByPost?.items.filter(comment => !comment._deleted);

  if(loading) {
    return <ActivityIndicator />;
  }
  if(error) {
    return <ApiErrorMessage title='Error loading comments' message={error?.message } />
  }

  return (
    <>
    <View style={styles.container}>
      <FlashList
          data={comments}
          renderItem={({ item }) => (
            <Comment comment={item} includeDetails marginBottom="6%" marginTop="4%"/>
          )}
          showsVerticalScrollIndicator={false}
          estimatedItemSize={60}
          ListEmptyComponent={() => (
            <Text>Be the first to comment</Text>
          )}
      />
    </View>
    <Input postId={postId}/>
    </>
  )
}

export default CommentsScreen