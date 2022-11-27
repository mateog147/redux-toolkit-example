import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setMessage} from '../store/reducers/message';

export const MessageComponent = () => {
  const dispatch = useDispatch();
  const {message} = useSelector((state: any) => state.message);

  const handlePress = () => {
    dispatch(setMessage('Message from Component'));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <Button title={'Set Message'} onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
  },
});
