import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListCard from '../assets/Components/listCard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={require('../assets/pic.jpg')} />
      <Text style={styles.headerText}>Batla House: O SAKI</Text>
      <Text style={styles.subHeaderText}>Mona fatehi,Neha ka,Tuhi K</Text>
      <View style={{flexDirection: 'row', marginTop: 30}}>
        <Icon
          style={{marginHorizontal: 50, marginTop: 4}}
          size={30}
          color="white"
          name="heart-outline"
        />

        <Icon
          style={{marginHorizontal: 50}}
          size={40}
          color="white"
          name="play-outline"
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.likesText}>320 Likes</Text>
        <Text style={styles.streamText}>1320 Streams</Text>
      </View>
      <View style={{alignSelf: 'flex-start', marginTop: 20}}>
        <ListCard name="share-outline" text="Share" />
        <ListCard name="download-outline" text="Download" />
        <ListCard name="playlist-music" text="Add to playlist" />
        <ListCard name="record-circle-outline" text="View album" />
        <ListCard name="comment-text-outline" text="Comment" />
        <ListCard name="content-save-all-outline" text="Save to library" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#15294F',
    height: '100%',
    alignItems: 'center',
  },
  imageStyle: {
    width: '40%',
    height: '23%',
    borderRadius: 15,
    marginTop: 50,
  },
  headerText: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 12,
  },
  likesText: {color: 'white', fontSize: 18, marginHorizontal: 30},
  subHeaderText: {color: 'white', fontSize: 15, marginTop: 3},
  streamText: {
    color: 'white',
    marginHorizontal: 20,

    fontSize: 18,
  },
});
export default App;
