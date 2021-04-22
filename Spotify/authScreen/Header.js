import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
} from 'react-native';

function Header(props) {
    return (
        <>
        <SafeAreaView style={styles.hederContainer}>
             <View style={styles.titleName}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </SafeAreaView>
      </>
    );
}

export default Header;

const styles = StyleSheet.create({
    hederContainer:{
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#000c',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
})