import { View, Pressable, Text } from 'react-native'
import styles from './styles'

const Button = ({text = "", onPress = () => {}, inline = false}) => {
  return (
    <Pressable style={[styles.container, {flex: inline ? 1 : undefined}]} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

export default Button