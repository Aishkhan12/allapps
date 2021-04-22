import React, { useEffect, useState } from 'react';  
import {  
 StyleSheet,  
 View,  
 StatusBar,  
 TouchableOpacity,  
 Text,  
 Image  
} from 'react-native';  
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';  
GoogleSignin.configure({  
 webClientId: '852089268807-jmnol59jt216ertvcthb5vv2fga06ng1.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)  
 });  
const App = () => {  
 const [isLoggedIn, setIsLoggedIn] = useState(false)  
 const [userInfo, setUserInfo] = useState(null)  
 useEffect(() => {  
   getCurrentUserInfo();  
 }, []);  
 const getCurrentUserInfo = async () => {  
   try {  
     const userInfo = await GoogleSignin.signInSilently();  
     console.log(userInfo);  
     setIsLoggedIn(true);  
     setUserInfo(userInfo);  
   } catch (error) {  
     if (error.code === statusCodes.SIGN_IN_REQUIRED) {  
       // user has not signed in yet  
     } else {  
       // some other error  
     }  
   }  
 };  
  
 const _signIn = async () => {  
   try {  
     await GoogleSignin.hasPlayServices();  
     const userInfo = await GoogleSignin.signIn();  
     console.log(userInfo);  
     setIsLoggedIn(true);  
     setUserInfo(userInfo);  
   } catch (error) {  
     console.log(error);  
     if (error.code === statusCodes.SIGN_IN_CANCELLED) {  
       // user cancelled the login flow  
     } else if (error.code === statusCodes.IN_PROGRESS) {  
       // operation (e.g. sign in) is in progress already  
     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {  
       // play services not available or outdated  
     } else {  
       // some other error happened  
     }  
   }  
 };  
  
 const _signOut = async () => {  
   try {  
     await GoogleSignin.revokeAccess();  
     await GoogleSignin.signOut();  
     setIsLoggedIn(false);  
   } catch (error) {  
     console.error(error);  
   }  
 }  
 return (  
   <>  
     <StatusBar barStyle="dark-content" />  
     <View style={styles.container} >  
       {  
         !isLoggedIn ?  
           <GoogleSigninButton  
             style={{ width: 192, height: 48 }}  
             size={GoogleSigninButton.Size.Wide}  
             color={GoogleSigninButton.Color.Dark}  
             onPress={_signIn}  
           /> :  
           <>  
             <Text>Email: {userInfo ? userInfo.user.email : ""}</Text>  
             <Text>Name: {userInfo ? userInfo.user.name : ""}</Text>  
             <TouchableOpacity style={styles.signOutBtn} onPress={_signOut}>  
               <Text style={styles.signOutBtnText}>Signout</Text>  
             </TouchableOpacity>  
           </>  
       }  
     </View>  
   </>  
 );  
};  
  
const styles = StyleSheet.create({  
 container: { flex: 1, justifyContent: "center", alignItems: "center" },  
 signOutBtn: {  
   backgroundColor: "#556688",  
   padding: 10,  
   borderRadius: 10  
 },  
 signOutBtnText: {  
   color: "white"  
 }  
});  
  
export default App;