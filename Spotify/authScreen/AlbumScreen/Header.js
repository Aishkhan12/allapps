import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

function Header(props) {
    const navigation = useNavigation();
    const onPress = () =>{
        navigation.navigate("Home")
    }
    return (
        <>
        <SafeAreaView style={styles.hederContainer}>
            <TouchableOpacity onPress={onPress} style={styles.menu}>
                <Icon name='chevron-left' type='font-awesome' color='white' size={20} />
            </TouchableOpacity>

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
    },
    menu:{
        justifyContent: 'center',
        marginHorizontal: 20
    },
    titleName:{
        justifyContent: 'center',
    },
    title:{
        fontSize: 20,
        fontFamily: 'arial',
        fontWeight: 'bold',
        color: 'white'
    },
    notification:{
        marginHorizontal: 20,
        position: 'absolute',
        right: 0,
        marginTop: 12,
    }
})