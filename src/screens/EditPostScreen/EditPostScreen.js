import { View, TextInput, Alert, ActivityIndicator } from 'react-native'
import { useRoute } from '@react-navigation/native';
import styles from './styles'
import { useState, useEffect } from 'react';
import Button from '../../components/Button';
import { getPost, updatePost } from './queries';
import {useQuery, useMutation} from '@apollo/client'
import { useMyAuthContext } from '../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';
import ApiErrorMessage from '../../components/ApiErrorMessage/ApiErrorMessage';


const EditPostScreen = () => {
    const route = useRoute();
    const {id} = route.params;
    const [description, setDescription] = useState('');
    const {data, loading, error} = useQuery(getPost, {variables: { id }});
    const [runUpdatePost, { data: updateData, loading: updateLoading, error: updateError }] = useMutation(updatePost);
    const navigation = useNavigation();
    const post = data.getPost

    useEffect(() => {
      if(data) {
        setDescription(post.description)
      }
    }, [data]);

    useEffect(() => {
      if(updateData) {
        navigation.goBack();
      }
    }, [updateData, navigation]);

    const update = async () => {
      if(!post) return;
      try {
        const response = await runUpdatePost({
          variables: {
            input: {
              id: post.id,
              _version: post._version,
              description
            }
          }
        });
        console.log(response)
      } catch (error) {
        Alert.alert('Error updating post')
      }
    };

    if(loading || updateLoading) {
      return <ActivityIndicator />;
    }
    if(error || updateError) {
      return <ApiErrorMessage title='Error updating post' message={error?.message || updateError?.message}/>
    }

  return (
    <View style={styles.container}>

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

      <Button text={updateLoading ? 'Updating...' : 'Update'} onPress={update}/>

    </View>
  )
}

export default EditPostScreen