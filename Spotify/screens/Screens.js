import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import { Icon, Image } from 'react-native-elements';

function Screens({navigation}) {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <SafeAreaView style={styles.container}>
                <Image source={require("../image/icon.png")} style={styles.icon} />

                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={()=> navigation.replace('Signup')} style={styles.signupBtn}>
                        <Text style={styles.btnText}>Sing up free</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialBtn}>
                        <Icon style={styles.socialIcon} name='google-plus' type='font-awesome' color='red'/>
                        <Text style={styles.btnText}>Continue With Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialBtn}>
                        <Icon style={styles.socialIcon} name='facebook' type='font-awesome' color='blue'/>
                        <Text style={styles.btnText}>Continue with FaceBook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.replace('Login')} style={styles.signinBtn}>
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    );
}

export default Screens;
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#000',
        alignItems: 'center',
        flex: 1,
    },
    icon:{
        height: 100,
        width: 100,
        marginTop: 200,
    },
    btnContainer:{
        width: '100%',
        padding: 20,
        marginTop: '20%',
    },
    signupBtn:{
        backgroundColor: 'green',
        borderRadius: 50,
        padding: 15,
        width: '100%',
        marginTop: 10,
    },
    btnText:{
        color: 'white',
        textAlign: 'center',
        fontFamily: 'arial',
        fontSize: 15,
        fontWeight: 'bold'
    },
    socialIcon:{
        marginLeft: 20,
        marginRight: 30,
    },
    socialBtn:{
        borderColor: '#888',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 50,
        padding: 15,
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    signinBtn:{
        backgroundColor: 'transparent',
        borderRadius: 50,
        padding: 15,
        width: '100%',
        marginTop: 10,
    }
})