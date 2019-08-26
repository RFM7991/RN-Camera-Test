/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { RNCamera, FaceDetector } from 'react-native-camera';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <RNCamera
    ref={ref => {
      this.camera = ref;
    }}
    style={styles.preview}
    type={RNCamera.Constants.Type.back}
    flashMode={RNCamera.Constants.FlashMode.on}
    androidCameraPermissionOptions={{
      title: 'Permission to use camera',
      message: 'We need your permission to use your camera',
      buttonPositive: 'Ok',
      buttonNegative: 'Cancel',
    }}
    androidRecordAudioPermissionOptions={{
      title: 'Permission to use audio recording',
      message: 'We need your permission to use your audio',
      buttonPositive: 'Ok',
      buttonNegative: 'Cancel',
    }}
    onGoogleVisionBarcodesDetected={({ barcodes }) => {
      console.log(barcodes);
    }}
  />
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});


export default App;
