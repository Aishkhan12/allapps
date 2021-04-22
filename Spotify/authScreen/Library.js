import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
function Library() {
  return (
    <View style={styles.container}>
      <Text>Library</Text>
    </View>
  );
}

export default Library;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        alignItems: 'center',
        flex: 1,
      },
})