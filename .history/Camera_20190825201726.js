import React, {Component  } from "react"
import { RNCamera } from 'react-native-camera';
import LyricButtonContainer from './LyricButtonContainer'
import { Text, StyleSheet, TouchableOpacity, ActivityIndicator, View } from 'react-native';

class Camera extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }  
    }

    async startRecording() {
        this.setState({ recording: true });
        // default to mp4 for android as codec is not set
        const { uri, codec = "mp4" } = await this.camera.recordAsync();
    }
    
    stopRecording() {
        this.setState({ recording: false });
        this.camera.stopRecording();
    }

    render() {
        const { recording, processing } = this.state;

        let button = (
          <TouchableOpacity
            onPress={this.startRecording.bind(this)}
            style={styles.capture}
          >
            <Text style={{ fontSize: 14 }}> RECORD </Text>
          </TouchableOpacity>
        );
    
        if (recording) {
          button = (
            <TouchableOpacity
              onPress={this.stopRecording.bind(this)}
              style={styles.capture}
            >
              <Text style={{ fontSize: 14 }}> STOP </Text>
            </TouchableOpacity>
          );
        }
    
        if (processing) {
          button = (
            <View style={styles.capture}>
              <ActivityIndicator animating size={18} />
            </View>
          );
        }
       return(
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
                <View
                    style={{ flex: 0, flexDirection: "row", justifyContent: "center" }}
                >
                 {button}
                </View>
            </RNCamera>
        );
    }
}

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

export default Camera