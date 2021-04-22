import React,{useEffect} from 'react';
import { View, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import SongListItem from './SongListItem';
import albumdata from '../data/albumdata';
import AlbumHeader from './AlbumHeader';
import PlayerWidget from './PlayerWidget';
import Header from './Header';

function AlbumScreens() {
    const route = useRoute();
    useEffect(()=>{
        console.log(route);
    })
    return (
        <>
        <View style={{backgroundColor: 'black',flex: 1}}>
            <Header title="Album" />
           <FlatList 
                data={albumdata.songs}
                renderItem={({item})=> <SongListItem song={item} /> }
                keyExtractor={(item) => item.id}
                ListHeaderComponent={()=> <AlbumHeader album={albumdata} />}
           />
        </View>
        <PlayerWidget />
        </>
    );
}

export default AlbumScreens;