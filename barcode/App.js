import React,{useState,useLayoutEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import SplashScreen from 'react-native-splash-screen'

function App() {
  const[data, setData] = useState();

  useLayoutEffect(()=>{
    SplashScreen.hide();
  })
  
  const onSuccess = (event) => {
    setData(event.data);
  };
    return (
      <QRCodeScanner
        onRead={onSuccess}
        topContent={
          <Text style={styles.centerText}>
            your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>{data}</Text>
          </TouchableOpacity>
        }
      />
    );
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});
export default App;