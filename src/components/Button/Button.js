import { View, Pressable, Text } from 'react-native'
import styles from './styles'

const Button = ({text = "", onPress = () => {}}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
        <Text>{text}</Text>
    </Pressable>
  )
}

export default Button