import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type PlaceholderScreenProps = {
  title: string;
};

const PlaceholderScreen = ({ title }: PlaceholderScreenProps) => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2B2B2B',
  },
});

export default PlaceholderScreen;
