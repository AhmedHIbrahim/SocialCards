import React from 'react';
import {View, StyleSheet} from 'react-native';

const Separator = (props) => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    alignSelf: 'center',
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#ff5252',
  },
});

export {Separator};
