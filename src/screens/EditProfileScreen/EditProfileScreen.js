import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import Image from '../../components/Image'
import user from '../../../assets/data/user.json'
import { useForm, Controller } from "react-hook-form"

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
  const { control, handleSubmit, formState: {errors} } = useForm({
    defaultValues: {
      name: user.name,
      username: user.username,
      website: user.website,
      bio: user.bio
    }
  });

  const onSubmit = (data) => {
    console.log(data)

  }
  // console.log(errors)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.avatar} source='https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg' />
        <Text style={styles.textButton}>Change profile photo</Text>
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

      <Text style={styles.textButton} onPress={handleSubmit(onSubmit)}>Submit</Text>
    </SafeAreaView>
  )
}

export default EditProfileScreen