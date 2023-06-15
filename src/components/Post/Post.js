import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './styles'
import { Image } from 'expo-image';
import { MaterialCommunityIcons, AntDesign, Ionicons, Feather } from '@expo/vector-icons';

const Post = () => {
    const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.postHeader}>
            <Image
                style={styles.profileImage}
                source="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg"
                placeholder={blurhash}
                contentFit="cover"
                transition={300}
            />
            <Text style={styles.name}>Shawn</Text>
            <MaterialCommunityIcons name="dots-horizontal" style={styles.dotIcon}/>
        </View>

      <Image
        style={styles.image}
        source="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg"
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
            <Text style={{fontWeight: 'bold'}}> shawnlts6 </Text>
            and 
            <Text style={{fontWeight: 'bold'}}> 66 others </Text>
        </Text>

        <Text style={{fontWeight: 'bold', marginTop: '2%', lineHeight: 19}}>shawnlts6
            <Text style={{fontWeight: 'normal'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusantium nam sdfsdfddse animi excepturi expedita repudiandae, maxime deleniti accusamus eos voluptatibus nostrum suscipit blanditiis voluptatum dolorem facilis in reiciendis?</Text>
        </Text>

        <Text style={{color: 'grey', marginTop: '2%'}}>View all 66 comments</Text>
        <View style={styles.commentContainer}>
            <Text style={{fontWeight: 'bold', lineHeight: 19}}>shawnlts6
                <Text style={{fontWeight: 'normal'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus</Text>
            </Text>
            <AntDesign
                name={'hearto'}
                size={18}
                style={[styles.icon, {marginLeft: 'auto'}]}
                color={'black'}
            />
        </View>
        <Text style={{color: 'grey', marginTop: '2%', fontSize: 13}}>19th December 2022</Text>
    </View>



    </SafeAreaView>
  )
}

export default Post