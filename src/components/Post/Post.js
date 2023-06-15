import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './styles'
import { Image } from 'expo-image';
import { MaterialCommunityIcons, AntDesign, Ionicons, Feather } from '@expo/vector-icons';
import Comment from '../Comment';

const Post = ({post}) => {
    const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.postHeader}>
            <Image
                style={styles.profileImage}
                source={post.image}
                placeholder={blurhash}
                contentFit="cover"
                transition={300}
            />
            <Text style={styles.name}>{post.user.username}</Text>
            <MaterialCommunityIcons name="dots-horizontal" style={styles.dotIcon}/>
        </View>

      <Image
        style={styles.image}
        source={post.image}
        placeholder={blurhash}
        contentFit="cover"
        transition={300}
      />

    <View style={styles.footer}>
        <View style={styles.iconContainer}>
                <AntDesign
                    name={'hearto'}
                    size={24}
                    style={styles.icon}
                    color={'black'}
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

        <Text style={{fontWeight: 'bold', marginTop: '2%', lineHeight: 19}} numberOfLines={3}>{post.user.username}
            <Text style={{fontWeight: 'normal'}}> {post.description}</Text>
        </Text>

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