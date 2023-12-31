import { View, Text, Image as RNImage, Pressable } from 'react-native'
import { useState } from 'react'
import styles from './styles'
import { Image } from 'expo-image';
import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';
import Comment from '../Comment';
import DoublePressable from '../DoublePressable/DoublePressable';
import Carousel from '../Carousel/Carousel';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import { useNavigation } from '@react-navigation/native';
import { DEFAULT_USER_IMAGE } from '../../config';
import PostMenu from './PostMenu';
import useLikeService from '../../services/LikeService';


const Post = ({post, isVisible}) => {
    const { toggleLike, isLiked} = useLikeService(post);
    const navigation = useNavigation();
    const [isDescExpanded, setIsDescExpanded] = useState(false);
    const DESCRIPTION_BREAKPOINT = 1400;
    const postLikes = post.Likes?.items.filter(like => !like._deleted) || [];
    const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
// console.log(post.images)

  const navigateToUser = () => {
    if(post.User) {
        navigation.navigate('UserProfile', {
            userId: post.User.id,
        })
    }
  }

  const navigateToComments = () => {
    navigation.navigate('Comments', {
        postId: post.id,
    })
  }

  const navigateToLikesPage = () => {
    navigation.navigate('PostLikes', {
        postId: post.id,
    })
  }

  const toggleDescription = () => {
    setIsDescExpanded(v => !v)
  }

  let content = null;
  if(post.image) {
    content = (
        <DoublePressable onDoublePress={toggleLike}>
            <Image
                style={styles.image}
                source={post.image}
                placeholder={blurhash}
                contentFit="cover"
                transition={300}
            />
        </DoublePressable>
    )
  } else if(post.images) {
    content = <Carousel images={post.images} onDoublePress={toggleLike}/>
  } else if(post.video){
    content = (
        <DoublePressable onDoublePress={toggleLike}>
            <VideoPlayer uri={post.video} paused={isVisible}/>
        </DoublePressable>
    )
  }

  return (
    <View style={styles.container}>
        <View style={styles.postHeader}>
            <Pressable style={styles.photoNameContainer} onPress={navigateToUser}>
                <Image
                    style={styles.profileImage}
                    source={post.User?.image || DEFAULT_USER_IMAGE}
                    placeholder={blurhash}
                    contentFit="cover"
                    transition={300}
                />
                <Text style={styles.name}>{post.User.username}</Text>
            </Pressable>
            <PostMenu post={post}/>
        </View>
        {content}
        <View style={styles.footer}>
            <View style={styles.iconContainer}>
                <Pressable onPress={toggleLike}>
                    <AntDesign
                        name={isLiked ? `heart` : 'hearto'}
                        size={24}
                        style={styles.icon}
                        color={isLiked ? '#ED4956' : 'black'}
                    />
                </Pressable>
                    <Ionicons
                        name="chatbubble-outline"
                        size={24}
                        style={styles.icon}
                        color={'black'}
                    />
                    <Feather
                        name="send"
                        size={24}
                        style={styles.icon}
                        color={'black'}
                    />
                    <Feather
                        name="bookmark"
                        size={24}
                        style={{marginLeft: 'auto'}}
                        color={'black'}
                    />
            </View>

            {postLikes.length === 0 ? (
                <Text>Be the first to like this post</Text>
            ) : (
                    <Text onPress={navigateToLikesPage}>
                        Liked by 
                        <Text style={{fontWeight: 'bold'}}> {postLikes[0]?.User?.username} </Text>
                        {postLikes.length > 1 && (
                            <>
                                and
                                <Text style={{fontWeight: 'bold'}}> {post.nofLikes - 1} others </Text>
                            </>
                        )} 
                    </Text>
            )}

            <Text style={{fontWeight: 'bold', marginTop: '2%', lineHeight: 19}} numberOfLines={isDescExpanded ? null : 2}>{post.User?.username}
                <Text style={{fontWeight: 'normal'}}> {post.description}</Text>
            </Text>
            {post.description.length >= DESCRIPTION_BREAKPOINT && (
                <Pressable onPress={toggleDescription}>
                    <Text style={styles.lessMoreText} >Read {isDescExpanded ? 'Less' : 'More'}</Text>
                </Pressable>
            )}

            <Text style={{color: 'grey', marginTop: '2%'}} onPress={navigateToComments}>View all {post.nofComments} comments</Text>
            {(post.Comments?.items || []).map(comment => (
                <Comment comment={comment} key={comment.id} />
            ))}
            <Text style={{color: 'grey', marginTop: '2%', fontSize: 13}}>{post.createdAt}</Text>
        </View>
    </View>
  )
}

export default Post