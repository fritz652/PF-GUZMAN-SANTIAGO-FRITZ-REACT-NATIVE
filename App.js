import { StatusBar } from 'expo-status-bar';
import {StyleSheet,  TextInput,  View} from 'react-native';
import ButtonPrimary from './src/componets/buttonPrimary/ButtonPrimary';
import { useEffect, useState } from 'react';


export default function App() {


  
  const [tasks,setTasks] = useState([])

  const [newTask,setNewTask] =  useState('')

  useEffect( ()=>{
    console.log(tasks)
  },[tasks])

  const handleAddTask = () =>{
    setTasks([...tasks,newTask])
    setNewTask('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
          <TextInput 
              style={styles.input} 
              placeholder= 'Ingrese una tarea'
              value={newTask}
              onChangeText={(e)=> setNewTask(e)}
            /> 
          <ButtonPrimary onPress={handleAddTask} text='Agregar'/>
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
  },
  input:{
    borderColor:'black',
    borderWidth:1,
    padding:5,
    flex:2,
    margin:10,
    borderRadius:5,
    paddingStart:20,
  }
});
