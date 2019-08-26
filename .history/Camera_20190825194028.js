import React, {Component  } from "react"
import { RNCamera, FaceDetector } from 'react-native-camera';
import LyricButtonContainer from './LyricButtonContainer'


class Camera extends Component {


    render() {
        <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={styles.preview}
        type={RNCamera.Constants.Type.front} 
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
      >
         <LyricButtonContainer></LyricButtonContainer>
      </RNCamera>
    }
}