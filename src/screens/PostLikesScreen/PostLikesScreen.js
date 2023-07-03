import { ActivityIndicator } from 'react-native'
import React from 'react'
import { likesForPostByUser } from './queries';
import { useQuery } from '@apollo/client';
import { useRoute } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import UserListItem from '../../components/UserListItem/UserListItem';


const PostLikesScreen = () => {
    const route = useRoute();
    const {postId} = route.params
    const {data: queryData, loading: queryLoading, error: queryError, refetch} = useQuery(likesForPostByUser, {
        variables: { postID: postId}
    });
    const likes = queryData?.likesForPostByUser?.items.filter(like => !like._deleted) || [];

    if(queryLoading) {
        return <ActivityIndicator />;
    }
    if(queryError) {
        return <ApiErrorMessage title='Error loading likes' message={queryError?.message} />
    }

  return (
    <FlashList
          data={likes}
          renderItem={({ item }) => (
            <UserListItem user={item.User}/>
          )}
          showsVerticalScrollIndicator={false}
          estimatedItemSize={20}
          refreshing={queryLoading}
          onRefresh={refetch}
      />
  )
}

export default PostLikesScreen