import { View, Text ,Dimensions,StyleSheet,Image,TouchableOpacity} from 'react-native'
import React,{useState,useEffect} from 'react'
import { StatusBar } from 'expo-status-bar'
import Vitesse from '../components/Vitesse';
import * as NavigationBar from 'expo-navigation-bar'
import { useFonts } from 'expo-font';
import * as Contacts from 'expo-contacts';


export default function Win({navigation}) {
   
    const [status, setStatus] = useState(false);

    const [fontsLoaded] = useFonts({
        Montserrat: require('../assets/fonts/Montserrat.ttf'),
      });
    
    if (!fontsLoaded) {
        return <Text>Loading Font</Text>;
    }

    const updateStatus  = () =>{
        setStatus(true)
    }
    
    NavigationBar.setBackgroundColorAsync("#6B705C");
    return (
        <View>
            
            <View style={styles.epreuve1}>
        
            <StatusBar style="light" />
            

            {/* Petit bloc du debut */}
                
            <View style={styles.firstBloc}></View>

            

            {/* Bloc text*/}
            <View style={styles.textIntro}>
                    <Text style={styles.title}>Félicitations !</Text>
                    <View style={styles.underline}></View>
                    <Text style={styles.para}>Vous avez réussi à résoudre l’épreuve finale. Vous pouvez utiliser le code suivant afin de sortir du musée !</Text>
            </View>
			<View style={styles.textIntro}>
                    <Text style={styles.code}>  1  0  4  2  9</Text>
            </View>
			
           
            <Image
                style={styles.imagesWin}
                source={require('../assets/imageWin.png')}
            />
            <View style={styles.lastBloc}>
                    <Text style={styles.lastText}>Appuyez sur le bouton pour revenir au menu principal !</Text>
                    <TouchableOpacity   
                        onPress={() => navigation.navigate("Home")}                
                        style={styles.button}>
                        
                        <Text style={{fontFamily: 'Montserrat',color:'black',fontSize:width/16,textAlign:"center",marginTop:'5%'}}>Menu</Text>
                    </TouchableOpacity>
                
            </View>
            </View>
        </View>
    
  )
}

var width = Dimensions.get('window').width; 
var height = Dimensions.get('window').height; 

const styles = StyleSheet.create({
    firstBloc: {
        height: height/27,
        width: width,
        
        backgroundColor: "#6B705C",
    },
    textIntro:{
        backgroundColor: "white",
    },
    title:{
        marginTop: height/15,
        color: "black",
        fontSize: height/30,
        
        marginLeft:width/15,
        marginBottom:height/70,
        fontFamily: 'Montserrat',
    },
	code:{
		color: "black",
		backgroundColor: "#EAEAEA",
		height: height/11,
		fontSize: height/15,
		marginLeft:width/12,
		marginRight:width/12,
		fontFamily: 'Montserrat',
		marginBottom:height/27,
    },
    para:{
        color: "black",
        fontSize: height/50,
        marginLeft:width/27,
        marginRight:width/27,
        fontFamily: 'Montserrat',
        marginBottom:height/27,
    },
    underline:{
        height:height/400,
        marginLeft:width/15,
        backgroundColor:"#6B705C",
        width:width/2.1,
        marginBottom:height/20,
    },

    imagesWin:{
        width:width,
    },
    lastBloc:{
        backgroundColor:"#6B705C",
        height:"100%",
        flexDirection: 'row',
    },
    button:{
        marginTop:height/8,
        backgroundColor:"white",
        width:width/2.4,
        height:height/15,
        fontFamily:"Montserrat",
    },
    lastText:{
        width:width/2,
        fontFamily: 'Montserrat',
        fontSize:width/23,
        marginTop:height/40,
        marginLeft:width/27,
        color:"white"
    },
    epreuve1:{
        position:'absolute',
    },
    contImage:{
        width:width,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center"
    }
});