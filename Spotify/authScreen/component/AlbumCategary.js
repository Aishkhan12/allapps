import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Album } from '../types';
import AlbumComponent from './Album'

export type AlbumCategaryProps = {
    title: string,
    albums:[Album]
}

function AlbumCategary(props: AlbumCategaryProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <FlatList 
                data={props.albums}
                renderItem={({item})=> <AlbumComponent album={item} />}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                horizontal
            />
        </View>
    );
}

export default AlbumCategary;
const styles = StyleSheet.create({
    title:{
        color: 'white',
        fontFamily: 'arial',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 5,
        marginTop: 10,
    }
})