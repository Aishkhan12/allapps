import React from 'react';
import { 
    Text,
    View,
    StyleSheet,
    TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';
import { Album } from '../types';
import { useNavigation } from '@react-navigation/native';

export type AlbumProps = {
    album: Album,
}
const AlbumComponent = (props: AlbumProps) => {

    const navigation = useNavigation();
    const onPress = () =>{
        navigation.navigate("Album",{id: props.album.id})
    }
    
    return (       
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <Image source={{uri: props.album.imageUrl}} style={styles.image} />
            <Text style={styles.text}>{props.album.artistsHeadline}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default AlbumComponent;
const styles =StyleSheet.create({
    container:{
        width: 115,
        margin:10,
    },
    image:{
        height: 115,
        width: '100%',
    },
    text:{
        color: 'white',
        fontFamily: 'arial',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10
    }
})