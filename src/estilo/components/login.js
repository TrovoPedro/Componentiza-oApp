import * as React from 'react';
import {TouchableOpacity,Text,TextInput, View} from 'react-native';
import styles from '../estilo';
import { LinearGradient } from 'expo-linear-gradient';

export default function Login(){
    return(
        <View
        // Button Linear Gradient
        style={styles.box}>

    <TextInput style={styles.inputs} placeholder= 'e-mail' />
  
  <TextInput style={styles.inputs}   placeholder= 'senha' />

  <TouchableOpacity style={{width:'80%'}}> 
      <LinearGradient
      // Background Linear Gradient
       colors={['black','#00BFFF']}
       style={styles.button}
      >
          <Text style={{fontWeight:'bold',color:'white'}}>LOGAR</Text>
       </LinearGradient>
  </TouchableOpacity>
  </View>

    );
}