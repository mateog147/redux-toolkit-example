import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Title} from './Title';

export const Card = () => {
  return (
    <View style={styles.container}>
      <Title />
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
