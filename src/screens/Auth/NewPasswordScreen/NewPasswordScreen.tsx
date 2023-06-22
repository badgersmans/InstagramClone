import { useState } from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import FormInput from '../components/FormInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import { Auth } from 'aws-amplify';
import {useRoute} from '@react-navigation/native';

type NewPasswordType = {
  username: string;
  code: string;
  password: string;
};

const NewPasswordScreen = () => {
  const route = useRoute();
  const {control, handleSubmit} = useForm<NewPasswordType>();
  // const {control, handleSubmit} = useForm<NewPasswordType>({
  //   defaultValues: {username: route.params.username},
  // });
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const onSubmitPressed = async ({code, password}: NewPasswordType) => {
    if(loading) return;
    setLoading(true);
    try {
      await Auth.forgotPasswordSubmit(route.params.username, code, password);
      navigation.navigate('Sign in');
      // Alert.alert('Check your email', `The code has been sent to ${response.CodeDeliveryDetails.Destination}`)
      // console.log(response)
    } catch (error) {
      
    } finally {
      setLoading(false);
    }
    // console.warn(data);
  };

  const onSignInPress = () => {
    navigation.navigate('Sign in');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        {/* <FormInput
          placeholder="Username"
          name="username"
          control={control}
          rules={{required: 'Username is required'}}
        /> */}

        <FormInput
          placeholder="Code"
          name="code"
          control={control}
          rules={{required: 'Code is required'}}
        />

        <FormInput
          placeholder="Enter your new password"
          name="password"
          control={control}
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
        />

        <CustomButton text={loading ? 'Resetting...' : 'Reset Password'} onPress={handleSubmit(onSubmitPressed)} />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default NewPasswordScreen;
