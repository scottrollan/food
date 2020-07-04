import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Text>{result.name}</Text>
      {result.image_url !== '' && result.image_url !== undefined ? (
        <Image source={{ uri: result.image_url }} style={styles.image} />
      ) : null}
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  name: {
    fontWeight: 'bold',
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
});

export default ResultsDetail;
