import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import HomeScreen from './pages/HomeScreen';
import Scanner from './pages/Scanner';
import Epreuve1 from './pages/Epreuve1';
import Epreuve2 from './pages/Epreuve2';
import Epreuve3 from './pages/Epreuve3';
import EpreuveF from './pages/EpreuveF';
import Win from './pages/Win';

const Stack = createNativeStackNavigator();



export default function App() {

  

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">


        	<Stack.Screen name="Win"  component={Win} />
			<Stack.Screen name="EpreuveF"  component={EpreuveF} />
			<Stack.Screen name="Epreuve3"  component={Epreuve3} />
			<Stack.Screen name="Epreuve2"  component={Epreuve2} />
			<Stack.Screen name="Epreuve1"  component={Epreuve1} />
			<Stack.Screen name="Scanner"  component={Scanner} />
			<Stack.Screen name="Home"  component={HomeScreen} />
						
      </Stack.Navigator>
    </NavigationContainer> 
  );
}


