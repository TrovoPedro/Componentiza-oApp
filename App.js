import * as React from 'react';
import {View,Image,TouchableOpacity,Text,TextInput} from 'react-native';
import styles from './src/estilo/estilo';
import Header from './src/estilo/components/header';
import Login from './src/estilo/components/login';
import Senha from './src/estilo/components/senha';


export default function App() {
  return (
    <View style={styles.container}>

      <Header></Header>

      <Login></Login>

      <Senha></Senha>
       
    
      
    </View>
  );
}

