import Post from '../../components/Post/Post';
import { useRef, useState, useEffect } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import {useQuery} from '@apollo/client'
import { listPosts } from './queries';
import ApiErrorMessage from '../../components/ApiErrorMessage/ApiErrorMessage';

const HomeScreen = () => {
  const [activePostId, setActivePostId] = useState(null);
  const {data, loading, error} = useQuery(listPosts, {variables: { limit: 0 }});

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    // console.log(data)
    if(viewableItems.length > 0) {
      // console.log(viewableItems)
      setActivePostId(viewableItems[0].item.id)
    }
  });

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 80
  }

  if(loading) {
    return <ActivityIndicator />;
  }
  if(error) {
    return <ApiErrorMessage title='Error loading posts' message={error.message} />
  }
  const posts = data.listPosts.items;

  console.log(data)

  return (
      <FlatList
        data={posts}
        renderItem={({ item }) => item && <Post post={item} isVisible={activePostId === item.id} />}
        // estimatedItemSize={20}
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
      />
  )
}

export default HomeScreen