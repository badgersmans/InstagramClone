import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import { Video, ResizeMode } from 'expo-av';

const VideoPlayer = ({uri, paused}) => {

  return (
    <View>
      <Video
        source={{
            uri
        }}
        style={styles.video}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        shouldPlay={paused}
      />
    </View>
  )
}

export default VideoPlayer