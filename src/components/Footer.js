import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Footer = (props) => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      </View>

      <Text style={styles.text}>Ⓒ2021 - All rights reserved. </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#101010',
    marginTop: 15,
    padding: 35,
  },
  text: {
    color: '#00aeff',
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  logoContainer: {
    padding: 10,
  },

  logo: {
    width: 50,
    height: 50,
    tintColor: '#0a84ff',
  },
});

export {Footer};
