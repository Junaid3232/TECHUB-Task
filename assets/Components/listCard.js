import React from 'react';

import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const ListCard = ({name, text}) => {
  return (
    <View style={{flexDirection: 'row', margin: 10}}>
      <Icon size={25} name={name} color="white" />
      <Text style={styles.subHeaderText}>{text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  subHeaderText: {
    color: 'white',
    fontSize: 18,
    marginTop: 2,
    marginHorizontal: 10,
  },
});
export default ListCard;
