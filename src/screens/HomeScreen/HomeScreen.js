import Post from '../../components/Post/Post';
import posts from '../../../assets/data/posts';
import { useRef, useState } from 'react';
import { FlatList } from 'react-native';

const HomeScreen = () => {
  const [activePostId, setActivePostId] = useState(null)

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

  // console.log(activePostId)

  return (
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} isVisible={activePostId === item.id}/>}
        // estimatedItemSize={20}
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
      />
  )
}

export default HomeScreen