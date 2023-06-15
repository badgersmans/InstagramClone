import Post from '../../components/Post/Post';
import posts from '../../../assets/data/posts';
import { FlashList } from "@shopify/flash-list";

const HomeScreen = () => {
  return (
      <FlashList
        data={posts}
        renderItem={({ item }) => <Post post={item}/>}
        estimatedItemSize={20}
        showsVerticalScrollIndicator={false}
      />
  )
}

export default HomeScreen