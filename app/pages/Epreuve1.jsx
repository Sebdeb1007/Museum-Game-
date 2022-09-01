import { View, Text ,Dimensions,StyleSheet,Image,TouchableOpacity} from 'react-native'
import React,{useState,useEffect} from 'react'
import { StatusBar } from 'expo-status-bar'
import Vitesse from '../components/Vitesse';
import * as NavigationBar from 'expo-navigation-bar'
import { useFonts } from 'expo-font';
import * as Contacts from 'expo-contacts';

export default function Epreuve1() {

    const [id,setId] = useState(0);
    useEffect(() => {
        (async () => {
          const { status } = await Contacts.requestPermissionsAsync();
          if (status === 'granted') {
            const contact = {
                [Contacts.Fields.FirstName]: 'Loris',
                [Contacts.Fields.LastName]: 'Mimilton',
                [Contacts.Fields.PhoneNumbers]: [
                      {
                        number: "(123) 456-7890",
                        isPrimary: true,
                        digits: "1234567890",
                        countryCode: "FR",
                        id: "1",
                        label: "main",
                      },
					  ],
              };
            const contactId = await Contacts.addContactAsync(contact);
            setId(contactId)
          }
        })();
      }, []);
    

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
        <View style={{zIndex:1,position:"absolute",top:10}}>
            {status ? <Vitesse/> : null}
        </View>
        <View style={styles.epreuve1}>
      
        <StatusBar style="light" />
        

        {/* Petit bloc du debut */}
            
        <View style={styles.firstBloc}></View>

        

         {/* Bloc text*/}
        <View style={styles.textIntro}>
                <Text style={styles.title}>Epreuve 1</Text>
                <View style={styles.underline}></View>
                <Text style={styles.para}>Pour réussir cette première épreuve et obtenir le premier indice, vous aller avoir d'informations supplémentaires. Afin de les obtenir, recherchez le véhicule ci-dessous au sein du musée et lisez attentivement sa description...</Text>
        </View>
        
        <Image
            style={styles.imagesEpreuve1}
            source={require('../assets/epreuve1.png')}
        />
        <View style={styles.lastBloc}>
                <Text style={styles.lastText}>Si vous pensez avoir trouver démarrez le challenge !</Text>
                <TouchableOpacity   
                    onPress={() => updateStatus()}                
                    style={styles.button}>
                    
                    <Text style={{fontFamily: 'Montserrat',color:'black',fontSize:width/20,textAlign:"center",marginTop:height/50}}>Commencez</Text>
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
        width:width/3,
        marginBottom:height/20,
    },
    imagesEpreuve1:{
        width:width,
        height:height/2.5,
    },
    lastBloc:{
        backgroundColor:"#6B705C",
        height:"100%",
        flexDirection: 'row',
    },
    button:{
        marginTop:height/12,
        backgroundColor:"white",
        width:width/2.4,
        height:height/13,
        fontFamily:"Montserrat",
    },
    lastText:{
		color: "white",
        width:width/2,
        fontFamily: 'Montserrat',
        fontSize:width/23,
        marginTop:height/40,
        marginLeft:width/27
    },
    epreuve1:{
        position:'absolute',
    },
});