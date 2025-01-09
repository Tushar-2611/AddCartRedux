import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Button } from '@react-navigation/elements';

const { width } = Dimensions.get('window'); // Get screen width

export default function Card(props: any) {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: props.image }} style={styles.image} />
      <Text style={styles.nameText}>{props.name}</Text>
      <Text style={styles.priceText}>Price : {props.price}</Text>
      <Button style={styles.button}>Add to Cart</Button>
    </View>
  );
}

const styles = StyleSheet.create({
    cardContainer: {
        gap: 5,
        margin: 8,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderRadius: 5,
        width: width * 0.9,
    },
  image: {
    height: width * 0.55, 
    width: width * 0.898, 
      borderRadius: 5,
      borderBottomEndRadius: 0,
      borderBottomStartRadius : 0,
      borderBottomWidth: 1,
  },
  text: {
    paddingHorizontal: 10,
  },
  button: {
      borderRadius: 0,
      fontSize : 14,
      fontWeight: 900, 
      borderTopWidth : 0.5,
    },
priceText: {
    marginHorizontal: 20,
    fontSize: 14, 
    fontWeight: '600', 
    color: '#007BFF', 
  },
    nameText: {
    marginHorizontal: 20,
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#333', 
    marginBottom: 5, 
  },
});
