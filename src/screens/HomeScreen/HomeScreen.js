import Post from '../../components/Post/Post';
import { useRef, useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';

const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        video
        image
        images
        nofComments
        nofLikes
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        User {
          id
          name
          username
          image
        }
        Comments {
          items {
            id
            comment
            User {
              id
              name
            }
          }
        }
      }
      nextToken
      startedAt
    }
  }
`;

const HomeScreen = () => {
  const [activePostId, setActivePostId] = useState(null);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async() => {
    const response = await API.graphql(graphqlOperation(listPosts));
    console.log(response)
    setPosts(response.data.listPosts.items);
    // console.log(response);
  }

  useEffect(() => {
    fetchPosts();
  }, [])

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
        renderItem={({ item }) => <Post post={item} isVisible={activePostId === item.id} />}
        // estimatedItemSize={20}
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
      />
  )
}

export default HomeScreen