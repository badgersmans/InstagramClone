import { View, TextInput, Alert } from 'react-native'
import { useRoute } from '@react-navigation/native';
import styles from './styles'
import Image from '../../components/Image';
import { useState } from 'react';
import Button from '../../components/Button';
import { createPost } from './queries';
import {useQuery, useMutation} from '@apollo/client'
import { useMyAuthContext } from '../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';
import VideoPlayer from '../../components/VideoPlayer';
import Carousel from '../../components/Carousel';

const CreatePostScreen = () => {
    const route = useRoute();
    const {image, images, video} = route.params;
    const [description, setDescription] = useState('');
    const [runCreatePost, { loading, error }] = useMutation(createPost);
    const {userId} = useMyAuthContext();
    const navigation = useNavigation();

    let content = null;
    if(image) {
      content = (
        <Image
            style={styles.image}
            source={image}
        />
      )
    } else if(images) {
      content = <Carousel images={images} />
    } else if(video){
      content = (
        <VideoPlayer uri={video} />
      )
    }

    const post = async () => {
        try {
            const response = await runCreatePost({
                variables: {
                    input: {
                        description,
                        image,
                        images,
                        video,
                        nofComments: 0,
                        nofLikes: 0,
                        userID: userId,
                    }
    
                },
            });
            navigation.popToTop();
            navigation.navigate('HomeStack');
            console.log(response)
        } catch (error) {
            Alert.alert('Failed to post', error.message)
        }
    }

  return (
    <View style={styles.container}>
        <View style={styles.content}>
            {content}
        </View>

      <TextInput 
        placeholder='Description'
        style={styles.input}
        multiline
        numberOfLines={5}
        autoCapitalize='none'
        autoComplete='off'
        autoCorrect={false}
        autoFocus
        value={description}
        onChangeText={setDescription}
      />

      <Button text={loading ? 'Posting...' : 'Post'} onPress={post}/>

    </View>
  )
}

export default CreatePostScreen