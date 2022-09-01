import { View, Text,Dimensions,StyleSheet} from 'react-native'
import React,{useState,useEffect}from 'react'
import * as NavigationBar from 'expo-navigation-bar'
import { useNavigation } from '@react-navigation/native';
import Speedometer, {
  Background,
  Arc,
  Needle,
  Progress,
  Marks,
  Indicator,
} from 'react-native-cool-speedometer';
import { DeviceMotion } from 'expo-sensors';


export default function Vitesse() {
  const navigation = useNavigation();
  NavigationBar.setBackgroundColorAsync("black");
   
  const [rota, setRota] = useState({"alpha":0,"beta":0,"gamma":0});
  const [count,setCount] = useState(0)
	

	{/* loick*/}
   useEffect(() => {
      const userInput = 180-Math.abs((rota["alpha"] /3.14*180).toFixed(2));
      if (userInput > 142 && userInput < 144)
      {
		navigation.navigate("Epreuve2")
      };
    },
   [rota]);
  

	
  useEffect(() => {
    subscribe();
    return () => {
      unsubscribe();
    };
  }, []);

  const setInterval = () => {
    DeviceMotion.setUpdateInterval(77);
  };

  const subscribe = () => {
    //Adding the Listener
    DeviceMotion.addListener((devicemotionData) => {
      setRota(devicemotionData.rotation);
    });
    //Calling setInterval Function after adding the listener
    setInterval();
  };
  
  const unsubscribe = () => {
    //Removing all the listeners at end of screen unload
    DeviceMotion.removeAllListeners();
  };
  return (
    <View style={styles.Bloc}>
      
      <View style={styles.compteur}>
        <Speedometer
        value={(180-Math.abs((rota["alpha"] /3.14*180).toFixed(2))) }
        fontFamily='Montserrat'
      >
        <Background 
        color='#000000'
        />
        <Arc/>
        <Needle/>
        <Progress/>
        <Marks/>
        <Indicator/>
      </Speedometer>
      </View>
    

     
    </View>
  )
}
var width = Dimensions.get('window').width; 
var height = Dimensions.get('window').height; 

const styles = StyleSheet.create({
    Bloc: {
        height: height +100,
        width: width,
        backgroundColor:"#000000c0",
        
      
        
    },
    compteur:{
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:height/3,
      
    }
  });

