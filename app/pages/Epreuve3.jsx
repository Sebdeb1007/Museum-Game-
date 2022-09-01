import { View, Text ,Dimensions,StyleSheet,Image,SafeAreaView,TextInput,TouchableOpacity} from 'react-native'
import React,{useState,useEffect} from 'react'
import { StatusBar } from 'expo-status-bar'
import * as NavigationBar from 'expo-navigation-bar'
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons'; 
import VibrationButton from "../components/VibrationButton"
import { KeyboardAvoidingView} from 'react-native';

export default function Epreuve3({navigation}) {
   
    
    const [phone, onChangePhone] = useState(null);
    const [status,updateStatus] = useState(null);
    useEffect(() => {
        if("362".localeCompare(status) == 0 ){
            navigation.navigate("EpreuveF")
          }
    
      
    }, [status])

    
    const [fontsLoaded] = useFonts({
        Montserrat: require('../assets/fonts/Montserrat.ttf'),
      });
    
    if (!fontsLoaded) {
        return <Text>Loading Font</Text>;
    }

    const updateValue = () =>{
        updateStatus(phone)
    }
    
    
   
    
    NavigationBar.setBackgroundColorAsync("#6B705C");
  return (
        <KeyboardAvoidingView behavior="position" style={{flex: 1}}>
        <View style={styles.epreuve1}>
      
        <StatusBar style="light" />
        

        {/* Petit bloc du debut */}
            
        <View style={styles.firstBloc}></View>

         {/* Bloc text*/}
        <View style={styles.textIntro}>
                <Text style={styles.title}>Epreuve 3</Text>
                <View style={styles.underline}></View>
                <Text style={styles.para}>Afin de réussir la dernière épreuve, lancez les 3 séries de vibrations suivantes. Celle-ci vous donneront un indice sur le nom du modèle de voiture à entrer ci-dessous.</Text>
        </View>

        <View style={styles.buttonsGroup}>
            
            <VibrationButton pattern={[400, 400,400,400,400,400]}></VibrationButton>
            <VibrationButton pattern={[400,400 ,400,400, 400,400, 400,400, 400,400, 400,400 ]}></VibrationButton>
            <VibrationButton pattern={[400, 400,400,400]}></VibrationButton>
        </View>
        <Image
            style={styles.imagesEpreuve1}
            source={require('../assets/epreuve3.png')}
        />
        
        
        
        
        <View style={styles.lastBloc}>
                <Text style={styles.lastText}>Si vous pensez savoir le numéro entrez le ici :</Text>
                
                <SafeAreaView style={styles.form}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangePhone}
                        value={phone}
                        placeholder="               Entrez le numéro ici"
                        keyboardType="numeric"
                    />
                    <TouchableOpacity   
                        onPress={() => updateValue()}                
                        style={styles.button}>
                        <AntDesign name="check" size={height/25} color="#6B705C" style={{justifyContent:"center",alignItems:'center'}} />
                    </TouchableOpacity>
                </SafeAreaView>    
                    
            
        </View>
    </View>
</KeyboardAvoidingView>
    
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
        marginTop: height/25,
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
        height:height/2.8,
    },
    lastBloc:{
        backgroundColor:"#6B705C",
        height:"100%",
        flexDirection: 'column',
    },
    button:{

        backgroundColor:"white",
        width:width/10,
        height:height/14,
        fontFamily:"Montserrat",
        justifyContent:"center",
        alignItems:'center'
    },
    lastText:{
        width:width/1.2,
        textAlign:'center',
        fontFamily: 'Montserrat',
        color: 'white',
        fontSize:width/23,
        marginTop:height/40,
        marginLeft:width/27
    },
    input: {
        height: 60,
        width: width/1.5,
        height:height/14,
        backgroundColor:"white",
        
        
      },
    form:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:'center',
        marginTop:height/20,
    },
    buttonsGroup:{
        backgroundColor:"white",
        flexDirection:"row",
        justifyContent:"space-evenly",
        paddingBottom: height/50,
    },
});