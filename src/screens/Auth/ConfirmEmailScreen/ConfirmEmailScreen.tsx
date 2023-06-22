import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import FormInput from '../components/FormInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/core';
import {useForm} from 'react-hook-form';
import { Auth } from 'aws-amplify';
import {useRoute} from '@react-navigation/native';

type ConfirmEmailData = {
  username: string;
  code: string;
};

const ConfirmEmailScreen = () => {
  const route = useRoute();
  const {control, handleSubmit, watch} = useForm<ConfirmEmailData>({
    defaultValues: {username: route.params.username},
  });
  const [confirming, setConfirming] = useState(false);
  const [resending, setResending] = useState(false);
  const navigation = useNavigation();
  const watchedUsername = watch('username')

  const onConfirmPressed = async ({username, code}: ConfirmEmailData) => {
    if(confirming) return;
    setConfirming(true);
    try {
      await Auth.confirmSignUp(username, code);
      navigation.navigate('Sign in');
    } catch (error) {
      Alert.alert('Error', error.message)
    } finally {
      setConfirming(false)
    }
    // console.warn(data);
  };

  const onSignInPress = () => {
    navigation.navigate('Sign in');
  };

  const onResendPress = async () => {
    if(resending) return;
    setResending(true);
    try {
      await Auth.resendSignUp(watchedUsername);
      Alert.alert('Check your email', 'The email has been sent')
    } catch (error) {
      Alert.alert('Error', error.message)
    } finally {
      setResending(false)
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>

        <FormInput
          name="username"
          control={control}
          placeholder="Username"
          rules={{
            required: 'Username is required',
          }}
        />

        <FormInput
          name="code"
          control={control}
          placeholder="Enter your confirmation code"
          rules={{
            required: 'Confirmation code is required',
          }}
        />

        <CustomButton text={confirming ? 'Confirming...' : 'Confirm'} onPress={handleSubmit(onConfirmPressed)} />

        <CustomButton
          text={resending ? 'Resending...' : 'Resend Code'}
          onPress={onResendPress}
          type="SECONDARY"
        />

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

export default ConfirmEmailScreen;
