import { View, Text ,Dimensions,StyleSheet,Image,SafeAreaView,TextInput,TouchableOpacity} from 'react-native'
import React,{useState,useEffect} from 'react'
import { StatusBar } from 'expo-status-bar'
import * as NavigationBar from 'expo-navigation-bar'
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons'; 
import List from "../components/List"
import { KeyboardAvoidingView} from 'react-native';

export default function EpreuveF({navigation}) {
   
    
    const [phone, onChangePhone] = useState(null);
    const [status,updateStatus] = useState(null);
    useEffect(() => {
        if("Ferrari 288 GTO".localeCompare(status) == 0 ){
            navigation.navigate("Win")
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
                <Text style={styles.title}>Epreuve Finale</Text>
                <View style={styles.underline}></View>
                <Text style={styles.para}>Bravo ! Vous avez réussi à récupérer les 3 indices en résolvant l'ensemble des épreuves. Il vous reste maintenant à résoudre cette dernière énigme, formée à partir des indices récupérés tout au long de votre visite</Text>
        </View>

        <View style={styles.group}>
            <List name = "Rouge"></List>
            <List name = "Rapide"></List>
            <List name = "1984-1987"></List>
        </View>
       
        
        
        
        
        <View style={styles.lastBloc}>
                <Text style={styles.lastText}>Si vous pensez avoir deviné la réponse entrez la ici :</Text>
                
                <SafeAreaView style={styles.form}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangePhone}
                        value={phone}
                        placeholder="               Entrez la réponse ici"
                        //keyboardType="default"
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
        width:width/1.9,
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
    group:{
        backgroundColor:"white",
        flexDirection:"column",
        justifyContent:"space-evenly",
        height: height/3,
    },
});