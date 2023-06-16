import { View, Text, SafeAreaView, Image as RNImage } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { Image } from 'expo-image';
import { MaterialCommunityIcons, AntDesign, Ionicons, Feather } from '@expo/vector-icons';
import Comment from '../Comment';
import DoublePressable from '../DoublePressable/DoublePressable';
import Carousel from '../Carousel/Carousel';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const Post = ({post, isVisible}) => {
    const [isDescExpanded, setIsDescExpanded] = useState(false);
    const [like, setLike] = useState(false)
    const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
// console.log(isVisible)
  const toggleLike = () => {
    setLike((v) => !v)
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
    <SafeAreaView style={styles.container}>
        <View style={styles.postHeader}>
            <Image
                style={styles.profileImage}
                source={post.user.image}
                placeholder={blurhash}
                contentFit="cover"
                transition={300}
            />
            <Text style={styles.name}>{post.user.username}</Text>
            <MaterialCommunityIcons name="dots-horizontal" style={styles.dotIcon}/>
        </View>

        {content}

    <View style={styles.footer}>
        <View style={styles.iconContainer}>
                <AntDesign
                    name={like ? `heart` : 'hearto'}
                    size={24}
                    style={styles.icon}
                    color={like ? '#ED4956' : 'black'}
                    onPress={() => setLike(!like)}
                />
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

        <Text>
            Liked by 
            <Text style={{fontWeight: 'bold'}}> {post.user.username} </Text>
            and 
            <Text style={{fontWeight: 'bold'}}> {post.nofLikes} others </Text>
        </Text>

        <Text style={{fontWeight: 'bold', marginTop: '2%', lineHeight: 19}} numberOfLines={isDescExpanded ? null : 2}>{post.user.username}
            <Text style={{fontWeight: 'normal'}}> {post.description}</Text>
        </Text>
        <Text style={styles.lessMoreText} onPress={() => setIsDescExpanded(!isDescExpanded)}>Read {isDescExpanded ? 'Less' : 'More'}</Text>

        <Text style={{color: 'grey', marginTop: '2%'}}>View all {post.nofComments} comments</Text>
        {post.comments.map(comment => (
            <Comment comment={comment} key={comment.id}/>
        ))}
        <Text style={{color: 'grey', marginTop: '2%', fontSize: 13}}>{post.createdAt}</Text>
    </View>

    </SafeAreaView>
  )
}

export default Post