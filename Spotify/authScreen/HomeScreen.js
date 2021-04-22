import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import AlbumCategary from './component/AlbumCategary';
import albumCategories from './data/albumCategories';
import Header from './Header';
import PlayerWidget from './AlbumScreen/PlayerWidget'

function HomeScreen() {
  return (
    <>
      <Header title="Home" />
      <View style={styles.container}>
        <FlatList
          data={albumCategories}
          renderItem={({item}) => (
            <AlbumCategary title={item.title} albums={item.album} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <PlayerWidget />
    </>
  );
}

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    backgroundColor: '#000',
    flex: 1,
    height: 300,
  },
});
