import { View, Text,Vibration,StyleSheet,TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons'; 

const VibrationButton = (props) => {


  return (
   
        <TouchableOpacity   
            onPress={() => Vibration.vibrate(props.pattern, false)}                
            style={styles.button}>
            <AntDesign name="play" size={height/20} color="#FFFFFF" style={{justifyContent:"center",alignItems:'center'}} />
        </TouchableOpacity>
    
  )
}


var width = Dimensions.get('window').width; 
var height = Dimensions.get('window').height; 

const styles = StyleSheet.create({
  button:{

      backgroundColor:"#6B705C",
      width:width/5,
      height:height/10,
      fontFamily:"Montserrat",
      justifyContent:"center",
      alignItems:'center',
      borderRadius:15,
  },
 
});
export default VibrationButton;
