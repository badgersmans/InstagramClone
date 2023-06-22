import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Alert,
} from 'react-native';
import Logo from '../../../../assets/images/signature.png';
import FormInput from '../components/FormInput';
import CustomButton from '../components/CustomButton';
import SocialSignInButtons from '../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import { Auth } from 'aws-amplify';
import { useState } from 'react';
import { useMyAuthContext } from '../../../contexts/AuthContext';

type SignInData = {
  username: string;
  password: string;
};

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const {control, handleSubmit, reset} = useForm<SignInData>();
  const {setUser} = useMyAuthContext();

  const onSignInPressed = async ({username, password}: SignInData) => {
    if(loading) return;
    setLoading(true);
    // console.log(data);
    try {
      const cognitoUser = await Auth.signIn(username, password);
      setUser(cognitoUser);
      // console.log(cognitoUser)
    } catch (error) {
      if(error.name === 'UserNotConfirmedException') {
        navigation.navigate('Confirm email', {username})
      } else {
        Alert.alert('Error', error.message)
      }
    } finally {
      setLoading(false)
      reset();
    }
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('Forgot password');
  };

  const onSignUpPress = () => {
    navigation.navigate('Sign up');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />

        <FormInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{required: 'Username is required'}}
        />

        <FormInput
          name="password"
          placeholder="Password"
          secureTextEntry
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password should be minimum 6 characters long',
            },
          }}
        />

        <CustomButton text={loading ? 'Logging in...' : 'Login'} onPress={handleSubmit(onSignInPressed)} />

        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <SocialSignInButtons />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
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
  logo: {
    width: '50%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen;
