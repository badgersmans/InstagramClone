import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import Image from '../../components/Image'
import user from '../../../assets/data/user.json'

const Input = ({placeholder = '', multiline = false}) => {
  const [name, setName] = useState(user.name)

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{placeholder}</Text>
      <TextInput 
        placeholder={placeholder}
        style={styles.input}
        value={name}
        onChangeText={setName}
        multiline={multiline}
      />
    </View>
  )
}

const EditProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.avatar} source='https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg' />
        <Text style={styles.textButton}>Change profile photo</Text>
      </View>

      <Input placeholder='Name'/>
      <Input placeholder='Username'/>
      <Input placeholder='Website'/>
      <Input placeholder='Bio' multiline/>

      <Text style={styles.textButton} onPress={() => console.log('submit...')}>Submit</Text>
    </SafeAreaView>
  )
}

export default EditProfileScreen