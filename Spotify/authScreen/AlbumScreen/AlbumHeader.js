import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Image, Icon } from 'react-native-elements';
import { Album } from '../types';

export type AlbumHeaderProps = {
    album: Album;
}

const AlbumHeader = (props: AlbumHeaderProps) => {

    const {album} = props;

    return (
        <View style={styles.container}>
            <Image source={{uri: album.imageUrl}} style={styles.image} />
            <Text style={styles.name}>{album.name}</Text>
            <View style={styles.creatorContainer}>
                <Text style={styles.creator}>By: {album.by}</Text>
                <Text style={styles.likes}>{album.numberOfLikes} Likes</Text>
            </View>
            <TouchableOpacity style={styles.play}>
                <Icon name='play' type='font-awesome' color='white'/>
            </TouchableOpacity>
        </View>
    );
}

export default AlbumHeader;

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
    },
    image:{
        height: 200,
        width: 200,
    },
    name:{
        color: 'white',
        fontSize: 20,
        fontFamily: 'arial',
    },
    creatorContainer:{
        flexDirection: 'row',
        marginVertical: 5,
    },
    creator:{
        color: 'lightgray',
        fontFamily: 'arial',
    },
    likes:{
        color: 'lightgray',
        marginHorizontal: 10,
        fontFamily: 'arial',
    },
    play:{
        backgroundColor: '#1CD05D',
        width: 125,
        alignSelf: 'center',
        paddingVertical: 8,
        borderRadius: 50,
        marginTop:10
    }
})