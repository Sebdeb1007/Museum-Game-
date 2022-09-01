import { View, Text,Vibration,StyleSheet,TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons'; 

const VibrationButton = (props) => {


  return (
   
        <View style={styles.container}>
            <View style={styles.circle}></View>
            <Text style={styles.text}>{props.name}</Text>
        </View>
    
  )
}


var width = Dimensions.get('window').width; 
var height = Dimensions.get('window').height; 

const styles = StyleSheet.create({
  container:{

      backgroundColor:"white",
      width:width,
      height:height/20,
      flexDirection:"row",
      fontFamily:"Montserrat",
      justifyContent: "flex-start",
      alignItems:'center',
	  marginLeft: width/3
      
  },
  circle:{
      backgroundColor:"#6B705C",
      height: width/20,
      width: width/20,
      borderRadius:100,
      marginRight:width/25,
  }

 
});
export default VibrationButton;
