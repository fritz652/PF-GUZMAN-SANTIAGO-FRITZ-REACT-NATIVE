import { StatusBar } from 'expo-status-bar';
import {StyleSheet,  View} from 'react-native';
import ButtonPrimary from './src/componets/buttonPrimary/ButtonPrimary';
import Input from './src/componets/input/Input.js';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
          <Input text='Ingresar tarea'/>
          <ButtonPrimary text='Agregar'/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:30,
    backgroundColor:'#c7e0f4',
    /* alignItems: 'center', */
  },

  containerInput:{
    backgroundColor:'#71afe5',
    flexDirection:'row',
    padding:10,
  }
});
