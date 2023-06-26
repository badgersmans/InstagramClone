import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import { Text, Alert } from 'react-native';
import { useMutation } from '@apollo/client';
import { deletePost } from './queries';
import { useMyAuthContext } from '../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';


const PostMenu = ({post}) => {
  const [runDeletePost, { loading, error }] = useMutation(deletePost, { variables: { input: { id: post.id, _version: post._version } } });
  const {userId} = useMyAuthContext();
  const isMyPost = userId === post.User.id;
  const navigation = useNavigation();


  const onDelete = () => {
    Alert.alert('Are you sure?', 'Deleting a post is permanent', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Yes, Delete',
        style: 'destructive',
        onPress: actuallyDelete
      }
    ])
  };

  const onEdit = () => {
    navigation.navigate('EditPost', {id: post.id})
  };

  const actuallyDelete = async () => {
    try {
      const response = await runDeletePost();
      console.log(response);
    } catch (error) {
      Alert.alert('Failed to delete post', error.message)
    }
  }

  return (
    <Menu style={styles.dotIcon}>
    <MenuTrigger>
      <MaterialCommunityIcons name="dots-horizontal" size={24}/>
    </MenuTrigger>
    <MenuOptions>
      {isMyPost && (
        <>
          <MenuOption onSelect={onDelete} >
              <Text style={[styles.optionText ,{color: 'red'}]}>Delete Post</Text>
          </MenuOption>
          <MenuOption onSelect={onEdit} >
            <Text style={[styles.optionText ,{}]}>Update Post</Text>
          </MenuOption>
        </>
      )}
        <MenuOption onSelect={() => alert(`Report`)} >
          <Text style={[styles.optionText ,{}]}>Report Post</Text>
        </MenuOption>
    </MenuOptions>
    </Menu>
  )
}

export default PostMenu