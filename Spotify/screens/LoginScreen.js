import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Image, Icon} from 'react-native-elements';

function LoginScreen({navigation}) {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaView style={styles.container}>
        <View style={styles.backBtn}>
            <TouchableOpacity onPress={()=> navigation.navigate("Screen")}>
              <Icon name='chevron-left' type='font-awesome' color='white'/>
            </TouchableOpacity>
            <Text style={styles.header}>Login Account</Text>
        </View>
        <Image source={require('../image/icon.png')} style={styles.icon} />
        <View style={styles.inputContainer}>
            <Text style={styles.textContent}>Enter Email</Text>
          <View style={styles.inputText}>
            <TextInput
              style={styles.input}
              keyboardType='email-address'
            />
          </View>
          <Text style={styles.textContent}>Enter Password</Text>
          <View style={styles.inputText}>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={styles.LoginBtn} activeOpacity={0.5}>
              <Text style={styles.btnContent}>Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    alignItems: 'center',
    flex: 1,
  },
  backBtn:{
    position: 'absolute',
    top: 10,
    left: 10,
    flexDirection: 'row',
  },
  header:{
    color: 'white',
    fontSize: 20,
    fontFamily: 'arial',
    fontWeight: 'bold',
    marginLeft: 30,
  },
  icon: {
    height: 100,
    width: 100,
    marginTop: 100,
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  inputText: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 50,
    color: 'white',
  },
  input: {
    color: 'white',
    paddingHorizontal: 20,
    fontFamily: 'arial',
    fontWeight: 'bold',
    fontSize: 15,
  },
  textContent:{
      color: 'white',
      marginTop: 20,
      marginBottom: 5,
      fontSize:20,
      fontFamily: 'arial',
      fontWeight: 'bold',
  },
  LoginBtn:{
      backgroundColor: '#1DD05D',
      marginTop: 20,
      borderRadius: 50,
      alignItems: 'center',
  },
  btnContent:{
      color: 'white',
      fontSize: 20,
      paddingVertical: 15,
      fontWeight: 'bold',
      fontFamily: 'arial',
  }
});
