import { Alert } from 'react-native';
import CustomButton from '../CustomButton';
import { Auth } from 'aws-amplify';
import {CognitoHostedUIIdentityProvider} from '@aws-amplify/auth'

const SocialSignInButtons = () => {

  const onSignInFacebook = async () => {
    try {
      await Auth.federatedSignIn({
        provider: CognitoHostedUIIdentityProvider.Facebook,
      })
    } catch (error) {
      Alert.alert('Error', error.message)
    }
    // console.warn('onSignInFacebook');
  };

  const onSignInGoogle = async () => {
    try {
      await Auth.federatedSignIn({
        provider: CognitoHostedUIIdentityProvider.Google,
      })
    } catch (error) {
      Alert.alert('Error', error.message)
    }
  };

  const onSignInApple = () => {
    console.warn('onSignInApple');
  };

  return (
    <>
      <CustomButton
        text="Login with Facebook"
        onPress={onSignInFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        text="Login with Google"
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        text=" Login with Apple"
        onPress={onSignInApple}
        bgColor="#000000"
        fgColor="#ffffff"
      />
    </>
  );
};

export default SocialSignInButtons;
