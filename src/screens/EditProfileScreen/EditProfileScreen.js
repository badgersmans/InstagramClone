import { View, Text, TextInput, Pressable, ActivityIndicator, Alert } from 'react-native'
import { useEffect, useState } from 'react'
import styles from './styles'
import { useForm, Controller } from "react-hook-form"
import * as ImagePicker from 'expo-image-picker';
import Image from '../../components/Image'
import {useQuery, useMutation} from '@apollo/client'
import { deleteUser, getUser, updateUser } from './queries';
import { useMyAuthContext } from '../../contexts/AuthContext'
import ApiErrorMessage from '../../components/ApiErrorMessage/ApiErrorMessage'
import { useNavigation } from '@react-navigation/native';
import colors from '../../theme/colors';
import { Auth } from 'aws-amplify';

const URL_REGEX = /^(?!mailto:)(?:(?:http|https|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:(\/|\?|#)[^\s]*)?$/gi;
const USERNAME_REGEX = /^[a-zA-Z0-9]+$/gi;

const Input = ({placeholder = '', multiline = false, control, name, rules = {}}) => {

  return (
    <Controller 
      control={control}
      name={name}
      render={(
        {field: { onChange, value, onBlur }, 
        fieldState: { error }}) => {
          // console.log(`field error: ${JSON.stringify(error)}`)
          return (
            <View style={styles.inputContainer}>
              <Text style={styles.label}>{placeholder}</Text>
              <View style={styles.inputAndErrorContainer}>
                <TextInput 
                  placeholder={placeholder}
                  style={[styles.input, { borderColor: error ? 'red' : 'lightgrey' }]}
                  value={value}
                  onChangeText={onChange}
                  multiline={multiline}
                  onBlur={onBlur}
                  autoCapitalize='none'
                  autoComplete='off'
                />
                {error && <Text style={styles.errorText}>{error.message || 'error'}</Text>}

              </View>

            </View>
        )}
      }
      rules={rules}
    />
  )

}

const EditProfileScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { control, handleSubmit, formState: {errors}, setValue } = useForm();
  const {userId: authUserId, user: authUser} = useMyAuthContext();
  const {data, loading, error} = useQuery(getUser, {variables: { id: authUserId }});
  const [runUpdateUser, { loading: updateLoading, error: updateError }] = useMutation(updateUser, {variables: {  }});
  const [runDelete, { loading: deleteLoading, error: deleteError }] = useMutation(deleteUser);
  const user = data?.getUser;
  const navigation = useNavigation();
  // console.log(user)

  useEffect(() => {
    if(user) {
      setValue('name', user.name);
      setValue('username', user.username);
      setValue('website', user.website);
      setValue('bio', user.bio);
    }
  }, [user, setValue])


  const onSubmit = (formData) => {
    runUpdateUser({
      variables: {
        input: {
          id: authUserId,
          ...formData,
          _version: user._version
        }
      }
    });
    navigation.goBack();
  }

  const onDeleteAccount = () => {
    Alert.alert('Are You Sure?', 'Deleting your account is permanent', [
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

  const actuallyDelete = async () => {
    if(!user) return;
    console.log(user._version)

    // delete from dynamo db
    await runDelete({
      variables: {
        input: { id: authUserId },
        _version: user._version
      }
    });

    // delete from cognito
    await authUser.deleteUser(error => {
      if(error) {
        console.log(error)
      }
      Auth.signOut();
    })
  }

  const onChangePhoto = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1],
        quality: 1,
      });
  
      // console.log(result);
  
      if (!result.canceled) {
        setSelectedImage(result.assets[0]);
      }
    
  }
  // console.log(errors)

  if(loading) {
    return <ActivityIndicator />;
  }
  if(error || updateError || deleteError) {
    return <ApiErrorMessage title='Error loading profile' message={error?.message || updateError?.message || deleteError?.message}/>
  }

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.avatar} source={selectedImage?.uri || user.image} />
        <Pressable onPress={onChangePhoto}>
          <Text style={styles.textProfileButton}>Change profile photo</Text>
        </Pressable>
      </View>

      <Input 
        placeholder='Name' 
        control={control} 
        name="name" 
        rules={{required: "Name is required"}}
      />
      <Input 
        placeholder='Username' 
        control={control} 
        name="username" 
        rules={
          {
            required: "Username is required", 
            minLength: {
              value: 3,
              message: 'Username must be at least 3 characters'
            },
            pattern: {
              value: USERNAME_REGEX,
              message: 'Usernames cannot have symbols'
            }
          }
        }
      />
      <Input 
        placeholder='Website' 
        control={control} 
        name="website" 
        rules={
          {
            // required: "Website is required", 
            pattern: {
              value: URL_REGEX,
              message: 'Please enter a valid URL'
            }
          }
        }
      />
      <Input 
        placeholder='Bio' 
        control={control} 
        name="bio" 
        multiline 
        rules={
          {
            // required: "Bio is required", 
            maxLength: {
              value: 200,
              message: 'Your bio is too long 😏'
            }
          }
        }
      />
      <Pressable onPress={handleSubmit(onSubmit)}>
        <Text style={styles.textButton}>{updateLoading ? 'Updating...' : 'Update'}</Text>
      </Pressable>

      <Pressable onPress={onDeleteAccount}>
        <Text style={[styles.textButton, {color: colors.error}]}>{deleteLoading ? 'Deleting Account...' : 'Delete Account'}</Text>
      </Pressable>
    </View>
  )
}

export default EditProfileScreen