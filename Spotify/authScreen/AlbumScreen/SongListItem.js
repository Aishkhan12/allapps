import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';
import { Song } from '../types';

export type SongListItemProps={
    song: Song
}

function SongListItem(props: SongListItemProps) {
    const { song } = props;
    return (
        <View style={styles.container}>
            <Image source={{uri: song.imageUrl}} style={styles.image} />
            <View style={styles.titleArtist}>
                <Text style={styles.title}>{song.title}</Text>
                <Text style={styles.artist}>{song.artist}</Text>
            </View>
        </View>
    );
}

export default SongListItem;
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        padding: 10,
    },
    titleArtist:{
        marginLeft:10,
    },
    image:{
        height: 65,
        width: 65,
    },
    title:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'arial',
        marginTop: 10,
    },
    artist:{
        color: 'lightgray',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'arial',
        marginTop: 5,
    }
})