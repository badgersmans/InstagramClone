import { View, Text, TextInput } from 'react-native'
import { Controller } from "react-hook-form"
import styles from './styles'

const Input = ({
    placeholder = '',
    multiline = false,
    control,
    name,
    rules = {}
}) => {
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

export default Input;