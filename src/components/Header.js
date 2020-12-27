import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const Header = ({pageNo, onPageNoChange}) => {
  console.log(pageNo);

  return (
    <View style={styles.detailsContainer}>
      {pageNo == 1 ? (
        <View style={styles.iconContainer}></View>
      ) : (
        <TouchableOpacity
          onPress={() => onPageNoChange(pageNo - 1)}
          style={styles.iconContainer}>
          <Image style={styles.icon} source={require('../assets/left.png')} />
        </TouchableOpacity>
      )}

      <Text style={styles.pageNoLabel}>Page: {String(pageNo)}</Text>

      <TouchableOpacity
        onPress={() => onPageNoChange(pageNo + 1)}
        style={styles.iconContainer}>
        <Image style={styles.icon} source={require('../assets/right.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    borderRadius: 20,
    marginBottom: 5,
    margin: 5,
    flex: 1,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  pageNoLabel: {
    color: '#ff3b2f',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  detailsContainer: {
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  iconContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
  },

  icon: {
    width: 25,
    height: 25,
    tintColor: '#0a84ff',
  },
});

export {Header};
