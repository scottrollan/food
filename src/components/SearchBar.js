import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} color="black" />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search in Metro Atlanta"
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        onEndEditing={() => onTermSubmit(term)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    flexDirection: 'row',
    borderRadius: 5,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
    marginHorizontal: 15,
  },
});

export default SearchBar;
