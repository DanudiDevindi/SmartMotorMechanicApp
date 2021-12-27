
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//  import React, {useEffect} from 'react';
//  import {
//    View,
//    StyleSheet,
//    Dimensions
//  } from 'react-native';
//  import {BannerView} from 'react-native-fbads'
//  import { InterstitialAdManager } from 'react-native-fbads';
 
//  const {width, height} = Dimensions.get('window');
//  const bannerAdPlacementId = '758821948845862_759909888737068'
//  const interstitialAdPlacementId = '758821948845862_759910388737018'
 
//  const App = () => {
 
//    useEffect(() => {
//      InterstitialAdManager.showAd(interstitialAdPlacementId)
//      .then((didClick) => {})
//      .catch((error) => {});
//    }, [])
 
//    return (
//      <View style={styles.container}>
       
//        <BannerView
//          placementId={bannerAdPlacementId}
//          type='standard'
//          onPress={() => console.log('press add')}
//          onError={err => console.log(err)}
//          onLoad={() => console.log('Loaded')}
//        />
//      </View>
//    );
//  };
 
//  const styles = StyleSheet.create({
//    container:{
//      height,
//      width,
//      backgroundColor: 'silver'
//    }
//  });
 
//  export default App;

