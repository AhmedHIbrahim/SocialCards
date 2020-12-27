import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';

const Card = ({user}) => {
  const cardColor = user.gender == 'male' ? '#00b871' : '#8c0fdd';

  return (
    <View style={[styles.cardContainer, {backgroundColor: cardColor}]}>
      <Image
        source={{uri: user.picture.medium}}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.text}>
        {user.name.first} {user.name.last}
      </Text>

      <View style={styles.detailsContainer}>
        <TouchableOpacity
          onPress={() => Alert.alert('Phone Number:', user.phone)}
          style={styles.iconContainer}>
          <Image
            style={[
              styles.icon,
              {
                tintColor: cardColor,
              },
            ]}
            source={require('../assets/call.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Alert.alert('Email:', user.email)}
          style={styles.iconContainer}>
          <Image
            style={[
              styles.icon,
              {
                tintColor: cardColor,
              },
            ]}
            source={require('../assets/email.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Alert.alert(
              'Location:',
              user.location.city + ', ' + user.location.country,
            )
          }
          style={styles.iconContainer}>
          <Image
            style={[
              styles.icon,
              {
                tintColor: cardColor,
              },
            ]}
            source={require('../assets/location.png')}
          />
        </TouchableOpacity>
      </View>
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
  image: {
    marginTop: 16,
    height: Dimensions.get('window').height / 6,
    width: Dimensions.get('window').height / 6,
    borderRadius: 20,
    marginBottom: 10,
    alignSelf: 'center',
  },

  text: {
    color: 'white',
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
  },
});

export {Card};
