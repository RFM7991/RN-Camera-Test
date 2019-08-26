import React from "react"
import { Text, View } from 'react-native';
import { StyleSheet, TouchableOpacity} from 'react-native'

class LyricButtonContainer extends React.Component {

  render() {
    return (
      <View style = {styles.LyricButtonContainer}>
      <TouchableOpacity
        style = {[styles.LyricButton,  {borderRadius: 30}]}
      >
        <Text style = {styles.LyricText}>Root</Text>
      </TouchableOpacity>
     
      <View style = {styles.LyricButtonContainerRow}>
        <TouchableOpacity
          style = {styles.LyricButton}
        >
          <Text style = {styles.LyricText}>Left</Text>
        </TouchableOpacity>
  
        <TouchableOpacity
          style = {styles.LyricButton}
        >
          <Text style = {styles.LyricText}>More</Text>
        </TouchableOpacity>
  
        <TouchableOpacity
          style = {styles.LyricButton}
        >
          <Text style = {styles.LyricText} >Right</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
          style = {styles.LyricButton}
        >
          <Text style = {styles.LyricText} >Bottom</Text>
        </TouchableOpacity>
    </View>
    )
  }
}

const styles = StyleSheet.create(
  {
    LyricButtonContainer: 
    {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },

    LyricButtonContainerRow:
    {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },

    LyricButton:
    {
      paddingVertical: 25,
      paddingHorizontal: 30,
      margin: 20,
      backgroundColor:'#68a0cf',
      borderRadius: 20,
      borderWidth: 1,
      borderColor: '#fff'
    },

    LyricText: 
    {
      color: 'white'
    },

    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  }
)

export default LyricButtonContainer 