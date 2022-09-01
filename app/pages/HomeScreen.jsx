import { View, Text,StyleSheet,Dimensions,Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar'


export default function HomeScreen({navigation},) {
    NavigationBar.setBackgroundColorAsync("#6B705C");
    
    const [fontsLoaded] = useFonts({
        Montserrat: require('../assets/fonts/Montserrat.ttf'),
      });
    
    if (!fontsLoaded) {
        return <Text>Loading Font</Text>;
    }

    return (
        <View>
            <StatusBar style="light" />
            
            {/* Petit bloc du debut */}
            
            <View style={styles.firstBloc}>

            </View>

            {/* Bloc Image */}
            <View style={styles.contImages}>
                <View>
                    <Image
                        style={styles.imagesHomeLeft}
                        source={require('../assets/homescreen1.png')}
                    />
                    <Image
                        style={styles.imagesHomeLeft}
                        source={require('../assets/homescreen2.png')}
                    />
                </View>
                <Image
                    style={styles.imagesHomeRight}
                    source={require('../assets/homescreen3.png')}
                />
            </View>
            
            {/* Bloc de Text coloré */}
            <View style={styles.textIntro}>
                <Text style={styles.title}>Visite Interactive du {"\n"}Musée</Text>
                <Text style={styles.para}>Bienvenue sur l'application XYZ ! Cette application va vous permettre de suivre une visite interactive du musée de votre choix membre du programme Escape Museum.</Text>
                <Text></Text>
                <Text style={styles.para}>Différents défis vous seront proposés tout au long de votre visite, et chacun d'entre-eux vous donnera un indice. A la fin de la visite, entrez les indices que vous avez récoltez pour ...</Text>
            </View>

            {/* Bloc de Text + button de démarrage*/}
            <View style={styles.lastBloc}>
                <Text style={{width:width/2,fontFamily: 'Montserrat',fontSize:width/23,marginTop:height/40,marginLeft:width/27}}>Scannez le QRCODE pour commencer la visite !</Text>
                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate('Scanner')}
                >
                    <Text style={{fontFamily: 'Montserrat',color:'white',fontSize:width/20,textAlign:"center",marginTop:height/50}}>Commencez</Text>

                </TouchableOpacity>

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
    contImages:{
        flexDirection: 'row',
        
    },
    imagesHomeLeft:{
        width:width/2,
        height:height/6

    },
    imagesHomeRight:{
        width:width/2,
        height:'100%',

    },
    textIntro:{
        
        backgroundColor: "#6B705C",
    },
    title:{
        marginTop: height/27,
        color: "white",
        fontSize: height/30,
        
        textAlign: 'center',
        marginBottom:height/70,
        fontFamily: 'Montserrat',
    },
    para:{
        color: "white",
        fontSize: height/50,
        marginLeft:width/27,
        marginRight:width/27,
        fontFamily: 'Montserrat',
        marginBottom:height/27,
    },
    button:{
        marginTop:height/12,
        backgroundColor:"#6B705C",
        width:width/2.4,
        height:height/13,


    },
    lastBloc:{
        
        flexDirection: 'row',
    }
    

  });
  