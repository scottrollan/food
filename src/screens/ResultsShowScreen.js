import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Platform,
  Linking,
} from 'react-native';
import yelp from '../api/yelp';
import { FontAwesome } from '@expo/vector-icons';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
    console.log(response.image_url);
  };

  const dialCall = (number) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }
    Linking.openURL(phoneNumber);
  };

  const goToPage = () => {
    if (!result.url) {
      return;
    }
    Linking.openURL(result.url);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{result.name}</Text>
      <TouchableOpacity style={styles.touchable}>
        <FlatList
          data={result.location.display_address}
          keyExtractor={(addressLine) => addressLine}
          renderItem={({ item }) => {
            return <Text style={styles.info}>{item}</Text>;
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => dialCall(result.phone)}
      >
        <Text style={styles.info}>Phone: {result.display_phone}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable} onPress={() => goToPage()}>
        <Text style={styles.info}>
          see us on yelp
          <FontAwesome name="yelp" color="#D32323" />
        </Text>
      </TouchableOpacity>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          if (item === '') {
            return null;
          }
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  touchable: {
    marginVertical: 3,
  },
  name: {
    fontSize: 20,
    alignSelf: 'center',
  },
  info: {
    fontSize: 16,
    alignSelf: 'center',
  },
  image: {
    height: 200,
    width: 300,
    marginVertical: 5,
    borderRadius: 4,
    alignSelf: 'center',
  },
});

export default ResultsShowScreen;
