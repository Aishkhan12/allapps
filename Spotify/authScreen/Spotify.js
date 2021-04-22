import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
function Spotify() {
  return (
    <View style={styles.container}>
      <Text>Spotify</Text>
    </View>
  );
}

export default Spotify;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        alignItems: 'center',
        flex: 1,
      },
})