import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Image, Icon } from 'react-native-elements';
import { Song } from '../types';

const song = {
    id: '1',
    imageUrl: 'https://images.drivereasy.com/wp-content/uploads/2019/06/israel-palacio-459693-unsplash.png',
    title: 'Lut Gaye',
    artist: 'Jubin Nautiyal',
}

function PlayerWidget() {

    return (
        <View style={styles.container}>
            <View style={styles.titleArtist}>
                <Image source={{uri: song.imageUrl}} style={styles.image} />
                <Text style={styles.title}>{song.title}</Text>
                <Text style={styles.artist}>{song.artist}</Text>
            </View>
                <View style={styles.iconApp}>
                    <Icon name='heart' style={{marginRight:10}} type='font-awesome' color='white'/>
                    <Icon name='play' type='font-awesome' color='white'/>
            </View>
        </View>
    );
}

export default PlayerWidget;
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#000a',
        justifyContent: 'space-between',
    },
    titleArtist:{
        marginLeft:10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image:{
        height: 50,
        width: 50,
    },
    title:{
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'arial',
        marginLeft: 10
    },
    artist:{
        color: 'lightgray',
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily: 'arial',
        marginLeft: 5,
    },
    iconApp:{
        flexDirection: 'row',
        alignItems: 'center',
    }
})